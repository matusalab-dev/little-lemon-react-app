import React from "react";
import { getStateFromStorage } from "./BookingForm";
import { FormatDate } from "../utils/FormatDate";
const formValues = getStateFromStorage("state");
const formState = getStateFromStorage("formState");
console.log(formValues);
const ConfirmedBooking = () => {
  return (
    <div className="mx-auto flex h-60 w-[75%] flex-col items-center justify-center bg-primary-200 p-8 text-left text-lg font-semibold text-primary-100 sm:w-full sm:items-start sm:p-3 ">
      <h2 className="block self-center text-3xl font-bold capitalize">
        confirmed!
      </h2>
      <p>
        your table is reserved for date:{" "}
        {FormatDate(Date.parse(formValues.selectedDate))}
      </p>
      <p>
        {`you reserve a table for ${formState.guests} person in the ${formState.seating} for your ${formState.occasion}`}
      </p>
      <p>your table Reservation is confirmed!</p>
    </div>
  );
};

export default ConfirmedBooking;
