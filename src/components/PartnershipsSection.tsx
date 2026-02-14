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
            <p className="font-body text-sm tracking-[0.3em] uppercase mb-3" style={{ color: '#874637' }}>
              Vamos trabalhar juntas
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Parcerias & Publicidade
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Trabalho com marcas que compartilham dos mesmos valores que eu: autenticidade, qualidade e cuidado com o público. Meu foco é criar conteúdo que conecte de verdade.
            </p>
            
            <a 
              href="#contato"
              className="inline-block text-white px-8 py-4 rounded-full font-body font-medium tracking-wide hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#874637' }}
            >
              Quero fazer parceria
            </a>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
