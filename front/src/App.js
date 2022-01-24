import { HashRouter, Route, Routes } from "react-router-dom";

// Import page
import Home from "./pages/Home";
import PresentationCandidat from "./pages/PresentationCandidat";

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" index exact element={<Home />} />
          <Route path="/c" exact element={<PresentationCandidat />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
