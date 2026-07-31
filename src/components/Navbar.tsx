import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import prodfolioLogoProd from "@/assets/prodfolio-logo-prod.png";
import prodfolioIcon from "@/assets/prodfolio-icon.png";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWhoItsForOpen, setIsWhoItsForOpen] = useState(false);
  const whoItsForRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (whoItsForRef.current && !whoItsForRef.current.contains(event.target as Node)) {
        setIsWhoItsForOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isWhoItsForOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsWhoItsForOpen(true);
        setTimeout(() => menuItemsRef.current[0]?.focus(), 0);
      }
      return;
    }

    const items = menuItemsRef.current.filter(Boolean);
    const currentIndex = items.findIndex((item) => item === document.activeElement);

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        items[(currentIndex + 1) % items.length]?.focus();
        break;
      case 'ArrowUp':
        e.preventDefault();
        items[(currentIndex - 1 + items.length) % items.length]?.focus();
        break;
      case 'Escape':
        e.preventDefault();
        setIsWhoItsForOpen(false);
        // Return focus to the trigger button
        (whoItsForRef.current?.querySelector('button') as HTMLButtonElement)?.focus();
        break;
      case 'Tab':
        setIsWhoItsForOpen(false);
        break;
    }
  }, [isWhoItsForOpen]);

  return (
    <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-navy focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:font-semibold">
      Skip to content
    </a>
    <nav
      className="fixed top-0 inset-x-0 z-50 pointer-events-none"
      aria-label="Main navigation"
    >
      <div className="pointer-events-auto bg-coral-dark text-navy-dark px-4 py-2 text-center text-sm font-semibold shadow-md" role="status">
        Prodfolio is shutting down on September 1, 2026. Export your portfolio before then — questions?{" "}
        <a href="mailto:hello@prodfolio.io" className="underline underline-offset-2 hover:text-navy transition-colors">
          hello@prodfolio.io
        </a>
      </div>
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
                    alt="Prodfolio - Show Your Work. Own Your Impact."
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

                {/* Who it's for Dropdown */}
                <div
                  className="relative"
                  ref={whoItsForRef}
                  onMouseEnter={() => setIsWhoItsForOpen(true)}
                  onMouseLeave={() => setIsWhoItsForOpen(false)}
                >
                  <button
                    onClick={() => setIsWhoItsForOpen(!isWhoItsForOpen)}
                    onKeyDown={handleMenuKeyDown}
                    className="font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1 [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]"
                    aria-expanded={isWhoItsForOpen}
                    aria-haspopup="true"
                  >
                    Who it's for
                    <ChevronDown className={`w-4 h-4 transition-transform ${isWhoItsForOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>

                  <div
                    className={`absolute top-full left-0 pt-2 ${
                      isWhoItsForOpen ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                  >
                  <div
                    className={`w-48 bg-[#1a1040]/90 backdrop-blur-xl border border-white/15 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-2 transition-all duration-200 ${
                      isWhoItsForOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                    }`}
                    role="menu"
                    aria-label="Who it's for"
                    onKeyDown={handleMenuKeyDown}
                  >
                    <Link
                      to="/features"
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors focus:bg-white/10 focus:outline-none"
                      onClick={() => setIsWhoItsForOpen(false)}
                      role="menuitem"
                      tabIndex={isWhoItsForOpen ? 0 : -1}
                      ref={(el) => { menuItemsRef.current[0] = el; }}
                    >
                      Product Managers
                    </Link>
                    <Link
                      to="/for-career-changers"
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors focus:bg-white/10 focus:outline-none"
                      onClick={() => setIsWhoItsForOpen(false)}
                      role="menuitem"
                      tabIndex={isWhoItsForOpen ? 0 : -1}
                      ref={(el) => { menuItemsRef.current[1] = el; }}
                    >
                      Career Changers
                    </Link>
                    <Link
                      to="/for-hiring-managers"
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors focus:bg-white/10 focus:outline-none"
                      onClick={() => setIsWhoItsForOpen(false)}
                      role="menuitem"
                      tabIndex={isWhoItsForOpen ? 0 : -1}
                      ref={(el) => { menuItemsRef.current[2] = el; }}
                    >
                      Hiring Managers
                    </Link>
                  </div>
                  </div>
                </div>

                <Link
                  to="/examples"
                  className="font-medium text-white hover:text-white/80 transition-colors [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]"
                >
                  Portfolio Examples
                </Link>
                <Link
                  to="/pricing"
                  className="font-medium text-white hover:text-white/80 transition-colors [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]"
                >
                  Pricing
                </Link>
                <Link
                  to="/quiz"
                  className="font-medium text-coral-light hover:text-white transition-colors [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]"
                >
                  Quiz
                </Link>

                <div className="flex items-center space-x-4 ml-8">
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/40 bg-white/10 text-white hover:bg-white/20 transition-all"
                  >
                    <a href="https://app.prodfolio.io/login" target="_blank" rel="noopener noreferrer">Log In</a>
                  </Button>
                  <Button
                    asChild
                    className="bg-white text-primary hover:bg-white/90 transition-all px-5 py-2.5 h-auto shadow-md shadow-white/10"
                  >
                    <a href="https://app.prodfolio.io/sign-up" target="_blank" rel="noopener noreferrer">Build your Prodfolio free</a>
                  </Button>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center gap-3">
                <Link
                  to="/examples"
                  className="text-sm font-semibold text-coral-light hover:text-white transition-colors"
                >
                  View Examples
                </Link>
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
                  to="/examples"
                  className="block py-2 font-medium text-white hover:text-white/80 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio Examples
                </Link>
                <Link
                  to="/pricing"
                  className="block py-2 font-medium text-white hover:text-white/80 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/quiz"
                  className="block py-2 font-medium text-coral-light hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  What Kind of PM Are You?
                </Link>

                {/* Who it's for Section */}
                <div className="pt-2 border-t border-white/10">
                  <p className="py-2 text-white/60 text-sm font-medium">Who it's for</p>
                  <Link
                    to="/features"
                    className="block py-2 pl-4 font-medium text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Product Managers
                  </Link>
                  <Link
                    to="/for-career-changers"
                    className="block py-2 pl-4 font-medium text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Career Changers
                  </Link>
                  <Link
                    to="/for-hiring-managers"
                    className="block py-2 pl-4 font-medium text-white hover:text-white/80 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hiring Managers
                  </Link>
                </div>
                <Button asChild variant="ghost" className="w-full text-white hover:bg-white/10">
                  <a href="https://app.prodfolio.io/login" target="_blank" rel="noopener noreferrer">Log In</a>
                </Button>
                <Button asChild className="w-full bg-white text-primary hover:bg-white/90 py-2.5 h-auto shadow-md shadow-white/10">
                  <a href="https://app.prodfolio.io/sign-up" target="_blank" rel="noopener noreferrer">Build your Prodfolio free</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {/* In-flow spacer matching the fixed shutdown banner height so page content clears it */}
    <div className="h-14 md:h-9" aria-hidden="true" />
    </>
  );
};

export default Navbar;
