import { render, screen } from "@testing-library/react";
import IndividualLink from "./IndividualLink";

describe("IndividualLink", () => {
  it("opens external links in a new tab with noopener/noreferrer", () => {
    // REGRESSION: without noopener/noreferrer, a page opened via target="_new"
    // could use window.opener to redirect this tab to a phishing page.
    render(<IndividualLink link="https://example.com" text="Example" external />);
    const link = screen.getByRole("link", { name: "Example" });
    expect(link.getAttribute("target")).toBe("_new");
    expect(link.getAttribute("rel")).toContain("noopener");
    expect(link.getAttribute("rel")).toContain("noreferrer");
  });

  it("opens internal links in the same tab without noopener/noreferrer", () => {
    render(<IndividualLink link="/music" text="Music" />);
    const link = screen.getByRole("link", { name: "Music" });
    expect(link.getAttribute("target")).toBe("_self");
    expect(link.getAttribute("rel")).toBe("external");
  });
});
