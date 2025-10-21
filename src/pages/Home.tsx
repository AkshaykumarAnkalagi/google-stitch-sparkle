import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import "./Home.css"; // Optional: if you move CSS below into a separate file, else you can keep it in app.css

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Advanced Automation",
      description: "State-of-the-art manufacturing processes with Industry 4.0 technology",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO-certified processes ensuring excellence in every product",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "From prototype to mass production with consistent quality",
    },
  ];

  const stats = [
    { value: "35+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Technical Support" },
  ];

  // 🌟 Background scroll/mousemove effect
  useEffect(() => {
    const bg = document.querySelector(".parallax-bg") as HTMLElement | null;
    if (!bg) return;

    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;
      bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div
          className="parallax-bg absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?auto=format&fit=crop&w=1920&q=80')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Forging The Future Of{" "}
            <span className="text-accent">Industrial Excellence</span>
          </motion.h1>

          <motion.p
            className="mb-8 text-lg text-white/80 md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Leading manufacturer of precision industrial equipment and automation solutions. Engineering excellence for over three decades.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/products">
              <Button size="lg" className="group bg-accent hover:bg-accent/90 shadow-accent">
                Explore Products
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Get Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Why Choose <span className="text-accent">SFL Forge</span>
            
            </h2>
            
            
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Delivering innovative industrial solutions with unmatched precision and reliability
            </p>
            <Link to="/products">
              <Button size="lg" className="group bg-accent hover:bg-accent/90 shadow-accent">
                Explore Products
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl bg-gradient-card p-8 shadow-card hover-lift"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 transition-opacity group-hover:opacity-10" />
                <feature.icon className="mb-4 h-12 w-12 text-accent" />
                <h3 className="mb-3 text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Ready to Transform Your Production?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Partner with SFL Forge for cutting-edge industrial solutions tailored to your needs
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-accent">
                Request a Quote
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
