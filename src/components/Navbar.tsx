import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md shadow-soft" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-display text-xl">
          V<span className="text-primary">B</span>
        </a>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
