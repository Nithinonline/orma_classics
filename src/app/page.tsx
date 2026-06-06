import Hero from "@/components/Hero";
import OurCameras from "@/components/OurCameras";
import ContactSection from "@/components/ContactSection";
import SiteShell from "@/components/SiteShell";
import OurProcess from "@/components/OurProcess";
import OurStory from "@/components/OurStory";
import ProcessSteps from "@/components/ProcessSteps";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <OurStory />
      <OurProcess />
      <OurCameras featured />
      <ProcessSteps />
      <ContactSection />
    </SiteShell>
  );
}
