import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Navbar = () => {
  const { data: session } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    }
  });

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
            {session ? (
              <>
                <Link to="/health" className="text-gray-600 hover:text-primary transition-colors">
                  Health
                </Link>
                <Link to="/energy" className="text-gray-600 hover:text-primary transition-colors">
                  Energy
                </Link>
                <Link to="/water" className="text-gray-600 hover:text-primary transition-colors">
                  Water
                </Link>
                <Link to="/dashboard">
                  <Button variant="default">Dashboard</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/auth" className="text-gray-600 hover:text-primary transition-colors">
                  Health
                </Link>
                <Link to="/auth" className="text-gray-600 hover:text-primary transition-colors">
                  Energy
                </Link>
                <Link to="/auth" className="text-gray-600 hover:text-primary transition-colors">
                  Water
                </Link>
                <Link to="/auth">
                  <Button variant="default">Join Now</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};