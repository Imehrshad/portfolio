import { HeroSection } from "@/components/hero-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsCarousel } from "@/components/projects-carousel"


export default function HomePage() {
  return (
<>

<main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <TechStackSection />
      <ProjectsCarousel />
    </main>
</>
  )
}
export async function generateMetadata() {

  return {
    title: `Mehrshad - Home`,
    description: "Portfolio of Mehrshad Khatibi",
  };
}