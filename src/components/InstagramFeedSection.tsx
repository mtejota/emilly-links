import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import instaPost1 from "@/assets/insta-post-1.jpg";
import instaPost2 from "@/assets/insta-post-2.jpg";
import instaPost3 from "@/assets/insta-post-3.jpg";

const posts = [
  { image: instaPost1, likes: "12.4K", comments: "342", caption: "Minha rotina de skincare favorita ✨" },
  { image: instaPost2, likes: "9.8K", comments: "218", caption: "Acessórios que não saem da minha bolsa 👜" },
  { image: instaPost3, likes: "15.1K", comments: "487", caption: "Maquiagem do dia 💄" },
];

const InstagramFeedSection = () => {
  const { count: followers, ref } = useCountUp(520, 1800);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
              <Instagram className="w-6 h-6 text-gold-foreground" />
            </div>
            <div className="text-left">
              <p className="font-display text-lg font-semibold text-foreground">@isabella.ferreira</p>
              <p ref={ref} className="font-body text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{followers}K</span> seguidores
              </p>
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Acompanhe no Instagram
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Confira as últimas postagens e fique por dentro de tudo
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="flex items-center gap-6 mb-3">
                    <span className="flex items-center gap-1.5 text-primary-foreground font-body font-medium">
                      <Heart className="w-5 h-5 fill-current" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1.5 text-primary-foreground font-body font-medium">
                      <MessageCircle className="w-5 h-5" /> {post.comments}
                    </span>
                  </div>
                  <p className="text-primary-foreground/80 font-body text-sm max-w-[200px]">
                    {post.caption}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-primary/80 transition-colors tracking-wide"
          >
            <Instagram className="w-4 h-4" />
            Ver mais no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeedSection;
