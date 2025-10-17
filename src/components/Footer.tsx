import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <span className="text-xl font-bold">SFL</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">SFL Forge</h3>
                <p className="text-sm text-white/70">Industrial Solutions</p>
              </div>
            </div>
            <p className="text-sm text-white/80">
              Leading manufacturer of industrial equipment and automation solutions.
              Excellence in engineering since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Products", "Process", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-white/80 transition-colors hover:text-accent"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Our Services</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Custom Manufacturing</li>
              <li>Industrial Automation</li>
              <li>Quality Control</li>
              <li>Technical Support</li>
              <li>Maintenance Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 text-accent" />
                <span className="text-sm text-white/80">
                  Industrial Area, Phase 4<br />
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm text-white/80">+971 4 XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-sm text-white/80">info@sflforge.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-white/60">
              © {currentYear} SFL Forge. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-accent hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
