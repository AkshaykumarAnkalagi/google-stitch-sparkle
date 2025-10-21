import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Global magnetic particle effect
  useEffect(() => {
    const addMagneticEffect = () => {
      const buttons = document.querySelectorAll<HTMLButtonElement>("button");

      buttons.forEach(button => {
        if (!button.classList.contains("magnetic")) {
          button.classList.add("magnetic");
        }

        if (!button.querySelector(".particles-field")) {
          const field = document.createElement("div");
          field.className = "particles-field";

          for (let i = 0; i < 30; i++) {
            const p = document.createElement("div");
            p.className = "particle";
            p.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
            p.style.setProperty("--y", `${Math.random() * 200 - 100}px`);
            p.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
            p.style.left = `${Math.random() * 100}%`;
            p.style.top = `${Math.random() * 100}%`;
            field.appendChild(p);
          }

          button.appendChild(field);
        }
      });
    };

    // Initial run
    addMagneticEffect();

    // Observe DOM changes to handle dynamically added buttons
    const observer = new MutationObserver(addMagneticEffect);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
