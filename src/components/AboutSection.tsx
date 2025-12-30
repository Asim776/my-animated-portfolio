import { Code2, Database, Smartphone, Server } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, Next.js, TypeScript",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Express, Python",
  },
  {
    icon: Database,
    title: "Database",
    description: "MongoDB, PostgreSQL, MySQL",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Flutter, React Native",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary text-sm mb-2">{"// About Me"}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who <span className="gradient-text">I Am</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image/Code Block */}
            <div className="relative">
              <div className="gradient-border p-6 bg-card rounded-lg card-shadow">
                <pre className="font-mono text-sm overflow-x-auto">
                  <code>
                    <span className="text-primary">const</span>{" "}
                    <span className="text-foreground">developer</span>{" "}
                    <span className="text-muted-foreground">=</span> {"{"}
                    {"\n"}
                    {"  "}
                    <span className="text-accent">name</span>:{" "}
                    <span className="text-green-400">"Your Name"</span>,{"\n"}
                    {"  "}
                    <span className="text-accent">role</span>:{" "}
                    <span className="text-green-400">"Full Stack Developer"</span>,{"\n"}
                    {"  "}
                    <span className="text-accent">passion</span>:{" "}
                    <span className="text-green-400">"Building amazing apps"</span>,{"\n"}
                    {"  "}
                    <span className="text-accent">coffee</span>:{" "}
                    <span className="text-primary">true</span>,{"\n"}
                    {"  "}
                    <span className="text-accent">skills</span>: [{"\n"}
                    {"    "}
                    <span className="text-green-400">"Python"</span>,{" "}
                    <span className="text-green-400">"MERN"</span>,{"\n"}
                    {"    "}
                    <span className="text-green-400">"Flutter"</span>,{" "}
                    <span className="text-green-400">"SQL"</span>{"\n"}
                    {"  "}]{"\n"}
                    {"}"};
                  </code>
                </pre>
              </div>
              <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-primary/10 rounded-lg blur-xl" />
            </div>

            {/* Right Side - Text Content */}
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with expertise in building
                scalable web and mobile applications. With a strong foundation in
                both frontend and backend technologies, I transform complex problems
                into elegant, user-friendly solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                My journey in software development has equipped me with skills in
                Python, the MERN stack, Flutter, and various database technologies.
                I love tackling challenging projects and continuously learning new
                technologies to stay at the cutting edge of development.
              </p>

              {/* Highlight Cards */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <item.icon className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
