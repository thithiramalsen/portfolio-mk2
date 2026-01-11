import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const highlights = [
  {
    icon: Code2,
    title: "Data-Driven Design",
    description:
      "Designing systems by understanding the data first, then building models and pipelines around it.",
  },
  {
    icon: Rocket,
    title: "Scalable Systems",
    description:
      "Building modular backends and APIs that support machine learning and automation workflows.",
  },
  {
    icon: Users,
    title: "AI Integration",
    description: "Integrating LLMs and AI services into real applications using FastAPI and modern tooling.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Breaking down complex problems into structured, testable, and maintainable solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building intelligent systems,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one problem at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a third-year Data Science undergraduate with hands-on experience
                in machine learning, AI-powered applications, and full-stack development.
              </p>
              <p>
                My work focuses on building intelligent systems — from predictive models
                and data pipelines to APIs and web platforms that make those models usablein the real world.
              </p>
              <p>
                I care about clarity, structure, and long-term maintainability.
                Whether it’s an ML pipeline or a backend service, I start by understanding
                the data, then design systems that scale and make sense.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “My goal is to build systems that are not just intelligent,
                but reliable, explainable, and useful in real-world scenarios.”
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Tech Stack & Expertise - added at bottom of About */}
        <div className="mt-20 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Tech Stack & Tools I Work With</h3>
          <p className="text-muted-foreground mt-2 mb-8">Technologies I work with to build solutions to real-world problems.</p>

          <div className="tech-cards container mx-auto px-6 flex flex-wrap justify-center gap-6">
            {[
              { id: "react", label: "React.js", Icon: SiReact },
              { id: "nextjs", label: "Next.js", Icon: SiNextdotjs },
              { id: "ts", label: "TypeScript", Icon: SiTypescript },
              { id: "tailwind", label: "Tailwind CSS", Icon: SiTailwindcss },
              { id: "node", label: "Node.js", Icon: SiNodedotjs },
              { id: "mongo", label: "MongoDB", Icon: SiMongodb },
            ].map((tech) => (
              <div key={tech.id} className="tech-card">
                <tech.Icon className="tech-card-icon" aria-hidden="true" />
                <div className="mt-3 text-sm text-muted-foreground">{tech.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
