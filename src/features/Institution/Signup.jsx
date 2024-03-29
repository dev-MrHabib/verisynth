import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./Signup.module.css";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();

  const { register, handleSubmit, getValues, formState, reset } = useForm();

  const { errors } = formState;

  function onSignup(data) {
    console.log(data);
    async function getSignup(data) {
      const res = await fetch(
        "https://verisynth.onrender.com/api/v1/institution/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      data = await res.json();
      console.log(data);
      if (data.message !== "Istitution account created SuccessFully") {
        toast.error(data.message);
        return;
      }
      toast.success(data.message);
      reset();
      navigate("/dashboard/profile");
    }
    getSignup(data);
  }
  return (
    <form className={styles.signupform} onSubmit={handleSubmit(onSignup)}>
      <h3>Institution Sign up</h3>
      <div className={styles.formsignupcontainer}>
        <label htmlFor="institution_name">Institution </label>
        <input
          id="institution_name"
          {...register("institution_name", {
            required: "institution name is required",
          })}
        />
        {errors?.institution_name?.message && (
          <p style={{ color: "red", fontSize: "1.2rem" }}>
            {errors.institution.message}
          </p>
        )}
      </div>
      <div className={styles.formsignupcontainer}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email", {
            required: "email is required",
            validate: (value) => value.includes("@") || "enter a valid email",
          })}
        />
        {errors?.email?.message && (
          <p style={{ color: "red", fontSize: "1.2rem" }}>
            {errors.email.message}
          </p>
        )}
      </div>
      <div className={styles.formsignupcontainer}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          {...register("password", { required: "password is required" })}
        />
        {errors?.password?.message && (
          <p style={{ color: "red", fontSize: "1.2rem" }}>
            {errors.password.message}
          </p>
        )}
      </div>
      <div className={styles.formsignupcontainer}>
        <label htmlFor="confirmPassword">confirm Password</label>
        <input
          id="confirmPassword"
          {...register("confirmPassword", {
            validate: (value) =>
              value === getValues().password ||
              "confirm password must be the same with password",
          })}
        />
        {errors?.confirmpassword?.message && (
          <p style={{ color: "red", fontSize: "1.2rem" }}>
            {errors.confirmpassword.message}
          </p>
        )}
      </div>
      <button className={styles.signupbtn}>create account</button>
    </form>
  );
}

export default Signup;
