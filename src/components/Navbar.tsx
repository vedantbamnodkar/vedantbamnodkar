import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-background/40 backdrop-blur-xl shadow-soft border-b border-border/10" 
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-display text-xl hover:scale-105 transition-transform"
        >
          V<span className="text-primary">B</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <NavLink href="#about" onClick={(e) => handleNavClick(e, "about")}>About</NavLink>
          <NavLink href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</NavLink>
          <NavLink href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="px-6 pb-4 flex flex-col gap-4 text-sm font-medium bg-background/80 backdrop-blur-xl">
          <NavLink href="#about" onClick={(e) => handleNavClick(e, "about")}>About</NavLink>
          <NavLink href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</NavLink>
          <NavLink href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-muted-foreground hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
  >
    {children}
  </a>
);

export default Navbar;
