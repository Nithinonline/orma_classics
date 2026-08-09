import type { Metadata } from "next";
import OurCameras from "@/components/OurCameras";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Cameras",
  description:
    "Browse restored and verified film cameras from Orma Classics — each one discovered, restored, and tested on real film.",
  alternates: {
    canonical: "/cameras",
  },
  openGraph: {
    title: "Cameras | Orma Classics",
    description:
      "Browse restored and verified film cameras from Orma Classics — each one discovered, restored, and tested on real film.",
    url: "/cameras",
  },
};

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
