import { AboutHero } from "@/components/about-hero";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";


export default function AboutPage() {
  return (
    <>

      <main className="min-h-screen overflow-x-hidden">
        <AboutHero />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
export async function generateMetadata() {

  return {
    title: `Mehrshad - About`,
    description: "Complete Career Resume",
  };
}