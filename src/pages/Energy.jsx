import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Battery, Zap, ArrowRight, TrendingUp } from "lucide-react";

const Energy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.h1 variants={itemVariants} className="text-4xl font-bold text-primary">
            Energy Management
          </motion.h1>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-yellow-100">
                  <Sun className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Solar Production</h3>
                  <p className="text-2xl font-bold">2.4 kWh</p>
                </div>
              </div>
              <div className="mt-4">
                <TrendingUp className="h-4 w-4 text-green-500 inline mr-2" />
                <span className="text-sm text-green-500">+15% from yesterday</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-green-100">
                  <Battery className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Battery Status</h3>
                  <p className="text-2xl font-bold">85%</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Current Usage</h3>
                  <p className="text-2xl font-bold">0.8 kWh</p>
                </div>
              </div>
              <div className="mt-4">
                <TrendingUp className="h-4 w-4 text-green-500 inline mr-2" />
                <span className="text-sm text-green-500">Optimal usage</span>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Solar System Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Panel Efficiency</span>
                  <span className="font-semibold">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Daily Average</span>
                  <span className="font-semibold">3.2 kWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Monthly Savings</span>
                  <span className="font-semibold text-green-500">₦15,000</span>
                </div>
              </div>
              <Button className="w-full mt-4">
                View Detailed Report <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Payment Plan</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Current Plan</span>
                  <span className="font-semibold">Pay-As-You-Go</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Next Payment</span>
                  <span className="font-semibold">₦5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Due Date</span>
                  <span className="font-semibold text-yellow-500">In 5 days</span>
                </div>
              </div>
              <Button variant="secondary" className="w-full mt-4">
                Make Payment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Energy;