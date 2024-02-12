import { useForm } from "react-hook-form";
import styles from "./verification.module.css";
import toast from "react-hot-toast";
import { useState } from "react";
function Verification() {
  const { register, handleSubmit, reset } = useForm();
  const [details, setDetails] = useState({});

  const { fullname, institution_id } = details;

  console.log(fullname, institution_id);
  function onVerification(data) {
    console.log(data);
    async function getVerification(data) {
      const res = await fetch(
        "https://verisynth.onrender.com/api/v1/verify/credential",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      data = await res.json();
      setDetails(data.data.credential);
      console.log(data);
      if (data.message !== "User credential is Valid") {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);
      reset();
    }
    getVerification(data);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Verify Credential</h2>
        <p>To verify the credential Please Enter The Unique ID.</p>
      </header>
      <form
        className={styles.verificationform}
        onSubmit={handleSubmit(onVerification)}
      >
        <input
          type="text"
          placeholder="ENTER  UNIQUE ID"
          id="credential_ID"
          {...register("credential_ID", {
            required: "A unique verification id is required",
          })}
        />
        <button>Verify</button>
      </form>
      <div></div>
    </div>
  );
}

export default Verification;
