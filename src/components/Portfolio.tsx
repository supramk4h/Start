import { motion } from "motion/react";
import { useModal } from "../context/ModalContext";
import { PROJECTS } from "../constants";

export default function Portfolio() {
  const { openModal } = useModal();
  
  return (
    <section id="portfolio" className="py-20 w-full px-8 md:px-[6%]">
      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-10 after:content-[''] after:h-[1px] after:flex-grow after:bg-border">
        Recent Works
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, rotateZ: 0.5, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 25,
              delay: i * 0.05
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="group bg-surface border border-border rounded-3xl p-6 transition-all hover:bg-white/[0.08] cursor-pointer transform-gpu will-change-transform hover:border-accent/40 shadow-xl hover:shadow-accent/5"
            onClick={() => openModal({ 
              title: project.title, 
              content: project.desc, 
              image: project.image,
              tech: ['React', 'TypeScript', 'Tailwind', 'Motion'],
              type: 'project' 
            })}
          >
            <div className="w-full h-[220px] mb-5 overflow-hidden rounded-2xl border border-border relative">
              <motion.div 
                className="absolute inset-0 bg-accent/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center"
                initial={false}
              >
                <motion.span 
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  variants={{
                    hover: { y: 0, opacity: 1 }
                  }}
                  className="bg-white text-accent px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(255,49,49,0.4)]"
                >
                  View Case Study
                </motion.span>
              </motion.div>
              <motion.img 
                variants={{
                  hover: { scale: 1.08 }
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
              >
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-text-muted text-[12px] leading-relaxed mb-4">{project.desc}</p>
                
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  View Case Study →
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
