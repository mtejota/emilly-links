import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Lifestyle editorial"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

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
          Isabella
          <br />
          <span className="italic font-normal">Ferreira</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-primary-foreground/90 font-body text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Criadora de conteúdo de lifestyle e beleza. Compartilho minhas descobertas favoritas e inspiro mulheres a viverem com autenticidade e estilo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#produtos"
            className="gradient-gold px-8 py-4 rounded-full font-body font-medium text-gold-foreground tracking-wide hover:opacity-90 transition-opacity"
          >
            Ver produtos que eu uso
          </a>
          <a
            href="#parcerias"
            className="border border-primary-foreground/30 px-8 py-4 rounded-full font-body font-medium text-primary-foreground tracking-wide hover:bg-primary-foreground/10 transition-colors"
          >
            Parcerias & Contato
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
