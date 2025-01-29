import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            LifeFlow
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#health" className="text-gray-600 hover:text-primary transition-colors">
              Health
            </a>
            <a href="#energy" className="text-gray-600 hover:text-primary transition-colors">
              Energy
            </a>
            <a href="#water" className="text-gray-600 hover:text-primary transition-colors">
              Water
            </a>
            <Link to="/auth">
              <Button variant="default">Join Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};