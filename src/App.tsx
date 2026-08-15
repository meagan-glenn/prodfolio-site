
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

// Landing and NotFound load eagerly (critical paths)
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";

// All other pages load on demand
const Pricing = lazy(() => import("./pages/Pricing"));
const Resources = lazy(() => import("./pages/Resources"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Quiz = lazy(() => import("./pages/Quiz"));
const About = lazy(() => import("./pages/About"));
const ForCareerChangers = lazy(() => import("./pages/ForCareerChangers"));
const Examples = lazy(() => import("./pages/Examples"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const ForHiringManagers = lazy(() => import("./pages/ForHiringManagers"));
const Features = lazy(() => import("./pages/Features"));
const EpisodePage = lazy(() => import("./pages/EpisodePage"));
const Partners = lazy(() => import("./pages/Partners"));
const AiInfo = lazy(() => import("./pages/AiInfo"));
const Transition = lazy(() => import("./pages/Transition"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Changelog = lazy(() => import("./pages/Changelog"));
const ChangelogEntry = lazy(() => import("./pages/ChangelogEntry"));

const queryClient = new QueryClient();

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Suspense fallback={<><Navbar /><div className="min-h-screen bg-[#100D22]" /></>}>
            <Routes>
              <Route path="/" element={<Landing />} />

              {/* Marketing pages */}
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/podcast" element={<Resources />} />
              <Route path="/podcast/episodes/:slug" element={<EpisodePage />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/for-career-changers" element={<ForCareerChangers />} />
              <Route path="/examples" element={<Examples />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/for-hiring-managers" element={<ForHiringManagers />} />
              <Route path="/features" element={<Features />} />
              <Route path="/ai-info" element={<AiInfo />} />
              <Route path="/transition" element={<Transition />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/changelog/:slug" element={<ChangelogEntry />} />

              {/* 404 for all other routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
