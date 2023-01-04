import "../styles/App.css";
import Logo from "./Logo";
import Links from "./Links";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div class="titleContainer">
            <p class="headerTitle">Seth Duncan</p>
          </div>

          <div class="titleLinkList">
            <a href="https://github.com/DJSethDuncan" target="_new">
              CODE
            </a>
            <a href="https://sethduncanmusic.bandcamp.com/" target="_new">
              MUSIC
            </a>
          </div>
        </header>
        <div class="separator">
          <hr />
        </div>
        <div id="aboutText">
          <p>
            <strong>I'm a creator and a tinkerer.</strong> At my happiest, I'll
            be found making something new to be put out in the world. Most often
            this shows through building software and writing music.
          </p>
          <p>
            <strong>I love collaborating.</strong> I reach for the moments where
            I discover something new by working with other people.
          </p>
          <p>
            <strong>I'm a perpetual student.</strong> Some more information
            about this thing.
          </p>
        </div>

        {/* <div className="body"> */}
        {/* <Logo /> */}
        {/* <Links /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
