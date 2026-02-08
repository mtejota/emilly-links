import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import brandshopee from "@/assets/brand-loreal.png";
import brandSephora from "@/assets/brand-sephora.png";
import brandFarm from "@/assets/brand-farm.png";
import brandNatura from "@/assets/brand-natura.png";
import brandShein from "@/assets/brand-shein.png";

const stats = [
  { label: "Seguidores", end: 50, suffix: "K+" },
  { label: "Alcance Mensal", end: 1.5, suffix: "M", decimals: 1 },
  { label: "Engajamento", end: 4.8, suffix: "%", decimals: 1 },
  { label: "Marcas Parceiras", end: 35, suffix: "+" },
];

const brands = [
  { name: "L'shopee", logo: brandshopee },
  { name: "Sephora", logo: brandSephora },
  { name: "Farm", logo: brandFarm },
  { name: "Natura", logo: brandNatura },
  { name: "Shein", logo: brandShein },
];

const demographics = [
  {
    title: "Principais Cidades",
    items: ["São Paulo", "João Pessoa", "Rio de Janeiro", "Salvador"]
  },
  {
    title: "Faixa Etária",
    items: ["18 a 54 anos"]
  },
  {
    title: "Interesses",
    items: ["Estilo de Vida", "Moda", "Beleza"]
  },
  {
    title: "Público",
    items: ["97% Feminino", "3% Masculino"]
  }
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
          color: "#874637"
        }}
      >
        {display}{suffix}
      </p>
      <p className="font-body text-sm tracking-wide uppercase" style={{ color: "#874637" }}>
        {label}
      </p>
    </div>
  );
};

const SocialProofSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/public/metricas_emilly.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Light overlay for subtle contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Stats with count-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="backdrop-blur-md bg-white/80 rounded-2xl p-6">
              <CountUpStat end={stat.end} suffix={stat.suffix} decimals={stat.decimals} label={stat.label} />
            </div>
          ))}
        </motion.div>

        {/* Demographics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-10 text-center text-white drop-shadow-lg">
            Audiência
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demographics.map((demo) => (
              <div
                key={demo.title}
                className="border border-white/20 rounded-2xl p-6 text-center backdrop-blur-md bg-white/80"
              >
                <h3 className="font-display text-lg font-semibold mb-4" style={{ color: "#874637" }}>
                  {demo.title}
                </h3>
                <div className="space-y-2">
                  {demo.items.map((item, index) => (
                    <p key={index} className="font-body text-sm text-gray-700">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-10 text-white drop-shadow-lg">
            Marcas que já trabalhei
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 backdrop-blur-md bg-white/70 rounded-3xl p-8">
            {brands.map((brand) => (
              <motion.img
                key={brand.name}
                src={brand.logo}
                alt={brand.name}
                className="h-10 md:h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;