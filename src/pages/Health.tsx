import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const Health = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Heart className="w-8 h-8 text-red-500" />
        <h1 className="text-3xl font-bold">Health Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Telehealth Services</h2>
          <p className="text-gray-600">
            Access healthcare professionals remotely through our secure platform.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Health Monitoring</h2>
          <p className="text-gray-600">
            Track your health metrics and receive personalized recommendations.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Health;