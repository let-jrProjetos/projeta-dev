import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header/Header";
import AboutUs from "../pages/AboutUs";
import HomePage from "../pages/Home";

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
