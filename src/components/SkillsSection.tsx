const skills = [
  { name: "Python", level: 90, category: "Backend" },
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "MongoDB", level: 85, category: "Database" },
  { name: "Express.js", level: 87, category: "Backend" },
  { name: "Flutter", level: 82, category: "Mobile" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "Django", level: 78, category: "Backend" },
  { name: "MySQL", level: 82, category: "Database" },
  { name: "Docker", level: 75, category: "DevOps" },
  { name: "Git", level: 92, category: "Tools" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(175_80%_50%_/_0.05)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary text-sm mb-2">{"// My Skills"}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:translate-y-[-4px]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-muted-foreground font-mono">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-sm font-mono text-primary">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Tech Stack */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Also experienced with:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["REST APIs", "GraphQL", "Firebase", "Redis", "AWS", "CI/CD", "Jest", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary/50 rounded-full text-sm text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
