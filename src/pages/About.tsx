import { motion } from "framer-motion";
import { Award, Users, Target, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising commitment to quality and precision in every project",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to deliver tailored solutions",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering new technologies in industrial automation",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across the Middle East and beyond",
    },
  ];

  const milestones = [
    { year: "1985", event: "SFL Forge Founded", description: "Started with a vision to revolutionize industrial manufacturing" },
    { year: "1995", event: "ISO Certification", description: "Achieved international quality standards" },
    { year: "2010", event: "Expansion to UAE", description: "Opened state-of-the-art facility in Dubai" },
    { year: "2020", event: "Industry 4.0 Integration", description: "Implemented advanced automation technologies" },
    { year: "2025", event: "Sustainable Future", description: "Leading the way in eco-friendly manufacturing" },
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
              About <span className="text-accent">SFL Forge</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/80">
              Pioneering industrial excellence since 1985, transforming manufacturing with 
              precision engineering and innovative automation solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Founded in 1985, SFL Forge began with a simple mission: to deliver 
                unparalleled quality in industrial manufacturing. Over three decades later, 
                we've grown into a leading force in precision engineering and automation.
              </p>
              <p className="mb-4 text-lg text-muted-foreground">
                Our state-of-the-art facilities combine traditional craftsmanship with 
                cutting-edge Industry 4.0 technologies, enabling us to serve clients 
                across diverse sectors including energy, automotive, aerospace, and beyond.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, SFL Forge stands as a testament to innovation, quality, and 
                customer-centric excellence in the industrial landscape.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-square rounded-2xl bg-gradient-card shadow-card hover-lift"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
{/* 
      Values Section
Values Section */}
<section className="bg-muted py-24">
  <div className="container mx-auto px-4">
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="mb-4 text-4xl font-bold text-foreground">
        Our Core Values
      </h2>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        The principles that guide everything we do
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {values.map((value, index) => (
        <motion.div
          key={value.title}
          className="group relative rounded-2xl bg-gradient-to-b from-accent/10 to-transparent p-8 text-center shadow-card transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,115,0,0.6)] hover:from-accent/40 hover:to-accent/10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -8, scale: 1.03 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-accent/10 p-4 transition-colors group-hover:bg-accent">
              <value.icon className="h-8 w-8 text-accent transition-colors group-hover:text-white" />
            </div>
          </div>
          <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-accent">
            {value.title}
          </h3>
          <p className="text-muted-foreground group-hover:text-foreground/90">
            {value.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section> 

      {/* Timeline Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Our Journey
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Key milestones in our evolution
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-accent/20" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`mb-12 flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="rounded-2xl bg-card p-6 shadow-card hover-lift">
                    <div className="mb-2 text-2xl font-bold text-accent">{milestone.year}</div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{milestone.event}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-accent shadow-accent">
                  <div className="h-4 w-4 rounded-full bg-white" />
                </div>
                
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
