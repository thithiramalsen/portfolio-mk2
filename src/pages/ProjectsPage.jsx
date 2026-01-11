import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import ProjectList from "@/components/ProjectList";
import projects from "@/data/projectsData";
import { useState } from "react";

export const ProjectsPage = () => {
  const [category, setCategory] = useState("All");
  const categories = ["All", "Machine Learning", "AI", "Full Stack", "Data Engineering"];
  const filtered = projects.filter((p) => category === "All" || p.category === category);

  return (
    <main className="container mx-auto px-6 py-20">
      <div className="text-center mx-auto max-w-3xl mb-12">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Projects</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">All Projects</h1>
        <p className="text-muted-foreground">Browse the full project portfolio.</p>
      </div>

      <div className="filter-bar mb-6">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)} className={`filter-pill ${category === cat ? "active" : ""}`}>
            {cat}
          </button>
        ))}
      </div>

      <ProjectList projects={filtered} layout="grid" />
    </main>
  );
};

export default ProjectsPage;
