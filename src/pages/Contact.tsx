import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Industrial Area, Phase 4", "Dubai, UAE"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 4 XXX XXXX", "+971 50 XXX XXXX"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@sflforge.com", "sales@sflforge.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
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
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/80">
              Let's discuss how we can help transform your industrial operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="rounded-2xl bg-gradient-card p-6 shadow-card hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <div className="inline-flex rounded-full bg-accent/10 p-3">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">{info.title}</h3>
                {info.details.map((detail) => (
                  <p key={detail} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl bg-card p-8 shadow-card">
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Phone
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Company
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your project..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-full rounded-2xl bg-gradient-hero p-8 shadow-card">
                <h2 className="mb-6 text-3xl font-bold text-white">
                  Visit Our Facility
                </h2>
                <p className="mb-8 text-lg text-white/80">
                  Schedule a tour of our state-of-the-art manufacturing facility and see our processes in action.
                </p>
                
                {/* Map placeholder */}
                <div className="aspect-video rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-accent" />
                </div>

                <div className="mt-8">
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    Schedule a Visit
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
