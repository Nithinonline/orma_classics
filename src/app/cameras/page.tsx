import OurCameras from "@/components/OurCameras";
import SiteShell from "@/components/SiteShell";

export default function CamerasPage() {
  return (
    <SiteShell>
      <div className="pt-10">
        <OurCameras />
        {/* <ContactSection /> */}
      </div>
    </SiteShell>
  );
}
