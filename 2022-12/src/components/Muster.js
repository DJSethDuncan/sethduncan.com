import { Link } from "react-router-dom";

function Muster() {
  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "2rem 1rem", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Muster</h1>
      <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
      <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
        Easy volunteer coordination through simple, smart texts.
      </p>
      <p>
        Muster makes it easy to keep volunteers informed and ready. Send reminders, share updates,
        and handle responses — all over text message, with no app to download.
      </p>
      <p>
        Volunteers reply naturally. Muster handles the rest.
      </p>
      <hr style={{ marginTop: "40px", marginBottom: "20px" }} />
      <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>SMS Program Information</h2>
      <p style={{ fontSize: "0.9rem" }}>
        <strong>Program name:</strong> Muster Volunteer Alerts
      </p>
      <p style={{ fontSize: "0.9rem" }}>
        Volunteers are enrolled by an event organizer who has obtained their consent to receive
        messages. You will receive SMS messages about your volunteer assignments, including shift
        reminders, scheduling updates, and responses to your questions.
      </p>
      <p style={{ fontSize: "0.9rem" }}>
        Message frequency varies based on your assignments. Msg &amp; Data rates may apply.
      </p>
      <p style={{ fontSize: "0.9rem" }}>
        Reply <strong>STOP</strong> to cancel. Reply <strong>HELP</strong> for help.
      </p>
      <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
      <p style={{ fontSize: "0.85rem", color: "#888", textAlign: "center" }}>
        <Link to="/muster/privacy">Privacy Policy</Link>
        {" · "}
        <Link to="/muster/terms-and-conditions">Terms and Conditions</Link>
      </p>
    </div>
  );
}

export default Muster;
