import { motion } from "framer-motion";
import { Handshake, TrendingUp, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Publi & Stories",
    description: "Conteúdo autêntico integrado ao meu estilo de vida.",
  },
  {
    icon: TrendingUp,
    title: "Campanhas de Marca",
    description: "Estratégias completas de lançamento e awareness.",
  },
  {
    icon: Users,
    title: "Eventos & Presença",
    description: "Participação em eventos, lançamentos e ativações.",
  },
  {
    icon: Handshake,
    title: "Embaixadora de Marca",
    description: "Parcerias de longo prazo com marcas alinhadas.",
  },
];

const PartnershipsSection = () => {
  return (
    <section id="parcerias" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
              Vamos trabalhar juntas
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Parcerias & Publicidade
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Trabalho com marcas que compartilham dos mesmos valores que eu: autenticidade, qualidade e cuidado com o público. Meu foco é criar conteúdo que conecte de verdade.
            </p>
            <div className="space-y-3 text-muted-foreground font-body text-sm mb-8">
              <p>🎯 <strong className="text-foreground">Nichos:</strong> Beleza, Moda, Lifestyle, Skincare, Bem-estar</p>
              <p>📊 <strong className="text-foreground">Alcance:</strong> +40k seguidores combinados</p>
              <p>💬 <strong className="text-foreground">Engajamento:</strong> Taxa média de 4.8%</p>
            </div>
            <a
              href="#contato"
              className="inline-block gradient-gold text-gold-foreground px-8 py-4 rounded-full font-body font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              Quero fazer parceria
            </a>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card p-6 hover-lift"
              >
                <feature.icon className="text-primary mb-3" size={28} />
                <h3 className="font-display text-base font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
