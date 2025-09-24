import { Link, useLocation } from "@tanstack/react-router";
import { X, Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "@/constants/nav";
import { logo } from "@/assets";

const Navbar = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isInvestUsHovered, setIsInvestUsHovered] = useState<boolean>(false);

  return (
    <div className="sticky top-0 w-full z-50 bg-white lg:px-0 px-5 lg:py-0 py-3">
      <div className="w-full flex justify-between items-center">
        <motion.a
          whileHover={{ scale: 1.02 }}
          href="/"
          className="flex items-center space-x-3"
        >
          <img src={logo} className="lg:w-24 w-16 relative" />
          <h1 className="lg:text-xl font-bold mt-2">Nevo Capital</h1>
        </motion.a>

        {/* Desktop Links */}
        <div
          className="hidden lg:flex items-center lg:space-x-10 space-x-7 relative"
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
              <Link to={n.path} className="text-sm px-2 relative z-10 py-4">
                {n.label}
              </Link>

              {/* Hover underline */}
              <AnimatePresence>
                {hoveredLink === n.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 top-7 left-0 right-0 h-0.5 bg-primary rounded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </AnimatePresence>

              {/* Active link underline (only when not hovered) */}
              <AnimatePresence>
                {hoveredLink !== n.path && (
                  <Link
                    to={n.path}
                    className="absolute bottom-0 top-7 left-0 right-0 h-0.5 bg-primary rounded opacity-0"
                    activeProps={{
                      className: `${
                        !isHovered &&
                        "absolute bottom-0 top-7 left-0 right-0 h-0.5 bg-primary rounded opacity-100"
                      }`,
                    }}
                  />
                )}
                <Link
                  to={n.path}
                  className="absolute bottom-0 top-7 left-0 right-0 h-0.5 bg-primary rounded opacity-0"
                  activeProps={{
                    className: `${
                      !isHovered &&
                      "absolute bottom-0 top-7 left-0 right-0 h-0.5 bg-primary rounded opacity-100"
                    }`,
                  }}
                />
              </AnimatePresence>
            </div>
          ))}

          <Link
            to="/invest-with-us"
            className="flex items-center gap-x-2 text-sm px-2 relative z-10 py-4 group !no-underline"
            onMouseEnter={() => setIsInvestUsHovered(true)}
            onMouseLeave={() => setIsInvestUsHovered(false)}
          >
            <motion.div
              animate={{ x: isInvestUsHovered ? "calc(100% + 7rem)" : 0 }}
              transition={{ type: "keyframes", stiffness: 200, damping: 15 }}
              className="w-2 h-2 bg-primary rounded-full absolute -left-3 top-1/2 -translate-y-1/2"
            />
            <span className="relative transition-colors duration-300 group-hover:text-primary">
              Invest with us
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-10"
          onClick={() => setMobileOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={20} />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 right-0 h-full bg-white w-[90%] shadow-lg transform transition-transform duration-300 z-20 ps-5 pt-2 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-between px-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="/"
              className="flex items-center space-x-3"
            >
              <img src={logo} className="lg:w-24 w-16 relative" />
              <h1 className="lg:text-xl font-bold mt-2">Nevo Capital</h1>
            </motion.a>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close Menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col space-y-6 p-4 mt-5">
            {nav.map((n) => (
              <Link
                key={n.path}
                to={n.path}
                onClick={() => setMobileOpen(false)}
                activeProps={{
                  className: "underline decoration-2 underline-offset-3",
                }}
                className="font-medium hover:underline underline-offset-4 decoration-primary transition-all duration-300"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to={"/invest-with-us"}
              className="relative font-medium hover:underline underline-offset-4 decoration-primary transition-all duration-300"
            >
              <p
                className={`w-2 h-2 bg-primary rounded-full absolute ${location.pathname === "/invest-with-us" ? "right-40" : "-left-3"} top-1/2 -translate-y-1/2`}
              ></p>
              Invest with us
            </Link>
          </div>

          {/* Contact Info */}
          <div className="absolute bottom-3 flex flex-col space-y-4 border-t pt-3 px-4">
            <p>Contact Information</p>
            <div className="flex space-x-2">
              <Phone size={16} />
              <p className="text-xs">+1-248-450-4836</p>
            </div>

            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <p className="text-xs">info@nevo-capital.com</p>
            </div>
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
    </div>
  );
};

export default Navbar;
