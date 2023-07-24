import React from "react";
import Register from "../register";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Register Page Test", () => {
  it("layout is rendered", () => {
    const root = render(<Register />)
    const username = screen.getByTestId("username");
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const cPasswordInput = screen.getByTestId("confirm_password");
    const signup_btn = screen.getByTestId("signup_btn");
    expect(username).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(passwordInput).toBeVisible();
    expect(cPasswordInput).toBeVisible();
    expect(signup_btn).toBeInTheDocument();
    expect(root).toMatchSnapshot();
  });
});
