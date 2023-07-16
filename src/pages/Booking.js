// import {  } from "react-icons/fa";
import React from "react";
// import * as yup from "yup";
// import { useFormik } from "formik";
import { FormatDate } from "../utils/FormatDate";
import { BookingForm } from "../components/BookingForm";
import { CustomContainer } from "../layouts/Custom-container";

export const Booking = () => {
  return (
    <section className="  bg-primary-200 ">
      {/* <div className="custom-container flex justify-between"> */}
      <CustomContainer>
        <div className="mx-auto flex w-full flex-col py-8  ">
          <BookingForm />
        </div>
      </CustomContainer>
    </section>
  );
};
