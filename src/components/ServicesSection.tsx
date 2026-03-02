import { motion } from "framer-motion";
import { Globe, Server, Palette, Bot, Database } from "lucide-react";

const services = [
  { icon: Globe, title: "Full-Stack Web Development", desc: "Building complete web applications with modern frontend (React, HTML, CSS) and secure backend (Node.js, Express) integration." },
  { icon: Server, title: "API Development", desc: "Designing RESTful APIs with authentication and database connectivity." },
  { icon: Palette, title: "UI/UX Design", desc: "Creating responsive, user-friendly, and professional interfaces." },
  { icon: Bot, title: "AI-Based Application Development", desc: "Developing AI-powered solutions such as chatbots and smart automation systems." },
  { icon: Database, title: "Database Design", desc: "Designing and managing optimized databases using MongoDB and MySQL for scalable applications." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-10">
            What I Can Do For You
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-badge-bg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <svc.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={22} />
                </div>
                <h3 className="font-display font-semibold mb-2">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
