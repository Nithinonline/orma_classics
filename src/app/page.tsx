import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import OurProcess from '@/components/OurProcess';
import ProcessSteps from '@/components/ProcessSteps';
// Removed unused/missing imports to fix type-check errors
import OurCameras from '@/components/OurCameras';
// FinalCTA import removed
import ContactSection from '@/components/ContactSection';
import SiteShell from '@/components/SiteShell';

export default function Home() {
  return (
    <SiteShell>
      <Hero />

      {/* Brand Story / Emotional Introduction */}
      <OurStory />

      {/* Services Section */}
      <OurProcess />

      {/* How It Works */}
      <ProcessSteps />

      {/* Collection */}
      <OurCameras featured />

      <ContactSection />
    </SiteShell>
  );
}
