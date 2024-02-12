import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./Signin.module.css";
import toast from "react-hot-toast";

const issuerid = JSON.parse(localStorage.getItem("issuerid"));
console.log(issuerid);
export async function credentialList(issuerid) {
  const res = await fetch(
    `https://verisynth.onrender.com/api/v1/institution/get-all-my-credentials?${issuerid}`
  );
  const data = await res.json();
  console.log(data);
  console.log("hi");
}

function Signin() {
  const navigate = useNavigate();
  const payload = {
    email: "olareign98@gmail.com",
    password: "P@ssW0rd",
  };

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  function onSignin(data) {
    console.log(data);
    async function getSignin(data) {
      const res = await fetch(
        "https://verisynth.onrender.com/api/v1/institution/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      data = await res.json();
      console.log(payload);
      if (data.message !== "Istitution account created SuccessFully") {
        toast.error(data.message);
        return;
      }

      toast.success("Successfully login");
      reset();
      navigate("/dashboard/profile");
      console.log(data);
      // console.log(data.data.data._id);
      localStorage.setItem("issuerid", JSON.stringify(data.data.data._id));
      localStorage.setItem("token", JSON.stringify(data.data.token));
      console.log(data.token);
      const token = JSON.parse(localStorage.getItem("token"));
      console.log(token);
      console.log(localStorage);
      localStorage.setItem("user", JSON.stringify(data));
    }
    getSignin(data);
  }

  return (
    <form className={styles.signinform} onSubmit={handleSubmit(onSignin)}>
      <div className={styles.formcontainer}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email", { required: "email is required" })}
        />
        {errors?.email?.message && (
          <p style={{ color: "red", fontSize: "1.1rem" }}>
            {errors.email.message}
          </p>
        )}
      </div>
      <div className={styles.formcontainer}>
        <label htmlFor="pasword">Password</label>
        <input
          id="password"
          {...register("password", { required: "password is required" })}
        />
        {errors?.password?.message && (
          <p style={{ color: "red", fontSize: "1.1rem" }}>
            {errors.password.message}
          </p>
        )}
      </div>
      <button className={styles.signinbtn}>continue</button>

      <p>
        Do not have an Account?
        <button className={styles.signupbtn}>Sign up</button>
      </p>
    </form>
  );
}

export default Signin;
