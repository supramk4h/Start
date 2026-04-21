import { motion } from "motion/react";
import { useEffect, useState, useCallback, useMemo } from "react";
import { CONTACT_INFO, SITE_METADATA } from "../constants";

const GLYPHS = "ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789@#$!%&*()";

function TextScramble({ phrases }: { phrases: string[] }) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState(phrases[0]);
  const [isScrambling, setIsScrambling] = useState(false);

  const startScramble = useCallback((newText: string) => {
    setIsScrambling(true);
    let frame = 0;
    const maxFrames = 15;
    const originalText = displayText;
    
    const interval = setInterval(() => {
      frame++;
      const progress = frame / maxFrames;
      
      const scrambled = newText.split("").map((char, i) => {
        if (char === " ") return " ";
        if (progress > i / newText.length) return char;
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }).join("");

      setDisplayText(scrambled);

      if (frame >= maxFrames) {
        clearInterval(interval);
        setDisplayText(newText);
        setIsScrambling(false);
      }
    }, 40);
  }, [displayText]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentPhraseIndex + 1) % phrases.length;
      setCurrentPhraseIndex(nextIndex);
      startScramble(phrases[nextIndex]);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentPhraseIndex, phrases, startScramble]);

  return <span>{displayText}</span>;
}

export default function Hero() {
  const phrases = useMemo(() => [
    SITE_METADATA.tagline, 
    "Digital Freelancer", 
    "Visual Strategist", 
    "Technical Partner"
  ], []);

  return (
    <section id="home" className="pt-32 pb-0 flex items-center justify-center w-full px-8 md:px-[6%] relative">
      <div className="w-full bg-surface border border-border rounded-[32px] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 relative overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 1 }}
          className="flex-1 z-10 text-center md:text-left"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-mono text-[10px] md:text-xs text-accent mb-5 font-semibold uppercase tracking-[0.4em] min-h-[1.5em]"
          >
            <TextScramble phrases={phrases} />
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[5.5rem] leading-[0.95] font-black tracking-[-0.05em] text-white mb-6 whitespace-nowrap"
          >
            {SITE_METADATA.name.split(' ')[0]}{" "}
            <span className="text-accent">
              {SITE_METADATA.name.split(' ')[1]}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs md:text-sm text-text-muted mb-10 max-w-[480px] leading-relaxed mx-auto md:mx-0"
          >
            I work with students, businesses, and individuals — building digital solutions that are functional, refined, and straightforward.
          </motion.p>

          <motion.a 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            href={CONTACT_INFO.whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-accent-active hover:-translate-y-0.5 active:scale-95 transition-all shadow-xl shadow-accent/20"
          >
            <svg 
              className="w-4 h-4 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hire Me
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full max-w-[440px] z-10 perspective-1000"
        >
          <motion.div 
            whileHover={{ rotateY: 5, rotateX: -5 }}
            className="aspect-[4/5] bg-white/5 rounded-[40px] overflow-hidden border border-border shadow-[0_30px_60px_rgba(0,0,0,0.5)] group relative transform-gpu will-change-transform"
          >
            <div className="absolute inset-0 bg-accent/5 group-hover:opacity-0 transition-opacity" />
            <img 
              src="https://i.ibb.co/wFpd3RwZ/Picsart-26-04-21-18-01-35-355-1.jpg" 
              alt="Aoun Ahmed" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Subtle corner accent inside the image container */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/20 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
