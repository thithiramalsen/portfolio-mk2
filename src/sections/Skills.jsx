import { Code, Server, Wrench } from "lucide-react";
import * as SiIcons from "react-icons/si";

const categories = [

  {
    id: "backend",
    title: "Backend & APIs",
    items: [
      { name: "FastAPI", level: "Advanced", years: "1.0", percent: 80 },
      { name: "Node.js", level: "Intermediate", years: "1.5", percent: 65 },
      { name: "REST APIs", level: "Advanced", years: "2.0", percent: 85 },
      { name: "MongoDB", level: "Intermediate", years: "1.0", percent: 60 },
      { name: "SQL", level: "Advanced", years: "1.5-2.0", percent: 80 },
      { name: "LLM APIs (OpenAI, Gemini)", level: "Intermediate", years: "0.6", percent: 60 },
    ],
    icon: Server,
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    items: [
      { name: "Python", level: "Intermediate", years: "~1.5", percent: 70 },
      { name: "Pandas & NumPy", level: "Advanced", years: "1.0", percent: 85 },
      { name: "Scikit-learn", level: "Intermediate", years: "0.6", percent: 60 },
      { name: "Git & GitHub", level: "Advanced", years: "2.0+", percent: 85 },
      { name: "AWS / Azure (Labs)", level: "Intermediate", years: "0.5", percent: 50 },
      { name: "Figma", level: "Intermediate", years: "1.0", percent: 60 },
    ],
    icon: Wrench,
  },

  {
    id: "frontend",
    title: "Frontend Development",
    items: [
      { name: "JavaScript", level: "Advanced", years: "2.0", percent: 85 },
      { name: "React.js", level: "Advanced", years: "1.0", percent: 75 },
      { name: "TypeScript", level: "Beginner", years: "<0.3", percent: 35 },
      { name: "Next.js", level: "Intermediate", years: "0.5", percent: 60 },
      { name: "Tailwind CSS", level: "Advanced", years: "1.5", percent: 85 },
      { name: "Vite", level: "Intermediate", years: "1.0", percent: 65 },
    ],
    icon: Code,
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
                            if (n.includes("react")) return <SiIcons.SiReact className="skill-icon-image" />;
                            if (n.includes("typescript")) return <SiIcons.SiTypescript className="skill-icon-image" />;
                            if (n.includes("next")) return <SiIcons.SiNextdotjs className="skill-icon-image" />;
                            if (n.includes("tailwind")) return <SiIcons.SiTailwindcss className="skill-icon-image" />;
                            if (n.includes("node")) return <SiIcons.SiNodedotjs className="skill-icon-image" />;
                            if (n.includes("graphql")) return <SiIcons.SiGraphql className="skill-icon-image" />;
                            if (n.includes("mongodb") || n.includes("mongo")) return <SiIcons.SiMongodb className="skill-icon-image" />;
                            if (n.includes("sql")) return <SiIcons.SiPostgresql className="skill-icon-image" />;
                            if (n.includes("fastapi")) return SiIcons.SiFastapi ? <SiIcons.SiFastapi className="skill-icon-image" /> : <Code className="w-5 h-5 text-primary" />;
                            if (n.includes("openai") || n.includes("llm")) return SiIcons.SiOpenai ? <SiIcons.SiOpenai className="skill-icon-image" /> : <Code className="w-5 h-5 text-primary" />;
                            if (n.includes("python")) return <SiIcons.SiPython className="skill-icon-image" />;
                            if (n.includes("pandas")) return SiIcons.SiPandas ? <SiIcons.SiPandas className="skill-icon-image" /> : <SiIcons.SiPython className="skill-icon-image" />;
                            if (n.includes("numpy")) return SiIcons.SiNumpy ? <SiIcons.SiNumpy className="skill-icon-image" /> : <SiIcons.SiPython className="skill-icon-image" />;
                            if (n.includes("scikit")) return SiIcons.SiScikitlearn ? <SiIcons.SiScikitlearn className="skill-icon-image" /> : <Code className="w-5 h-5 text-primary" />;
                            if (n.includes("aws") || n.includes("amazon")) return SiIcons.SiAmazonaws ? <SiIcons.SiAmazonaws className="skill-icon-image" /> : <Code className="w-5 h-5 text-primary" />;
                            if (n.includes("azure")) return SiIcons.SiMicrosoftazure ? <SiIcons.SiMicrosoftazure className="skill-icon-image" /> : <Code className="w-5 h-5 text-primary" />;
                            if (n.includes("git") || n.includes("github")) return <SiIcons.SiGithub className="skill-icon-image" />;
                            if (n.includes("vite")) return <SiIcons.SiVite className="skill-icon-image" />;
                            if (n.includes("javascript")) return <SiIcons.SiJavascript className="skill-icon-image" />;
                            if (n.includes("figma")) return <SiIcons.SiFigma className="skill-icon-image" />;
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
