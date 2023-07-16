import { render, screen } from "@testing-library/react";
import { Home } from "./src/pages/Home";

test("should render reserve a table", () => {
  render(<Home />);

  const table = screen.getByText(/Reserve a Table/g);
  expect(table).toBeInTheDocument();
});
