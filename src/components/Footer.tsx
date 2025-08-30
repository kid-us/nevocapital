import { nav } from "@/constants/navs";
import { Link } from "@tanstack/react-router";
import { Image } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-footer py-5 mt-10">
      <div className="flex justify-center">
        <div className="container mx-auto w-7xl md:px-8 lg:px-0  px-5">
          <div className="md:flex justify-between items-center">
            {/* Logo */}
            <div className="mb-8">
              <Image size={40} />
            </div>

            {/* Links */}
            <div>
              <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 lg:gap-x-16  gap-y-3 gap-x-5">
                {nav.map((n) => (
                  <Link
                    key={n.path}
                    to={n.path}
                    activeProps={{
                      className:
                        "font-medium rounded underline underline-offset-6 decoration-cta text-white dark:text-black shadow transition-all duration-300",
                    }}
                    className="dark:text-white font-medium rounded hover:underline hover:underline-offset-4 decoration-cta transition-[underline-offset,decoration-color] duration-300 lg:text-center text-justify text-sm"
                  >
                    {n.label}
                  </Link>
                ))}
              </div>
              {/* Contact Us / Investor Tool */}
              <div className="grid grid-cols-2 mt-7 gap-x-5">
                <div>
                  <h1 className="font-bold lg:text-xl text-lg mb-3">
                    Contact US
                  </h1>
                  <p className="text-sm">Phone: +1-248-450-4836</p>
                  <p className="text-sm">Email: info@nevo-capital.com</p>
                </div>
                <div>
                  <h1 className="font-bold text-xl mb-3">Investor Tools</h1>
                  <Link
                    to="/invest-with-us"
                    className="text-cta text-sm uppercase"
                  >
                    Investor with us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Horizontal Line */}
          <div className="relative">
            <div className="absolute -top-[4.5px] -left-1 bg-cta w-3 h-3 rounded-full"></div>
            <hr className="my-10 border-2 border-cta" />
            <div className="absolute -top-[4.5px] -right-1 bg-cta w-3 h-3 rounded-full"></div>
          </div>

          {/* Paragraph */}
          <div className="">
            <p className="text-center text-xs">
              The information presented in this Website is provided for general
              informational purposes only and this Website does not constitute
              an offer, solicitation or recommendation to sell or an offer to
              buy any securities, investment products or investment advisory
              services. The information in this Website is not intended to
              provide and should not be relied upon for, accounting, legal, tax
              advice or investment recommendations. Each user is encouraged to
              consult with its own tax, legal, accounting, financial and/or
              other advisors regarding the information and matters contained in
              this Website. Revere does not represent that any securities,
              financial instruments, products or services are suitable or
              appropriate for all clients or investors. Decisions based on
              information contained on this Website are the sole responsibility
              of the user.
            </p>
            <p className="text-center mt-4 text-xs">
              PAST PERFORMANCE IS NOT NECESSARILY A RELIABLE INDICATOR OF FUTURE
              PERFORMANCE. INVESTMENTS ARE SUBJECT TO A WIDE VARIETY OF RISKS
              AND CONSIDERATIONS.
            </p>

            <p className="text-center text-xs my-5">
              © 2025. All Rights Reserved.{" "}
              <Link to="/" className="text-cta underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
