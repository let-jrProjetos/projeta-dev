import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header/Header";
import AboutUsPage from "../pages/AboutUs/AboutUs";
import DashboardPage from "../pages/Dashboard/Dashboard";
import FaqPage from "../pages/Faq/faq";
import HomePage from "../pages/Home/Home";
import MyProjectsPage from "../pages/MyProjects/MyProjects";
import ProjectFormPage from "../pages/ProjectForm/ProjectForm";
import ProfilePage from "../pages/Profile/Profile";
import SettingsPage from "../pages/Settings/Settings";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/sobreNos" element={<AboutUsPage />} />
        <Route path="/perguntasFrequentes" element={<FaqPage />} />
        <Route path="/projetos" element={<DashboardPage />} />
        <Route path="/meusProjetos" element={<MyProjectsPage />} />
        <Route path="/novoProjeto" element={<ProjectFormPage />} />
        <Route path="/meuPerfil" element={<ProfilePage />} />
        <Route path="/editarPerfil" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
