import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              LifeFlow
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#health" className="text-gray-600 hover:text-primary">
              Health
            </a>
            <a href="#energy" className="text-gray-600 hover:text-primary">
              Energy
            </a>
            <a href="#water" className="text-gray-600 hover:text-primary">
              Water
            </a>
            <Button variant="default">Join Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};