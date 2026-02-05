import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-6 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-coral fill-coral" /> in India • © {currentYear} Vedant Bamnodkar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
