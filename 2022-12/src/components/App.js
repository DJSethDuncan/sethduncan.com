import "../styles/App.css";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Landon from "../components/Landon";
import Muster from "../components/Muster";
import PrivacyMuster from "../components/PrivacyMuster";
import MusterTerms from "../components/MusterTerms";
import Wedge from "../components/Wedge";
import PrivacyWedge from "../components/PrivacyWedge";
import WedgeTerms from "../components/WedgeTerms";
import PrivacyTamofishi from "../components/PrivacyTamofishi";
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
          <Route path="muster" element={<Muster />} />
          <Route path="muster/privacy" element={<PrivacyMuster />} />
          <Route path="muster/terms-and-conditions" element={<MusterTerms />} />
          <Route path="wedge" element={<Wedge />} />
          <Route path="wedge/privacy" element={<PrivacyWedge />} />
          <Route path="wedge/terms-and-conditions" element={<WedgeTerms />} />
          <Route path="tamofishi/privacy" element={<PrivacyTamofishi />} />
          <Route path="music" element={<Music />} />
          <Route path="privacy/stageiem" element={<StageIEM />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
