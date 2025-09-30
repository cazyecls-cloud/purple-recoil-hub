import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Package, Palette, MessageCircle } from "lucide-react";

const vipFeatures = [
  {
    icon: Package,
    title: "Skinbox Access",
    description: "Get access to an exclusive in-game skinbox to customize your gear",
  },
  {
    icon: Palette,
    title: "Colored Name (Discord)",
    description: "Stand out with a unique colored name in our Discord community",
  },
  {
    icon: Crown,
    title: "Colored Name (In-Game)",
    description: "Show off your VIP status with a colored name tag on the server",
  },
];

const VIPSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-surface-dark relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 glow-purple">
            <Crown className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-glow">
            VIP Membership
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
            Unlock exclusive perks and support the server
          </p>
          <div className="text-3xl font-bold text-primary">
            Only $5<span className="text-lg text-muted-foreground">/month</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {vipFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="bg-card border-primary/30 glow-purple inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to upgrade?</h3>
                <p className="text-muted-foreground mb-6">
                  Join Discord to learn more about VIP membership
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => window.open("https://discord.gg/oldrecoil", "_blank")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get VIP on Discord
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VIPSection;
