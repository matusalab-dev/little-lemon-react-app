import { Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import { Specials } from "../pages/Specials";
import { CustomerSay } from "../pages/CustomerSay";
import { Footer } from "../pages/Footer";
import { Chicago } from "../pages/Chicago";

export const HomeLayout = () => {
  return (
    <>
      <Home />
      <Specials />
      <CustomerSay />
      <Chicago />
      <Footer />
    </>
  );
};
