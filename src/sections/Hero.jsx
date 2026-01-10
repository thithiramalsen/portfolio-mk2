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
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const heroStats = [
  { value: "5+", label: "Years Experience" },
  { value: "45+", label: "Projects Delivered" },
  { value: "94%", label: "Client Satisfaction" },
];

const showcaseTech = [
  { id: "react", src: "/icons/react.svg", alt: "React" },
  { id: "nextjs", src: "/icons/nextjs.svg", alt: "Next.js" },
  { id: "ts", src: "/icons/typescript.svg", alt: "TypeScript" },
  { id: "node", src: "/icons/nodejs.svg", alt: "Node.js" },
  { id: "graphql", src: "/icons/graphql.svg", alt: "GraphQL" },
  { id: "tailwind", src: "/icons/tailwind.svg", alt: "Tailwind CSS" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-10">
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br className="hidden md:block" /> experiences with
                <br className="hidden md:block" />
                <span className="font-serif italic font-normal text-primary-foreground/80">
                  precision.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
                Hi, I'm Thithira Malsen — a software engineer specializing in
                React, Next.js, and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" href="#contact">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div className="flex flex-wrap gap-6 animate-fade-in animation-delay-400">
              {heroStats.map((stat) => (
                <div key={stat.label} className="hero-stat">
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
            <div className="segmented-frame animate-fade-in animation-delay-300 max-w-[520px] w-full">
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
                  className="w-full max-w-[480px] md:max-w-[560px] aspect-[4/5] object-cover rounded-[1.75rem] mx-auto"
                />

                <div className="hero-floating-card hero-floating-card--top-left">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Years Exp.
                  </div>
                </div>

                <div className="hero-floating-card hero-floating-card--bottom-right">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-tech-panel animate-fade-in animation-delay-500">
              {showcaseTech.map((tech) => (
                <img
                  key={tech.id}
                  src={tech.src}
                  alt={tech.alt}
                  title={tech.alt}
                  className="hero-tech-icon"
                />
              ))}
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
