import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Music from "./Music";

jest.mock("../data/tracks", () => ({
  __esModule: true,
  albums: [
    { name: "Old Album", group: "Solo", year: 2010, tracks: [], tags: [] },
    { name: "New Album", group: "Solo", year: 2020, tracks: [], tags: [] },
  ],
  default: [
    { name: "Old Track", group: "Solo", year: 2015, tags: [], notes: "" },
    { name: "DJ Track", group: "DJ Sets", year: 2018, tags: [], notes: "" },
  ],
}));

const mockPlayGroup = jest.fn();
jest.mock("../context/MusicPlayerContext", () => ({
  useMusicPlayer: () => ({ playGroup: mockPlayGroup }),
}));

function renderMusic() {
  return render(
    <MemoryRouter>
      <Music />
    </MemoryRouter>
  );
}

describe("Music", () => {
  beforeEach(() => {
    mockPlayGroup.mockClear();
  });

  it("orders albums and tracks within a group newest-year-first, interleaved by year not by type", () => {
    // REGRESSION-SHAPED: entries mix albums and standalone tracks into one
    // list before sorting by year -- sorting each type separately (a common
    // refactor mistake) would silently break this interleaving.
    const { container } = renderMusic();
    const soloSection = Array.from(container.querySelectorAll(".groupection")).find(
      (el) => el.querySelector(".groupTitle").textContent === "Solo"
    );
    const text = soloSection.textContent;
    expect(text.indexOf("New Album")).toBeLessThan(text.indexOf("Old Track"));
    expect(text.indexOf("Old Track")).toBeLessThan(text.indexOf("Old Album"));
  });

  it("groups tracks and albums by their group field, not into one flat list", () => {
    const { container } = renderMusic();
    const sections = Array.from(container.querySelectorAll(".groupTitle")).map(
      (el) => el.textContent
    );
    expect(sections).toEqual(expect.arrayContaining(["Solo", "DJ Sets"]));
  });

  it("clicking a standalone track calls playGroup with its index within its own group, not the global list", () => {
    renderMusic();
    fireEvent.click(screen.getByText("DJ Track"));
    expect(mockPlayGroup).toHaveBeenCalledWith(
      expect.arrayContaining([expect.objectContaining({ name: "DJ Track" })]),
      0
    );
  });
});
