function PrivacyMuster() {
  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "2rem 1rem", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Muster</h1>
      <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
      <h1>Muster Privacy Policy</h1>
      <p><em>Last updated: March 25, 2025</em></p>

      <p>
        Muster helps organizations communicate with volunteers about events via text message.
        This policy explains what information we collect, how we use it, and your rights.
      </p>

      <h2>Information We Collect</h2>
      <p>We collect:</p>
      <ul>
        <li><strong>Phone number</strong> — provided when you opt in to receive messages.</li>
        <li><strong>Message content</strong> — text messages you send to or receive from Muster.</li>
        <li><strong>Interaction data</strong> — timestamps and delivery status of messages.</li>
      </ul>
      <p>We do not collect payment information, precise location, or any data beyond what is necessary to send and receive volunteer communications.</p>

      <h2>How We Use Your Information</h2>
      <p>Your information is used solely to:</p>
      <ul>
        <li>Send you updates, reminders, and communications about volunteer events you are involved with.</li>
        <li>Process and respond to messages you send.</li>
        <li>Maintain a record of communications for operational purposes.</li>
      </ul>
      <p>We do not use your information for advertising, and we do not sell or rent your data to any third party.</p>

      <h2>Text Messaging Consent</h2>
      <p>
        By opting in to Muster, you consent to receive text messages related to volunteer events.
        Message frequency varies. Standard message and data rates may apply.
        Your consent is not a condition of participation in any event or program.
      </p>

      <h2>Opting Out</h2>
      <p>
        You may opt out at any time by replying <strong>STOP</strong> to any message. You will receive a
        confirmation and no further messages will be sent. To re-enroll, reply <strong>START</strong>.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not sell, trade, or share your personal information with third parties except:
      </p>
      <ul>
        <li><strong>Service providers</strong> — third-party providers used solely to operate the service on our behalf, including Twilio (SMS delivery), OpenAI, and Anthropic (message parsing via AI). Message content is sent to AI providers for parsing purposes only — we never associate your phone number or identity with message content when communicating with these providers. These providers are bound by confidentiality obligations and are not permitted to use your data for their own purposes.</li>
        <li><strong>Legal requirements</strong> — if required by law or to protect the rights and safety of users.</li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        We retain message data only as long as necessary for operational purposes or as required by law.
        You may request deletion of your data at any time by contacting us below.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect your information.
        No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you.</li>
        <li>Request correction or deletion of your data.</li>
        <li>Opt out of communications at any time.</li>
      </ul>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. The date at the top of this page reflects the most recent revision.
        Continued use of Muster after changes constitutes acceptance of the updated policy.
      </p>

      <h2>Contact</h2>
      <p>
        For questions or data requests, contact: <a href="mailto:privacy@sethduncan.com">privacy@sethduncan.com</a>
      </p>
    </div>
  );
}

export default PrivacyMuster;
