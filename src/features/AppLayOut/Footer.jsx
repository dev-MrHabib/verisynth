import styles from "./Footer.module.css";
import Logo from "./Logo.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <div className={styles.imagecontainer}>
          <img className={styles.image} src={Logo} alt="logo" />
        </div>

        <p>
          Safe and Secure Digital Platform for the issuance, Verification and
          Management of Credentials
        </p>
        <p className={styles.copyrighttext}>
          &copy;Copyright Verisynth inc. {new Date().getFullYear()}
        </p>
      </div>
      <div className={styles.access}>
        <h5>get in touch</h5>
        <div className={styles.accessInfo}>
          <IoLocationOutline />
          <p>Ikeja, Lagos</p>
        </div>
        <div className={styles.accessInfo}>
          <FaRegEnvelope />
          <p>Verisynth@gmail.com</p>
        </div>
        <div className={styles.accessInfo}>
          <FaPhoneAlt />
          <p>+2349063317664</p>
        </div>
      </div>
      <div className={styles.socialmedia}>
        <FaXTwitter />
        <FiInstagram />
        <FaFacebook />
      </div>
      <div className={styles.newsletter}>
        <h5>Subscribe to our Newsletter</h5>
        <label htmlFor="">Your Email</label>
        <br />
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
}

export default Footer;
