import "../styles/App.css";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Landon from "../components/Landon";
import Muster from "../components/Muster";
import PrivacyMuster from "../components/PrivacyMuster";
import MusterTerms from "../components/MusterTerms";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
