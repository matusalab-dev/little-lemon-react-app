// import {  } from "react-icons/fa";
import React from "react";
import { FormatDate } from "../utils/FormatDate";
import { CustomContainer } from "../layouts/Custom-container";
import { InputComponent } from "../components/InputComponent";
import { Link } from "react-router-dom";

export const CustomerForm = () => {
  return (
    <section className="  bg-primary-200 ">
      <CustomContainer>
        <div className="mx-auto flex w-full flex-col space-y-6 py-8 lg:px-6 ">
          <Link
            to=".."
            // relative="path"
            className="  font-semibold text-secondary-300"
          >
            back to Reservation form
          </Link>
          <div className="flex justify-between gap-10 sm:block">
            <div className="  w-1/2 sm:w-full">
              <label
                htmlFor="name"
                className="  flex  font-semibold text-secondary-300 "
              >
                <span className="mr-1 text-3xl">*</span> First Name
              </label>
              <input
                type="text"
                className={`text-md w-full p-3 font-semibold placeholder:opacity-60 focus:border-none focus:outline-none focus:outline-offset-0`}
                name="firstname"
                id="firstname"
                placeholder="First name"
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
                className={`text-md w-full p-3 font-semibold placeholder:opacity-60`}
                name="lastname"
                id="lastname"
                placeholder="Last name"
              />
            </div>
          </div>
          <div class="flex gap-10 sm:block">
            <div className="w-1/2 sm:w-full">
              <label
                htmlFor="name"
                className="flex font-semibold text-secondary-300 "
              >
                <span className="mr-1 text-3xl">*</span> Email
              </label>
              <input
                type="email"
                className={`text-md w-full p-3 font-semibold placeholder:opacity-60`}
                name="email"
                id="email"
                placeholder="you@email.com"
              />
            </div>
            <div className="w-1/2 sm:w-full">
              <label
                htmlFor="phone"
                className="flex font-semibold text-secondary-300 "
              >
                <span className="mr-1 text-3xl">*</span> Phone Number
              </label>
              <input
                type="tel"
                className={`text-md w-full p-3 font-semibold placeholder:opacity-60`}
                name="phone"
                required
                id="phone"
                placeholder="Phone number"
                list="defaultTels"
              />
              <datalist id="defaultTels">
                <option value="2519-1422-0188"></option>
                <option value="122-2222-2222"></option>
                <option value="333-3333-3333"></option>
                <option value="344-4444-4444"></option>
              </datalist>
            </div>
          </div>
          <div className=" mt-4 flex w-full justify-between  md:w-[17.5rem] ">
            <button
              type="submit"
              // disabled={!formik.isValid || formik.isSubmitting}
              className="mt-8  rounded-[0.3rem] bg-primary-100 px-8 py-3 text-xl font-semibold text-secondary-400 disabled:bg-secondary-200 sm:w-full"
            >
              confirm a reservation
            </button>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};
