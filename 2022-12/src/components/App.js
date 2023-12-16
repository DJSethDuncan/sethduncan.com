import "../styles/App.css";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Landon from "../components/Landon";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="landon" element={<Landon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
