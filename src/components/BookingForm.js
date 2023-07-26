import React, { useReducer, useState } from "react";
import * as yup from "yup";
// import { FormatDate } from "../utils/FormatDate";
import { FaUser } from "react-icons/fa";
import { MdRestaurant, MdOutlineCalendarToday, MdAlarm } from "react-icons/md";
// import { confirmedBooking } from "../components/ConfirmedBooking";
import { Link, useNavigate } from "react-router-dom";
import { Formik, FormikProvider, useFormik } from "formik";
import { FetchAPI } from "../data/FetchAPI";
import { SubmitAPI } from "../data/FetchAPI";
import "../App.css";
import { FormatDate } from "../utils/FormatDate";
import homeIcon from "../assets/home-icon.svg";

const initialState = {
  selectedDate: "",
  availableTimes: [],
};

const saveStateToStorage = (state = "", formState = "") => {
  const serializedState = JSON.stringify(state);
  const serializedFormState = JSON.stringify(formState);
  localStorage.setItem("state", serializedState);
  localStorage.setItem("formState", serializedFormState);
};

export const getStateFromStorage = (key) => {
  const serializedState = localStorage.getItem(key);
  if (serializedState === null) {
    return undefined;
  }
  const parsedState = JSON.parse(serializedState);

  console.log(parsedState);
  return parsedState;
};

getStateFromStorage("state");
getStateFromStorage("formState");

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      return { ...state, selectedDate: action.payload };
    case "UPDATE_TIME":
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
};

function reducerWithLocalStorage(state, action) {
  // get new state from reducer
  const newState = reducer(state, action);
  // save new state to local storage
  saveStateToStorage(newState);
  return newState;
}

