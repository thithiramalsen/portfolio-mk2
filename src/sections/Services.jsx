import { Code, Server, Cpu, Database, CloudCog } from "lucide-react";
import * as SiIcons from "react-icons/si";

const services = [
  {
    id: "ml",
    title: "Machine Learning Solutions",
    description:
      "Building end-to-end ML pipelines for prediction, classification, and analysis using real-world datasets and evaluated models.",
    tech: [
      { label: "Python", Icon: SiIcons.SiPython },
      { label: "Scikit-learn", Icon: SiIcons.SiScikitlearn },
      { label: "Pandas", Icon: SiIcons.SiPandas },
      { label: "NumPy", Icon: SiIcons.SiNumpy },
    ],
    Icon: Cpu,
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Applications",
    description:
      "Designing and developing scalable web applications with clean APIs and data-driven features.",
    tech: [
      { label: "MongoDB", Icon: SiIcons.SiMongodb },
      { label: "Express", Icon: SiIcons.SiExpress },
      { label: "React", Icon: SiIcons.SiReact },
      { label: "Node.js", Icon: SiIcons.SiNodedotjs },
    ],
    Icon: Code,
  },
  {
    id: "ai",
    title: "AI-Powered Applications",
    description:
      "Developing AI tools for summarization, automation, and decision support using modern LLM APIs.",
    tech: [
      { label: "Python", Icon: SiIcons.SiPython },
      { label: "FastAPI", Icon: SiIcons.SiFastapi },
      { label: "OpenAI API", Icon: SiIcons.SiOpenai },
    ],
    Icon: Server,
  },
  {
    id: "data",
    title: "Data Engineering & Warehousing",
    description:
      "Designing structured data pipelines and analytical schemas for reporting and insights.",
    tech: [
      { label: "SQL", Icon: SiIcons.SiPostgresql },
      { label: "Data Modeling", Icon: SiIcons.SiPostgresql },
      { label: "ETL", Icon: SiIcons.SiPython },
    ],
    Icon: Database,
  },
  {
    id: "api",
    title: "API Development & Integration",
    description:
      "Building secure and efficient REST APIs to connect ML models, databases, and frontends.",
    tech: [
      { label: "FastAPI", Icon: SiIcons.SiFastapi },
      { label: "Node.js", Icon: SiIcons.SiNodedotjs },
      { label: "REST", Icon: SiIcons.SiGithub },
    ],
    Icon: CloudCog,
  },
  {
    id: "deploy",
    title: "Deployment & Optimization",
    description:
      "Containerizing and deploying applications with performance and scalability in mind.",
    tech: [
      { label: "Docker", Icon: SiIcons.SiDocker },
      { label: "Vercel", Icon: SiIcons.SiVercel },
      { label: "Cloud", Icon: SiIcons.SiAmazonaws },
    ],
    Icon: CloudCog,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Machine Learning & Engineering
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Practical services across ML, data engineering, APIs, and full-stack applications.
          </p>
        </div>

        {/* Constrained inner wrapper to keep cards compact with gutters */}
        <div className="mx-auto max-w-[1160px] px-4">
        {/* Top: two large feature cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {services.slice(0, 2).map((s, i) => (
            <div key={s.id} className="skills-card glass p-6 md:p-8 rounded-2xl hover-glow animate-fade-in max-w-[720px] mx-auto" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors">
                  <s.Icon className="w-6 h-6 skill-icon-image text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 max-w-[520px]">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground inline-flex items-center gap-2">
                        {t.Icon ? <t.Icon className="w-4 h-4 skill-icon-image" /> : null}
                        <span className="text-xs">{t.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: four compact cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.slice(2).map((s, i) => (
            <div key={s.id} className="skills-card glass p-4 rounded-2xl hover-glow animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-md bg-primary/8 flex items-center justify-center">
                  <s.Icon className="w-5 h-5 skill-icon-image text-primary" />
                </div>
                <h4 className="text-sm font-semibold">{s.title}</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tech.map((t, idx) => (
                  <span key={idx} className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground inline-flex items-center gap-2">
                    {t.Icon ? <t.Icon className="w-4 h-4 skill-icon-image" /> : null}
                    <span className="text-xs">{t.label}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
