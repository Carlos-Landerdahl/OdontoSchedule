import { Outlet } from "react-router-dom";
import Navbar from "../../Components/NavBar/Index";
import Footer from "../../Components/Footer/Index";

export function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
