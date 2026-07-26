import { readdirSync, statSync, unlinkSync, existsSync } from "node:fs";
import { join, extname, basename, dirname } from "node:path";
import sharp from "sharp";

const PUBLIC_IMAGES = "public/Images";
const MAX_EDGE = 1920;
const WEBP_QUALITY = 82;

function walkImages(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      walkImages(fullPath, files);
      continue;
    }
    const ext = extname(entry.name).toLowerCase();
    if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
      files.push(fullPath);
    }
  }
  return files;
}

async function compressImage(inputPath) {
  const ext = extname(inputPath);
  const outputPath = join(
    dirname(inputPath),
    `${basename(inputPath, ext)}.webp`,
  );

  const meta = await sharp(inputPath).metadata();
  const needsResize =
    (meta.width ?? 0) > MAX_EDGE || (meta.height ?? 0) > MAX_EDGE;

  let pipeline = sharp(inputPath);
  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  await pipeline.webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(outputPath);

  const before = statSync(inputPath).size;
  const after = statSync(outputPath).size;
  unlinkSync(inputPath);

  return {
    inputPath,
    outputPath,
    beforeMB: (before / 1024 / 1024).toFixed(2),
    afterMB: (after / 1024 / 1024).toFixed(2),
    savedPct: Math.round((1 - after / before) * 100),
  };
}

async function main() {
  if (!existsSync(PUBLIC_IMAGES)) {
    console.error(`Missing ${PUBLIC_IMAGES}`);
    process.exit(1);
  }

  const inputs = walkImages(PUBLIC_IMAGES);
  if (inputs.length === 0) {
    console.log("No JPEG/PNG images found.");
    return;
  }

  console.log(
    `Compressing ${inputs.length} images to WebP (max ${MAX_EDGE}px)...\n`,
  );

  let totalBefore = 0;
  let totalAfter = 0;

  for (const inputPath of inputs) {
    const result = await compressImage(inputPath);
    totalBefore += parseFloat(result.beforeMB);
    totalAfter += parseFloat(result.afterMB);
    console.log(
      `${result.inputPath.replace(/\\/g, "/")} -> ${result.outputPath.replace(/\\/g, "/")}  ${result.beforeMB} MB -> ${result.afterMB} MB (-${result.savedPct}%)`,
    );
  }

  console.log(
    `\nTotal: ${totalBefore.toFixed(2)} MB -> ${totalAfter.toFixed(2)} MB (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
