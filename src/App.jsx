import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useState } from "react";
import "./App.css";
import About from "./components/about";

function App() {
  return (
    <div className="home">
     <About></About>
      <div className="projects">
        <h2>Projects : WIP ⚒️</h2>
        <Analytics/>
        <SpeedInsights/>
      </div>
    </div>
  );
}

export default App;
