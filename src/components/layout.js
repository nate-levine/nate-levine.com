import React, { useState, useEffect } from "react";
import NavigationBar from "./navigationBar";
import Credits from "./credits";

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="noise-overlay" />

      <header
        className={`fixed top-10 left-0 w-full z-50 transition-transform duration-1000 ${
          showNav ? "translate-y-0" : "-translate-y-[1000%]"
        }`}
      >
        <NavigationBar />
      </header>

      <main className="relative bg-primary pt-20">
        {children}
      </main>

      <footer>
        <Credits />
      </footer>
    </div>
  );
};

export default Layout;