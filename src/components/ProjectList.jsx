import { ArrowUpRight, Github } from "lucide-react";
import { FiExternalLink } from "react-icons/fi";
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
import { Link } from "react-router-dom";

const IconMap = {
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
};

export const ProjectList = ({ projects, layout = "grid", rowRef }) => {
  const isHorizontal = layout === "horizontal";

  if (isHorizontal) {
    return (
      <div className="projects-viewport">
        <div ref={rowRef} className="projects-row">
          {projects.map((project, idx) => (
            <div key={project.id || idx} className={`project-card group animate-fade-in`} style={{ animationDelay: `${(idx + 1) * 80}ms` }}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute bottom-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live`} className="glass-light btn-icon btn-contrast">
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} on GitHub`} className="glass-light btn-icon btn-contrast">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="card-body p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <Link to={`/projects/${project.id}`} aria-label={`Open ${project.title} details`} className="text-muted-foreground group-hover:text-primary">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </Link>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="project-techs">
                  {project.techIcons?.map((ic, i) => {
                    const Ic = IconMap[ic] || (() => null);
                    return (
                      <span key={i} className="project-tech">
                        <Ic /> <span style={{ fontSize: 12 }}>{project.tags[i] || ""}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Grid layout - keep consistent card sizes similar to horizontal cards
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      {projects.map((project, idx) => (
        <div key={project.id || idx} className="project-card group animate-fade-in max-w-[380px] mx-auto" style={{ animationDelay: `${(idx + 1) * 80}ms` }}>
          <div className="project-image-wrap">
            <img src={project.image} alt={project.title} className="transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
            <div className="absolute bottom-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live`} className="glass-light btn-icon btn-contrast">
                <FiExternalLink className="w-5 h-5" />
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} on GitHub`} className="glass-light btn-icon btn-contrast">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="card-body p-6 space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
              <Link to={`/projects/${project.id}`} aria-label={`Open ${project.title} details`} className="text-muted-foreground group-hover:text-primary">
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">{project.description}</p>
            <div className="project-techs">
              {project.techIcons?.map((ic, i) => {
                const Ic = IconMap[ic] || (() => null);
                return (
                  <span key={i} className="project-tech">
                    <Ic /> <span style={{ fontSize: 12 }}>{project.tags[i] || ""}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
