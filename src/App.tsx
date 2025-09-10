import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ExperiencePage from "./components/ExperiencePage";
import { AboutPage } from "./pages/AboutPage";
import { DestinationsPage } from "./pages/DestinationsPage";
import { OffersPage } from "./pages/OffersPage";
import { ContactPage } from "./pages/ContactPage";
import { Navbar } from "./components/navbar";
import { ReferenceHomePage } from "./components/ReferenceHomePage";
import ExperiencePage from "./pages/ExperiencePage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<ReferenceHomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/experiences" element={<ExperiencePage />} />
        </Routes>
      </div>
    </Router>
  );
}