import React from "react";
import NavBar from "../NavBar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Testing if navbar is rendered and buttons work correctly", () => {
  render(<NavBar />);
  it("Navbar is correctly rendered", () => {
    expect(screen.getByText(/serverflow/i)).toBeInTheDocument();
  });
});
