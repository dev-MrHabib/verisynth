//import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./Signin.module.css";

function Signin() {
  //const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  function onSignin(data) {
    console.log(data);
  }
  function onerrors(errors) {
    console.log(errors);
  }

  return (
    <form
      className={styles.signinform}
      onSubmit={handleSubmit(onSignin, onerrors)}
    >
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
