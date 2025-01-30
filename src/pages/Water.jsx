import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Recycle, ArrowRight, TrendingUp, Users } from "lucide-react";

const Water = () => {
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
            Water Management
          </motion.h1>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Droplets className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Water Cleaned</h3>
                  <p className="text-2xl font-bold">1,234 L</p>
                </div>
              </div>
              <div className="mt-4">
                <TrendingUp className="h-4 w-4 text-green-500 inline mr-2" />
                <span className="text-sm text-green-500">+25% this month</span>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-green-100">
                  <Recycle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Recycling Rate</h3>
                  <p className="text-2xl font-bold">78%</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "78%" }}></div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-purple-100">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Community Impact</h3>
                  <p className="text-2xl font-bold">2,500+</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm text-purple-500">People benefiting</span>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Water Quality Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>pH Level</span>
                  <span className="font-semibold">7.2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Turbidity</span>
                  <span className="font-semibold">0.3 NTU</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Dissolved Oxygen</span>
                  <span className="font-semibold">8.5 mg/L</span>
                </div>
              </div>
              <Button className="w-full mt-4">
                View Full Report <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contribution Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Your Contributions</span>
                  <span className="font-semibold">₦25,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Water Cleaned</span>
                  <span className="font-semibold">450 L</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Impact Points</span>
                  <span className="font-semibold text-green-500">1,250</span>
                </div>
              </div>
              <Button variant="secondary" className="w-full mt-4">
                Make Contribution <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Water;