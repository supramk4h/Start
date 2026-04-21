import { motion } from "motion/react";
import { Clock, CheckCircle, Users, MessageSquare } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Clock, number: "05+", label: "Years of Experience" },
    { icon: CheckCircle, number: "120+", label: "Projects Completed" },
    { icon: Users, number: "40+", label: "Happy Clients" },
    { icon: MessageSquare, number: "24/7", label: "Dedicated Support" },
  ];

  const skills = [
    "HTML5", "CSS3 / Tailwind", "JavaScript ES6", "React.js", 
    "WordPress", "UI / UX Design", "Node.js", "SEO Strategy"
  ];

  return (
    <section id="about" className="py-20 w-full px-8 md:px-[6%]">
      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-10 after:content-[''] after:h-[1px] after:flex-grow after:bg-border">
        About Me
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[2rem] md:text-[2.8rem] font-black leading-[1.1] mb-6 text-white tracking-tight">
            My name is Aoun Ahmed. I'm based in Pakistan, and I work with a wide range of clients.
          </h3>
          <p className="text-sm text-text-muted leading-relaxed max-w-xl">
            From university students building their first project to business owners who need a reliable digital presence. What I offer is simple: clean architecture, intentional design, and reliable execution. No overpromising. No unnecessary complexity. Just modern web development, SEO strategy, visual branding, and ongoing support — delivered with consistency and care. If you need a digital partner who listens first and builds second, let's talk.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          <h4 className="text-[10px] uppercase font-bold tracking-widest text-white flex items-center gap-3 after:content-[''] after:h-[1px] after:flex-grow after:bg-border">
            Core Technologies
          </h4>
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill, index) => (
              <motion.span 
                key={skill}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1 }
                }}
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }
                }}
                className="bg-white/5 border border-border px-4 py-2 rounded-xl text-[10px] font-mono font-semibold text-text-muted hover:text-white hover:border-accent hover:bg-accent/10 transition-all cursor-default uppercase tracking-tight transform-gpu"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-[24px] border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent p-6 h-[130px] transition-all hover:bg-white/[0.08] hover:border-accent/40 transform-gpu will-change-transform shadow-lg"
          >
            {/* Subtle Shade Overlay */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-white/5 p-2 text-accent transition-all group-hover:bg-accent group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
                  <stat.icon size={18} />
                </div>
                <span className="text-[9px] uppercase font-bold tracking-[0.15em] text-text-muted transition-colors group-hover:text-white">
                  {stat.label.split(' ').pop()}
                </span>
              </div>
              
              <div className="mt-2 text-left">
                <div className="text-2xl md:text-3xl font-black text-white tracking-tighter transition-transform group-hover:translate-x-1 origin-left">
                  {stat.number}
                </div>
                <div className="text-[9px] uppercase font-bold tracking-widest text-text-muted mt-0.5 opacity-60">
                  {stat.label}
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
