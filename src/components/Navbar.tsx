import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT_INFO, SITE_METADATA } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let lastActiveSection = "home";
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (window.innerWidth < 768) return; // Skip heavy logic on mobile unless needed

      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPos = window.scrollY + 200;
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
           if (lastActiveSection !== id) {
             setActiveSection(id);
             lastActiveSection = id;
           }
           break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-bg/90 backdrop-blur-xl border-b border-border shadow-2xl"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-8 md:px-[6%] flex justify-between items-center">
        <a href="#home" className="text-2xl font-black tracking-tighter text-white group">
          {SITE_METADATA.name.split(' ')[0]}<span className="text-accent group-hover:text-accent-active transition-colors">{SITE_METADATA.name.split(' ')[1]}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-white relative py-1 ${
                  activeSection === link.id ? "text-accent" : "text-text-muted"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-accent shadow-[0_0_8px_rgba(255,49,49,0.3)]"
                  />
                )}
              </a>
            ))}
          </div>
          
          <div className="w-[1px] h-4 bg-border hidden lg:block" />

          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-7 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-accent-active hover:-translate-y-0.5 active:scale-95 transition-all shadow-lg shadow-accent/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white relative z-[60]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-bg border-l border-border flex flex-col justify-center items-center gap-10 z-50 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-semibold uppercase tracking-widest transition-colors ${
                    activeSection === link.id ? "text-accent" : "text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest"
              >
                Hire Me
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
