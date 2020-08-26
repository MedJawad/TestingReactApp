import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

test("renders Header links correctly", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  let linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = getByText(/Posts/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = getByText(/Users/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = getByText(/Logout/i);
  expect(linkElement).toBeInTheDocument();
});
