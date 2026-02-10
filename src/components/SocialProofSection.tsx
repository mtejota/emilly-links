import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import brandshopee from "/logo_shopee.png";
import brandtemu from "/temu_logo.png";
import brandnarte from "/logo_narte.png";
import brandloreal from "/loreal_logo.png";
import brandmpago from "/mpago_logo.png";
import brandmlivre from "/mlivre_logo.png";
import brandagua from "/agua_luz_logo.png";
import brandsg from "/sg_logo.png";
import brandysy from "/ysy_logo.png";
import brandskelt from "/skelt_logo.png";
import brandmahav from "/mahav_logo.png";
import brandkaisan from "/kaisan_logo.png";
import brandniely from "/niely_gold_logo.png";



const stats = [
  { label: "Seguidores", end: 50, suffix: "K+" },
  { label: "Alcance Mensal", end: 1.5, suffix: "M", decimals: 1 },
  { label: "Engajamento", end: 4.8, suffix: "%", decimals: 1 },
  { label: "Marcas Parceiras", end: 35, suffix: "+" },
];

const brands = [
  { name: "shopee", logo: brandshopee },
  { name: "temu", logo: brandtemu },
  { name: "narte", logo: brandnarte },
  { name: "loreal", logo: brandloreal },
  { name: "Mercado Pago", logo: brandmpago },
  { name: "Mercado Livre", logo: brandmlivre },
  { name: "Agua e Luz", logo: brandagua },
  { name: "SG Germain", logo: brandsg },
  { name: "YSY", logo: brandysy },
  { name: "Skelt", logo: brandskelt },
  { name: "Mahav", logo: brandmahav },
  { name: "Kaisan", logo: brandkaisan },
  { name: "Niely Gold", logo: brandniely },
];

const demographics = [
  { title: "Principais Cidades", items: ["São Paulo", "João Pessoa", "Rio de Janeiro", "Salvador"] },
  { title: "Faixa Etária", items: ["18 a 54 anos"] },
  { title: "Interesses", items: ["Estilo de Vida", "Moda", "Beleza"] },
  { title: "Público", items: ["97% Feminino", "3% Masculino"] },
];

const CountUpStat = ({
  end,
  suffix,
  decimals = 0,
  label,
}: {
  end: number;
  suffix: string;
  decimals?: number;
  label: string;
}) => {
  const numericEnd = decimals ? Math.round(end * Math.pow(10, decimals)) : end;
  const { count, ref } = useCountUp(numericEnd, 2000);
  const display = decimals
    ? (count / Math.pow(10, decimals)).toFixed(decimals)
    : count;

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "#874637" }}>
        {display}
        {suffix}
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
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/public/metricas_emilly.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="backdrop-blur-md bg-white/80 rounded-2xl p-6">
              <CountUpStat {...stat} />
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

        {/* Brand Marquee */}
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

          <div className="backdrop-blur-md bg-white/50 rounded-3xl p-8 overflow-hidden">
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex items-center gap-16 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 40,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...brands, ...brands].map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 flex items-center justify-center"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
