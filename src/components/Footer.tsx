import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <p className="font-jp text-lg text-primary">七転び八起き</p>
        <p className="text-xs text-muted-foreground italic">Nana korobi ya oki — Fall seven times, stand up eight</p>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-coral fill-coral" /> in India • © {currentYear} Vedant Bamnodkar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
