import { motion } from "framer-motion";
import { Package, Settings, Cpu, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const categories = [
    {
      icon: Package,
      name: "Manufacturing Equipment",
      count: "50+ Products",
    },
    {
      icon: Settings,
      name: "Automation Systems",
      count: "30+ Solutions",
    },
    {
      icon: Cpu,
      name: "Control Systems",
      count: "25+ Products",
    },
    {
      icon: Wrench,
      name: "Custom Solutions",
      count: "100+ Projects",
    },
  ];

  const products = [
    {
      title: "Precision CNC Machines",
      category: "Manufacturing",
      description:
        "High-precision computer numerical control machines for advanced manufacturing processes",
      features: [
        "±0.001mm Accuracy",
        "Multi-axis Control",
        "Automated Tool Change",
      ],
    },
    {
      title: "Industrial Robotics",
      category: "Automation",
      description:
        "Flexible robotic systems for assembly, welding, and material handling applications",
      features: ["6-Axis Movement", "AI-Powered Vision", "Safety Certified"],
    },
    {
      title: "Smart Conveyors",
      category: "Material Handling",
      description:
        "Intelligent conveyor systems with real-time tracking and automation capabilities",
      features: ["IoT Enabled", "Variable Speed", "Modular Design"],
    },
    {
      title: "Quality Inspection Systems",
      category: "Quality Control",
      description:
        "Advanced vision-based inspection systems for defect detection and quality assurance",
      features: ["AI Detection", "Real-time Analysis", "99.9% Accuracy"],
    },
    {
      title: "Automated Assembly Lines",
      category: "Automation",
      description:
        "Complete turnkey assembly line solutions with integrated quality control",
      features: ["Full Integration", "Remote Monitoring", "Scalable"],
    },
    {
      title: "Industrial Controllers",
      category: "Control Systems",
      description:
        "Programmable logic controllers for complex industrial automation processes",
      features: ["Cloud Connected", "Real-time Data", "Secure"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/80">
              Cutting-edge industrial equipment and automation solutions
              engineered for excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="group cursor-pointer rounded-2xl bg-gradient-card p-6 text-center shadow-card transition-all hover:shadow-accent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-accent/10 p-4 transition-colors group-hover:bg-accent">
                    <category.icon className="h-8 w-8 text-accent transition-colors group-hover:text-white" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                className="group relative w-full max-w-sm mx-auto cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* --- Card Wrapper --- */}
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                  {/* --- Top Blue Section --- */}
                  <div className="bg-accent h-60 flex items-center justify-center text-white text-4xl font-bold">
                    SFL
                  </div>

                  {/* --- Hidden Content (Appears on Hover) --- */}
                  <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-700 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100 bg-white px-6 pb-8 pt-6 text-center">
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      {product.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="mb-4 space-y-1 text-sm text-muted-foreground text-left">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="mt-2 w-full bg-accent hover:bg-accent/90">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold text-foreground">
              Need a Custom Solution?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Our engineering team can design and manufacture equipment tailored
              to your specific requirements
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Contact Our Team
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
