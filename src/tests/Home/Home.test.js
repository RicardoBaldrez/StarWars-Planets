import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

import Home from "../../pages/Home/index";

describe("Home Page", () => {
  test("Should render Home page", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  });

  test("Should be hidden error message", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const errorMessage = screen.queryByText(/Enter the name of a planet/i);
    expect(errorMessage).toBeNull();
  });
});
