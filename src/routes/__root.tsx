import Navbar from "@/components/Navbar";
import "../App.css";

import { createRootRoute, Outlet } from "@tanstack/react-router";
import Footer from "@/components/Footer";

const RootLayout = () => (
  <div className="max-w-6xl mx-auto">
    <Navbar />
    <div className="mt-10">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
