import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import NavLogo from "../../assets/images/Nav/logo3.png";
import { navLinks } from "../../data/navLinks";
import { useScrolled } from "../../hooks/useScrolled";
import MobileMenu from "./MobileMenu";

const Hero = lazy(() => import("../sections/Hero"));
const Service = lazy(() => import("../sections/Service"));
const PortfolioSection = lazy(() => import("../sections/Portfolio"));
const AboutSection = lazy(() => import("../sections/About"));
const Contact = lazy(() => import("../sections/Contact"));


/* ─── animation variants ─────────────────────────────────────────────────── */

const navbarVariants = {
  initial: { y: -80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 28, delay: 0.1 },
  },
};

const underlineVariants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: { type: "spring", stiffness: 300, damping: 26 },
  },
};

/* ─── Logo ───────────────────────────────────────────────────────────────── */

function Logo() {
  return (
    <a
      href="#home"
      aria-label="ApexLabs — go to homepage"
      className="flex items-center gap-2.5 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg"
    >
      <img
        src={NavLogo}
        alt="ApexLabs logo"
        className="h-20 w-20 object-contain sm:h-20 sm:w-20"
      />
    </a>
  );
}

/* ─── Desktop NavLink ────────────────────────────────────────────────────── */

function NavLink({ href, label, isActive, onClick }) {
  return (
    <li>
      <a
        href={href}
        aria-current={isActive ? "page" : undefined}
        onClick={onClick}
        className={`
          relative inline-flex flex-col items-center
          text-sm font-medium tracking-tight
          transition-colors duration-150
          focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded
          ${isActive ? "text-white" : "text-white/55 hover:text-white/90"}
        `}
      >
        {label}
        <AnimatePresence>
          {isActive && (
            <motion.span
              key="underline"
              layoutId="nav-underline"
              variants={underlineVariants}
              initial="initial"
              animate="animate"
              exit="initial"
              className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-linear-to-r from-violet-500 to-indigo-500 origin-left"
            />
          )}
        </AnimatePresence>
      </a>
    </li>
  );
}

/* ─── CTA Button ─────────────────────────────────────────────────────────── */

function CTAButton() {
  return (
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="
        relative inline-flex items-center gap-2
        px-5 py-2.5 rounded-xl
        bg-linear-to-r from-violet-600 to-indigo-600
        hover:from-violet-500 hover:to-indigo-500
        text-white text-sm font-semibold tracking-wide
        shadow-lg shadow-violet-900/40
        transition-shadow duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400
        whitespace-nowrap overflow-hidden
      "
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)] transition-opacity duration-300"
      />
      Get Free Quote
    </motion.a>
  );
}

function SectionFallback({ id, minHeight = "min-h-[70vh]" }) {
  return (
    <section
      id={id}
      className={`${minHeight} bg-[#020132] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32`}
      aria-busy="true"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center text-sm text-white/40">
        Loading section...
      </div>
    </section>
  );
}

/* ─── Hamburger Button ───────────────────────────────────────────────────── */

function HamburgerButton({ onClick, isOpen }) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="
        navbar-mobile-toggle md:hidden
        w-9 h-9 rounded-lg flex items-center justify-center
        text-white/60 hover:text-white hover:bg-white/[0.08]
        transition-colors duration-150
        focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500
      "
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isOpen ? "close-icon" : "menu-icon"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* ✅ Fix 2: render X when open, Menu when closed */}
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────────────────── */

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sectionIds = navLinks.map(({ href }) => href.replace("#", ""));
    const headerOffset = 96;
    let rafId = 0;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + headerOffset;
      let nextActive = "#home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const elementTop = window.scrollY + element.getBoundingClientRect().top;
        if (scrollPosition >= elementTop - 1) {
          nextActive = `#${id}`;
        }
      }

      setActiveHref((current) => (current === nextActive ? current : nextActive));
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleNavClick = useCallback((href) => {
    setActiveHref(href);
    closeMenu();
  }, [closeMenu]);

  // Sync active state with URL hash on load / hash change
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (hash && navLinks.some(({ href }) => href === hash)) {
        setActiveHref(hash);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <>
      <motion.header
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        role="banner"
        className={`
          fixed inset-x-0 top-0 z-30
          transition-[background,border-color,box-shadow,backdrop-filter] duration-300 ease-out
          ${
            scrolled
              ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.07] shadow-xl shadow-black/30"
              : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar-inner flex items-center justify-between h-16">
            <Logo />

            <nav
              aria-label="Primary navigation"
              className="navbar-desktop-nav hidden md:block"
            >
              <ul className="flex items-center gap-7">
                {navLinks.map(({ label, href }) => (
                  <NavLink
                    key={href}
                    href={href}
                    label={label}
                    isActive={activeHref === href}
                    onClick={() => handleNavClick(href)}
                  />
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <div className="navbar-desktop-cta hidden md:block">
                <CTAButton />
              </div>
              <HamburgerButton onClick={openMenu} isOpen={menuOpen} />
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            isOpen={menuOpen}
            onClose={closeMenu}
            activeHref={activeHref}
            onActiveHrefChange={setActiveHref}
          />
        )}
      </AnimatePresence>

      <main>
        <section id="home" className="scroll-mt-24">
          <Suspense fallback={<SectionFallback id="home" minHeight="min-h-screen" />}>
            <Hero />
          </Suspense>
        </section>

        <Suspense fallback={<SectionFallback id="services" />}>
          <Service />
        </Suspense>

        <Suspense fallback={<SectionFallback id="portfolio" />}>
          <PortfolioSection />
        </Suspense>

        <Suspense fallback={<SectionFallback id="about" />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionFallback id="contact" />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
