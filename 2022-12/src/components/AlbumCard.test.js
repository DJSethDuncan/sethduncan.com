import { render, screen, fireEvent } from "@testing-library/react";
import AlbumCard from "./AlbumCard";

const album = {
  name: "Test Album",
  cover: "/cover.jpg",
  year: 2024,
  tags: ["synth"],
  tracks: [
    { name: "Track One", notes: "" },
    { name: "Track Two", notes: "" },
  ],
};

describe("AlbumCard", () => {
  it("does not show the tracklist until the header is clicked", () => {
    render(<AlbumCard album={album} onPlayTrack={() => {}} />);
    expect(screen.queryByText("Track One")).toBeNull();
  });

  it("toggles the tracklist open and closed when the header is clicked", () => {
    render(<AlbumCard album={album} onPlayTrack={() => {}} />);
    const header = screen.getByRole("button", { name: /Test Album/ });

    fireEvent.click(header);
    expect(screen.getByText("Track One")).toBeTruthy();
    expect(header.getAttribute("aria-expanded")).toBe("true");

    fireEvent.click(header);
    expect(screen.queryByText("Track One")).toBeNull();
    expect(header.getAttribute("aria-expanded")).toBe("false");
  });

  it("calls onPlayTrack with the clicked track's index, not always 0", () => {
    // REGRESSION-SHAPED: each track row's onClick closes over `index` from
    // the .map -- a stale-closure or copy/paste bug here would make every
    // row play track 0 regardless of which one was clicked.
    const onPlayTrack = jest.fn();
    render(<AlbumCard album={album} onPlayTrack={onPlayTrack} />);
    fireEvent.click(screen.getByRole("button", { name: /Test Album/ }));

    fireEvent.click(screen.getByText("Track Two"));

    expect(onPlayTrack).toHaveBeenCalledWith(1);
  });
});
