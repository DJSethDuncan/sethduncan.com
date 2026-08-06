import { render, screen, fireEvent } from "@testing-library/react";
import AlbumCard from "./AlbumCard";

function makeAlbum(overrides = {}) {
  return {
    name: "Test Album",
    cover: "cover.jpg",
    year: 2020,
    tags: [],
    tracks: [
      { name: "Track One", notes: "Track One" },
      { name: "Track Two", notes: "Track Two" },
    ],
    ...overrides,
  };
}

describe("AlbumCard", () => {
  it("does not show the tracklist until expanded", () => {
    render(<AlbumCard album={makeAlbum()} onPlayTrack={() => {}} />);
    expect(screen.queryByText("Track One")).toBeNull();
  });

  it("shows the tracklist and sets aria-expanded after clicking the header", () => {
    render(<AlbumCard album={makeAlbum()} onPlayTrack={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: /Test Album/ }));

    expect(screen.getByRole("button", { name: /Track One/ })).toBeTruthy();
    expect(screen.getByRole("button", { name: /Track Two/ })).toBeTruthy();
    expect(screen.getByRole("button", { name: /Test Album/ }).getAttribute("aria-expanded")).toBe("true");
  });

  it("collapses again on a second click of the header", () => {
    render(<AlbumCard album={makeAlbum()} onPlayTrack={() => {}} />);
    const header = screen.getByRole("button", { name: /Test Album/ });

    fireEvent.click(header);
    fireEvent.click(header);

    expect(screen.queryByText("Track One")).toBeNull();
    expect(header.getAttribute("aria-expanded")).toBe("false");
  });

  it("calls onPlayTrack with the clicked track's index, not its position among other entries", () => {
    // REGRESSION-SHAPED: onPlayTrack is wired from each row's `.map` index,
    // not from some other track-lookup -- clicking the second row must pass
    // index 1, not e.g. an id or a miscounted index.
    const onPlayTrack = jest.fn();
    render(<AlbumCard album={makeAlbum()} onPlayTrack={onPlayTrack} />);
    fireEvent.click(screen.getByRole("button", { name: /Test Album/ }));

    fireEvent.click(screen.getByRole("button", { name: /Track Two/ }));

    expect(onPlayTrack).toHaveBeenCalledWith(1);
  });

  it("does not render a tag list when the album has no tags", () => {
    render(<AlbumCard album={makeAlbum({ tags: [] })} onPlayTrack={() => {}} />);
    expect(screen.queryByText("live")).toBeNull();
  });

  it("renders each tag when the album has tags", () => {
    render(<AlbumCard album={makeAlbum({ tags: ["live", "remix"] })} onPlayTrack={() => {}} />);
    expect(screen.getByText("live")).toBeTruthy();
    expect(screen.getByText("remix")).toBeTruthy();
  });
});
