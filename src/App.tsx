import "./App.css";
import {
  createRouter,
  createRootRoute,
  createRoute,
  RouterProvider,
  Outlet,
} from "@tanstack/react-router";
import Navbar from "./components/Navbar";
import HomePage from "./routes/Home";
import ContactPage from "./routes/Contact";
import CompanyPage from "./routes/Company";
import InvestWithUsPage from "./routes/InvestWithUs";
import ClientPortalPage from "./routes/ClientPortal";
import InvestmentFundsPage from "./routes/InvestmentFunds";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <div className="flex justify-center">
        <main className="container mx-auto w-7xl md:px-8 lg:px-0  px-5">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <div className="flex-1 ">
            <Outlet />
          </div>
        </main>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

// Root layout route (wrapper for everything)
const rootRoute = createRootRoute({
  component: () => <Layout />,
});

// --- App routes ---
const homeRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: HomePage,
});
const investmentFundRoute = createRoute({
  path: "/investment-funds",
  getParentRoute: () => rootRoute,
  component: InvestmentFundsPage,
});
const companyRoute = createRoute({
  path: "/company",
  getParentRoute: () => rootRoute,
  component: CompanyPage,
});
const clientPortalRoute = createRoute({
  path: "/client-portals",
  getParentRoute: () => rootRoute,
  component: ClientPortalPage,
});
const contactRoute = createRoute({
  path: "/contact",
  getParentRoute: () => rootRoute,
  component: ContactPage,
});
const investWithUsRoute = createRoute({
  path: "/invest-with-us",
  getParentRoute: () => rootRoute,
  component: InvestWithUsPage,
});

// Build route tree
const routeTree = rootRoute.addChildren([
  homeRoute,
  investmentFundRoute,
  companyRoute,
  clientPortalRoute,
  contactRoute,
  investWithUsRoute,
]);

// Router
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
