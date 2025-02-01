import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Card } from "@/components/ui/card";
import { Heart, Zap, Droplets } from "lucide-react";

const Dashboard = () => {
  const { data: usageMetrics } = useQuery({
    queryKey: ['usage_metrics'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('usage_metrics')
        .select('*')
        .single();
      if (error) throw error;
      return data;
    }
  });

  const metrics = [
    {
      title: "Health Usage",
      value: usageMetrics?.health_usage || 0,
      icon: Heart,
      color: "text-red-500",
    },
    {
      title: "Energy Usage",
      value: usageMetrics?.energy_usage || 0,
      icon: Zap,
      color: "text-yellow-500",
    },
    {
      title: "Water Usage",
      value: usageMetrics?.water_usage || 0,
      icon: Droplets,
      color: "text-blue-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{metric.title}</h2>
              <metric.icon className={`w-6 h-6 ${metric.color}`} />
            </div>
            <p className="text-3xl font-bold">{metric.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;