import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  to,
  icon: Icon,
  title,
  description,
  iconColor,
}) => {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <Icon className={`h-12 w-12 ${iconColor} mb-4`} />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </Link>
  );
};