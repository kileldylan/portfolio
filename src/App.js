import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import ProjectPage from './components/projects';
import ExperiencePage from './components/experience';
import EducationPage from './components/education';
import ContactPage from './components/contact';
import '@fontsource/montserrat'; // Import Montserrat font
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <Router>
      <div>
        {/* Define your app structure */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {/* Add Vercel Analytics */}
        <Analytics />
        <SpeedInsights />
                
      </div>
    </Router>
  );
};

export default App;
