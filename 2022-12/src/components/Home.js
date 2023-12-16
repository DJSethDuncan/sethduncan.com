import Links from "../components/Links";

export default function Home() {
  return (
    <>
      <header className="header">
        <div class="titleContainer">
          <p class="headerTitle">Seth Duncan</p>
        </div>

        <Links />
      </header>
      <div class="separator">
        <hr />
      </div>
      <div id="aboutText">
        <p>
          <strong>I'm a creator and a tinkerer.</strong> At my happiest, I'll be
          found making something new to be put out in the world. Most often this
          shows through building software and writing music.
        </p>
        <p>
          <strong>I love collaborating.</strong> I reach for the moments where I
          discover something by working with other people.
        </p>
        <p>
          <strong>I'm a perpetual student.</strong> I can't stop won't stop
          learning.
        </p>
      </div>
    </>
  );
}
