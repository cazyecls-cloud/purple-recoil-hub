import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServerInfo from "@/components/ServerInfo";
import VIPSection from "@/components/VIPSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <ServerInfo />
      <VIPSection />
      <Footer />
    </div>
  );
};

export default Index;
