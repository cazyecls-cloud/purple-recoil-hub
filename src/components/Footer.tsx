import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-elevated border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Old Recoil Rust
            </h3>
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
            © {new Date().getFullYear()} Old Recoil. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
