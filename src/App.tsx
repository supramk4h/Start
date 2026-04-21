/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModalProvider } from "./context/ModalContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ModalWrapper from "./components/ModalWrapper";
import FloatingGlow from "./components/FloatingGlow";

import { motion } from "motion/react";

export default function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen relative overflow-hidden bg-black text-white selection:bg-accent/30">
        <FloatingGlow />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ModalWrapper />
      </div>
    </ModalProvider>
  );
}
