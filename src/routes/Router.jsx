import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import HomePage from "../pages/Home";
import DashBoard from "../pages/DashBoard/DashBoard";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="sobreNos" element={<AboutUs />} />
        <Route path="dashBoard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};
