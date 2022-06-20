import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard";


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
}
