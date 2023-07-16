import { fireEvent, render, screen } from "@testing-library/react";
import { BookingForm, reducer } from "./components/BookingForm";
import { BrowserRouter } from "react-router-dom";

test("should render reserve a table buton", () => {
  // if there is context provider like BrowserRouter used in the Index.js
  // wrap the component with the context provider like this one

  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const buttonElement = screen.getByText("Reserve a Table");
  expect(buttonElement).toBeInTheDocument();
});

describe("when the date picker is clicked", () => {
  it("should return the available-Times", () => {
    const initialState = {
      selectedDate: "",
      availableTimes: [],
    };
    const action = { type: "UPDATE_DATE" };
    const expectedState = {
      selectedDate: "2023-06-29",
      availableTimes: [
        "17:00",
        "17:30",
        "18:00",
        "21:30",
        "22:00",
        "22:30",
        "23:30",
      ],
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});
