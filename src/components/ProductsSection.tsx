import { motion } from "framer-motion";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import { ExternalLink, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Kit Skincare Premium",
    description: "Rotina completa de cuidados com a pele que uso diariamente.",
    image: product1,
    link: "#",
    sponsored: true,
  },
  {
    id: 2,
    name: "Relógio Rose Gold",
    description: "Acessório elegante que combina com qualquer look.",
    image: product2,
    link: "#",
    sponsored: false,
  },
  {
    id: 3,
    name: "Joias Artesanais",
    description: "Peças exclusivas feitas à mão com ouro 18k.",
    image: product3,
    link: "#",
    sponsored: true,
  },
  {
    id: 4,
    name: "Perfume Signature",
    description: "Minha fragrância favorita para o dia a dia.",
    image: product4,
    link: "#",
    sponsored: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProductsSection = () => {
  return (
    <section id="produtos" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Curadoria exclusiva
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meus Produtos Favoritos
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Selecionei com carinho os produtos que realmente fazem parte da minha rotina.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="group relative glass-card overflow-hidden hover-lift"
            >
              {product.sponsored && (
                <span className="sponsored-badge flex items-center gap-1">
                  <Star size={10} /> Parceiro
                </span>
              )}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm font-body mb-4 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 gradient-gold text-gold-foreground px-5 py-2.5 rounded-full text-sm font-medium font-body hover:opacity-90 transition-opacity"
                >
                  Comprar agora
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
