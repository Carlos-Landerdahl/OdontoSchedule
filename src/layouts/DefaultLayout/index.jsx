import { Outlet } from "react-router-dom";
import Navbar from "../../Components/NavBar/Index";
import Footer from "../../Components/Footer/Index";
import styles from "./DefaultLayout.module.css";



export function DefaultLayout() {
  return (
    <div className={styles.content}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
