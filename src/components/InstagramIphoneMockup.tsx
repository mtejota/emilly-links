import { motion } from "framer-motion";
import instagramScreen from "/instagram-screen.jpeg";

const InstagramIphoneMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-[220px] sm:w-[260px] md:w-[300px]"
    >
      {/* iPhone Body */}
      <div
        className="
          relative
          h-[440px]
          sm:h-[520px]
          md:h-[600px]
          rounded-[42px]
          border-[6px]
          border-black
          bg-black
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />

        {/* Screen */}
        <img
          src={instagramScreen}
          alt="Instagram Profile"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 rounded-[42px] bg-pink-500/10 blur-2xl -z-10" />
    </motion.div>
  );
};

export default InstagramIphoneMockup;
