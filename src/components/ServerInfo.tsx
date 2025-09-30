import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const modifications = [
  {
    category: "Old Recoil System",
    items: [
      {
        title: "Classic Patterns",
        description: "Experience the nostalgic old recoil patterns that reward skill and muscle memory.",
      },
      {
        title: "No Aimcone RNG",
        description: "Pure skill-based spray control. Your aim determines your success.",
      },
    ],
  },
  {
    category: "Server Rates",
    items: [
      {
        title: "2x Gather",
        description: "Balanced gather rates for faster progression without losing the survival feel.",
      },
      {
        title: "Optimized Loot Table",
        description: "Carefully balanced loot pools for better gameplay flow and item progression.",
      },
    ],
  },
  {
    category: "PVP Features",
    items: [
      {
        title: "Aimtrain Arena",
        description: "Dedicated practice area to master your spray patterns and reflexes.",
      },
      {
        title: "Custom Map",
        description: "Purpose-built map designed for intense PVP encounters and strategic gameplay.",
      },
    ],
  },
  {
    category: "Quality of Life",
    items: [
      {
        title: "Active Admins",
        description: "Responsive staff team on Discord to ensure fair play and quick issue resolution.",
      },
      {
        title: "Optimized Performance",
        description: "High-performance hardware and optimizations for smooth, lag-free gameplay.",
      },
    ],
  },
];

const ServerInfo = () => {
  return (
    <section className="py-20 bg-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-glow">
            Server Modifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Carefully tuned settings for the best old recoil experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modifications.map((mod, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{mod.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {mod.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerInfo;
