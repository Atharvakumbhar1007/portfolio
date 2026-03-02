import { MapPin, GraduationCap, Code, Brain, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: GraduationCap, title: "B.E. Computer Engineering", desc: "Mumbai University – May 2026" },
  { icon: Code, title: "Full-Stack Developer", desc: "React, Node.js, Express" },
  { icon: Brain, title: "AI Integration", desc: "Generative AI & Automation" },
  { icon: Briefcase, title: "Internship Experience", desc: "Real-world production apps" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm">💻 About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-6">
            Passionate Developer & Engineer
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">
            I'm a final-year Computer Engineering student at Vishwaniketan's Institute of Management Entrepreneurship and Engineering Technology (Mumbai University), graduating in May 2026.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">
            With a strong foundation in full-stack development and a growing interest in AI-powered solutions, I've built real-world applications during my internship at SPRK Technologies and through impactful academic projects.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
            I thrive on solving complex problems with clean, efficient code and am eager to contribute to teams building innovative products.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10">
            <span className="flex items-center gap-1"><MapPin size={14} /> Pune, Maharashtra</span>
            <span className="flex items-center gap-1"><GraduationCap size={14} /> Graduating May 2026</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-5 card-shadow hover:card-shadow-hover transition-shadow"
              >
                <item.icon className="text-primary mb-3" size={24} />
                <h3 className="font-display font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
