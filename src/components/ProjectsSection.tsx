import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    emoji: "🚀",
    tag: "Major Project",
    title: "AI-Powered Generative Deployment Platform",
    desc: "An AI-powered platform that generates and deploys complete websites from simple text prompts. It automates frontend creation, backend setup, project structuring, and deployment workflows.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Generative AI", "Git"],
    link: "https://github.com/Atharvakumbhar1007/AI-Powered-Generative-Deployment-Platform-Major_project-",
  },
  {
    emoji: "🗄️",
    tag: "MySQL Project",
    title: "E-Commerce Database System",
    desc: "A structured and fully normalized MySQL database project modeling real-world e-commerce workflows including product management, order processing, payment tracking, and inventory control.",
    tech: ["MySQL", "SQL Queries", "Database Normalization", "ER Modeling"],
    link: "https://github.com/Atharvakumbhar1007/ecommerce-database-system",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-10">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{proj.emoji}</span>
                  <span className="bg-badge-bg text-badge-text text-xs font-medium px-3 py-1 rounded-full">
                    {proj.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-3">{proj.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tech.map((t) => (
                    <span key={t} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  View Code <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
