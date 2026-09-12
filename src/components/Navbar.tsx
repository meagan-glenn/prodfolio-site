import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import prodfolioLogoProd from "@/assets/prodfolio-logo-prod.png";
import prodfolioIcon from "@/assets/prodfolio-icon.png";


const Navbar = () => {
  const { pathname } = useLocation();
  const showShutdownBanner = !pathname.startsWith("/podcast");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-navy focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:font-semibold">
      Skip to content
    </a>
    <nav
      className="fixed top-0 inset-x-0 z-50 pointer-events-none"
      aria-label="Main navigation"
    >
      {showShutdownBanner && (
        <div className="pointer-events-auto bg-coral-dark text-navy-dark px-4 py-2 text-center text-sm font-semibold shadow-md" role="status">
          Prodfolio shut down on September 1, 2026.{" "}
          <Link to="/transition" className="underline underline-offset-2 hover:text-navy transition-colors">
            Move your portfolio in 5 steps →
          </Link>
        </div>
      )}
      <div className="mx-4 md:mx-6 mt-3 md:mt-4 pointer-events-auto">
        <div
          className={`rounded-2xl transition-all duration-500 border ${
            isScrolled
              ? "bg-[#100D22]/80 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(158,133,249,0.15)]"
              : "bg-[#100D22]/60 backdrop-blur-lg border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-1.5">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <img
                    src={prodfolioLogoProd}
                    alt="Prodfolio"
                    className="h-12 md:h-16 hidden md:block scale-125 origin-left drop-shadow-[0_0_20px_rgba(158,133,249,0.4)] transition-all hover:drop-shadow-[0_0_25px_rgba(158,133,249,0.6)]"
                  />
                  <img
                    src={prodfolioIcon}
                    alt="Prodfolio"
                    className="h-12 md:hidden drop-shadow-[0_0_20px_rgba(158,133,249,0.4)]"
                  />
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <Link
                  to="/"
                  className="font-medium text-white hover:text-white/80 transition-colors [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]"
                >
                  Home
                </Link>
                <Link
                  to="/podcast"
                  className="font-medium text-white hover:text-white/80 transition-colors [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]"
                >
                  Podcast
                </Link>
                <Link
                  to="/blog"
                  className="font-medium text-white hover:text-white/80 transition-colors [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]"
                >
                  Blog
                </Link>

                <div className="flex items-center ml-8">
                  <Button
                    asChild
                    className="bg-white text-primary hover:bg-white/90 transition-all px-5 py-2.5 h-auto shadow-md shadow-white/10"
                  >
                    <Link to="/transition">Migration guide</Link>
                  </Button>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center gap-3">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/10 py-3">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-2">
                <Link
                  to="/"
                  className="block py-2 font-medium text-white hover:text-white/80 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/podcast"
                  className="block py-2 font-medium text-white hover:text-white/80 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Podcast
                </Link>
                <Link
                  to="/blog"
                  className="block py-2 font-medium text-white hover:text-white/80 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Button asChild className="w-full bg-white text-primary hover:bg-white/90 py-2.5 h-auto shadow-md shadow-white/10">
                  <Link to="/transition">Migration guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {/* In-flow spacer matching the fixed shutdown banner height so page content clears it */}
    {showShutdownBanner && <div className="h-14 md:h-9" aria-hidden="true" />}
    </>
  );
};

export default Navbar;
