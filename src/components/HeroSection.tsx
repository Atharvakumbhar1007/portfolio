import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "1", label: "Internship" },
  { value: "10+", label: "Technologies" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-badge-bg text-badge-text px-4 py-1.5 text-sm font-medium mb-6">
              ✨ Available for opportunities
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
              Hi, I'm <span className="text-gradient">Atharva</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-4 font-display">
              Vinayak Kumbhar
            </h2>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-medium text-sm">
                Full Stack Developer | AI Enthusiast
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
              I am a passionate Full Stack Developer who enjoys building scalable and user-friendly web applications. I love solving real-world problems through clean and efficient code. My goal is to grow as a developer while creating innovative solutions that make a meaningful impact.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition-colors"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-muted-foreground px-6 py-3 font-medium text-sm hover:text-primary transition-colors"
              >
                <Mail size={16} /> Contact Me
              </a>
            </div>

            <div className="flex gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold stat-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                <img
                  src={profilePhoto}
                  alt="Atharva Vinayak Kumbhar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                🚀 Open to Work
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
