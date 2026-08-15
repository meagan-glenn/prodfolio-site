import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setSubmitted(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="py-12 bg-[#484689] text-white">
      <div className="prodfolio-container">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/transition" className="hover:text-white hover:underline transition-all">
                  Migration Guide
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white hover:underline transition-all">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white hover:underline transition-all">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="hover:text-white hover:underline transition-all">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/blog" className="hover:text-white hover:underline transition-all">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/podcast" className="hover:text-white hover:underline transition-all">
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white hover:underline transition-all">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-white hover:underline transition-all">
                  What Kind of PM Are You?
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-all">
                  About
                </Link>
              </li>
              <li>
                <a href="mailto:hello@prodfolio.io" className="hover:text-white hover:underline transition-all">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/ai-info" className="hover:text-white hover:underline transition-all">
                  AI Info
                </Link>
              </li>
              <li>
                <a href="https://help.prodfolio.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-all">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/terms" className="hover:text-white hover:underline transition-all">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white hover:underline transition-all">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter - spans 2 columns on desktop */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="font-semibold mb-4 text-white">Off the Roadmap</h4>
            <p className="text-sm text-white/80 mb-4">
              Real talk for PMs navigating the messy middle of their careers.
            </p>
            {submitted ? (
              <p className="text-white/90 text-sm font-medium" role="status" aria-live="polite">You're in! Check your inbox for a welcome email.</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 text-sm w-full focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                  aria-required="true"
                  aria-invalid={error ? "true" : undefined}
                  aria-describedby={error ? "newsletter-error" : undefined}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-white text-[#484689] font-semibold text-sm rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  {isSubmitting ? "..." : "Count me in"}
                </button>
              </form>
            )}
            {error && <p id="newsletter-error" className="text-red-200 text-xs mt-2" role="alert">{error}</p>}
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row md:justify-between items-center gap-4 text-sm text-white/80">
          {/* Social Links */}
          <div className="flex space-x-6 order-2 md:order-1">
            <a 
              href="https://www.linkedin.com/company/prodfoliohq/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/prodfolio.io/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@TheProductPivot/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Subscribe on YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@prodfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Follow us on TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.48a8.18 8.18 0 004.76 1.52V7.56a4.83 4.83 0 01-1-.87z"/>
              </svg>
            </a>
          </div>
          <span className="order-1 md:order-2">© {new Date().getFullYear()} Prodfolio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
