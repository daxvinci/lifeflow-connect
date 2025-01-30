import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Heart, Zap, Droplets, TrendingUp, Users, CreditCard } from "lucide-react";

const Dashboard = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stats = [
    { title: "Total Consultations", value: "1,234", icon: Heart, color: "text-red-500" },
    { title: "Energy Credits", value: "567 kWh", icon: Zap, color: "text-yellow-500" },
    { title: "Water Saved", value: "890L", icon: Droplets, color: "text-blue-500" },
    { title: "Impact Score", value: "92", icon: TrendingUp, color: "text-green-500" },
    { title: "Community Members", value: "5,678", icon: Users, color: "text-purple-500" },
    { title: "Total Savings", value: "₦123,456", icon: CreditCard, color: "text-indigo-500" }
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
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Link to="/health">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Heart className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600">Access telehealth services and manage your health records</p>
            </motion.div>
          </Link>

          <Link to="/energy">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Zap className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Energy</h3>
              <p className="text-gray-600">Monitor your solar usage and manage payments</p>
            </motion.div>
          </Link>

          <Link to="/water">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Droplets className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Water</h3>
              <p className="text-gray-600">Track water cleanup progress and contributions</p>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;