import React from "react";
import { Navbar } from "./Navbar";
import { Outlet, Link } from "react-router-dom";

export const BookingLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
