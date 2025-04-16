import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StickyNavbar } from "./components/StickyNavbar";
import { ProfileCard } from "./components/profile";
import { AboutSection } from "./components/IntroParagraph";
import { SkillsCards } from "./components/skillsCard";
import { Links } from "./components/links";
import PDFViewer from "./components/pdfViewer"; // Adjust path as needed

import "./App.css";

// Import or create your other page components
const Resume = () => (
  <div className="p-6 max-w-screen-xl mx-auto">
    <PDFViewer />

    {/* Resume content goes here */}
  </div>
);

const ClevelandSports = () => (
  <div className="p-6 max-w-screen-xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">Coming Soon!</h1>
    {/* Sports scores content goes here */}
  </div>
);

// Updated Home component with better spacing
const Home = () => (
  <div>
    {/* Parent container with flex-row for alignment */}
    <div className="flex flex-col md:flex-row p-6 gap-8 max-w-screen-xl mx-auto">
      {/* Left side - Profile Card */}
      <div className="md:w-1/3 flex">
        <div className="w-full">
          <ProfileCard />
        </div>
      </div>

      {/* Right side - About Section and Links with reduced gap */}
      <div className="md:w-2/3 flex flex-col space-y-4">
        {/* About Section */}
        <div className="w-full">
          <AboutSection />
        </div>

        {/* Links */}
        <div className="w-full">
          <Links />
        </div>
      </div>
    </div>

    {/* Rest of the content */}
    <div className="border-t border-gray-300 mt-4"></div>
    <div className="flex flex-col items-center p-6 max-w-screen-xl mx-auto">
      <SkillsCards />
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <StickyNavbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/cleveland-sports" element={<ClevelandSports />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
