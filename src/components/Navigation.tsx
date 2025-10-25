import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Process", path: "/process" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll: update header and close open menus
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsMobileMenuOpen(false);
      setIsDesktopMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when location changes (navigating to a new page)
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopMenuOpen(false);
  }, [location.pathname]);

  const dropdownVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
              <span className="text-xl font-bold text-white">SFL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">SFL Forge</span>
              <span className="text-xs text-white/70">Industrial Solutions</span>
            </div>
          </Link>

          {/* Desktop Menu Button - centered on desktop */}
          <div
            className="hidden md:flex items-center justify-center flex-1 relative"
            onMouseEnter={() => setIsDesktopMenuOpen(true)}
            onMouseLeave={() => setIsDesktopMenuOpen(false)}
          >
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-white font-semibold transition-all duration-300 rounded-xl px-6 py-3 text-base"
            >
              Menu
            </Button>

            {/* Desktop Dropdown */}
            <AnimatePresence>
              {isDesktopMenuOpen && (
                <motion.div
                  className="absolute top-14 w-56 bg-primary/95 backdrop-blur-lg flex flex-col py-4 rounded-lg shadow-lg"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.path} variants={itemVariants}>
                      <Link
                        to={link.path}
                        className={`block px-4 py-2 text-white/90 hover:bg-accent/80 hover:text-white rounded-md ${
                          location.pathname === link.path ? "bg-accent text-white" : ""
                        }`}
                        onClick={() => setIsDesktopMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants} className="px-4 mt-2">
                    <Button
                      className="w-full bg-accent hover:bg-accent/90"
                      onClick={() => setIsDesktopMenuOpen(false)}
                    >
                      Get Quote
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Hamburger Button - top-left on small screens */}
          <div className="md:hidden flex justify-start">
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg px-4 py-2 text-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-20 left-0 w-full bg-primary/95 backdrop-blur-lg flex flex-col items-center py-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
          >
            {navLinks.map((link) => (
              <motion.div key={link.path} variants={itemVariants} className="w-3/4">
                <Link
                  to={link.path}
                  className={`block text-center text-lg font-medium py-3 rounded-lg ${
                    location.pathname === link.path
                      ? "bg-accent text-white"
                      : "text-white/90 hover:bg-accent/80 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="mt-4 w-3/4">
              <Button
                className="w-full bg-accent hover:bg-accent/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
