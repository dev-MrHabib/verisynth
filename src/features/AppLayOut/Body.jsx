import myimage from "./Hero.jpg";
import { PiCertificateBold } from "react-icons/pi";
import { GrSecure } from "react-icons/gr";
import { GiConfirmed } from "react-icons/gi";

import styles from "./Body.module.css";
import { Link } from "react-router-dom";
function Body() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.imagecontainer}>
          <img src={myimage} alt="image" className={styles.img} />
        </div>
        <div className={styles.heroText}>
          <h3>
            Safe and Secure Digital Platform for the Issuance, Verification and
            Management of Credentials
          </h3>
          <p>
            Institutions issue credentials accesible to students through this
            platform and third party users of the credentials verify them
            securely
          </p>
          <div className={styles.heroBtns}>
            <button>
              <Link to="/studentsignup">Student sign up</Link>
            </button>
            <button>
              <Link to="/signup">Institution sign up</Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.heroCaption}>
        <p>Get the best experience with our features and product</p>
      </div>
      <div className={styles.featureContainer}>
        <div className={styles.feature}>
          <h4>Issue fast verifiable certificate</h4>
          <p>
            create and issue credentials to individuals with relevant
            information, define credential parameters, and securely issue
            digital certificates, ensuring accuracy and authenticity
          </p>
          <div className={styles.featureIcon}>
            <PiCertificateBold />
          </div>
        </div>
        <div className={styles.feature}>
          <h4>Store your issued certificates and manage them</h4>
          <p>
            Receive, store, and manage digital credentials in one centralized
            location with our user-friendly web interface that allows for
            viewing, sharing, and verifying credentials, ensuring privacy and
            security
          </p>

          <div className={styles.featureIcon}>
            <GrSecure />
          </div>
        </div>
        <div className={styles.feature}>
          <h4>Verify Credentials with our reliable process</h4>
          <p>
            Reliable and efficient platform to authenticate and verify digital
            credentials presented to student with straight forward interface
          </p>
          <div className={styles.featureIcon}>
            <GiConfirmed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
