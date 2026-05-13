import Hero from '@/components/Hero';
import OurCameras from '@/components/OurCameras';
import FinalCTA from '@/components/FinalCTA';
import ContactSection from '@/components/ContactSection';
import SiteShell from '@/components/SiteShell';

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <OurCameras featured />
      <FinalCTA />
      <ContactSection />
    </SiteShell>
  );
}
