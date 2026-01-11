import { useParams, Link } from "react-router-dom";
import projects from "@/data/projectsData";
import { ArrowLeft } from "lucide-react";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="container mx-auto px-6 py-20">
        <p>Project not found.</p>
        <Link to="/projects" className="text-primary flex items-center gap-2"><ArrowLeft /> Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-6 py-20">
      <Link to="/projects" className="text-primary flex items-center gap-2 mb-6 inline-flex"><ArrowLeft /> Back to projects</Link>
      <div className="grid md:grid-cols-2 gap-8">
        <img src={project.image} alt={project.title} className="w-full rounded-md object-cover" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="mb-4">
            <h4 className="font-semibold">Details</h4>
            <p className="text-muted-foreground">{project.details}</p>
          </div>
          <div className="flex gap-3 mt-6">
            <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary">Live</a>
            <a href={project.github} target="_blank" rel="noreferrer" className="btn">Source</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
