import CredentialItems from "./CredentialItems";
import styles from "./Credentials.module.css";

function Credential() {
  // function credentialList() {}
  return (
    <div className={styles.credentialsbody}>
      <div className={styles.credentialscontainer}>
        <header>
          <div>Recipient ID</div>
          <div>Name</div>
          <div>Recipient email</div>
          <div>Degree name</div>
          <div>degree type</div>
          <div>awarded date</div>
          <div>Certificate image</div>
          <div style={{ opacity: "0" }}>Certificate image</div>
        </header>
        <CredentialItems />
      </div>
    </div>
  );
}

export default Credential;
