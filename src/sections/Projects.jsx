import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { FiExternalLink } from "react-icons/fi";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiStripe,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiRedis,
  SiOpenai,
} from "react-icons/si";
import { useState, useRef, useEffect } from "react";

const projects = [
  {
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    image: "/projects/project1.png",
    tags: ["React", "Typescript", "NodeJS"],
    techIcons: [SiReact, SiTypescript, SiNodedotjs],
    category: "Web Apps",
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    techIcons: [SiNextdotjs, SiStripe, SiPostgresql, SiTailwindcss],
    category: "Full Stack",
    link: "#",
    github: "#",
  },
  {
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    techIcons: [SiReact, SiOpenai, SiPython],
    category: "Web Apps",
    link: "#",
    github: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    techIcons: [SiNextdotjs, SiMongodb, SiRedis],
    category: "Full Stack",
    link: "#",
    github: "#",
  },
];

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
  const categories = ["All", "Web Apps", "Full Stack"];
  const filtered = projects.filter(
    (p) => category === "All" || p.category === category
  );

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
            <span className="font-serif italic font-normal text-white">
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

        {/* Horizontal scroller */}
        <div className="relative">
            {/* Invisible hover trigger zones to reveal scroll buttons when user hovers near edges */}
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

          <div className="projects-viewport">
            <div ref={rowRef} className="projects-row">
              {filtered.map((project, idx) => (
                <div
                  key={idx}
                  className="project-card group animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 80}ms` }}
                >
              {/* Image */}
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="transition-transform duration-700 hover:scale-105"
                  />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute bottom-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live`}
                    className="glass-light btn-icon btn-contrast"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                    className="glass-light btn-icon btn-contrast"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
                <div className="card-body p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="project-techs">
                  {project.techIcons?.map((Ic, i) => (
                    <span key={i} className="project-tech">
                      <Ic /> <span style={{ fontSize: 12 }}>{project.tags[i] || ""}</span>
                    </span>
                  ))}
                </div>
              </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500 relative z-20">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
