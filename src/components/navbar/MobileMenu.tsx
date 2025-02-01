import { motion } from "framer-motion";
import { NavLinks } from "./NavLinks";

type MobileMenuProps = {
  isOpen: boolean;
  session: any;
  profile: any;
  onItemClick: () => void;
};

export const MobileMenu = ({ isOpen, session, profile, onItemClick }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden pb-4"
    >
      <div className="flex flex-col space-y-4">
        <NavLinks 
          session={session} 
          profile={profile} 
          isMobile={true}
          onItemClick={onItemClick}
        />
      </div>
    </motion.div>
  );
};