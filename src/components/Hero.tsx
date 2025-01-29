import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary to-accent overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up [animation-delay:200ms]">
          LifeFlow
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-up [animation-delay:400ms]">
          Transforming Nigeria through innovative solutions in healthcare, energy, and water management
        </p>
        <Button
          size="lg"
          className="animate-fade-up [animation-delay:600ms] bg-secondary hover:bg-secondary/90"
        >
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};