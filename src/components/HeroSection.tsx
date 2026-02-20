import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-coral/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-teal/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-lavender/10 blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="max-w-4xl mx-auto text-center">
        {/* Japanese Greeting */}
        <p 
          className={`font-jp text-lg md:text-xl text-muted-foreground mb-12 tracking-wide transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          はじめまして、ヴェダントです。
        </p>

        {/* Name */}
        <h1 
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-normal mb-6 tracking-tight transition-all duration-700 delay-150 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Vedant <span className="text-gradient">Bamnodkar</span>
        </h1>

        {/* Title */}
        <p 
          className={`font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Electronics & Computer Engineer • AI/ML Enthusiast • 日本語 N4
        </p>

        {/* Social Links */}
        <div 
          className={`flex justify-center gap-4 mt-10 transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <SocialLink href="https://github.com/gitnodkar" icon={<Github className="w-5 h-5" />} label="GitHub" delay={0} />
          <SocialLink href="https://in.linkedin.com/in/vedantbamnodkar" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" delay={50} />
          <SocialLink href="https://x.com/xnodkar" icon={<Twitter className="w-5 h-5" />} label="X" delay={100} />
          <SocialLink href="https://instagram.com/bamnodkar_" icon={<Instagram className="w-5 h-5" />} label="Instagram" delay={150} />
          <SocialLink href="mailto:vnbam2502@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" delay={200} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label, delay }: { href: string; icon: React.ReactNode; label: string; delay: number }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-card shadow-soft flex items-center justify-center text-foreground/70 hover:text-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1 hover:scale-110"
    aria-label={label}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {icon}
  </a>
);

export default HeroSection;
