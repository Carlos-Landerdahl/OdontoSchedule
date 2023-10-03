import { Outlet } from "react-router-dom";
import Navbar from "../../Components/NavBar/Index";
import Footer from "../../Components/Footer/Index";
// import { BtnBackTop } from '../../Components/btnBackTop/index';
// Criar criar como se fosse icone de whats para esse BtnBackTop 


export function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
