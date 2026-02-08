import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const SocialMediaSection = () => {
  const { count: instagramFollowers, ref: instagramRef } = useCountUp(36, 1800);
  const { count: tiktokFollowers, ref: tiktokRef } = useCountUp(22.4, 1800);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header - Centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Siga nas Redes Sociais
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conteúdos exclusivos, rotina e dicas compartilhadas diariamente.
          </p>
        </motion.div>

        {/* Grid com Instagram e TikTok */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Instagram Header */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-display text-lg font-semibold">
                  @emillymayra
                </p>
                <p ref={instagramRef} className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{instagramFollowers}K</span> seguidores
                </p>
              </div>
            </div>

            {/* Instagram iPhone */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[280px] md:w-[300px]"
            >
              <div className="relative rounded-[48px] border-[8px] border-black bg-black shadow-2xl overflow-hidden aspect-[9/19.5]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-10" />
                <div className="w-full h-full bg-white">
                  <img
                    src="/instagram-screen.jpeg"
                    alt="Instagram @emillymayra"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-orange-500/20 blur-3xl -z-10 scale-110" />
            </motion.div>
          </motion.div>

          {/* TikTok */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* TikTok Header */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                <svg 
                  className="w-7 h-7" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path 
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" 
                    fill="#00f2ea"
                  />
                  <path 
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" 
                    fill="#ff004f"
                    transform="translate(1, 1)"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-display text-lg font-semibold">
                  @emillymayra
                </p>
                <p ref={tiktokRef} className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{tiktokFollowers}K</span> seguidores
                </p>
              </div>
            </div>

            {/* TikTok iPhone */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative w-[280px] md:w-[300px]"
            >
              <div className="relative rounded-[48px] border-[8px] border-black bg-black shadow-2xl overflow-hidden aspect-[9/19.5]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-10" />
                <div className="w-full h-full bg-black">
                  <img
                    src="/tiktok-screen.jpeg"
                    alt="TikTok @meninahers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-cyan-500/20 via-pink-500/20 to-red-500/20 blur-3xl -z-10 scale-110" />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SocialMediaSection;