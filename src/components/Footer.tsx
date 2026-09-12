import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#484689] text-white">
      <div className="prodfolio-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row md:justify-between items-center gap-4 text-sm text-white/80">
          {/* Social Links */}
          <div className="flex space-x-6 order-2 md:order-1">
            <a
              href="https://www.linkedin.com/company/prodfoliohq/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Prodfolio on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@TheProductPivot/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Prodfolio on YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
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
