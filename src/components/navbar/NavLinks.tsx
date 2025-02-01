import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type NavLinksProps = {
  session: any;
  profile: any;
  isMobile?: boolean;
  onItemClick?: () => void;
};

export const NavLinks = ({ session, profile, isMobile = false, onItemClick }: NavLinksProps) => {
  const linkClass = `text-gray-600 hover:text-primary transition-colors ${
    isMobile ? "px-4 py-2 rounded-md hover:bg-gray-100" : ""
  }`;

  if (session) {
    return (
      <>
        <Link 
          to="/health" 
          className={linkClass}
          onClick={onItemClick}
        >
          Health
        </Link>
        <Link 
          to="/energy" 
          className={linkClass}
          onClick={onItemClick}
        >
          Energy
        </Link>
        <Link 
          to="/water" 
          className={linkClass}
          onClick={onItemClick}
        >
          Water
        </Link>
        <Link 
          to="/dashboard"
          className={isMobile ? "px-4 py-2" : ""}
          onClick={onItemClick}
        >
          <Button variant="default" className={isMobile ? "w-full" : ""}>
            {profile?.username || 'Dashboard'}
          </Button>
        </Link>
      </>
    );
  }

  return (
    <>
      <Link 
        to="/auth" 
        className={linkClass}
        onClick={onItemClick}
      >
        Health
      </Link>
      <Link 
        to="/auth" 
        className={linkClass}
        onClick={onItemClick}
      >
        Energy
      </Link>
      <Link 
        to="/auth" 
        className={linkClass}
        onClick={onItemClick}
      >
        Water
      </Link>
      <Link 
        to="/auth"
        className={isMobile ? "px-4 py-2" : ""}
        onClick={onItemClick}
      >
        <Button variant="default" className={isMobile ? "w-full" : ""}>
          Join Now
        </Button>
      </Link>
    </>
  );
};