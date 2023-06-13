import { Home } from "./pages/Home";
import { Specials } from "./pages/Specials";
import { Chicago } from "./pages/Chicago";
import { Footer } from "./pages/Footer";
import { Booking } from "./pages/Booking";
import { CustomerSay } from "./pages/CustomerSay";
import { Routes, Route } from "react-router-dom";
import { Herosection } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { HomeLayout } from "./components/HomeLayout";
import { BookingLayout } from "./components/BookingLayout";
import { OrderDetail, OrderPage } from "./pages/OrderDetail";
import { OrderLayout } from "./components/OrderLayout";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<HomeLayout />} />
        <Route path="/menu" element={<HomeLayout />} />
        <Route path="/order/:id/:category" element={<OrderLayout />}>
          <Route index element={<OrderDetail />}></Route>
        </Route>

        <Route path="/reserve" element={<BookingLayout />}>
          <Route index element={<Booking />} />
        </Route>
      </Routes>
    </>
  );
}
