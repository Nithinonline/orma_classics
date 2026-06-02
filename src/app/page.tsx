import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import OurProcess from '@/components/OurProcess';
import ProcessSteps from '@/components/ProcessSteps';
import OurCameras from '@/components/OurCameras';
import FinalCTA from '@/components/FinalCTA';
import ContactSection from '@/components/ContactSection';
import SiteShell from '@/components/SiteShell';

export default function Home() {
  return (
    <SiteShell>
      <Hero />

      <OurStory />
      <OurProcess />
      <OurCameras featured />
      <FinalCTA />
      <ProcessSteps />
      <ContactSection />
    </SiteShell>
  );
}
