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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          {/* Desktop Menu Button */}
          <div
            className="hidden md:flex items-center relative"
            onMouseEnter={() => setIsDesktopMenuOpen(true)}
            onMouseLeave={() => setIsDesktopMenuOpen(false)}
          >
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              Menu
            </Button>

            {/* Desktop Dropdown */}
            <AnimatePresence>
              {isDesktopMenuOpen && (
                <motion.div
                  className="absolute top-14 left-0 w-48 bg-primary/95 backdrop-blur-lg flex flex-col py-4 rounded-lg shadow-lg"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.path}
                      variants={itemVariants}
                    >
                      <Link
                        to={link.path}
                        className={`block px-4 py-2 text-white/90 hover:bg-accent/80 hover:text-white rounded-md ${
                          location.pathname === link.path ? "bg-accent text-white" : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants} className="px-4 mt-2">
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Get Quote
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90"
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
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-center text-lg font-medium py-3 rounded-lg ${
                    location.pathname === link.path
                      ? "bg-accent text-white"
                      : "text-white/90 hover:bg-accent/80 hover:text-white"
                  }`}
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
