import { Analytics } from "@vercel/analytics/next";
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
      </div>
    </div>
  );
}

export default App;
