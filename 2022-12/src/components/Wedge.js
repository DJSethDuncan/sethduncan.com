import { Link } from "react-router-dom";

function Wedge() {
  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "2rem 1rem", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Wedge</h1>
      <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
      <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
        Your personal IEM mix, in your pocket.
      </p>
      <p>
        Wedge is a native iPhone app for dialing in your own monitor mix on Behringer X32 and
        Midas M32 consoles — no laptop, no middleware, no FOH involvement required.
      </p>
      <p>
        Connect directly to your console over Wi-Fi and take control of your mix during rehearsal
        and performance. Fast, focused, and built for performers.
      </p>
      <hr style={{ marginTop: "40px", marginBottom: "20px" }} />
      <p style={{ fontSize: "0.85rem", color: "#888", textAlign: "center" }}>
        <Link to="/wedge/privacy">Privacy Policy</Link>
        {" · "}
        <Link to="/wedge/terms-and-conditions">Terms and Conditions</Link>
      </p>
    </div>
  );
}

export default Wedge;
