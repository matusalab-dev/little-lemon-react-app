// import {  } from "react-icons/fa";
import React from "react";
import { FormatDate } from "../utils/FormatDate";
import { CustomContainer } from "../layouts/Custom-container";
import { InputComponent } from "../components/InputComponent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormikContext, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import {
  MdAlarm,
  MdArrowBack,
  MdArrowCircleLeft,
  MdOutlineCalendarToday,
  MdRestaurant,
  MdTimer,
} from "react-icons/md";
import { FaUser } from "react-icons/fa";
import sendEmail from "../components/email";

const personalSchema = yup.object().shape({
  firstName: yup.string().required("first Name is required"),
  lastName: yup.string().required("last Name is required"),
  email: yup.string().email().required("email address is required"),
  phoneNumber: yup.string().required("phone Number is required"),
});

export const CustomerForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [month, day] = FormatDate(location.state.date);

  // const d = new Date(location.state.date);
  // let month = months[d.getMonth()];
  // let day = d.getDate();

  console.log("previousStep seating: " + location.state.seating);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      request: "",
    },
    // enableReinitialize: true,
    validationSchema: personalSchema,
    onSubmit: (values) => {
      console.log(values);
      // sendEmail(
      //   values.email,
      //   "Your order has been placed",
      //   "Your order has been placed successfully. Your order number is 123456."
      // );
      navigate("/reserve/ConfirmedBooking", { state: location.state });
    },
  });

  return (
    <>
      <section className="  bg-primary-200 ">
        <CustomContainer>
          <FormikProvider value={formik}>
            <form
              onSubmit={formik.handleSubmit}
              className="mr-auto flex w-[50rem] max-w-[60rem]  flex-col  md:ml-auto md:w-[25rem]"
            >
              <div className="mx-auto flex w-full flex-col space-y-8 py-8 lg:px-6 md:space-y-6 ">
                <Link
                  to=".."
                  // relative="path"
                  className="  font-semibold text-secondary-300"
                >
                  <MdArrowCircleLeft className="text-3xl" />
                </Link>
                <div className="flex justify-between gap-10 md:space-y-2 sm:block">
                  <div className="  w-1/2 sm:w-full">
                    <label
                      htmlFor="name"
                      className="  flex  font-semibold text-secondary-300 "
                    >
                      <span className="mr-1 text-3xl">*</span> First Name
                    </label>
                    <input
                      type="text"
                      className={` ${
                        formik.touched.firstName && formik.errors.firstName
                          ? "border-red-600"
                          : ""
                      } text-md w-full rounded-[0.3rem] p-3 font-semibold placeholder:opacity-60 focus:border-none focus:outline-none focus:outline-offset-0`}
                      name="firstName"
                      id="firstname"
                      placeholder="First name"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="w-1/2 sm:w-full">
                    <label
                      htmlFor="name"
                      className="flex font-semibold text-secondary-300 "
                    >
                      <span className="mr-1 text-3xl">*</span> Last Name
                    </label>
                    <input
                      type="text"
                      className={`${
                        formik.touched.lastName && formik.errors.lastName
                          ? "border-red-600"
                          : ""
                      } text-md w-full rounded-[0.3rem] p-3 font-semibold placeholder:opacity-60`}
                      name="lastName"
                      id="lastname"
                      placeholder="Last name"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
                <div className="flex gap-10 md:space-y-2 sm:block">
                  <div className="w-1/2 sm:w-full">
                    <label
                      htmlFor="email"
                      className="flex font-semibold text-secondary-300 "
                    >
                      <span className="mr-1 text-3xl">*</span> email
                    </label>
                    <input
                      type="tel"
                      className={`${
                        formik.touched.email && formik.errors.email
                          ? "border-red-600"
                          : ""
                      } text-md w-full rounded-[0.3rem] p-3 font-semibold placeholder:opacity-60`}
                      name="email"
                      // required
                      id="email"
                      placeholder="you@gmail.com"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="w-1/2 sm:w-full">
                    <label
                      htmlFor="phoneNumber"
                      className="flex font-semibold text-secondary-300 "
                    >
                      <span className="mr-1 text-3xl">*</span> Phone Number
                    </label>
                    <input
                      type="tel"
                      className={`${
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                          ? "border-red-600"
                          : ""
                      } text-md w-full rounded-[0.3rem] p-3 font-semibold placeholder:opacity-60`}
                      name="phoneNumber"
                      // required
                      id="phoneNumber"
                      placeholder="Phone number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phoneNumber}
                      list="defaultTels"
                    />
                    <datalist id="defaultTels">
                      <option value="+2519-1422-0188"></option>
                      <option value="+122-2222-2222"></option>
                      <option value="+333-3333-3333"></option>
                      <option value="+344-4444-4444"></option>
                    </datalist>
                  </div>
                </div>

                <div className="flex w-full gap-10 sm:block sm:space-y-6">
                  <div class="flex w-1/2 flex-col space-y-5 font-semibold text-secondary-300 sm:w-full">
                    <div className="flex justify-between  ">
                      <h3 className="flex items-center space-x-3 ">
                        <MdOutlineCalendarToday className="text-2xl" />
                        <span>{`${month}, ${day}`}</span>
                      </h3>

                      <h3 className="flex items-end space-x-3">
                        <FaUser className="text-2xl" />
                        <span> {location.state.guests} Dinners</span>
                      </h3>
                    </div>
                    <div className="flex justify-between">
                      <h3 className=" flex space-x-3">
                        <MdAlarm className="text-2xl" />
                        <span>{location.state.resTime}</span>
                      </h3>
                      <h3 className="flex space-x-3">
                        <MdRestaurant className="text-2xl" />

                        <span>{location.state.occasion}</span>
                      </h3>
                    </div>
                    <h3 className="flex self-center text-2xl font-semibold">
                      <span className="mr-3 ">{location.state.seating}</span>
                      seating
                    </h3>
                  </div>
                  <div className="w-1/2 sm:w-full">
                    <label
                      htmlFor="request"
                      className="mb-3 flex  font-semibold text-secondary-300 "
                    >
                      Special Request
                    </label>
                    <textarea
                      className={`text-md h-32 w-full rounded-[0.3rem] p-3 font-semibold placeholder:opacity-60`}
                      name="request"
                      id="request"
                      placeholder="Special Request"
                      onChange={formik.handleChange}
                      value={formik.values.request}
                    />
                  </div>
                </div>

                <div className=" mt-4 flex w-full justify-between  md:w-full ">
                  <button
                    type="submit"
                    // onClick={handleNext}
                    disabled={!formik.isValid || formik.isSubmitting}
                    className=" rounded-[0.3rem] bg-primary-100 px-8 py-3 text-xl font-semibold text-secondary-400 disabled:bg-secondary-200 sm:w-full"
                  >
                    confirm a reservation
                  </button>
                </div>
              </div>
            </form>
          </FormikProvider>
        </CustomContainer>
      </section>
    </>
  );
};
