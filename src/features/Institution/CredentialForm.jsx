import { useState } from "react";
import styles from "./Credentialform.module.css";
//import { LuUpload } from "react-icons/lu";
function CredentialForm() {
  const [recipient_email, setRecipient_email] = useState("");
  const [recipient_ID, setRecipient_ID] = useState("");
  const [fullname, setFullname] = useState("");
  const [degree_name, setDegree_name] = useState("");
  const [awarded_date, setAwarded_date] = useState("");
  const [expiration_date, setExpiration_date] = useState("");
  //const [file, setFile] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));
  function createCredential(e) {
    e.preventDefault();

    const credentialDetails = {
      recipient_email,
      recipient_ID,
      fullname,
      degree_name,
      awarded_date,
      expiration_date,
    };
    async function getCredential(data) {
      const res = await fetch(
        "https://verisynth.onrender.com/api/v1/institution/issue/credential",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      data = await res.json();
      console.log(data);
    }
    getCredential(credentialDetails);
    console.log(credentialDetails);
  }

  return (
    <>
      <form className={styles.credentialform}>
        <h3>Create Credential</h3>
        <div className={styles.credentialformcontainer}>
          <label htmlFor="recipient_email">Recipient Email</label>
          <input
            type="email"
            id="recipient_email"
            onChange={(e) => setRecipient_email(e.target.value)}
          />
        </div>
        <div className={styles.credentialformcontainer}>
          <label htmlFor="recipient_ID">Recipient ID</label>
          <input
            type="number"
            placeholder="Unique ID"
            id="recipient_ID"
            onChange={(e) => setRecipient_ID(e.target.value)}
          />
        </div>
        <div className={styles.credentialformcontainer}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className={styles.credentialformcontainer}>
          <label htmlFor="degree_name">Degree Name</label>
          <input
            type="text"
            id="degree_name"
            onChange={(e) => setDegree_name(e.target.value)}
          />
        </div>
        <div className={styles.credentialformcontainer}>
          <label htmlFor="awarded_date">Awarded Date</label>
          <input
            type="date"
            id="awarded_date"
            onChange={(e) => setAwarded_date(e.target.value)}
          />
        </div>
        <div className={styles.credentialformcontainer}>
          <label htmlFor="expiration_date">Expiration Date</label>
          <input
            type="date"
            id="expiration_date"
            onChange={(e) => setExpiration_date(e.target.value)}
          />
        </div>

        <button className={styles.credentialformbtn} onClick={createCredential}>
          create Credential
        </button>
      </form>
    </>
  );
}

export default CredentialForm;
/* 
 {...register("email", { required: "enter a valid email" })}
 {...register("id", { required: "enter a unique id" })}
   {...register("name", {
            required: "full name is required",
          })}
           {...register("degreename", { required: "enter course of study" })}

            {...register("type", { required: "enter degree type" })}

              {...register("password", { required: "awarded date is required" })}

*/
/*<label className={styles.fileupload}>
        <input
          type="file"
          required
          className={styles.fileinput}
          onChange={handlefile}
        />
        <div>
          <div className={styles.fileicon}>
            <LuUpload />
          </div>
          <p>import certificate</p>
        </div>
      </label> 
      
       <div className={styles.filetext}>
          <h4>Import PDF</h4>
          <p>Upload generic certificate not more than 3mb</p>
        </div>

        <div className={styles.uploadCertificate}>
          <button
            onClick={(e) => {
              e.preventDefault();
              uploadImg();
            }}
          >
            upload certificate
          </button>
        </div>
        <form action="">
          <label className={styles.fileupload}>
            <input
              type="file"
              required
              className={styles.fileinput}
              onChange={handlefile}
              name="file"
            />
            <div>
              <div className={styles.fileicon}>
                <LuUpload />
              </div>
              <p>import certificate</p>
            </div>
          </label>
        </form>
      
function handlefile(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }


async function uploadImg() {
    var data = new FormData();
    var imagedata = document.querySelector('input[type="file"]').files[0];
    data.append("data", imagedata);
    const res = await fetch(
      "https://verisynth-onrender.com/api/v1/institution/upload/credential",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }
    );
    data = await res.json();
    console.log(data);
  }

      */
