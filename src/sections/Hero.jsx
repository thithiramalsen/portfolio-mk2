import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  BadgeCheck,
  Cloud,
} from "lucide-react";
import {
  SiPython,
  SiTensorflow,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const heroStats = [
  { value: "4+", label: "ML & AI Projects" },
  { value: "10+", label: "Tech Stacks used" },
  { value: "3.56", label: "Academic G.P.A" },
  { value: "Data Science", label: "Focus Area" },
];

const showcaseTech = [
  { id: "python", Icon: SiPython, alt: "Python" },
  { id: "ml", Icon: SiTensorflow, alt: "Machine Learning" },
  { id: "sql", Icon: SiPostgresql, alt: "SQL / Postgres" },
  { id: "react", Icon: SiReact, alt: "React" },
  { id: "node", Icon: SiNodedotjs, alt: "Node.js" },
  { id: "cloud", Icon: Cloud, alt: "Cloud" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/thithiramalsen", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/thithira-malsen/", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[78vh] lg:min-h-[88vh] flex items-center overflow-visible">
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
              <span className="text-xs uppercase tracking-[0.38em]">DATA SCIENCE · AI </span>
              <span className="hidden sm:inline text-xs uppercase tracking-[0.38em] text-primary-foreground/70">
                · FULL-STACK DEVELOPMENT
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100 max-w-none">
                <span className="inline-block whitespace-nowrap">Data Science & AI Developer</span>
                <br className="hidden md:block" />
                <span className="block text-xl md:text-2xl lg:text-3xl font-medium mt-2 max-w-[880px]" style={{ color: 'var(--color-highlight)' }}>
                  Portfolio
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-[880px] animate-fade-in animation-delay-200">
               Building intelligent systems where data, code, and automation come together.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="default" href="#projects" className="px-8">
                View Projects <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton as="a" href="/Thithira_Malsen_CV.pdf" download className="px-6">
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
              <div className="segmented-frame group animate-fade-in animation-delay-300 max-w-[420px] w-full">
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

              {/* Animated SVG border (matches AnimatedBorderButton animation on hover) */}
              <svg
                className="absolute inset-0 pointer-events-none hero-frame-border"
                viewBox="0 0 420 560"
                preserveAspectRatio="none"
                style={{ overflow: "visible", zIndex: 50 }}
              >
                <path
                  d="M 30,1 A 29,29 0 0 0 1,30 L 1,530 A 29,29 0 0 0 30,559 L 390,559 A 29,29 0 0 0 419,530 L 419,30 A 29,29 0 0 0 390,1 Z"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeDasharray="2000 2000"
                  strokeDashoffset="2000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animated-border-path"
                />
              </svg>

              <div className="inner glass">
                <img
                  src="/profile-photo.jpg"
                  alt="Thithira Malsen"
                  className="w-full max-w-[420px] md:max-w-[480px] aspect-[3/4] object-cover rounded-[1rem] mx-auto"
                />

                <div className="hero-floating-card hero-floating-card--top-left">
                  <div className="text-xl font-bold text-primary">2+</div>
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
