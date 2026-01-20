import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Showcase from "@/components/sections/Showcase";
import Technologies from "@/components/sections/Technologies";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Showcase />
        <Technologies />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
