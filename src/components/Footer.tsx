import { Heart, Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a href="mailto:vnbam2502@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
          <a href="https://github.com/gitnodkar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://in.linkedin.com/in/vedantbamnodkar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="https://instagram.com/bamnodkar_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
        </div>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-coral fill-coral" /> in India • © {currentYear} Vedant Bamnodkar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
