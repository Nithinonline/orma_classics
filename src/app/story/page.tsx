import ContactSection from '@/components/ContactSection';
import OurStory from '@/components/OurStory';
import SiteShell from '@/components/SiteShell';

export default function StoryPage() {
    return (
        <SiteShell>
            <div className="pt-20">
                <OurStory />
                <ContactSection />
            </div>
        </SiteShell>
    );
}
