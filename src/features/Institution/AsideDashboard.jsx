import { NavLink } from "react-router-dom";
import styles from "./AsideDashboard.module.css";
import { FaHouse } from "react-icons/fa6";
import { TbFileCertificate } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoIosHelpCircle } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

function AsideDashboard() {
  return (
    <aside className={styles.asidedashboard}>
      <NavLink to="profile" className={styles.dashboardItems}>
        <div>
          <FaHouse className={styles.dashboardIcon} />
        </div>
        <p>Dashboard</p>
      </NavLink>
      <NavLink to="credentialform" className={styles.dashboardItems}>
        <div>
          <TbFileCertificate className={styles.dashboardIcon} />
        </div>
        <p> Create Credential</p>
      </NavLink>
      <NavLink to="credential" className={styles.dashboardItems}>
        <div>
          <LiaCertificateSolid className={styles.dashboardIcon} />
        </div>
        <p>Credentials</p>
      </NavLink>
      <NavLink to="help" className={styles.dashboardItems}>
        <div>
          <IoIosHelpCircle className={styles.dashboardIcon} />
        </div>
        <p>Help</p>
      </NavLink>
      <button className={styles.dashboardItems}>
        <IoLogOutOutline className={styles.dashboardIcon} />
        <p>Logout</p>
      </button>
    </aside>
  );
}

export default AsideDashboard;
