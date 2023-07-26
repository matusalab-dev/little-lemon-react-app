import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { Herosection } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { HomeLayout } from "./components/HomeLayout";
import { BookingLayout } from "./components/BookingLayout";
import { OrderDetail, OrderPage } from "./pages/OrderDetail";
import { OrderLayout } from "./components/OrderLayout";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { CustomerForm } from "./pages/CustomerForm";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="about" element={<HomeLayout />} />
        <Route path="menu" element={<HomeLayout />} />
        <Route path="order/:id/:category" element={<OrderLayout />}>
          <Route index element={<OrderDetail />}></Route>
          <Route path="ConfirmedBooking" element={<ConfirmedBooking />} />
        </Route>

        <Route path="/reserve" element={<BookingLayout />}>
          <Route index element={<Booking />} />
          <Route path="CustomerForm" element={<CustomerForm />} />

          <Route path="ConfirmedBooking" element={<ConfirmedBooking />} />

          {/* <Route /> */}
        </Route>
      </Routes>
    </>
  );
}
