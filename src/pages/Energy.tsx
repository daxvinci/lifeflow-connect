import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react";

const Energy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Zap className="w-8 h-8 text-yellow-500" />
        <h1 className="text-3xl font-bold">Energy Management</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Solar Solutions</h2>
          <p className="text-gray-600">
            Affordable solar power systems with flexible payment options.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Energy Monitoring</h2>
          <p className="text-gray-600">
            Track your energy consumption and optimize usage patterns.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Energy;