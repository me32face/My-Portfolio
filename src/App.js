import React, { useState, useEffect } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";

// We will overwrite these components next
import GlassNavbar from "./components/GlassNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check local storage or system preference on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--bg-color-alt)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-color)",
            boxShadow: "var(--shadow-md)",
          },
        }}
      />
      <GlassNavbar theme={theme} toggleTheme={toggleTheme} />
      <main className="app-main">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Education />
        <HireMe />
      </main>
      <Footer />
    </>
  );
}

export default App;
