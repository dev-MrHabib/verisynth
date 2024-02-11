import styles from "./Help.module.css";
function Help() {
  return (
    <div className={styles.container}>
      <h3>Welcome to Verisynth Support</h3>
      <p>Friendly, convenient & Professional </p>
      <p>
        Need Help?
        <a href="mailto:verisynth@gmail.com">click here</a>
      </p>
    </div>
  );
}

export default Help;
