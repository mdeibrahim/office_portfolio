import NavLogo from "../../assets/images/Nav/f.png";
import { Facebook, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0f]">
      {" "}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <img
              src={NavLogo}
              alt="Company Logo"
              className="h-30 w-30 mb-4"
            />

            <p className="text-white/60 text-sm leading-relaxed">
              We build modern web applications, mobile apps, cloud solutions,
              and AI-powered software that help businesses scale faster.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-white/50 hover:text-violet-400 transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="text-white/50 hover:text-violet-400 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="text-white/50 hover:text-violet-400 transition"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-white/60 hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-white/60 hover:text-white transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="text-white/60 hover:text-white transition"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-white/60 hover:text-white transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-white/60 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5">Services</h3>

            <ul className="space-y-3">
              <li className="text-white/60">Web Development</li>

              <li className="text-white/60">Mobile Development</li>

              <li className="text-white/60">UI/UX Design</li>

              <li className="text-white/60">Cloud Solutions</li>

              <li className="text-white/60">AI Integration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">Contact</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-violet-400 mt-0.5" />

                <span className="text-white/60 text-sm">
                  hello@yourcompany.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-violet-400 mt-0.5" />

                <span className="text-white/60 text-sm">+880 1234 567890</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-violet-400 mt-0.5" />

                <span className="text-white/60 text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} ApexLabs. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white text-sm transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-white/40 hover:text-white text-sm transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
