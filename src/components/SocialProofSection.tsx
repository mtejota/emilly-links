import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import brandLoreal from "@/assets/brand-loreal.png";
import brandSephora from "@/assets/brand-sephora.png";
import brandFarm from "@/assets/brand-farm.png";
import brandNatura from "@/assets/brand-natura.png";
import brandShein from "@/assets/brand-shein.png";

const stats = [
  { label: "Seguidores", end: 100, suffix: "K+" },
  { label: "Alcance Mensal", end: 2.5, suffix: "M", decimals: 1 },
  { label: "Engajamento", end: 4.8, suffix: "%", decimals: 1 },
  { label: "Marcas Parceiras", end: 40, suffix: "+" },
];

const brands = [
  { name: "L'Oréal", logo: brandLoreal },
  { name: "Sephora", logo: brandSephora },
  { name: "Farm", logo: brandFarm },
  { name: "Natura", logo: brandNatura },
  { name: "Shein", logo: brandShein },
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

const CountUpStat = ({ end, suffix, decimals = 0, label }: { end: number; suffix: string; decimals?: number; label: string }) => {
  const numericEnd = decimals ? Math.round(end * Math.pow(10, decimals)) : end;
  const { count, ref } = useCountUp(numericEnd, 2000);
  const display = decimals ? (count / Math.pow(10, decimals)).toFixed(decimals) : count;

  return (
    <div ref={ref} className="text-center">
      <p
        className="font-display text-4xl md:text-5xl font-bold mb-2"
        style={{
          background: "linear-gradient(135deg, hsl(15, 60%, 55%), hsl(40, 70%, 50%))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {display}{suffix}
      </p>
      <p className="text-primary-foreground/60 font-body text-sm tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
};

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Stats with count-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <CountUpStat key={stat.label} end={stat.end} suffix={stat.suffix} decimals={stat.decimals} label={stat.label} />
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
          <p className="text-primary-foreground/40 font-body text-xs tracking-[0.3em] uppercase mb-10">
            Marcas parceiras
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {brands.map((brand) => (
              <motion.img
                key={brand.name}
                src={brand.logo}
                alt={brand.name}
                className="h-10 md:h-14 w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 brightness-200"
                whileHover={{ scale: 1.1 }}
              />
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
