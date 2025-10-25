import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Demo product categories for Home page
const productCategories = [
  { category: "Nut", title: "Nuts" },
  { category: "Bolt", title: "Bolts" },
  { category: "Screw", title: "Screws" },
  { category: "Other", title: "Other Products" },
];

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Advanced Automation",
      description:
        "State-of-the-art manufacturing processes with Industry 4.0 technology",
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
            Leading manufacturer of precision industrial equipment and automation
            solutions. Engineering excellence for over three decades.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/products">
              <Button
                size="lg"
                className="group bg-accent hover:bg-accent/90 shadow-accent"
              >
                Explore Products
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
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

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
              Delivering innovative industrial solutions with unmatched precision
              and reliability
            </p>

            {/* Product Categories */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
              {productCategories.map((prod, index) => (
                <motion.div
                  key={prod.category}
                  className="group relative w-full max-w-sm mx-auto cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  onClick={() =>
                    (window.location.href = `/category/${prod.category}`)
                  }
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                    <div className="bg-accent h-32 flex items-center justify-center text-white text-4xl font-bold">
                      {prod.title.split(" ")[0]}
                    </div>
                    <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-700 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100 bg-white px-6 pb-8 pt-6 text-center">
                      <h3 className="mb-2 text-xl font-bold text-foreground">
                        {prod.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Click to view all {prod.category} products
                      </p>
                      <Button className="mt-2 w-full bg-accent text-white hover:bg-accent/90 transition">
                        View All
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Explore Products Button */}
            <Link to="/products">
              <Button
                size="lg"
                className="group bg-accent hover:bg-accent/90 shadow-accent"
              >
                Explore Products
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Features Cards */}
          {/* Features Cards */}
<div className="grid gap-8 md:grid-cols-3">
  {features.map((feature, index) => (
    <motion.div
      key={feature.title}
      className="group relative rounded-2xl bg-gradient-to-b from-accent/10 to-transparent p-8 text-center shadow-card transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,115,0,0.6)] hover:from-accent/40 hover:to-accent/10"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, scale: 1.03 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Icon with hover accent */}
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-accent/10 p-4 transition-colors group-hover:bg-accent">
          <feature.icon className="h-10 w-10 text-accent transition-colors group-hover:text-white" />
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-accent">
        {feature.title}
      </h3>
      <p className="text-muted-foreground group-hover:text-foreground/90">
        {feature.description}
      </p>
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
              Partner with SFL Forge for cutting-edge industrial solutions tailored
              to your needs
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
