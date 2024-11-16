import MadLib from "./MadLib";
import { render } from "@testing-library/react";

test("render without crashing", () => {
  render(<MadLib />);
});

test("should match snapshot", () => {
  const { asFragment } = render(<MadLib />);
  expect(asFragment).toMatchSnapshot();
});
