// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PatientLogin from "./components/PatientLogin";
import CoordinatorLogin from "./components/CoordinatorLogin";
import SurveyPage from "./components/SurveyPage";
import CoordinatorDashboard from "./components/CoordinatorDashboard";
import SecretaryDashboard from "./components/SecretaryDashboard";
import ReportPage from "./components/ReportPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/paciente" element={<PatientLogin />} />
      <Route path="/login/coordinator" element={<CoordinatorLogin />} />
      <Route path="/encuesta" element={<SurveyPage />} />

      <Route path="/dashboard/cordinador" element={<CoordinatorDashboard />} />
      <Route path="/panel/secretaria" element={<SecretaryDashboard />} />
      <Route path="/login/cordinador" element={<CoordinatorLogin />} />
      <Route path="/cordinador-dashboard" element={<CoordinatorDashboard />} />
      <Route path="/reportes" element={<ReportPage />} />
    </Routes>
  );
}

export default App;
