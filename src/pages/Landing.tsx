import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import screenshotTop from "@/assets/new-top-portfolio-v2.png";
import screenshotMid from "@/assets/new-mid-portfolio.png";
import screenshotBottom from "@/assets/new-bottom-portfolio.png";

const Landing = () => {
  const heroAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  useSEO({
    title: "Prodfolio — Thank You",
    description: "Prodfolio shut down on September 1, 2026. Export your portfolio and migrate to a free template. The Product Pivot podcast episodes remain available.",
    ogTitle: "Prodfolio — Thank You",
    ogDescription: "Prodfolio shut down on September 1, 2026. Export your data and migrate your portfolio.",
    ogImage: "https://prodfolio.io/social-share.png",
    ogType: "website",
    canonical: "https://prodfolio.io/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Prodfolio",
      "url": "https://prodfolio.io"
    }
  });

  return <div className="min-h-screen gradient-mesh-bg" id="main-content" role="main">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroAnimation.ref as React.RefObject<HTMLElement>} className={`relative pt-28 pb-12 overflow-hidden ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="hero-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-orb hero-orb-2" aria-hidden="true" />
        <div className="hero-orb hero-orb-3" aria-hidden="true" />

        <div className="prodfolio-container max-w-[1400px] relative z-10">
          <header className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight mb-6 text-white">
              Thank you for being part of
              <br />
              <span className="gradient-text">Prodfolio.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
              Prodfolio shut down on September 1, 2026. If you exported your data, follow the migration guide to rebuild your portfolio on a free template.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4" aria-label="Primary actions">
              <Button asChild size="lg" className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 hover:scale-105 transition-all shadow-xl font-semibold">
                <Link to="/transition">
                  Migration Guide
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6 h-auto text-lg border-white/40 bg-white/10 text-white hover:bg-white/20 transition-all font-semibold">
                <Link to="/podcast">
                  Listen to the Podcast
                </Link>
              </Button>
            </div>
          </header>

          {/* Product Screenshot — what Prodfolio looked like */}
          <div className="max-w-[1100px] mx-auto">
            <div className="glass-card relative overflow-hidden">
              <div className="bg-white/5 border-b border-white/10 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
                <div className="flex-1 mx-8">
                  <div className="bg-white/10 rounded-md px-3 py-1 text-xs text-white/50 border border-white/10 max-w-xs mx-auto text-center font-mono">
                    app.prodfolio.io/sarah-chen
                  </div>
                </div>
              </div>

              <div className="bg-white relative overflow-y-auto max-h-[500px] md:max-h-[600px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                <img src={screenshotTop} alt="Portfolio header with summary, professional timeline, and contact info" className="w-full h-auto block" loading="eager" />
                <img src={screenshotMid} alt="Case studies and professional references" className="w-full h-auto block" loading="lazy" />
                <img src={screenshotBottom} alt="Product philosophy and beyond work projects" className="w-full h-auto block" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — what people said */}
      <section ref={testimonialsAnimation.ref as React.RefObject<HTMLElement>} className={`py-12 ${testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              What PMs said about Prodfolio
            </h2>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent md:grid md:grid-cols-6 md:overflow-visible md:snap-none md:pb-0 max-w-6xl mx-auto">
            {[
              { before: "The prompts helped me translate my experience into clear case studies without overthinking it.", highlight: "I went from a blank page to a clean, structured portfolio in under 2 hours.", name: "Jim", role: "Principal Product Manager" },
              { before: "Building a portfolio from scratch would have taken me weeks.", highlight: "Prodfolio understands what hiring managers in product management are looking for.", name: "Olympia B.", role: "CNBC" },
              { before: "I spent 8-12 hours building a portfolio in Notion and still felt too nervous to share it.", highlight: "Prodfolio gets what product managers actually need.", name: "Lea", role: "Product Lead" },
              { before: "I've used Wix, Squarespace, and Behance — they were so time-consuming.", highlight: "Prodfolio shows you exactly what to include in a case study.", name: "Amy W.", role: "Product Manager" },
              { before: "The product is really intuitive with an amazing structure.", highlight: "As a candidate, it helps me stand out in a sea of CVs.", name: "Evelyn", role: "Product Manager" },
            ].map((t, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
              <blockquote key={i} className={`glass-card p-5 flex flex-col min-w-[300px] snap-center md:min-w-0 md:col-span-3 ${isLast ? 'md:col-start-2' : ''}`}>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-base text-white/70 leading-relaxed flex-1 mb-4">
                  {t.before} <span className="text-white font-medium">{t.highlight}</span>
                </p>
                <footer className="flex items-center gap-3 text-sm border-t border-white/10 pt-3">
                  <cite className="font-semibold text-white not-italic">{t.name}</cite>
                  <div className="w-px h-4 bg-white/20"></div>
                  <span className="text-white/50">{t.role}</span>
                </footer>
              </blockquote>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaAnimation.ref as React.RefObject<HTMLElement>} className={`pt-6 pb-12 px-4 cta-glow-section ${ctaAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-6">
            Don't lose your portfolio — export and migrate today.
          </h2>
          <Button asChild className="px-8 py-5 h-auto text-base bg-white text-primary font-semibold hover:bg-white/90 hover:scale-105 transition-all shadow-xl rounded-xl">
            <Link to="/transition">
              Migration Guide
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Landing;
