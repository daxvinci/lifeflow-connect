import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Calendar, Clock, CreditCard, ArrowRight } from "lucide-react";

const Health = () => {
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
            Healthcare Services
          </motion.h1>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Book Consultation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Connect with healthcare professionals through our telehealth platform
              </p>
              <Button className="w-full">
                Schedule Appointment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-secondary/10">
                  <CreditCard className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Healthcare Microcredit</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Access affordable healthcare through our microcredit system
              </p>
              <Button variant="secondary" className="w-full">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
            <div className="space-y-4">
              {[1, 2].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">General Consultation</p>
                      <p className="text-sm text-gray-500">Dr. Sarah Johnson</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Tomorrow, 10:00 AM</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Health;