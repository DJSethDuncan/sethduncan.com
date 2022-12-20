import "../styles/App.css";
import Logo from "./Logo";
import Links from "./Links";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <p class="headerTitle">Seth Duncan</p>
        </header>
        <div className="body">
          {/* <Logo /> */}
          <Links />
        </div>
      </div>
    </div>
  );
}

export default App;
