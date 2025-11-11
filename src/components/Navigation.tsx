import { useState } from "react";
import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Who We Are" },
    { to: "/what-weve-done", label: "What We've Done" },
    { to: "/whats-next", label: "What's Next" },
    { to: "/partners", label: "Partners" },
    { to: "/testimonies", label: "Testimonies" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="font-bold text-xl text-foreground hover:text-primary transition-colors">
            The Reforge Project
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                activeClassName="text-primary bg-secondary"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-4 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
                activeClassName="text-primary bg-secondary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
