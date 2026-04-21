import { motion } from "motion/react";

export default function FloatingGlow() {
  // Use a smaller number of optimized orbs.
  // Radial gradients are much faster to render than blur filters.
  const circles = [
    { id: 1, size: "45vw", x: "10%", y: "20%", duration: 35, opacity: 0.15 },
    { id: 2, size: "60vw", x: "80%", y: "15%", duration: 45, opacity: 0.12 },
    { id: 3, size: "40vw", x: "40%", y: "70%", duration: 40, opacity: 0.18 },
    { id: 4, size: "55vw", x: "70%", y: "85%", duration: 55, opacity: 0.1 },
    { id: 5, size: "35vw", x: "15%", y: "85%", duration: 30, opacity: 0.15 },
    { id: 6, size: "50vw", x: "50%", y: "30%", duration: 50, opacity: 0.12 },
    { id: 7, size: "40vw", x: "90%", y: "60%", duration: 38, opacity: 0.15 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {/* Static gradient background for base depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ff313108,transparent_70%)]" />
      
      {circles.map((circle) => (
        <Circle key={circle.id} {...circle} />
      ))}
      
      {/* Minimal optimized particles */}
      <div className="absolute inset-0">
         {[...Array(10)].map((_, i) => (
           <Particle key={i} />
         ))}
      </div>
    </div>
  );
}

function Circle({ size, x, y, duration, opacity }: any) {
  return (
    <motion.div
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(255, 49, 49, ${opacity}) 0%, rgba(255, 49, 49, 0) 70%)`,
      }}
      animate={{
        x: ["-5%", "5%", "-2%", "-5%"],
        y: ["-5%", "5%", "3%", "-5%"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transform-gpu"
    />
  );
}

function Particle() {
  const initialX = Math.random() * 100;
  const initialY = Math.random() * 100;

  return (
    <motion.div
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 20 + Math.random() * 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute w-1 h-1 bg-accent/40 rounded-full blur-[1px] transform-gpu"
    />
  );
}
