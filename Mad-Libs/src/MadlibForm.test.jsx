import MadlibForm from "./MadlibForm";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

test("render without crashing", () => {
  render(<MadlibForm />);
});

test("should match snapshot", () => {
  const { asFragment } = render(<MadlibForm />);
  expect(asFragment).toMatchSnapshot();
});

test("renders input fields and submit button", () => {
  render(<MadlibForm onSubmit={vi.fn()} />);

  expect(screen.getByPlaceholderText("noun")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("noun 2")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("adjective")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("color")).toBeInTheDocument();

  const submitButton = screen.getByRole("button", { name: /Get Story/i });
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toBeDisabled();
});
