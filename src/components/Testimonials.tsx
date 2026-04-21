import { useModal } from "../context/ModalContext";

export default function Testimonials() {
  const { openModal } = useModal();
  const testimonials = [
    { name: "Sarah Jenkins", text: "Aoun delivered beyond our expectations. The new website has significantly increased our conversion rate." },
    { name: "Mark Robinson", text: "Professional, efficient, and highly creative. Aoun is our go-to guy for all things digital." },
    { name: "Elena Torres", text: "The attention to detail and strategic approach really set Aoun apart from other freelancers we've worked with." },
    { name: "Linda Chen", text: "The attention to detail in the e-commerce setup was incredible. Sales are up by 40%!" },
    { name: "David Wilson", text: "Aoun is a true professional. His design sense and technical expertise are top-notch." },
    { name: "Michael Brown", text: "Strategic and execution-focused. The rebranding was smooth and effective." },
    { name: "Sophia Martinez", text: "Great communication throughout. The new site captures our brand spirit perfectly." },
    { name: "Robert Taylor", text: "The SEO work Aoun did was a game-changer for our organic traffic." },
    { name: "Emily Davis", text: "Highly recommend for any digital project. Creative and technically sound." },
    { name: "Kevin Lopez", text: "Fast turnaround without compromising on quality. A pleasure to work with." },
    { name: "Jessica White", text: "The site is beautiful and incredibly fast. Exactly what we needed." },
    { name: "James Miller", text: "Reliable and highly skilled. Aoun turned our vision into a high-performance reality." },
    { name: "Ahmed Khan", text: "Aoun's work in full-stack development is impressive. Truly a global-standard service." },
  ];

  // Double the testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="w-full px-8 md:px-[6%]">
        <div className="flex items-center gap-6 mb-10">
          <div className="flex-grow flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white after:content-[''] after:h-[1px] after:flex-grow after:bg-border">
            Clients Feedback
          </div>
          <button 
            onClick={() => openModal({ 
              title: "Share Your Feedback", 
              content: "", 
              type: 'feedback' 
            })}
            className="hidden md:block bg-surface border border-border text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-all active:scale-95 whitespace-nowrap"
          >
            + Add Your Review
          </button>
        </div>
        <button 
          onClick={() => openModal({ 
            title: "Share Your Feedback", 
            content: "", 
            type: 'feedback' 
          })}
          className="md:hidden w-full mb-10 bg-surface border border-border text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-all active:scale-95 whitespace-nowrap"
        >
          + Add Your Review
        </button>
      </div>

      <div className="relative mt-10">
        <div className="testimonials-track py-5">
          {duplicatedTestimonials.map((t, i) => (
            <div 
              key={`${t.name}-${i}`} 
              className="w-[350px] shrink-0 bg-surface border border-border p-10 rounded-3xl hover:border-accent hover:bg-white/10 transition-all group"
            >
              <p className="text-sm text-text-muted italic leading-relaxed mb-6 group-hover:text-white transition-colors">"{t.text}"</p>
              <div>
                <h4 className="text-white font-bold text-base">{t.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
