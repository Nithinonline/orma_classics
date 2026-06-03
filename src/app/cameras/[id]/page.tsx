// src/app/cameras/[id]/page.tsx
import CameraDetailPage from "@/components/CameraDetails";
import SiteShell from "@/components/SiteShell";

type Props = {
  params: Promise<{ id: string }>;
};

export default function CamerasDetailedPage({ params }: Props) {
  console.log("Inside the id cameras deatils page :::");

  return (
    <SiteShell>
      <div className="pt-10">
        <CameraDetailPage params={params} />
      </div>
    </SiteShell>
  );
}
