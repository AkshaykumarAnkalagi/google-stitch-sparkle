import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="parallax-container relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 industrial-grid opacity-10" />
        
        {/* Animated circles */}
        <motion.div
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container relative z-10 mx-auto px-4 pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Promo Badge */}
              <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-white">Middle East Energy Expo - 2025</span>
              </motion.div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
                Forging The Future Of{" "}
                <span className="text-accent">Industrial Excellence</span>
              </h1>
              
              <p className="mb-8 text-lg text-white/80 md:text-xl">
                Leading manufacturer of precision industrial equipment and automation solutions.
                Engineering excellence for over three decades.
              </p>

              <div className="flex flex-wrap gap-4">
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
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image/Animation */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative aspect-square">
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-card shadow-accent"
                  animate={{ rotateY: [0, 5, 0], rotateX: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                />
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 text-6xl font-bold text-accent">SFL</div>
                    <div className="text-xl text-white/80">Industrial Solutions</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
