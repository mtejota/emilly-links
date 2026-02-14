import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import ContactSection from "@/components/ContactSection";
import SocialProofSection from "@/components/SocialProofSection";
import InstagramFeedSection from "@/components/InstagramFeedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <SocialProofSection />
      <InstagramFeedSection />
      <PartnershipsSection />
      <Footer />
    </main>
  );
};

export default Index;
