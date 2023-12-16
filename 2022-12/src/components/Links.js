import "../styles/Links.css";
import IndividualLink from "./IndividualLink";

export default function Links() {
  return (
    <div class="linksContainer">
      <IndividualLink
        link="https://github.com/DJSethDuncan"
        text="github"
        external
      />
      <IndividualLink
        link="https://soundcloud.com/sethduncanmusic"
        text="soundcloud"
        external
      />
      <IndividualLink
        link="https://www.youtube.com/channel/UC2EZLBOo_5SaZjrucDD1RDw"
        text="youtube"
        external
      />
    </div>
  );
}
