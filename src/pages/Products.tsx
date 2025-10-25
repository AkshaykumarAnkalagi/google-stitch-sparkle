import { motion } from "framer-motion";
import { Package, Settings, Cpu, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const mainCategories = [
  { icon: Package, name: "Manufacturing Equipment", count: "50+ Products" },
  { icon: Settings, name: "Automation Systems", count: "30+ Solutions" },
  { icon: Cpu, name: "Control Systems", count: "25+ Products" },
  { icon: Wrench, name: "Custom Solutions", count: "100+ Projects" },
];

const productCategories = [
  { title: "Nut Products", category: "Nut" },
  { title: "Bolt Products", category: "Bolt" },
  { title: "Screw Products", category: "Screw" },
  { title: "Other Products", category: "Other" },
];

const Products = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-4">
          <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/80">
              Cutting-edge industrial equipment and automation solutions engineered for excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mainCategories.map((cat, index) => (
              <motion.div
                key={cat.name}
                className="group rounded-2xl bg-gradient-card p-6 text-center shadow-card transition-all hover:shadow-accent cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-accent/10 p-4 transition-colors group-hover:bg-accent">
                    <cat.icon className="h-8 w-8 text-accent transition-colors group-hover:text-white" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories (Clickable) */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((prod, index) => (
              <motion.div
                key={prod.category}
                className="group relative w-full max-w-sm mx-auto cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                onClick={() => (window.location.href = `/category/${prod.category.toLowerCase()}`)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                  <div className="bg-accent h-32 flex items-center justify-center text-white text-4xl font-bold">
                    {prod.title.split(" ")[0]}
                  </div>

                  <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-700 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100 bg-white px-6 pb-8 pt-6 text-center">
                    <h3 className="mb-2 text-xl font-bold text-foreground">{prod.title}</h3>
                    <p className="text-sm text-muted-foreground">Click to view all {prod.category.toLowerCase()} products</p>
                    <Button className="mt-2 w-full bg-accent hover:bg-accent/90">View All</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
