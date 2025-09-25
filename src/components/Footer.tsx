import { logo } from "@/assets";
import { nav } from "@/constants/nav";
import { Link } from "@tanstack/react-router";
import { useLocation } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const date = new Date();

  return (
    <div
      className={`${location.pathname === "/" && "hidden"} max-w-6xl mx-auto mt-10 relative pt-2 lg:px-0 px-6`}
    >
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="md:flex justify-between items-center mt-5">
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} className="md:w-15 w-32" />
            <h1 className="font-bold mt-2">Nevo Capital</h1>
          </div>
          {/* Contact Info */}
          <div className="flex space-x-4 md:mt-2 mt-5">
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

        {/* Links */}
        <div className="lg:mt-0 mt-5">
          <div className="md:flex space-x-5 space-y-2 md:space-y-0">
            {nav.map((n) => (
              <div key={n.path}>
                <Link
                  to={n.path}
                  className="dark:text-white font-medium rounded hover:underline hover:underline-offset-4 decoration-cta transition-[underline-offset,decoration-color] duration-300 lg:text-center text-justify text-xs"
                >
                  {n.label}
                </Link>
              </div>
            ))}
            {/* Invest with Us */}
            <div>
              <Link
                to={"/invest-with-us"}
                className="dark:text-white font-medium rounded hover:underline hover:underline-offset-4 decoration-cta transition-[underline-offset,decoration-color] duration-300 lg:text-center text-justify text-xs"
              >
                Invest with Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="md:flex justify-between md:space-y-0 space-y-1">
        <p className="text-xs text-zinc-500">
          © {date.getFullYear()} Nevo Capital. All rights reserved
        </p>
        <Link to="/" className="underline text-xs">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
