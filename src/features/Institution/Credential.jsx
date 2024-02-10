import styles from "./credentials.module.css";

function Credential() {
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
          <div>Delete</div>
        </header>
      </div>
    </div>
  );
}

export default Credential;
