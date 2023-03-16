import React from "react";
import Form from "../component/Form";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

const axios = require("axios");
jest.mock("axios");
jest.mock("axios", () => {
  return {
    get: jest.fn(),
    post: jest.fn(),
  };
});

test("submits the form with the correct data", async () => {
  axios.post.mockResolvedValueOnce({ status: 201 });

  const { getByLabelText, getByText } = render(<Form />);

  const firstNameInput = getByLabelText("First Name");
  const lastNameInput = getByLabelText("Last Name");
  const EmailInput = getByLabelText("Email");
  const phoneNumberInput = getByLabelText("Phone Number");
  const submitButton = getByText("Submit");

  await act(async () => {
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(EmailInput, { target: { value: "example@example.com" } });
    fireEvent.change(phoneNumberInput, { target: { value: "(123)123-1234" } });
    fireEvent.click(submitButton);
  });

  expect(axios.post).toHaveBeenCalledWith("/reservations", {
    firstName: "John",
    lastName: "Doe",
    email: "example@example.com",
    phoneNumber: "(123)123-1234",
  });
});
