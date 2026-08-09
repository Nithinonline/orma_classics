import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CameraDetailPage from "@/components/CameraDetails";
import SiteShell from "@/components/SiteShell";
import camerasData from "@/data/cameras.json";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ id: string }>;
};

function getCamera(id: string) {
  return camerasData.cameras.find((camera) => camera.id === id);
}

export function generateStaticParams() {
  return camerasData.cameras.map((camera) => ({ id: camera.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const camera = getCamera(id);

  if (!camera) {
    return {
      title: "Camera not found",
    };
  }

  const cover =
    camera.images?.[Math.max(0, (camera.coverImage ?? 1) - 1)] ?? camera.image;
  const title = camera.name;
  const description = camera.note || camera.story.slice(0, 160);
  const path = `/cameras/${camera.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${camera.name} | ${siteConfig.name}`,
      description,
      url: path,
      type: "website",
      images: [
        {
          url: cover,
          alt: camera.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${camera.name} | ${siteConfig.name}`,
      description,
      images: [cover],
    },
  };
}

export default async function CamerasDetailedPage({ params }: Props) {
  const { id } = await params;
  if (!getCamera(id)) notFound();

  return (
    <SiteShell>
      <div className="pt-10">
        <CameraDetailPage params={params} />
      </div>
    </SiteShell>
  );
}
