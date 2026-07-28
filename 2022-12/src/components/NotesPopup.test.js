import { render, screen } from "@testing-library/react";
import { NotesPopup } from "./NotesPopup";

function mockRect(rect) {
  Element.prototype.getBoundingClientRect = jest.fn(() => ({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0,
    ...rect,
  }));
}

describe("NotesPopup", () => {
  const originalInnerWidth = window.innerWidth;

  afterEach(() => {
    jest.restoreAllMocks();
    window.innerWidth = originalInnerWidth;
  });

  it("renders the given text", () => {
    mockRect({ left: 400, right: 600 });
    render(<NotesPopup text="Live at Finn's" />);
    expect(screen.getByText("Live at Finn's")).toBeTruthy();
  });

  it("nudges right when it would overflow the left edge of the viewport", () => {
    // REGRESSION: a popup centered above a card near the left edge of a
    // wrapped grid row rendered partially off-screen -- confirm the
    // corrective offset actually gets applied.
    mockRect({ left: -20, right: 80 });
    render(<NotesPopup text="Hello" />);
    expect(screen.getByText("Hello").style.getPropertyValue("--popup-offset")).toBe("28px");
  });

  it("nudges left when it would overflow the right edge of the viewport", () => {
    window.innerWidth = 400;
    mockRect({ left: 350, right: 450 });
    render(<NotesPopup text="Hello" />);
    expect(screen.getByText("Hello").style.getPropertyValue("--popup-offset")).toBe("-58px");
  });

  it("applies no correction when it fits comfortably within the viewport", () => {
    mockRect({ left: 400, right: 600 });
    render(<NotesPopup text="Hello" />);
    expect(screen.getByText("Hello").style.getPropertyValue("--popup-offset")).toBe("0px");
  });
});
