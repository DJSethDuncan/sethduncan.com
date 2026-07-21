const StageIEM = () => {
  return (
    <div id="aboutText">
      <div className="header">
        <div className="titleContainer">
          <h1 className="headerTitle">StageIEM — Privacy Policy</h1>
        </div>
      </div>

      <div className="separator"><hr /></div>

      <p><strong>Effective date:</strong> March 2026</p>

      <p>
        StageIEM is an iOS app for controlling in-ear monitor mixes on Behringer X32
        and Midas M32 audio consoles over a local Wi-Fi network.
      </p>

      <p><strong>Data collection</strong></p>
      <p>
        StageIEM does not collect, transmit, or store any personal data.
        The app communicates exclusively with audio hardware on your local network.
        No information leaves your device or your local network.
      </p>

      <p><strong>Local network usage</strong></p>
      <p>
        StageIEM uses your device's local network solely to discover and send
        OSC control messages to your audio console. This requires iOS to ask for
        local network permission on first launch.
      </p>

      <p><strong>Data stored on device</strong></p>
      <p>
        The app saves the following to your device only, using iOS standard storage (UserDefaults):
      </p>
      <ul>
        <li>The IP address of your last-used console</li>
        <li>Your last-used mix bus selection</li>
        <li>Your channel group visibility preferences</li>
      </ul>
      <p>
        This data never leaves your device and is used only to restore your session
        when you reopen the app.
      </p>

      <p><strong>Third-party services</strong></p>
      <p>
        StageIEM uses no third-party SDKs, analytics, advertising, or crash reporting services.
      </p>

      <p><strong>Contact</strong></p>
      <p>
        Questions? Reach out at{" "}
        <a href="mailto:seth@sethduncan.com">seth@sethduncan.com</a>.
      </p>
    </div>
  );
};

export default StageIEM;
