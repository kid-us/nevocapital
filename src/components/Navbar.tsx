import { nav } from "@/constants/navs";
import { Link } from "@tanstack/react-router";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import { logo } from "@/assets";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center py-3 relative lg:px-12">
      {/* Logo */}
      <Link to="/">
        <img src={logo} className="w-24" />
      </Link>

      {/* Desktop Links */}
      <div
        className="hidden md:flex lg:space-x-7 space-x-7 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {nav.map((n) => (
          <div
            key={n.path}
            className="relative"
            onMouseEnter={() => {
              setHoveredLink(n.path);
            }}
            onMouseLeave={() => {
              setHoveredLink(null);
            }}
          >
            <Link
              to={n.path}
              className="dark:text-white font-medium text-white px-2 relative z-10 py-4"
            >
              {n.label}
            </Link>

            {/* Hover underline */}
            <AnimatePresence>
              {hoveredLink === n.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 top-7 left-0 right-0 h-0.5 bg-cta rounded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>

            {/* Active link underline (only when not hovered) */}
            <AnimatePresence>
              {hoveredLink !== n.path && (
                <Link
                  to={n.path}
                  className="absolute bottom-0 top-7 left-0 right-0 h-0.5 bg-cta rounded opacity-0"
                  activeProps={{
                    className: `${
                      !isHovered &&
                      "absolute bottom-0 top-7 left-0 right-0 h-0.5 bg-cta rounded opacity-100"
                    }`,
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-10"
        onClick={() => setMobileOpen(true)}
        aria-label="Open Menu"
      >
        <Menu size={30} />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white dark:bg-black shadow-lg transform transition-transform duration-300 z-20 ps-5 pt-2 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between p-4">
          <Link to="/">
            <img src={logo} className="w-24" />
          </Link>
          <button onClick={() => setMobileOpen(false)} aria-label="Close Menu">
            <X size={30} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col space-y-6 p-4">
          {nav.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              onClick={() => setMobileOpen(false)}
              className="text-black dark:text-white font-medium text-lg hover:underline underline-offset-4 decoration-cta transition-all duration-300"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Optional overlay background when menu is open */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-5"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
