import "../styles/Links.css";
import IndividualLink from "./IndividualLink";

export default function Links() {
  return (
    <div class="linksContainer">
      <IndividualLink
        link="https://sethduncan.wordpress.com/"
        text="Blog"
        external
      />
      <IndividualLink
        link="https://github.com/DJSethDuncan"
        text="Code"
        external
      />
      <IndividualLink
        link="https://soundcloud.com/sethduncanmusic"
        text="Music"
        external
      />
      <IndividualLink
        link="https://www.youtube.com/channel/UC2EZLBOo_5SaZjrucDD1RDw"
        text="Video"
        external
      />
    </div>
  );
}
