import { Card } from "@/components/ui/card";
import { Droplets } from "lucide-react";

const Water = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Droplets className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-bold">Water Management</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Water Purification</h2>
          <p className="text-gray-600">
            Community-based water cleaning and recycling solutions.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Usage Tracking</h2>
          <p className="text-gray-600">
            Monitor water consumption and get conservation tips.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Water;