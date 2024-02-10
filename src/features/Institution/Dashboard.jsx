import { Outlet } from "react-router-dom";
import AsideDashboard from "./AsideDashboard";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.dashboardcontainer}>
      <AsideDashboard />
      <main className={styles.maindashboard}>
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
