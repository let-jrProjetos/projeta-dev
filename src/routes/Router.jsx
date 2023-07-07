import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header/Header";
import AboutUsPage from "../pages/AboutUs/AboutUs";
import ProjectsPage from "../pages/Projects/Projects";
import FaqPage from "../pages/Faq/faq";
import HomePage from "../pages/Home/Home";

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
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/novoProjeto/:id" element={<ProjectFormPage />} />
        <Route path="/meuPerfil/:id" element={<ProfilePage />} />
        <Route path="/editarPerfil/:id" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
