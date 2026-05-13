import ContactSection from '@/components/ContactSection';
import OurProcess from '@/components/OurProcess';
import ProcessSteps from '@/components/ProcessSteps';
import SiteShell from '@/components/SiteShell';

export default function ProcessPage() {
    return (
        <SiteShell>
            <div className="pt-20">
                <OurProcess />
                <ProcessSteps />
                <ContactSection />
            </div>
        </SiteShell>
    );
}
