import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { navLinks } from "../../data/navLinks";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

/* ─── animation variants ─────────────────────────────────────────────────── */

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 340, damping: 36 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring", stiffness: 380, damping: 40 },
  },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

/* ─── component ──────────────────────────────────────────────────────────── */

/**
 * MobileMenu
 * @param {boolean}  isOpen     - controls visibility
 * @param {function} onClose    - called to close the drawer
 * @param {string}   activeHref - currently active link href
 */
export default function MobileMenu({ isOpen, onClose, activeHref, onActiveHrefChange }) {
  useLockBodyScroll(isOpen);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Focus trap: move focus into drawer when it opens
  const closeButtonRef = useRef(null);
  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  const handleLinkClick = (href) => {
    onActiveHrefChange?.(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* ── Drawer ── */}
          <motion.aside
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="
              fixed inset-y-0 right-0 z-50
              w-[min(320px,90vw)]
              flex flex-col
              bg-[#0a0a0f]/95 backdrop-blur-xl
              border-l border-white/[0.07]
              shadow-2xl shadow-black/60
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/6">
              {/* Logo mark repeated in drawer */}
              <span className="flex items-center gap-2 select-none">
                <span className="w-7 h-7 rounded-lg bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L7 2L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 8.5H10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="text-white font-semibold tracking-tight text-[15px]">
                  Apex<span className="text-violet-400">Labs</span>
                </span>
              </span>

              {/* Close button */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close navigation menu"
                className="
                  w-9 h-9 rounded-lg flex items-center justify-center
                  text-white/50 hover:text-white
                  hover:bg-white/8
                  transition-colors duration-150
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav Links */}
            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-4 py-6">
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="space-y-1"
              >
                {navLinks.map(({ label, href }) => {
                  const isActive = activeHref === href;
                  return (
                    <motion.li key={href} variants={itemVariants}>
                      <a
                        href={href}
                        onClick={() => handleLinkClick(href)}
                        aria-current={isActive ? "page" : undefined}
                        className={`
                          group flex items-center justify-between
                          px-4 py-3 rounded-xl
                          text-[15px] font-medium tracking-tight
                          transition-all duration-150
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500
                          ${isActive
                            ? "bg-violet-500/15 text-violet-300"
                            : "text-white/60 hover:text-white hover:bg-white/6"
                          }
                        `}
                      >
                        {label}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </nav>

            {/* CTA */}
            <div className="px-4 py-6 border-t border-white/6">
              <a
                href="#contact"
                onClick={() => handleLinkClick("#contact")}
                className="
                  block w-full text-center
                  px-5 py-3 rounded-xl
                  bg-linear-to-r from-violet-600 to-indigo-600
                  hover:from-violet-500 hover:to-indigo-500
                  text-white font-semibold text-sm tracking-wide
                  shadow-lg shadow-violet-900/40
                  transition-all duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400
                "
              >
                Get Free Quote
              </a>
              <p className="text-center text-white/25 text-xs mt-3">
                No credit card required
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
