import { Target, Zap, Map, Swords } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Swords,
    title: "Intense PVP",
    description: "Master the old recoil system and dominate in pure skill-based combat.",
  },
  {
    icon: Target,
    title: "Aimtrain Arena",
    description: "Perfect your aim with our dedicated training area. Practice makes perfect.",
  },
  {
    icon: Zap,
    title: "2x Rates",
    description: "Balanced 2x gather rates for faster-paced gameplay without losing the grind.",
  },
  {
    icon: Map,
    title: "Custom Map",
    description: "Fight across our carefully designed custom map built for intense encounters.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-glow">
            Server Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for the ultimate old recoil experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:glow-purple"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
