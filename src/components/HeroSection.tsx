import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";


const slides = [ 
  "/public/hero-black.jpg", 
  
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current]}
            alt="Emilly Mayra"
            className="w-full h-full object-cover object-center mb:object[50%_30%]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary-foreground/80 font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Lifestyle • Beleza • Moda
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Emilly <span className="italic font-normal">Mayra</span>

        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-primary-foreground/90 font-body text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Influenciadora Digital | Empresária
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Botão produtos */}
          <a
            href="#sobre"
            className="px-8 py-4 rounded-full font-body font-medium text-white tracking-wide hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#874637" }}
          >
            Quem sou eu
          </a>

          {/* Botão parcerias com selo */}
          <a
            href="#parcerias"
            className="relative border border-primary-foreground/30 px-8 py-4 rounded-full font-body font-medium text-primary-foreground tracking-wide hover:bg-primary-foreground/10 transition-colors"
          >
            Parcerias & Contato

            <span className="absolute -top-2 -right-2 bg-[#874637] text-white text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wide shadow-md">
              Aberto
            </span>
          </a>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-primary-foreground"
                : "w-3 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;