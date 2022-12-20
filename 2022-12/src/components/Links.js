import "../styles/Links.css";
import Link from "./Link";

export default function Links() {
  return (
    <div class="linksContainer">
      <Link link="https://github.com/DJSethDuncan" text="github" external />
      <Link
        link="https://soundcloud.com/sethduncanmusic"
        text="soundcloud"
        external
      />
      <Link
        link="https://www.youtube.com/channel/UC2EZLBOo_5SaZjrucDD1RDw"
        text="youtube"
        external
      />
    </div>
  );
}
