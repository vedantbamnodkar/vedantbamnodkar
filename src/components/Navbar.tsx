import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
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
        <div className="flex gap-6 text-sm font-medium">
          <NavLink href="#about" onClick={(e) => handleNavClick(e, "about")}>About</NavLink>
          <NavLink href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</NavLink>
          <NavLink href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</NavLink>
          <NavLink href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</NavLink>
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
