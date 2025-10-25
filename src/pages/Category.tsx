import React from "react";
import { motion } from "framer-motion";
import { NutProducts } from "../data/NutProducts";
import { BoltProducts } from "../data/BoltProducts";
import { ScrewProducts } from "../data/ScrewProducts";
import { OtherProducts } from "../data/OtherProducts";

const allProducts = [
  ...NutProducts,
  ...BoltProducts,
  ...ScrewProducts,
  ...OtherProducts,
];

const categories = ["Nut", "Bolt", "Screw", "Other"];

const Category = () => {
  const [activeCategory, setActiveCategory] = React.useState("Nut");

  const filteredProducts = allProducts.filter(
    (p) => p.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/metal-texture.png')] bg-repeat bg-[size:300px]" />

      {/* Faint radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />

      <section className="relative container mx-auto px-4 py-12 text-center">
        {/* Category Tabs */}
        <motion.div
          className="flex justify-center flex-wrap gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg font-medium border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent text-white border-accent shadow-lg scale-105"
                  : "bg-gray-100 text-gray-800 hover:bg-accent hover:text-white hover:shadow-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.title}
              className="group relative w-full max-w-sm mx-auto cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                {/* Product Header Section */}
                <div className="bg-accent h-32 flex items-center justify-center text-white text-3xl font-bold tracking-wide">
                  {product.title.split(" ")[0]}
                </div>

                {/* Hidden Content */}
                <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-700 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100 bg-white px-6 pb-8 pt-6 text-center">
                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {product.description}
                  </p>
                  <div className="mb-4 space-y-1 text-sm text-left text-gray-700">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="mt-2 w-full bg-accent text-white py-2 rounded-lg hover:bg-accent/90 transition">
                    View All
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;
