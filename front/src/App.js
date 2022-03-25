import { HashRouter, Route, Routes } from "react-router-dom";

// Import page
import Home from "./pages/visitor/Home";
import PresentationRecruteur from "./pages/visitor/PresentationRecruteur";
import PresentationCandidat from "./pages/visitor/PresentationCandidat";
import ContactezNous from "./pages/visitor/ContactezNous";
import EmployerDashboard from "pages/employer/EmployerDashboard";
import EmployerProfil from "pages/employer/EmployerProfil";
import CandidatProfil from "pages/candidat/CandidatProfil";
import PageNotFound from "pages/PageNotFound";
import AdminPage from "pages/admin/AdminPage";
import EmployerAddOffer from "pages/employer/EmployerAddOffer";
import CandidatDashboard from "pages/candidat/CandidatDashboard";
import CandidatCandidature from "pages/candidat/CandidatCandidature";
import AdminUsersTable from "pages/admin/AdminUsersTable";
import Offres from "pages/visitor/Offres";
import AdminJobs from "pages/admin/AdminJobs";
import AdminMessages from "pages/admin/AdminMessages";
import EmployerOffer from "pages/employer/EmployerOffer";
import EmployerOfferId from "pages/employer/EmployerOfferId";
import EmployerCandidateId from "pages/employer/EmployerCandidateId";
import ChangePassword from "pages/employer/ChangePassword";
import Postuled from "pages/Postuled";
import EmployerLayout from "layouts/EmployerLayout";
import CandidatLayout from "layouts/CandidatLayout";
import AdminLayout from "layouts/AdminLayout 2";
import VerifAuth from "pages/visitor/VerifAuth";

const EmployerRoutes = () => (
  <EmployerLayout>
    <Routes>
      <Route path="dashboard" exact element={<EmployerDashboard />} />
      <Route path="profil" exact element={<EmployerProfil />} />
      <Route path="addOffer" exact element={<EmployerAddOffer />} />
      <Route path="offer" exact element={<EmployerOffer />} />
      <Route path="offer/:id" exact element={<EmployerOfferId />} />
      <Route path="candidate/:id" exact element={<EmployerCandidateId />} />
      <Route path="profilPw" exact element={<ChangePassword />} />
    </Routes>
  </EmployerLayout>
);

const CandidatRoutes = () => (
  <CandidatLayout>
    <Routes>
      <Route path="profil" exact element={<CandidatProfil />} />
      <Route path="dashboard" exact element={<CandidatDashboard />} />
      <Route path="candidatures" exact element={<CandidatCandidature />} />
    </Routes>
  </CandidatLayout>
);

const AdminRoute = () => (
  <AdminLayout>
    <Routes>
      <Route path="/" exact element={<AdminPage />} />
      <Route path="users" exact element={<AdminUsersTable />} />
      <Route path="jobs" exact element={<AdminJobs />} />
      <Route path="messages" exact element={<AdminMessages />} />
    </Routes>
  </AdminLayout>
);

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/recruteur" exact element={<PresentationRecruteur />} />
        <Route path="/candidat" exact element={<PresentationCandidat />} />
        <Route path="/contactus" exact element={<ContactezNous />} />
        <Route path="/offres" exact element={<Offres />} />
        <Route path="/Employer/*" element={<EmployerRoutes />} />
        <Route path="/Candidat/*" element={<CandidatRoutes />} />
        <Route path="/admin/*" element={<AdminRoute />} />
        <Route path="/verif/:rand" element={<VerifAuth />} />
        <Route path="/postuled/:id" element={< Postuled />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
