import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImpactSection } from "@/components/ImpactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImpactSection />
    </div>
  );
};

export default Index;