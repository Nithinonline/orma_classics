import Hero from "@/components/Hero";
import OurCameras from "@/components/OurCameras";
import ContactSection from "@/components/ContactSection";
import SiteShell from "@/components/SiteShell";
import OurProcess from "@/components/OurProcess";
import OurStory from "@/components/OurStory";
import ProcessSteps from "@/components/ProcessSteps";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>      

      <SiteShell>
            <ChatWidget />

        <Hero />
        <OurStory />
        <OurProcess />
        <OurCameras featured />
        <ProcessSteps />
        <ContactSection />
      </SiteShell>

    </>
  );
}