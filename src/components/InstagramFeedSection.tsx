import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

// Ícone SVG do TikTok
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const SocialPhones = () => {
  const instagramRef = useRef<HTMLSpanElement | null>(null);
  const tiktokRef = useRef<HTMLSpanElement | null>(null);

  const [instagramFollowers, setInstagramFollowers] = useState(0);
  const [tiktokFollowers, setTiktokFollowers] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 36.1;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setInstagramFollowers(end);
        clearInterval(counter);
      } else {
        setInstagramFollowers(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    let start = 0;
    const end = 22.4;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setTiktokFollowers(end);
        clearInterval(counter);
      } else {
        setTiktokFollowers(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-right md:bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/public/herounic.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative container mx-auto flex justify-center md:justify-start px-4 md:pl-8 lg:pl-16">
        <div className="flex gap-6 md:gap-12 lg:gap-24 items-center flex-wrap justify-center md:justify-start">

          {/* INSTAGRAM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <Instagram className="w-6 h-6 text-black" />
              </div>

              <div>
                <p className="text-lg font-semibold text-[#874637]">@emillymayra</p>
                <p className="text-sm text-[#874637]/90">
                  <span ref={instagramRef} className="font-semibold">
                    {instagramFollowers}K
                  </span>{" "}
                  seguidores
                </p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[200px] md:w-[260px]"
            >
              <div className="absolute inset-0 bg-[#874637] blur-[30px] opacity-25 rounded-[48px] scale-105" />

              <div className="relative rounded-[48px] border-[8px] border-black bg-black shadow-2xl overflow-hidden aspect-[9/19.5]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-20" />

                {/* AJUSTE DE NITIDEZ */}
                <img
                  src="/instagram-screen.jpeg"
                  alt="Instagram @emillymayra"
                  loading="eager"
                  decoding="sync"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    imageRendering: "crisp-edges",
                    backfaceVisibility: "hidden",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* TIKTOK */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <TikTokIcon className="w-6 h-6 text-[#874637]" />
              </div>

              <div>
                <p className="text-lg font-semibold text-[#874637]">@meninahers</p>
                <p className="text-sm text-[#874637]/90">
                  <span ref={tiktokRef} className="font-semibold">
                    {tiktokFollowers}K
                  </span>{" "}
                  seguidores
                </p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative w-[200px] md:w-[260px]"
            >
              <div className="absolute inset-0 bg-[#874637] blur-[30px] opacity-25 rounded-[48px] scale-105" />

              <div className="relative rounded-[48px] border-[8px] border-black bg-black shadow-2xl overflow-hidden aspect-[9/19.5]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-20" />

                {/* AJUSTE DE NITIDEZ */}
                <img
                  src="/tiktok-screen.jpeg"
                  alt="TikTok @meminahers"
                  loading="eager"
                  decoding="sync"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    imageRendering: "crisp-edges",
                    backfaceVisibility: "hidden",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SocialPhones;
