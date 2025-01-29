import { Heart, Zap, Droplets } from "lucide-react";
import { Card } from "@/components/ui/card";

const impacts = [
  {
    title: "Healthcare",
    icon: Heart,
    description: "Accessible telehealth services through microcredit systems",
    stat: "50K+",
    label: "Consultations Funded",
  },
  {
    title: "Energy",
    icon: Zap,
    description: "Affordable solar solutions with pay-as-you-go flexibility",
    stat: "10K+",
    label: "Solar Systems Deployed",
  },
  {
    title: "Water",
    icon: Droplets,
    description: "Community-driven water cleanup and recycling initiatives",
    stat: "1M+",
    label: "Liters Cleaned",
  },
];

export const ImpactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <Card
              key={impact.title}
              className="p-6 hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <impact.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{impact.title}</h3>
                <p className="text-gray-600 mb-6">{impact.description}</p>
                <div className="mt-auto">
                  <div className="text-4xl font-bold text-primary mb-1">
                    {impact.stat}
                  </div>
                  <div className="text-sm text-gray-500">{impact.label}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};