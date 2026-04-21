import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  image?: string;
  tech?: string[];
  type?: 'service' | 'project' | 'feedback';
}

export default function Modal({ isOpen, onClose, title, content, image, tech, type }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Auto-focus the close button for accessibility
      setTimeout(() => {
        const closeBtn = modalRef.current?.querySelector('button');
        closeBtn?.focus();
      }, 100);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const isFeedback = type === 'feedback';

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="modal-title"
          className="fixed inset-0 z-[60] flex justify-center items-center p-4 px-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className={`relative z-[70] w-full ${isFeedback ? 'max-w-xl' : 'max-w-4xl'} h-fit max-h-[90vh] bg-bg border border-border rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row shadow-accent/10`}
          >
            <button 
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-[80] bg-bg/50 p-2 rounded-full backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <X size={24} />
            </button>

            {!isFeedback && (
              <div className="w-full md:w-1/2 h-48 md:h-auto bg-surface relative">
                {image && (
                  <img 
                    src={image} 
                    alt={`${title} preview`} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            )}

            <div className={`flex-1 ${isFeedback ? 'p-10' : 'p-8 md:p-12'} overflow-y-auto`}>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                {isFeedback ? 'Share your experience' : (type === 'service' ? 'Expertise' : 'Project Detail')}
              </span>
              <h2 id="modal-title" className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter leading-tight">
                {title}
              </h2>
              
              {isFeedback ? (
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-text-muted mb-2">Full Name</label>
                    <input type="text" required className="w-full bg-surface border border-border p-4 rounded-xl text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-text-muted mb-2">Your Feedback</label>
                    <textarea required rows={4} className="w-full bg-surface border border-border p-4 rounded-xl text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Share your experience working with Aoun..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-accent text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-accent-active shadow-lg shadow-accent/20 transition-all">Submit Review</button>
                </form>
              ) : (
                <>
                  <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8">
                    {content}
                  </p>

                  {tech && (
                    <div className="flex flex-wrap gap-2 mb-10">
                      {tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-surface border border-border rounded-lg text-[10px] text-white">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <button 
                    onClick={onClose}
                    className="bg-accent text-white px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    Back to Archive
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
