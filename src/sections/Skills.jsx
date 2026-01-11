import { Code, Server, Wrench } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiGithub,
  SiFigma,
  SiVite,
  SiJavascript,
} from "react-icons/si";

const categories = [
  {
    id: "frontend",
    title: "Frontend Development",
    items: [
      { name: "React.js", level: "Expert", years: "3+", percent: 95 },
      { name: "JavaScript", level: "Expert", years: "4+", percent: 92 },
      { name: "TypeScript", level: "Advanced", years: "2+", percent: 82 },
      { name: "Next.js", level: "Advanced", years: "2+", percent: 78 },
      { name: "Tailwind CSS", level: "Expert", years: "3+", percent: 88 },
    ],
    icon: Code,
  },
  {
    id: "backend",
    title: "Backend & APIs",
    items: [
      { name: "Node.js", level: "Intermediate", years: "2+", percent: 68 },
      { name: "REST APIs", level: "Advanced", years: "3+", percent: 80 },
      { name: "GraphQL", level: "Intermediate", years: "1+", percent: 62 },
    ],
    icon: Server,
  },
  {
    id: "tools",
    title: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: "Advanced", years: "4+", percent: 86 },
      { name: "Figma", level: "Intermediate", years: "2+", percent: 64 },
      { name: "Vite", level: "Advanced", years: "1+", percent: 58 },
    ],
    icon: Wrench,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">Skills & Technologies</h2>
          <p className="text-muted-foreground mt-2">A comprehensive overview of my technical skills and proficiency levels</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={cat.id} className="skills-card glass rounded-2xl p-6 hover-glow" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-md bg-primary/8 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-primary" />
                </span>
                <span className="header-sep" aria-hidden="true" />
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.items.map((it) => (
                  <div key={it.name} className="skill-item">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="skill-icon">
                          {(() => {
                            const n = it.name.toLowerCase();
                            if (n.includes("react")) return <SiReact className="skill-icon-image" />;
                            if (n.includes("typescript")) return <SiTypescript className="skill-icon-image" />;
                            if (n.includes("next")) return <SiNextdotjs className="skill-icon-image" />;
                            if (n.includes("tailwind")) return <SiTailwindcss className="skill-icon-image" />;
                            if (n.includes("node")) return <SiNodedotjs className="skill-icon-image" />;
                            if (n.includes("graphql")) return <SiGraphql className="skill-icon-image" />;
                            if (n.includes("mongodb")) return <SiMongodb className="skill-icon-image" />;
                            if (n.includes("git") || n.includes("github")) return <SiGithub className="skill-icon-image" />;
                            if (n.includes("vite")) return <SiVite className="skill-icon-image" />;
                            if (n.includes("javascript")) return <SiJavascript className="skill-icon-image" />;
                            if (n.includes("figma")) return <SiFigma className="skill-icon-image" />;
                            return <Code className="w-5 h-5 text-primary" />;
                          })()}
                        </div>
                        <div>
                          <div className="text-sm font-medium">{it.name}</div>
                          <div className="text-xs text-muted-foreground">{it.years} years</div>
                        </div>
                      </div>
                      <div>
                        <span className={`skill-badge skill-badge--${it.level.toLowerCase().replace(/[^a-z]/g, "")}`}>{it.level}</span>
                      </div>
                    </div>

                    <div className="skill-bar mt-2">
                      <div className="skill-bar-fill" style={{ width: `${it.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
