import { useForm } from "react-hook-form";
import styles from "./Credentialform.module.css";
import { LuUpload } from "react-icons/lu";
function CredentialForm() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  function onError(errors) {
    console.log(errors);
  }

  return (
    <form
      className={styles.credentialform}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <h3>Create Credential</h3>
      <div className={styles.credentialformcontainer}>
        <label htmlFor="email">Recipient Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "enter a valid email" })}
        />
      </div>
      <div className={styles.credentialformcontainer}>
        <label htmlFor="id">Recipient ID</label>
        <input
          type="number"
          placeholder="Unique ID"
          id="id"
          {...register("id", { required: "enter a unique id" })}
        />
      </div>
      <div className={styles.credentialformcontainer}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "full name is required",
          })}
        />
      </div>
      <div className={styles.credentialformcontainer}>
        <label htmlFor="degreename">Degree Name</label>
        <input
          type="text"
          id="degreename"
          {...register("degreename", { required: "enter course of study" })}
        />
      </div>
      <div className={styles.credentialformcontainer}>
        <label htmlFor="degreetype">Degree Type</label>
        <input
          id="degreetype"
          {...register("type", { required: "enter degree type" })}
        />
      </div>
      <div className={styles.credentialformcontainer}>
        <label htmlFor="password">Awarded Date</label>
        <input
          type="date"
          id="password"
          {...register("password", { required: "awarded date is required" })}
        />
      </div>
      <div className={styles.filetext}>
        <h4>Import PDF</h4>
        <p>Upload generic certificate not more than 3mb</p>
      </div>

      <label className={styles.fileupload}>
        <input type="file" required className={styles.fileinput} />
        <div>
          <div className={styles.fileicon}>
            <LuUpload />
          </div>

          <p>import credential</p>
        </div>
      </label>
      <button className={styles.credentialformbtn}>create Credential</button>
    </form>
  );
}

export default CredentialForm;
