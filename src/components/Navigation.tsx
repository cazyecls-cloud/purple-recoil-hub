import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-glow bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Old Recoil
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="discord"
              size="sm"
              onClick={() => window.open("https://discord.gg/oldrecoil", "_blank")}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Discord
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
