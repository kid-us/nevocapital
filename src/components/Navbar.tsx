import { nav } from "@/constants/navs";
import { Link } from "@tanstack/react-router";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import { logo } from "@/assets";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-3 relative">
      {/* Logo */}
      <Link to="/">
        <img src={logo} className="w-24" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex lg:space-x-14 space-x-7">
        {nav.map((n) => (
          <Link
            key={n.path}
            to={n.path}
            activeProps={{
              className:
                "font-medium rounded underline underline-offset-6 decoration-cta text-white dark:text-black shadow transition-all duration-300",
            }}
            className="dark:text-white font-medium rounded hover:underline hover:underline-offset-4 decoration-cta transition-[underline-offset,decoration-color] duration-300"
          >
            {n.label}
          </Link>
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
        className={`fixed top-0 right-0 h-full w-full bg-white dark:bg-black shadow-lg transform transition-transform duration-300 z-20 ps-5  pt-2 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between p-4">
          {/* Logo */}
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
              activeProps={{
                className:
                  "font-medium rounded underline underline-offset-6 decoration-cta text-white dark:text-black shadow transition-all duration-300",
              }}
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
