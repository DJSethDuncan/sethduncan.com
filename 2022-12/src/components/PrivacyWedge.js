function PrivacyWedge() {
  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "2rem 1rem", lineHeight: "1.6", overflowY: "scroll", height: "100vh" }}>
      <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Wedge</h1>
      <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
      <h1>Wedge Privacy Policy</h1>
      <p><em>Last updated: May 23, 2025</em></p>

      <p>
        Wedge is a native iOS app for controlling personal IEM monitor mixes on Behringer X32 and
        Midas M32 audio consoles over Wi-Fi. This policy explains what information the app accesses
        and how it is used.
      </p>

      <h2>Information We Collect</h2>
      <p>
        Wedge does not collect, store, or transmit any personal information. The app does not
        require an account, does not connect to any external servers, and does not include analytics
        or tracking of any kind.
      </p>
      <p>The only data the app handles:</p>
      <ul>
        <li><strong>Console IP address</strong> — entered by you and stored locally on your device to remember your last connection.</li>
        <li><strong>App preferences</strong> — your selected IEM bus and any hidden groups are stored locally on your device.</li>
      </ul>
      <p>
        All communication happens directly between your iPhone and your audio console over your
        local Wi-Fi network using the OSC protocol over UDP. No data leaves your network.
      </p>

      <h2>Local Network Access</h2>
      <p>
        Wedge requests access to your local network solely to communicate with your audio console.
        This permission is required for the app to function and is not used for any other purpose.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not share any data with third parties. There is no data to share — no information
        is collected or transmitted beyond your local network.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Wedge does not collect any personal information from anyone, including children under 13.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. The date at the top of this page reflects
        the most recent revision.
      </p>

      <h2>Contact</h2>
      <p>
        For questions, contact: <a href="mailto:privacy@sethduncan.com">privacy@sethduncan.com</a>
      </p>
    </div>
  );
}

export default PrivacyWedge;
