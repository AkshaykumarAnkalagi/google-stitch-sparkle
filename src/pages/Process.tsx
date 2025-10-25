import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Pencil, Cog, CheckCircle, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Consultation",
      description:
        "Understanding your unique requirements and challenges through detailed consultation sessions",
      details: [
        "Initial requirements analysis",
        "Site assessment and feasibility study",
        "Technical specification development",
      ],
    },
    {
      icon: Pencil,
      title: "Design & Engineering",
      description:
        "Creating detailed designs and engineering specifications using advanced CAD/CAM systems",
      details: [
        "3D modeling and simulation",
        "Prototype development",
        "Design optimization",
      ],
    },
    {
      icon: Cog,
      title: "Manufacturing",
      description:
        "Precision manufacturing using state-of-the-art equipment and quality-controlled processes",
      details: [
        "CNC machining and fabrication",
        "Assembly and integration",
        "In-process quality checks",
      ],
    },
    {
      icon: CheckCircle,
      title: "Testing & Validation",
      description:
        "Rigorous testing protocols to ensure compliance with specifications and industry standards",
      details: [
        "Performance testing",
        "Safety certification",
        "Load and stress testing",
      ],
    },
    {
      icon: Rocket,
      title: "Delivery & Support",
      description:
        "Professional installation, commissioning, and ongoing technical support services",
      details: [
        "Installation and setup",
        "Operator training",
        "24/7 technical support",
      ],
    },
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management Systems",
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management",
    },
    {
      title: "ISO 45001:2018",
      description: "Occupational Health & Safety",
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
              Our <span className="text-accent">Process</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/80">
              A systematic approach to delivering excellence at every stage of
              your project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 hidden h-full w-1 bg-accent/20 lg:block" />

            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                    {/* Icon */}
                    <div className="relative z-10 mb-6 flex items-center gap-6 lg:mb-0">
                      <div className="group flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-accent transition-all duration-300 hover:bg-accent/80">
                        <step.icon className="h-8 w-8 text-white transition-transform group-hover:scale-110" />
                      </div>
                      <div className="text-6xl font-bold text-accent/20 lg:hidden">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="overflow-hidden rounded-2xl bg-gradient-card p-8 shadow-card transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,115,0,0.6)]">
                        <div className="mb-4 flex items-start justify-between">
                          <div>
                            <div className="mb-2 text-sm font-medium text-accent">
                              Step {index + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">
                              {step.title}
                            </h3>
                          </div>
                          <div className="hidden text-8xl font-bold text-accent/10 lg:block">
                            0{index + 1}
                          </div>
                        </div>

                        <p className="mb-6 text-lg text-muted-foreground">
                          {step.description}
                        </p>

                        <div className="space-y-3">
                          {step.details.map((detail) => (
                            <div
                              key={detail}
                              className="flex items-center gap-3 text-muted-foreground"
                            >
                              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ISO Certifications Section */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold text-foreground">
              Quality at Every Step
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
              Our ISO-certified processes ensure excellence from concept to
              completion
            </p>

            {/* ISO Cards with Same Hover Feature */}
            <div className="grid gap-8 md:grid-cols-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  className="group relative rounded-2xl bg-gradient-to-b from-accent/10 to-transparent p-8 text-center shadow-card transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,115,0,0.6)] hover:from-accent/40 hover:to-accent/10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-accent/10 p-4 transition-colors group-hover:bg-accent">
                      <CheckCircle className="h-10 w-10 text-accent transition-colors group-hover:text-white" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-accent">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Process;
