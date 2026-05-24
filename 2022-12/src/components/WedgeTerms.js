function WedgeTerms() {
  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "2rem 1rem", lineHeight: "1.6", overflowY: "scroll", height: "100vh" }}>
      <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Wedge</h1>
      <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
      <h1>Wedge Terms and Conditions</h1>
      <p><em>Last updated: May 23, 2025</em></p>

      <p>
        These Terms and Conditions govern your use of Wedge, a native iOS application for
        controlling personal IEM monitor mixes on Behringer X32 and Midas M32 audio consoles.
        By downloading or using Wedge, you agree to these terms.
      </p>

      <h2>The App</h2>
      <p>
        Wedge allows performers to control their personal monitor mix directly from an iPhone
        via OSC over a local Wi-Fi network. The app communicates directly with your audio
        console and does not depend on any external servers or services.
      </p>

      <h2>Eligibility</h2>
      <p>
        Wedge is intended for use by performers and audio engineers. You must be at least 13
        years old to use the app.
      </p>

      <h2>Acceptable Use</h2>
      <p>
        Wedge sends OSC commands to audio consoles on your local network. You are responsible
        for ensuring you have authorization to control any console you connect to. You agree
        not to use Wedge to interfere with equipment or performances you are not authorized
        to manage.
      </p>

      <h2>No Warranty</h2>
      <p>
        Wedge is provided "as is" without warranties of any kind. Audio consoles, Wi-Fi
        networks, and live performance environments introduce variables outside our control.
        We do not guarantee uninterrupted or error-free operation, and the app is not
        suitable for safety-critical applications.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Wedge and its developers shall not be liable
        for any indirect, incidental, or consequential damages arising from your use of the
        app, including audio issues, equipment interactions, or performance disruptions.
      </p>

      <h2>Third-Party Hardware</h2>
      <p>
        Wedge is designed for use with Behringer X32 and Midas M32 consoles using the OSC
        protocol. Compatibility with other hardware is not guaranteed. Wedge is not affiliated
        with, endorsed by, or supported by Behringer or Music Group.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these terms from time to time. The date at the top of this page reflects
        the most recent revision. Continued use of the app after changes constitutes acceptance
        of the updated terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by the laws of the United States. Any disputes arising from
        use of the app will be resolved in the appropriate courts of jurisdiction.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these terms, contact:{" "}
        <a href="mailto:privacy@sethduncan.com">privacy@sethduncan.com</a>
      </p>
    </div>
  );
}

export default WedgeTerms;
