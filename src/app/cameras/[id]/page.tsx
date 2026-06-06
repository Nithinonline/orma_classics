// src/app/cameras/[id]/page.tsx
import CameraDetailPage from "@/components/CameraDetails";
import SiteShell from "@/components/SiteShell";
import camerasData from "@/data/cameras.json";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return camerasData.cameras.map((camera) => ({ id: camera.id }));
}

export default function CamerasDetailedPage({ params }: Props) {
  return (
    <SiteShell>
      <div className="pt-10">
        <CameraDetailPage params={params} />
      </div>
    </SiteShell>
  );
}
