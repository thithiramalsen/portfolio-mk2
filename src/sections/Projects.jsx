import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectsCTA from "@/components/ProjectsCTA";
import { useState, useRef, useEffect } from "react";
import projects from "@/data/projectsData";
import ProjectList from "@/components/ProjectList";

export const Projects = () => {
  const [category, setCategory] = useState("All");
  const rowRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const check = () => setShowButtons(el.scrollWidth > el.clientWidth + 10);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [rowRef]);
  const categories = ["All", "Machine Learning", "AI", "Full Stack", "Data Engineering"];
  const filtered = projects.filter((p) => category === "All" || p.category === category);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        {/* Filter bar */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`filter-pill ${category === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal scroller - reuse ProjectList to avoid duplication */}
        <div className="relative">
          <div className="scroll-trigger left" />
          <div className="scroll-trigger right" />
          <button
            className="projects-scroll-btn left"
            onClick={() => {
              const el = rowRef.current;
              if (!el) return;
              el.scrollTo({ left: Math.max(0, el.scrollLeft - Math.round(el.clientWidth * 0.7)), behavior: "smooth" });
            }}
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>
          <button
            className="projects-scroll-btn right"
            onClick={() => {
              const el = rowRef.current;
              if (!el) return;
              el.scrollTo({ left: el.scrollLeft + Math.round(el.clientWidth * 0.7), behavior: "smooth" });
            }}
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>

          <ProjectList projects={filtered} layout="horizontal" rowRef={rowRef} />
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500 relative z-20">
          <div className="inline-block">
            {/* Use ProjectsCTA to avoid SVG clipping issues specific to this CTA */}
            <ProjectsCTA href="/projects">View All Projects</ProjectsCTA>
          </div>
        </div>
      </div>
    </section>
  );
};