export const BookingForm = () => {
  const [state, dispatch] = useReducer(reducerWithLocalStorage, initialState);
  const [previousStep, setPreviousStep] = useState({});

  // console.log("previousSteps State: " + previousStep?.occasion);
  console.log(state);
  const navigate = useNavigate();
  function fetchAvailableTimes(date) {
    const availableSlot = FetchAPI(date);
    // const getState = getStateFromStorage("formState");

    console.log(availableSlot);
    dispatch({ type: "UPDATE_TIME", payload: availableSlot });
  }

  // date picker triggers the new available times
  // based on the selectedDate
  function handleDateChange(date) {
    const currentDate = new Date(date);
    console.log(currentDate);
    // dispatch({ type: "UPDATE_DATE", payload: currentDate });
    dispatch({ type: "UPDATE_DATE", payload: currentDate });
    fetchAvailableTimes(currentDate);
  }

  // useEffect(() => {
  //   // console.log(state.selectedDate);
  //   //   fetchAvailableTimes(state.selectedDate);
  //   //   return () => {
  //   //     // there is nothing to remove from the DOM
  //   //   };
  // }, [state.selectedDate]);

  // form validation using yup

  // check for the right data-type of the yup form field
  // check the data type for the check-boxes
  const tableSchema = yup.object().shape({
    date: yup.date().required("pick a date"),

    seating: yup.string().required("pick one of our seatings"),
    // occasion: yup.string().required("Required"),
    // resTime: yup.string().required("Required"),
  });

  // Radio input seatingOptions
  const seatingOptions = [
    { key: "Indoor", value: "Indoor" },
    { key: "Outdoor", value: "Outdoor" },
  ];

  const previousStepValue = () => {
    return previousStep;
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      guests: 1,
      seating: "",
      resTime: "",
      occasion: "Engagement",
    },
    // enableReinitialize: true,
    validationSchema: tableSchema,
    onSubmit: (values) => {
      setPreviousStep(values);
      const previousState = {
        date: values.date,
        guests: values.guests,
        seating: values.seating,
        resTime: values.resTime,
        occasion: values.occasion,
      };
      // const submitBtnState = false;

      const returnVal = SubmitAPI(values);

      if (returnVal) {
        // console.log(previousStep);
        navigate("CustomerForm", { state: previousState });
        saveStateToStorage(state, values);

        // navigateTo = navigate("confirmedBooking");
        console.log("submission-status : " + returnVal);
      }
      // const prevValue = previousStepValue();
      // console.log(prevValue);
    },
  });
  // setPreviousStep(formik.values);

  // console.log(previousStepValue);
  // console.log(formik.values);
  // console.log(Date.parse(formik.values.date));
  // console.log(Date.parse(formik.values.date));
  // console.log(FormatDate(Date.parse(formik.values.date)));

  return (
    <>
      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          className="mr-auto flex w-[50rem] max-w-[60rem]  flex-col  md:ml-auto md:w-[25rem]"
        >
          <h2 className="mb-10 mt-3 font-primary  text-6xl text-primary-100">
            Reservations
          </h2>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className="flex w-full justify-between md:flex-col"
          >
            <div className="mb-3 flex w-1/2 items-center justify-start md:mb-10 md:justify-between">
              <label
                htmlFor={seatingOptions[0].value}
                className="mr-16 font-secondary text-xl font-semibold text-secondary-300 md:mr-0"
              >
                {seatingOptions[0].key}
              </label>
              <input
                type="radio"
                id={seatingOptions[0].value}
                name="seating"
                value={seatingOptions[0].value}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.seating === seatingOptions[0].value}
                // required
                // className=" h-8 w-8"
                className={`seating ${
                  formik.touched.seating && formik.errors.seating
                    ? "error"
                    : " "
                } `}
              />
            </div>
            <div className="mb-3 flex w-1/2 items-center justify-start md:mb-10 md:justify-between">
              <label
                htmlFor={seatingOptions[1].value}
                className={` mr-16 font-secondary text-xl font-semibold text-secondary-300 md:mr-0`}
              >
                {seatingOptions[1].key}
              </label>
              <input
                type="radio"
                id={seatingOptions[1].value}
                name="seating"
                value={seatingOptions[1].value}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.seating === seatingOptions[1].value}
                // required
                className={`seating ${
                  formik.touched.seating && formik.errors.seating
                    ? "error"
                    : " "
                }`}
              />
            </div>
          </div>
          {/* {formik.errors.seating ? (
          <div className="block text-red-400">{formik.errors.seating}</div>
        ) : null} */}
          {/* </div> */}
          <div className="mt-3 flex w-full justify-between md:mx-auto md:flex-col md:space-y-5">
            <div className="relative mb-3 w-1/2">
              <MdOutlineCalendarToday
                className={`  absolute left-4 top-[3.05rem] text-2xl font-semibold text-primary-200 active:text-primary-200 ${
                  formik.touched.date && formik.errors.date
                    ? " text-red-600 focus:text-primary-200 active:text-primary-200 "
                    : ""
                }
              `}
              />
              <label
                htmlFor="date"
                className="form-label  mb-2 block font-bold text-secondary-300"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                data-testid="date-picker-input"
                // required
                name="date"
                className={` w-[17.5rem] cursor-pointer rounded-[0.175rem] border-1 bg-secondary-300 px-14 py-4 font-secondary text-lg font-semibold text-primary-200 focus:border-primary-200 ${
                  formik.touched.date && formik.errors.date
                    ? "border border-red-700"
                    : ""
                }`}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  handleDateChange(e.target.value);
                  formik.setFieldValue("date", e.target.value);
                }}
              />
            </div>

            <div className="relative mb-3 w-1/2">
              <FaUser className="absolute left-5 top-12 text-2xl font-semibold text-primary-200" />

              <label
                htmlFor="guests"
                className="form-label mb-2 block font-bold text-secondary-300"
              >
                Number of Dinners
              </label>

              <input
                type="number"
                id="guests"
                min={0}
                max={10}
                className="w-[17.5rem] cursor-pointer rounded-[0.19rem]  bg-secondary-300 py-[0.8rem] pl-24 pr-8 font-secondary text-lg font-semibold text-primary-200 outline-8 outline-red-600"
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                value={formik.values.guests}
              />
              {/* {formik.errors.guests && (
              <div className="mt-2 w-[calc(70%-0.5rem)] bg-red-200 md:w-[17.5rem] md:px-2">
                <p className=" py-2 text-secondary-300 ">
                  {formik.errors.guests}
                </p>
              </div>
            )} */}
            </div>
          </div>
          <div className="mt-4 flex w-full justify-between md:flex-col md:space-y-5">
            <div className="relative mb-3 w-1/2">
              <label
                htmlFor="occasion"
                className="mb-2 block font-semibold text-secondary-300"
              >
                <MdRestaurant className="absolute bottom-4 left-4 z-30 text-2xl font-semibold  text-primary-200" />
                Occasion
              </label>
              <select
                id="occasion"
                className={` group relative flex w-[17.5rem] cursor-pointer rounded-md  bg-secondary-300 px-6 py-4 text-center font-secondary  text-lg font-semibold text-primary-200`}
                onChange={formik.handleChange}
                value={formik.values.occasion}
              >
                <option className="  w-[19.5rem] py-16 pl-8">Engagement</option>
                <option className="mt-5 w-[19.5rem] ">Birthday</option>
                <option className="mt-5 w-[19.5rem] p-10">Anniversary</option>
              </select>
            </div>
            <div className="relative mb-3 w-1/2">
              <label
                htmlFor="resTime"
                className="mb-2 block font-semibold text-secondary-300"
              >
                <MdAlarm className="absolute left-4 top-12 z-20 text-2xl font-semibold text-primary-200" />
                Choose Time
              </label>
              <select
                id="resTime"
                name="resTime"
                className="group relative w-[17.5rem] cursor-pointer rounded-md bg-secondary-300 px-6 py-4 text-center font-secondary  text-lg font-semibold text-primary-200"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.resTime}
                // defaultValue={state.availableTimes[0]}
              >
                {state.availableTimes.map(function (time, index) {
                  return (
                    <option className="mt-5 w-[300px] " selected key={index}>
                      {time}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className=" mt-4 flex w-full justify-between  md:w-[17.5rem] ">
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
              className="mt-8  rounded-[0.3rem] bg-primary-100 px-8 py-3 text-2xl font-semibold text-secondary-400 disabled:bg-secondary-200 md:w-full"
            >
              Reserve a Table
            </button>
          </div>
        </form>
      </FormikProvider>
    </>
  );
};
