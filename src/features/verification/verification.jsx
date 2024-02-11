import styles from "./verification.module.css";
function verification() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Verify Credential</h2>
        <p>To verify the credential Please Enter The Unique ID.</p>
      </header>
      <form className={styles.verificationform}>
        <input type="text" placeholder="ENTER  UNIQUE ID" />
        <button>Verify</button>
      </form>
    </div>
  );
}

export default verification;
