import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import Image from "./Logo.jpg";
function Header() {
  const [open, setIsopen] = useState(false);
  const [openLogin, setIsopenLogin] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <img src={Image} alt="" className={styles.logo} />
        </Link>

        <div className={styles.menu} onClick={() => setIsopen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav onClick={() => setIsopen(false)}>
          <ul className={open ? styles.show : ""}>
            <li>
              <NavLink to="/verification">Verification</NavLink>
            </li>
            <li>
              <NavLink to="/">pricing</NavLink>
            </li>
            <div>
              <li className={styles.login}>
                <NavLink
                  to="/"
                  onMouseEnter={() => {
                    setIsopenLogin(true);
                  }}
                  onMouseLeave={() => {
                    setIsopenLogin(false);
                  }}
                >
                  Login
                </NavLink>
              </li>
            </div>

            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </nav>
        {openLogin && (
          <div
            className={styles.loginOption}
            onMouseEnter={() => {
              setIsopenLogin(true);
            }}
            onMouseLeave={() => {
              setIsopenLogin(false);
            }}
          >
            <li>
              <NavLink to="institutionsignin">instituition Login</NavLink>
            </li>
            <li>
              <NavLink to="/">student Login</NavLink>
            </li>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
