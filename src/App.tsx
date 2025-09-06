import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TravelExperiencesPage } from "./pages/TravelExperiencesPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experiences" element={<TravelExperiencesPage />} />
        </Routes>
      </div>
    </Router>
  );
}