import NavLogo from "../../assets/images/Nav/f.png";
import { Facebook, Linkedin, Github, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Cloud Solutions",
  "AI Integration",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#b007ff4f] bg-[#090b16] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left:-8rem top:-5rem h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute right:-6rem top-10 h-80 w-80 rounded-full bg-violet-500/12 blur-3xl animate-pulse [animation-delay:1.2s]" />
        <div className="absolute bottom:-8rem left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_35%),linear-gradient(180deg,_rgba(9,11,22,0.92),_rgba(4,6,16,0.99))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Top CTA strip */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(59,130,246,0.08)] backdrop-blur-xl sm:p-8">
          <div className="flex rounded-2xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                Let&apos;s build
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Need a product team that moves fast and ships clean?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                We design, build, and support modern web and mobile products with a focus on performance, clarity, and long-term growth.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200/25 hover:bg-white/8 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              Start a project
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="space-y-5">
            <a
              href="#home"
              aria-label="ApexLabs home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/15 bg-white/5 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-xl">
                <img
                  src={NavLogo}
                  alt="Company Logo"
                  className="h-9 w-9 object-contain"
                />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                Apex<span className="text-cyan-200">Labs</span>
              </span>
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              We build modern web applications, mobile apps, cloud solutions,
              and AI-powered software that help businesses scale faster.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/8 hover:text-white"
                >
                  <Icon size={18} className="transition-transform duration-200 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 text-white/70 transition-colors duration-200 hover:text-cyan-100"
                  >
                <span className="h-1.5 w-1.5 rounded-full bg-violet-300/60" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item} className="text-white/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-transparent p-4">
                <Mail size={18} className="mt-0.5 text-cyan-200" />
                <span className="text-sm text-white/70">hello@yourcompany.com</span>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-transparent p-4">
                <Phone size={18} className="mt-0.5 text-cyan-200" />
                <span className="text-sm text-white/70">+880 1234 567890</span>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-transparent p-4">
                <MapPin size={18} className="mt-0.5 text-cyan-200" />
                <span className="text-sm text-white/70">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} ApexLabs. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/45 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/45 transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
