import { HashRouter, Route, Routes } from "react-router-dom";

// Import page
import Home from "./pages/Home";
import EmployerDashboard from "pages/employer/EmployerDashboard";
import EmployerProfil from "pages/employer/EmployerProfil";
import CandidatProfil from "pages/candidat/CandidatProfil"
import PageNotFound from "pages/PageNotFound";

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
        <Route
          path="/Candidat/profil"
          exact
          element={<CandidatProfil />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
