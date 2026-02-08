import { motion } from "framer-motion";

const stats = [
  { label: "Seguidores", value: "520K+" },
  { label: "Alcance Mensal", value: "2.5M" },
  { label: "Engajamento", value: "4.8%" },
  { label: "Marcas Parceiras", value: "40+" },
];

const brands = [
  "L'Oréal", "Sephora", "Zara", "Farm", "Natura", "Shein",
];

const testimonials = [
  {
    quote: "Parceria incrível! A Isabella entrega conteúdo de alta qualidade com resultados reais.",
    author: "Marina Costa",
    role: "Marketing Manager, Sephora",
  },
  {
    quote: "Profissionalismo e autenticidade. Os resultados superaram nossas expectativas.",
    author: "Carlos Mendes",
    role: "Brand Director, Natura",
  },
];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2 ![-webkit-text-fill-color:initial]" style={{ background: 'linear-gradient(135deg, hsl(15, 60%, 55%), hsl(40, 70%, 50%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {stat.value}
              </p>
              <p className="text-primary-foreground/60 font-body text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-20"
        >
          <p className="text-primary-foreground/40 font-body text-xs tracking-[0.3em] uppercase mb-8">
            Marcas que já trabalhei
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {brands.map((brand) => (
              <span
                key={brand}
                className="font-display text-xl md:text-2xl text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="border border-primary-foreground/10 rounded-2xl p-8"
            >
              <p className="font-body text-primary-foreground/80 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body font-medium text-primary-foreground">{t.author}</p>
                <p className="font-body text-sm text-primary-foreground/50">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
