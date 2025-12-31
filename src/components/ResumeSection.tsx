import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "./ui/button";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Building scalable web applications using MERN stack and Python. Led development of key features.",
  },
  {
    role: "Software Developer",
    company: "Startup Inc",
    period: "2020 - 2022",
    description: "Developed mobile applications with Flutter and maintained backend APIs with Node.js.",
  },
];

const education = [
  {
    degree: "Bachelor in Computer Science",
    school: "University Name",
    period: "2016 - 2020",
    description: "Specialized in Software Engineering with focus on distributed systems.",
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 bg-secondary/20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(175_80%_50%_/_0.05)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary text-sm mb-2">{"// Resume"}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
            
            <Button variant="gradient" size="lg" className="group">
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              Download Resume
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
                    <span className="font-mono text-xs text-primary">{item.period}</span>
                    <h4 className="text-lg font-semibold mt-1">{item.role}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{item.company}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
                    <span className="font-mono text-xs text-primary">{item.period}</span>
                    <h4 className="text-lg font-semibold mt-1">{item.degree}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{item.school}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Certifications</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all">
                    <h4 className="font-semibold">AWS Certified Developer</h4>
                    <p className="text-muted-foreground text-sm">Amazon Web Services</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all">
                    <h4 className="font-semibold">Python Professional Certificate</h4>
                    <p className="text-muted-foreground text-sm">Python Institute</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
