import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Login";
import Detail from "../pages/Detail";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Contact />} />
        <Route path="/beer/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}