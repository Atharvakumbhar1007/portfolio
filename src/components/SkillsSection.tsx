import { motion } from "framer-motion";

const skillCategories = [
  { title: "Programming Languages", skills: ["JavaScript", "Java", "Python"] },
  { title: "Frontend", skills: ["HTML", "CSS", "React.js"] },
  { title: "Backend", skills: ["Node.js", "Express.js"] },
  { title: "Databases", skills: ["MongoDB", "MySQL"] },
  { title: "Tools & Technologies", skills: ["Git", "GitHub", "VS Code"] },
  { title: "Other Skills", skills: ["RESTful APIs", "Responsive Design", "AI Integration"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-10">
            Technologies I Work With
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 card-shadow"
              >
                <h3 className="font-display font-semibold text-sm mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-badge-bg text-badge-text text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
