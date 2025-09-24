
import { ProjectsGallery } from "@/components/projects-gallery";

export default function ProjectsPage() {
  return (
    <>
     
      <main className="min-h-screen">
        <ProjectsGallery />
      </main>
    </>
  );
}
export async function generateMetadata() {

  return {
    title: `Mehrshad - Projects`,
    description: "all projects of Mehrshad khatibi",
  };
}