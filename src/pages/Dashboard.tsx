import React from "react";
import { motion } from "framer-motion";
import { Heart, Zap, Droplets, TrendingUp, Users, CreditCard } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ServiceCard } from "@/components/dashboard/ServiceCard";
import { useMetrics } from "@/hooks/useMetrics";

const Dashboard = () => {
  const { data: usageMetrics, isLoading } = useMetrics();

  const stats = [
    { 
      title: "Health Usage", 
      value: isLoading ? "Loading..." : `${Math.round(usageMetrics?.health_usage || 0)}%`, 
      icon: Heart, 
      color: "text-red-500" 
    },
    { 
      title: "Energy Usage", 
      value: isLoading ? "Loading..." : `${Math.round(usageMetrics?.energy_usage || 0)} kWh`, 
      icon: Zap, 
      color: "text-yellow-500" 
    },
    { 
      title: "Water Usage", 
      value: isLoading ? "Loading..." : `${Math.round(usageMetrics?.water_usage || 0)}L`, 
      icon: Droplets, 
      color: "text-blue-500" 
    },
    { 
      title: "Impact Score", 
      value: "92", 
      icon: TrendingUp, 
      color: "text-green-500" 
    },
    { 
      title: "Community Members", 
      value: "5,678", 
      icon: Users, 
      color: "text-purple-500" 
    },
    { 
      title: "Total Savings", 
      value: "₦123,456", 
      icon: CreditCard, 
      color: "text-indigo-500" 
    }
  ];

  const services = [
    {
      to: "/health",
      icon: Heart,
      title: "Healthcare",
      description: "Manage your health services and records",
      iconColor: "text-red-500"
    },
    {
      to: "/energy",
      icon: Zap,
      title: "Energy",
      description: "Track consumption and manage services",
      iconColor: "text-yellow-500"
    },
    {
      to: "/water",
      icon: Droplets,
      title: "Water",
      description: "Monitor usage and manage supply",
      iconColor: "text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary mb-8"
        >
          Welcome to Your Dashboard
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              to={service.to}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconColor={service.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;