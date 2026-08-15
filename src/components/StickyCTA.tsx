import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { X } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="bg-[#100D22]/95 backdrop-blur-xl border-t border-white/15 pl-3 pr-16 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center gap-2">
        <button
          onClick={() => setIsDismissed(true)}
          className="text-white/50 hover:text-white/80 transition-colors p-1 shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
        <Button asChild className="flex-1 bg-white text-navy hover:bg-white/90 font-semibold py-3 h-auto rounded-xl shadow-lg text-sm">
          <Link to="/transition">
            Migration guide
          </Link>
        </Button>
        <Button asChild className="flex-1 border-white/30 bg-white/10 text-white hover:bg-white/20 py-3 h-auto rounded-xl text-sm" variant="outline">
          <a href="https://app.prodfolio.io/login" target="_blank" rel="noopener noreferrer">
            Log In
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
