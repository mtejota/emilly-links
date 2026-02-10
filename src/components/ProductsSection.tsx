import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="public/emilly_produtosection.JPG" // 👈 imagem em /public
                alt="Quem é Emilly"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 max-w-xl"
          >
            <p className="text-primary font-body text-xs tracking-[0.7em] uppercase mb-4">
              Quem sou eu
            </p>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Muito prazer, eu sou a Emilly
            </h2>

            <p className="text-muted-foreground font-body leading-relaxed mb-5">
              uma influenciadora
digital apaixonada por criar
conexões autênticas entre
marcas e seu público. Através de
conteúdos envolventes e
relevantes, ela gera visibilidade,
engajamento e credibilidade
para as empresas com as quais
colabora.


 Sua abordagem genuína
permite que marcas alcancem
novos públicos e se conectem
de forma mais próxima com
potenciais clientes, tornando
cada parceria uma experiência
impactante e vantajosa para
ambos os lados
            </p>

            <p className="text-muted-foreground font-body leading-relaxed mb-5">
              Acredito que estilo vai além da aparência — é sobre escolhas,
              experiências e se sentir bem sendo quem você é.
            </p>

            <p className="text-muted-foreground font-body leading-relaxed">
              Aqui você encontra recomendações sinceras, parcerias alinhadas
              aos meus valores e um pouco do meu universo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
