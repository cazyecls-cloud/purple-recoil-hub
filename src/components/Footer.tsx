import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import limitLogo from "@/assets/limit-logo.png";

const Footer = () => {
  return (
    <footer className="bg-surface-elevated border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-center space-y-4">
            <img src={limitLogo} alt="Limit Old Recoil" className="h-16 w-auto mx-auto" />
            <p className="text-muted-foreground">
              Master the old recoil. Dominate the competition.
            </p>
          </div>

          <Button
            variant="hero"
            size="lg"
            onClick={() => window.open("https://discord.gg/oldrecoil", "_blank")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Join Our Discord
          </Button>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Limit Old Recoil. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
