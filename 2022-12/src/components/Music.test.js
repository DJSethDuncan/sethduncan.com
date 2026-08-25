import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Music from "./Music";

jest.mock("../data/tracks", () => ({
  __esModule: true,
  albums: [
    { name: "Old Album", group: "Solo", year: 2010, tags: [], tracks: [] },
    { name: "New Album", group: "Solo", year: 2022, tags: [], tracks: [] },
  ],
  default: [
    { name: "Mid Track", group: "Solo", year: 2015, tags: [], notes: "", cover: "/c.jpg" },
  ],
}));

jest.mock("../context/MusicPlayerContext", () => ({
  useMusicPlayer: () => ({ playGroup: () => {} }),
}));

describe("Music", () => {
  it("orders albums and tracks within a group by year, newest first", () => {
    // REGRESSION-SHAPED: albums and tracks are sorted together into one
    // `entries` array by year -- if that comparator were flipped or only
    // applied within one type, a newer release could render below an
    // older one.
    const { container } = render(
      <MemoryRouter>
        <Music />
      </MemoryRouter>
    );

    const names = Array.from(container.querySelectorAll(".trackGrid > *"))
      .map((el) => el.textContent)
      .map((text) =>
        ["Old Album", "New Album", "Mid Track"].find((name) => text.startsWith(name))
      );

    expect(names).toEqual(["New Album", "Mid Track", "Old Album"]);
  });
});
