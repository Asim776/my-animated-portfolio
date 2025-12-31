import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(175_80%_50%_/_0.1)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float animation-delay-500" />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="font-mono text-primary text-sm md:text-base mb-4 opacity-0 animate-fade-up">
            {"// Hello, World! I'm"}
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-up animation-delay-100">
            <span className="text-foreground">Asim </span>
            <span className="gradient-text">Sharif</span>
          </h1>

          {/* Role with Typing Effect */}
          <div className="h-12 md:h-16 mb-8">
            <h2 className="font-mono text-2xl md:text-4xl text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
              {displayText}
              <span className="inline-block w-0.5 h-8 md:h-10 bg-primary ml-1 animate-pulse" />
            </h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-300">
            I craft exceptional digital experiences with{" "}
            <span className="text-primary">Python</span>,{" "}
            <span className="text-primary">MERN Stack</span>,{" "}
            <span className="text-primary">Flutter</span>, and modern databases.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up animation-delay-400">
            <Button variant="gradient" size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-up animation-delay-500">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
<br />
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
<br />
export default HeroSection;
