import React, { useState, useEffect } from "react";
import NavigationBar from "./navigationBar";
import Credits from "./credits";

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false); // scrolling down -> hide
      } else {
        setShowNav(true); // scrolling up -> show
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative">
      <div className="noise-overlay" />
      {/* Overlay nav */}
      <header
        className={`fixed top-10 left-0 w-full z-50 transition-transform duration-1000 ${
          showNav ? "translate-y-0" : "-translate-y-[1000%]"
        }`}
      >
        <NavigationBar />
      </header>

      <main className="relative bg-primary pt-20 pb-10">
        {children}
      </main>

      <footer>
        <Credits />
      </footer>
    </div>
  );
};

export default Layout;