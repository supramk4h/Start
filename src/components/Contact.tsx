import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { CONTACT_INFO } from "../constants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 w-full px-8 md:px-[6%]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-accent rounded-3xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 shadow-2xl shadow-accent/20 text-white overflow-hidden relative"
      >
        <div className="z-10">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-5">
            Contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter">Let's work together.</h3>
          <p className="text-sm opacity-80 mb-8 max-w-[400px]">
            Have a project in mind? Need a reliable digital partner? Reach out, and let's build something purposeful for your brand.
          </p>
          <div className="font-mono text-sm tracking-widest">
            {CONTACT_INFO.email}
          </div>
        </div>

        <div className="z-10 flex flex-col justify-center">
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="text-5xl mb-6">✨</div>
              <h3 className="text-2xl font-black mb-3">Message Sent!</h3>
              <p className="text-sm opacity-80 max-w-[300px] mx-auto leading-relaxed">
                Thanks! I've received your request. I usually respond within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 bg-white text-accent px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="w-full bg-white/10 border border-white/20 p-3 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 transition-colors"
                disabled={loading}
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                className="w-full bg-white/10 border border-white/20 p-3 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 transition-colors"
                disabled={loading}
              />
              <textarea 
                rows={4} 
                placeholder="Message" 
                required 
                className="w-full bg-white/10 border border-white/20 p-3 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 transition-colors resize-none"
                disabled={loading}
              />
              <button 
                type="submit" 
                className="bg-white text-accent p-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.1),transparent_50%)] -z-0" />
      </motion.div>
    </section>
  );
}
