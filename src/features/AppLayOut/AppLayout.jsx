import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import styles from "./AppLayOut.module.css";
function AppLayout() {
  return (
    <div>
      <Header />
      <div className={styles.applayout}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
