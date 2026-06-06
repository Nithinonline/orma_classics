import { cpSync, existsSync } from "node:fs";

const standaloneDir = ".next/standalone";

if (!existsSync(standaloneDir)) {
  console.log("Standalone output not found; skipping asset copy.");
  process.exit(0);
}

cpSync("public", `${standaloneDir}/public`, { recursive: true });
cpSync(".next/static", `${standaloneDir}/.next/static`, { recursive: true });

console.log("Copied public/ and .next/static into standalone output.");
