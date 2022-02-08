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
import OffresView from "pages/visitor/OffresView";
import AdminJobs from "pages/admin/AdminJobs";
import AdminMessages from "pages/admin/AdminMessages";
import EmployerOffer from "pages/employer/EmployerOffer";
import EmployerOfferId from "pages/employer/EmployerOfferId";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/admin" exact element={<AdminPage />} />
        <Route path="/admin/users" exact element={<AdminUsersTable />} />
        <Route path="/admin/jobs" exact element={<AdminJobs />} />
        <Route path="/admin/messages" exact element={<AdminMessages />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/recruteur" exact element={<PresentationRecruteur />} />
        <Route path="/candidat" exact element={<PresentationCandidat />} />
        <Route path="/contactus" exact element={<ContactezNous />} />
        <Route path="/offres" exact element={<OffresView />} />
        <Route path="/Employer/dashboard" exact element={<EmployerDashboard />}/>
        <Route path="/Employer/profil" exact element={<EmployerProfil />} />
        <Route path="/Employer/addOffer" exact element={<EmployerAddOffer />} />
        <Route path="/Employer/offer" exact element={<EmployerOffer />} />
        <Route path="/Employer/offer:id" exact element={<EmployerOfferId />} />
        <Route path="/Candidat/profil" exact element={<CandidatProfil />} />
        <Route path="/Candidat/dashboard" exact element={<CandidatDashboard />} />
        <Route path="/Candidat/candidature" exact element={<CandidatCandidature />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
