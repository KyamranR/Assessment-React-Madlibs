import MadlibStory from "./MadlibStory";
import { render } from "@testing-library/react";

test("render without crashing", () => {
  render(<MadlibStory />);
});

test("should match snapshot", () => {
  const { asFragment } = render(<MadlibStory />);
  expect(asFragment).toMatchSnapshot();
});
