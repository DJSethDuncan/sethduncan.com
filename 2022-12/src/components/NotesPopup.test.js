import { fireEvent, render, screen } from "@testing-library/react";
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

  it("never leaves a direct inline transform that would override the stylesheet's corrective transform", () => {
    // REGRESSION: reposition() used to reset the measurement baseline via
    // `el.style.transform = "translateX(-50%)"`, a direct DOM mutation that
    // is never cleared afterward. Inline styles always beat stylesheet
    // rules, so the CSS rule that actually applies --popup-offset via
    // `transform: translateX(calc(-50% + var(--popup-offset)))` was
    // permanently shadowed -- the offset was computed correctly but never
    // visually applied. The reset must go through --popup-offset instead.
    mockRect({ left: -20, right: 80 });
    render(<NotesPopup text="Hello" />);
    expect(screen.getByText("Hello").style.transform).toBe("");
    expect(screen.getByText("Hello").style.getPropertyValue("--popup-offset")).toBe("28px");
  });

  it("recomputes the offset when the window is resized", () => {
    // The component's own comment says the correction is "recomputed on
    // resize", but every other test here only exercises the initial-render
    // computation -- the window resize listener itself (the whole reason
    // this effect subscribes to "resize" rather than just running once) had
    // no coverage.
    mockRect({ left: 400, right: 600 }); // fits comfortably at first
    render(<NotesPopup text="Hello" />);
    expect(screen.getByText("Hello").style.getPropertyValue("--popup-offset")).toBe("0px");

    mockRect({ left: -20, right: 80 }); // now overflows the left edge
    fireEvent(window, new Event("resize"));
    expect(screen.getByText("Hello").style.getPropertyValue("--popup-offset")).toBe("28px");
  });

  it("stops repositioning on resize after unmount", () => {
    // REGRESSION-SHAPED: the effect's cleanup removes the "resize" listener
    // on unmount -- confirm a resize after unmount doesn't throw (e.g. from
    // touching a ref.current that's already null) and doesn't leave a
    // dangling listener still trying to measure a detached element.
    mockRect({ left: 400, right: 600 });
    const { unmount } = render(<NotesPopup text="Hello" />);
    unmount();
    expect(() => fireEvent(window, new Event("resize"))).not.toThrow();
  });
});
