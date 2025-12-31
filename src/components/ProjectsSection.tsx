import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with MERN stack featuring user authentication, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, built using Flutter and Firebase.",
    technologies: ["Flutter", "Firebase", "Dart"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "An interactive dashboard for visualizing complex datasets, built with Python and React.",
    technologies: ["Python", "React", "PostgreSQL", "D3.js"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Social Media API",
    description:
      "RESTful API for a social media platform with authentication, posts, and real-time messaging.",
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io"],
    github: "#",
    featured: false,
  },
  {
    title: "Weather Forecast App",
    description:
      "A beautiful weather application with location-based forecasts and animated visualizations.",
    technologies: ["React", "OpenWeather API", "Framer Motion"],
    github: "#",
    featured: false,
  },
  {
    title: "Inventory System",
    description:
      "Enterprise inventory management system with barcode scanning and reporting features.",
    technologies: ["Django", "PostgreSQL", "React"],
    github: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary text-sm mb-2">// My Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image Placeholder */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="gradient-border aspect-video bg-card rounded-lg overflow-hidden card-shadow group">
                    <div className="w-full h-full bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70 transition-colors">
                      <Folder className="w-16 h-16 text-primary/50 group-hover:text-primary group-hover:scale-110 transition-all" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <div className="bg-card p-6 rounded-lg border border-border mb-4 card-shadow">
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={22} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-xl font-bold text-center mb-8">Other Noteworthy Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:translate-y-[-4px] group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="w-10 h-10 text-primary" />
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="font-mono text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
