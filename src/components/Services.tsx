import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { useModal } from "../context/ModalContext";
import { SERVICES } from "../constants";

export default function Services() {
  const { openModal } = useModal();
  
  return (
    <section id="services" className="py-20 w-full px-8 md:px-[6%]">
      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-10 after:content-[''] after:h-[1px] after:flex-grow after:bg-border">
        Our Expertise
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => {
          const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.HelpCircle;
          
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: i * 0.05
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-surface hover:bg-white/[0.08] border border-border hover:border-accent/40 p-8 rounded-3xl transition-all h-[280px] flex flex-col items-start overflow-hidden relative cursor-pointer transform-gpu will-change-transform"
              onClick={() => openModal({ 
                title: service.title, 
                content: service.desc, 
                type: 'service',
                tech: ['UX Audit', 'Interface Design', 'Prototype', 'Animation']
              })}
            >
              <motion.div 
                whileHover={{ 
                  rotate: [0, 10, -10, 0],
                  scale: 1.15
                }}
                transition={{ duration: 0.4 }}
                className="w-11 h-11 mb-5 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 transform-gpu will-change-transform"
              >
                <IconComponent size={20} />
              </motion.div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                >
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-text-muted text-[12px] leading-relaxed">{service.desc}</p>
                </motion.div>
              </div>
              
              <span className="mt-auto pt-4 text-[10px] font-bold uppercase tracking-widest text-accent group-hover:translate-x-2 transition-transform cursor-pointer">
                {service.action} →
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
