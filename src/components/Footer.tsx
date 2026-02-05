import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl mb-2">
              Vedant <span className="text-gradient">Bamnodkar</span>
            </h3>
            <p className="text-sm text-muted-foreground font-jp">
              七転び八起き
            </p>
          </div>

          {/* Center - Quick links */}
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Right side - Social icons */}
          <div className="flex gap-3">
            <SocialIcon href="https://github.com/gitnodkar" icon={<Github className="w-4 h-4" />} />
            <SocialIcon href="https://in.linkedin.com/in/vedantbamnodkar" icon={<Linkedin className="w-4 h-4" />} />
            <SocialIcon href="https://x.com/xnodkar" icon={<Twitter className="w-4 h-4" />} />
            <SocialIcon href="mailto:vnbam2502@gmail.com" icon={<Mail className="w-4 h-4" />} />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-coral fill-coral" /> in India • © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-background shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
