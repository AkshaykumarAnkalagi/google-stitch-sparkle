import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Full products list
const products = [
  {
    title: "Precision CNC Machines",
    category: "nuts",
    description: "High-precision CNC machines for advanced manufacturing",
  },
  {
    title: "Industrial Robotics",
    category: "screws",
    description: "Flexible robotic systems for assembly and welding",
  },
  {
    title: "Smart Conveyors",
    category: "bolts",
    description: "Intelligent conveyor systems with automation",
  },
  {
    title: "Quality Inspection Systems",
    category: "washers",
    description: "Vision-based systems for defect detection",
  },
  {
    title: "Automated Assembly Lines",
    category: "screws",
    description: "Turnkey assembly line solutions",
  },
  {
    title: "Industrial Controllers",
    category: "nuts",
    description: "Programmable controllers for automation",
  },
];

const CategoryProducts = () => {
  const { category } = useParams<{ category: string }>();

  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div className="min-h-screen pt-20 bg-muted">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-foreground capitalize">
          {category} Products
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.title}
              className="group relative rounded-2xl bg-white p-6 shadow-xl transition-all duration-500 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-2 text-xl font-bold text-foreground">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {product.description}
              </p>
              <Button className="bg-accent hover:bg-accent/90 w-full">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>

        <Link to="/products">
          <Button className="mt-12 bg-background border border-accent text-accent hover:bg-accent hover:text-white">
            Back to Categories
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryProducts;
