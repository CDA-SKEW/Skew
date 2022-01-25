import { HashRouter, Route, Routes } from "react-router-dom";

// Import page
import Home from "./pages/Home";
import EmployerDashboard from "pages/employer/EmployerDashboard";
import EmployerProfil from "pages/employer/EmployerProfil";
import CandidatProfil from "pages/candidat/CandidatProfil";
import PageNotFound from "pages/PageNotFound";
import AdminPage from "pages/admin/AdminPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/Employer/dashboard"
          exact
          element={<EmployerDashboard />}
        />
        <Route path="/Employer/profil" exact element={<EmployerProfil />} />
        <Route path="/Candidat/profil" exact element={<CandidatProfil />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/admin" exact element={<AdminPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
