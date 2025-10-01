import Navbar from "@/components/Navbar";
import "../App.css";

import { createRootRoute, Outlet } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import { ArrowUpFromDot } from "lucide-react";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
      <Footer />

      {showScrollTop && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex justify-center items-center bg-primary fixed bottom-5 md:right-20 right-10 rounded-full w-10 h-10 border border-zinc-300 shadow cursor-pointer transition-opacity duration-300 text-white"
        >
          <ArrowUpFromDot size={15} />
        </button>
      )}
    </div>
  );
};

export const Route = createRootRoute({ component: RootLayout });
