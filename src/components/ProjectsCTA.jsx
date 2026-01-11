import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectsCTA = ({ href = "/projects", children }) => {
  return (
    <div className="relative inline-block" style={{ zIndex: 9999 }}>
      <Link to={href} className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-full bg-transparent text-foreground" aria-label="View all projects">
        <span className="z-10">{children}</span>
        <ArrowUpRight className="w-5 h-5 z-10" />
      </Link>

      {/* Decorative animated SVG border placed as a sibling so it isn't clipped by other stacking contexts */}
      <svg
        className="pointer-events-none absolute left-0 top-0 w-full h-full"
        viewBox="0 0 420 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible", zIndex: 9998 }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 390,59 A 29,29 0 0 0 419,30 L 419,30 A 29,29 0 0 0 390,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="1600 1600"
          strokeDashoffset="1600"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="projects-cta-path"
        />
      </svg>

      <style>{`
        .projects-cta-path { transition: stroke-dashoffset 1.2s linear; }
        .relative:hover .projects-cta-path { animation: projects-cta-anim 1.5s linear infinite; }
        @keyframes projects-cta-anim { 0% { stroke-dashoffset: 1600; } 100% { stroke-dashoffset: -1600; } }
      `}</style>
    </div>
  );
};

export default ProjectsCTA;
