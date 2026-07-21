import "../styles/App.css";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Landon from "../components/Landon";
import Music from "../components/Music";
import StageIEM from "../components/privacy/StageIEM";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="landon" element={<Landon />} />
          <Route path="music" element={<Music />} />
          <Route path="privacy/stageiem" element={<StageIEM />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
