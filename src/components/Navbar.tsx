import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    }
  });

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      const { data, error } = await supabase
        .from('profiles')
        .select('username, avatar_url')
        .eq('id', session.user.id)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
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
                  <Button variant="default">
                    {profile?.username || 'Dashboard'}
                  </Button>
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-4">
              {session ? (
                <>
                  <Link
                    to="/health"
                    className="text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Health
                  </Link>
                  <Link
                    to="/energy"
                    className="text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Energy
                  </Link>
                  <Link
                    to="/water"
                    className="text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Water
                  </Link>
                  <Link
                    to="/dashboard"
                    className="px-4 py-2"
                    onClick={toggleMenu}
                  >
                    <Button variant="default" className="w-full">
                      {profile?.username || 'Dashboard'}
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/auth"
                    className="text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Health
                  </Link>
                  <Link
                    to="/auth"
                    className="text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Energy
                  </Link>
                  <Link
                    to="/auth"
                    className="text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Water
                  </Link>
                  <Link
                    to="/auth"
                    className="px-4 py-2"
                    onClick={toggleMenu}
                  >
                    <Button variant="default" className="w-full">
                      Join Now
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};