import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./pages/ProtectedRoute";  
import Header from "./components/Header";
import Hero from "./components/Hero";
import SystemMap from "./components/SystemMap";
import FourStepFlow from "./components/FourStepFlow";
import Companies from "./components/Companies";
// import UserRouting from "./components/UserRouting";
import DecisionTree from "./components/DecisionTree";
import Holding from "./components/Holding";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Philosopy from "./pages/Philosopy";
import Service from "./pages/Services";
import Parentcompanies from "./pages/Parentcompanies";
import Insight from "./pages/Insights";
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
// import Profile from "./pages/Profile";


function App() {
  const [routingContext, setRoutingContext] = useState({
    stakeholder: "",
    domain: "",
    complexity: ""
  });

  const [presetCategory, setPresetCategory] = useState("");

  const handleDecisionComplete = (result) => {
    setRoutingContext(result);
    setPresetCategory(result.domain || result.stakeholder);
  };

  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />

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

      {/* <UserRouting
        onSelect={(value) => {
          setPresetCategory(value);
          setRoutingContext((prev) => ({
            ...prev,
            stakeholder: value
          }));
        }}
      /> */}

      <DecisionTree onComplete={handleDecisionComplete} />

      <Holding />

      <ContactForm
        presetCategory={presetCategory}
        routingContext={routingContext}
      />

      {/* ✅ Footer only here */}
      <Footer />
    </>
  }
/>


       <Route path="/philosopy" element={<Philosopy />} />
       <Route path="/services" element={<Services />} />
       <Route path="/parentcompanies" element={<Parentcompanies />} />
       <Route path="/insights" element={<Insights />} />
       <Route path="/collaborate" element={<Collaborate />} />
       <Route path="/contact" element={<Contact />} />
        <Route path="/msme" element={<Msme />} />
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
        
      </Routes>
      

      {/* <Footer /> */}
    </>
  );
}

export default App;
