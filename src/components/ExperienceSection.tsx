import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-10">
            Professional Journey
          </h2>

          <div className="relative border-l-2 border-primary/20 pl-8 ml-4">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Briefcase size={12} className="text-primary-foreground" />
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow max-w-2xl">
              <span className="text-xs text-muted-foreground font-medium">
                Aug 2025 – Dec 2025 · 5 months
              </span>
              <h3 className="font-display font-bold text-lg mt-2">Full Stack Developer Intern</h3>
              <p className="text-primary font-medium text-sm mb-4">SPRK Technologies</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Developed and maintained web applications using modern frontend and backend technologies.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Assisted in API development and database management.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Implemented responsive UI components.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Collaborated with the development team on real-world projects.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
