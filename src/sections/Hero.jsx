import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  BadgeCheck,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiTailwindcss,
} from "react-icons/si";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const heroStats = [
  { value: "5+", label: "Years Experience" },
  { value: "45+", label: "Projects Delivered" },
  { value: "15+", label: "Technologies" },
  { value: "94%", label: "Client Satisfaction" },
];

const showcaseTech = [
  { id: "react", Icon: SiReact, alt: "React" },
  { id: "nextjs", Icon: SiNextdotjs, alt: "Next.js" },
  { id: "ts", Icon: SiTypescript, alt: "TypeScript" },
  { id: "node", Icon: SiNodedotjs, alt: "Node.js" },
  { id: "graphql", Icon: SiGraphql, alt: "GraphQL" },
  { id: "tailwind", Icon: SiTailwindcss, alt: "Tailwind CSS" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[78vh] lg:min-h-[88vh] flex items-center overflow-visible">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hero-fireflies pointer-events-none" aria-hidden="true">
        <span className="firefly" />
        <span className="firefly" />
        <span className="firefly" />
        <span className="firefly" />
        <span className="firefly" />
        <span className="firefly" />
        <span className="firefly" />
        <span className="firefly" />
        <span className="firefly" />
        <span className="firefly" />
        <span className="firefly" />
        <span className="firefly" />
      </div>
      <div className="absolute inset-0 hero-noise" aria-hidden="true" />

      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <div className="space-y-8 lg:pr-10 max-w-[980px] pl-4 md:pl-8 lg:pl-12">
            <div className="inline-flex items-center gap-3 hero-badge animate-fade-in">
              <span className="hero-badge-icon">
                <BadgeCheck className="w-4 h-4" />
              </span>
              <span className="text-xs uppercase tracking-[0.38em]">Software Engineer</span>
              <span className="hidden sm:inline text-xs uppercase tracking-[0.38em] text-primary-foreground/70">
                React Specialist
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100 max-w-none">
                <span className="inline-block whitespace-nowrap">Data Science & AI Developer</span>
                <br className="hidden md:block" />
                <span className="block text-xl md:text-2xl lg:text-3xl font-medium mt-2 max-w-[880px] text-[#ffb84d]">
                  Building intelligent systems where data, code, and automation come together.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-[880px] animate-fade-in animation-delay-200">
               I’m a third-year Data Science undergraduate with hands-on experience in machine learning,
               AI-powered applications, and full-stack development. I enjoy turning messy data
               and abstract ideas into systems that actually work.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="default" href="#contact" className="px-8">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-6 animate-fade-in animation-delay-400 hero-stats-clean">
              {heroStats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`hero-stat hero-stat-simple ${idx !== heroStats.length - 1 ? "stat-divider" : ""}`}>
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-5 animate-fade-in animation-delay-500">
              <span className="text-sm text-muted-foreground">Find me online</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="hero-social"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

            <div className="relative flex justify-center lg:justify-end">
            <div className="hero-orb" aria-hidden="true" />
              <div className="segmented-frame animate-fade-in animation-delay-300 max-w-[420px] w-full">
              <div className="border-segments" aria-hidden="true">
                <span className="border-segment seg-tl-h" />
                <span className="border-segment seg-tl-v" />
                <span className="border-segment seg-tr-h" />
                <span className="border-segment seg-tr-v" />
                <span className="border-segment seg-bl-h" />
                <span className="border-segment seg-bl-v" />
                <span className="border-segment seg-br-h" />
                <span className="border-segment seg-br-v" />
              </div>

              <div className="inner glass">
                <img
                  src="/profile-photo.jpg"
                  alt="Pedro Machado"
                  className="w-full max-w-[420px] md:max-w-[480px] aspect-[3/4] object-cover rounded-[1rem] mx-auto"
                />

                <div className="hero-floating-card hero-floating-card--top-left">
                  <div className="text-xl font-bold text-primary">5+</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Years Exp.
                  </div>
                </div>

                <div className="hero-floating-card hero-floating-card--top-right">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
                </div>

                <div className="hero-tech-panel animate-fade-in animation-delay-500">
                    {showcaseTech.map((tech) => (
                      <tech.Icon key={tech.id} className="hero-tech-icon" title={tech.alt} />
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="z-20 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
