import { useEffect, useRef, useState } from "react";

const VIEWPORT_MARGIN = 8;

// Shared by Music.js (trackCard) and AlbumCard.js (albumTrackRow) -- both
// anchor this centered above a button via CSS :hover/:focus. Centering
// alone can push the popup past the left/right edge of the viewport for
// cards near the edge of a wrapped grid row, so this measures itself and
// applies a corrective horizontal offset, recomputed on resize.
export function NotesPopup({ text }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function reposition() {
      const el = ref.current;
      if (!el) return;
      // Reset to the neutral centered position before measuring, so a
      // correction from a previous layout (e.g. before a resize) doesn't
      // compound into the new one.
      el.style.transform = "translateX(-50%)";
      const rect = el.getBoundingClientRect();
      let correction = 0;
      if (rect.left < VIEWPORT_MARGIN) {
        correction = VIEWPORT_MARGIN - rect.left;
      } else if (rect.right > window.innerWidth - VIEWPORT_MARGIN) {
        correction = window.innerWidth - VIEWPORT_MARGIN - rect.right;
      }
      setOffset(correction);
    }
    reposition();
    window.addEventListener("resize", reposition);
    return () => window.removeEventListener("resize", reposition);
  }, [text]);

  return (
    <span ref={ref} className="notesPopup" style={{ "--popup-offset": `${offset}px` }}>
      {text}
    </span>
  );
}
