import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ExperiencePage from "./components/ExperiencePage";
import AboutPage from "./pages/AboutPage";
import DestinationsPage from "./pages/DestinationsPage";
import { OffersPage } from "./pages/OffersPage";
import { ContactPage } from "./pages/ContactPage";
import { Navbar } from "./components/navbar";
import { ReferenceHomePage } from "./components/ReferenceHomePage";
import { Footer } from "./pages/Footer";
import { TripDetailPage } from "./pages/TripDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<ReferenceHomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/trip/:id" element={<TripDetailPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}