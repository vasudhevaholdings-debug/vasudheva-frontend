import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./pages/ProtectedRoute";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SystemMap from "./components/SystemMap";
import FourStepFlow from "./components/FourStepFlow";
import Companies from "./components/Companies";
import DecisionTree from "./components/DecisionTree";
import Holding from "./components/Holding";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Holdings from "./pages/Holdings";
import StrategicRole from "./pages/StrategicRole";
import InnovationRole from "./pages/InnovationRole";
import MediaRole from "./pages/MediaRole";
import PublishRole from "./pages/PublishRole";  
import Philosopy from "./pages/Philosopy";
import Parentcompanies from "./pages/Parentcompanies";
import Collaborate from "./pages/Collaborate";
import Contact from "./pages/Contact";
import Msme from "./pages/Msme";
import Institution from "./pages/Institution";
import Government from "./pages/Government";
import Corporate from "./pages/Corporate";
import Authors from "./pages/Authors";
import Individuals from "./pages/Individuals";
import Services from "./pages/Services";
import Insights from "./pages/Insights";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Trademark from "./pages/Trademark";
import Conduct from "./pages/Conduct";
import Grievance from "./pages/Grievance";
import StrategicService from "./company-page/StrategicService";
import EduInnovationService from "./company-page/EduInnovationService";
import MediaService from "./company-page/MediaService";
import PublishingService from "./company-page/PublishingService";
import Integrated from "./pages/Integrated";
import Evidence from "./pages/Evidence";
import LongTerm from "./pages/LongTerm";
import Ethical from "./pages/Ethical";
import Commitment from "./pages/Commitment";
import Research from "./pages/Research";
import Design from "./pages/Design";
import Delivery from "./pages/Delivery";
import Governance from "./pages/Governance";

function App() {
  const location = useLocation();

  const [routingContext, setRoutingContext] = useState({
    stakeholder: "",
    domain: "",
    complexity: "",
  });

  const [presetCategory, setPresetCategory] = useState("");

  const handleDecisionComplete = (result) => {
    setRoutingContext(result);
    setPresetCategory(result.domain || result.stakeholder);
  };

  // Hide header on auth pages
  const hideHeader =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideHeader && <Header />}

      <div style={!hideHeader ? { paddingTop: "111px" } : undefined}>
      <Routes>
        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Example */}
        <Route
          path="/msme"
          element={
            <ProtectedRoute>
              <Msme />
            </ProtectedRoute>
          }
        />

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SystemMap />
              <FourStepFlow />
              <Companies />
              <DecisionTree onComplete={handleDecisionComplete} />
              <Holding />
              <ContactForm
                presetCategory={presetCategory}
                routingContext={routingContext}
              />
              <Footer />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/philosopy" element={<Philosopy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/parentcompanies" element={<Parentcompanies />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/government" element={<Government />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/trade" element={<Trademark />} />
        <Route path="/conduct" element={<Conduct />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/research" element={<Research/>} />
        <Route path="/design" element={<Design/>} />
        <Route path="/delivery" element={<Delivery/>} />
        <Route path="/governance" element={<Governance/>} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/strategicrole" element={<StrategicRole />} />
        <Route path="/innovationrole" element={<InnovationRole />} />
        <Route path="/mediarole" element={<MediaRole />} />
        <Route path="/publishrole" element={<PublishRole />} />
        <Route path="/strategicservice" element={<StrategicService />} />
      <Route path="/eduinnovationservice" element={<EduInnovationService />} />
      <Route path="/mediaservice" element={<MediaService />} />
      <Route path="/publishingservice" element={<PublishingService />} />
      <Route path="/integrated" element={<Integrated />} />
      <Route path="/evidence" element={<Evidence />} />
      <Route path="/longterm" element={<LongTerm />} />
      <Route path="/ethical" element={<Ethical />} />
      <Route path="/commitment" element={<Commitment />} />
      </Routes>
      </div>
    </>
  );
}

export default App;