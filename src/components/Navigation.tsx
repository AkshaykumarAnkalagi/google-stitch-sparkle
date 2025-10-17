import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-lg shadow-primary"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent transition-transform group-hover:scale-110">
              <span className="text-xl font-bold text-white">SFL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">SFL Forge</span>
              <span className="text-xs text-white/70">Industrial Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-white/90"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent" />
                )}
              </Link>
            ))}
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-primary/98 backdrop-blur-lg md:hidden">
          <div className="container mx-auto space-y-2 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-accent text-white"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-accent hover:bg-accent/90">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
