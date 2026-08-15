import { Button } from "@/components/ui/button";
import { Calendar, Quote, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import screenshotTop from "@/assets/new-top-portfolio-v2.png";
import screenshotMid from "@/assets/new-mid-portfolio.png";
import screenshotBottom from "@/assets/new-bottom-portfolio.png";
import aaronTestimonial from "@/assets/aaron-testimonial.png";
import heidiTestimonial from "@/assets/heidi-testimonial.png";
const Landing = () => {
  const heroAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const insightsAnimation = useScrollAnimation();
  const audienceAnimation = useScrollAnimation();
  const howItWorksAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const liveSessionAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  // Enhanced SEO for the homepage
  useSEO({
    title: "PM Portfolio Builder | Create Your Product Manager Portfolio Free | Prodfolio",
    description: "Build your product manager portfolio in under an hour. Showcase your PM thinking, prove your impact, and stand out to hiring managers. Free to start, no design skills needed.",
    ogTitle: "Prodfolio — Build Your Product Portfolio in Minutes",
    ogDescription: "Showcase your product thinking and prove your impact with a professional portfolio. No design skills required.",
    ogImage: "https://prodfolio.io/social-share.png",
    ogType: "website",
    canonical: "https://prodfolio.io/",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Prodfolio",
          "url": "https://prodfolio.io",
          "logo": "https://prodfolio.io/favicon.svg",
          "description": "Portfolio platform for product managers to showcase their work, thinking, and impact.",
          "foundingDate": "2025-02",
          "slogan": "You've shipped great products. Can you prove it?",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "hello@prodfolio.io"
          }
        },
        {
          "@type": "SoftwareApplication",
          "name": "Prodfolio",
          "description": "Build your product portfolio in minutes. Showcase your PM work, prove your impact, and land your next role with confidence.",
          "url": "https://prodfolio.io",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": [
            {
              "@type": "Offer",
              "name": "Free Plan",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Basic features with watermark"
            },
            {
              "@type": "Offer",
              "name": "Starter Plan",
              "price": "19",
              "priceCurrency": "USD",
              "description": "Full features, no watermark"
            },
            {
              "@type": "Offer",
              "name": "Pro Plan",
              "price": "29",
              "priceCurrency": "USD",
              "description": "Advanced features, priority support"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "ratingCount": "50",
            "reviewCount": "50"
          }
        },
        {
          "@type": "WebSite",
          "name": "Prodfolio",
          "url": "https://prodfolio.io"
        }
      ]
    }
  });
  return <div className="min-h-screen gradient-mesh-bg" id="main-content" role="main">
      <Navbar />
      {/* Hero Section */}
      <section ref={heroAnimation.ref as React.RefObject<HTMLElement>} className={`relative pt-28 pb-12 overflow-hidden ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Animated background orbs — decorative, hero section only */}
        <div className="hero-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-orb hero-orb-2" aria-hidden="true" />
        <div className="hero-orb hero-orb-3" aria-hidden="true" />

        <div className="prodfolio-container max-w-[1400px] relative z-10">
          <header className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight mb-6 text-white">
              You've shipped great products.
              <br />
              <span className="gradient-text">Can you prove it?</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
              Prodfolio is shutting down on September 1, 2026. Take your portfolio with you — we built a template and a 5-step walkthrough to make the move painless.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4" aria-label="Primary call to action">
              <Button asChild size="lg" className="px-8 py-6 h-auto text-lg bg-white text-navy hover:bg-white/90 hover:scale-105 transition-all shadow-xl font-semibold">
                <Link to="/transition">
                  Move Your Portfolio
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6 h-auto text-lg border-white/40 bg-white/10 text-white hover:bg-white/20 transition-all font-semibold">
                <a href="https://app.prodfolio.io/login" target="_blank" rel="noopener noreferrer">
                  Log In to Export
                </a>
              </Button>
            </div>
            <p className="text-sm text-white/60 italic mt-4">
              Existing members: export your data before September 1. Questions? hello@prodfolio.io
            </p>

          </header>

          {/* Product Screenshot Mockup */}
          <div className="max-w-[1100px] mx-auto">
            <div className="glass-card relative overflow-hidden hover-lift">
              {/* Browser Chrome */}
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
              
              {/* Scrollable portfolio preview */}
              <div className="bg-white relative overflow-y-auto max-h-[500px] md:max-h-[600px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                <img src={screenshotTop} alt="Portfolio header with summary, professional timeline, and contact info" className="w-full h-auto block" loading="eager" />
                <img src={screenshotMid} alt="Case studies and professional references" className="w-full h-auto block" loading="lazy" />
                <img src={screenshotBottom} alt="Product philosophy and beyond work projects" className="w-full h-auto block" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Managers Section - Overlapping glass cards, reduced height */}
      <section ref={insightsAnimation.ref as React.RefObject<HTMLElement>} className={`py-10 ${insightsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className={`text-center mb-8 ${insightsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Designed for how hiring managers evaluate PMs
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">We asked VPs of Product and recruiters what they look for:</p>
          </div>
          
          {/* Overlapping cards */}
          <div className="max-w-6xl mx-auto relative">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent md:grid md:grid-cols-2 md:overflow-visible md:snap-none md:pb-0 md:items-stretch">
              {/* Card 1 */}
              <article className="glass-card p-8 relative hover:z-10 flex flex-col h-full min-w-[320px] snap-center md:min-w-0">
                <div className="absolute -top-3 left-6">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="pt-4 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 flex-1">
                    <img src={aaronTestimonial} alt="Aaron K., VP of Product" className="w-12 h-12 rounded-full object-cover flex-shrink-0" loading="lazy" />
                    <div className="flex-1 flex flex-col">
                      <p className="text-base text-white/95 mb-4 leading-relaxed italic flex-1">
                        "Portfolios reveal how PMs navigate complexity — <strong>how they think, influence without authority, and drive outcomes from discovery to launch.</strong>"
                      </p>
                      <p className="text-sm text-white/70 font-medium">
                        Aaron K., VP of Product
                      </p>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Card 2 */}
              <article className="glass-card p-8 relative hover:z-10 flex flex-col h-full min-w-[320px] snap-center md:min-w-0">
                <div className="absolute -top-3 left-6">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="pt-4 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 flex-1">
                    <img src={heidiTestimonial} alt="Heidi R., Product Recruiter" className="w-12 h-12 rounded-full object-cover flex-shrink-0" loading="lazy" />
                    <div className="flex-1 flex flex-col">
                      <p className="text-base text-white/95 mb-4 leading-relaxed italic flex-1">
                        "A strong portfolio helps cut through the noise. <strong>A product manager's portfolio showcases how they define problems, apply thinking and the impact of what they shipped.</strong>"
                      </p>
                      <p className="text-sm text-white/70 font-medium">
                        Heidi R., Product Recruiter
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Variant-style Feature Sections with UI Mockups */}
      <section ref={howItWorksAnimation.ref as React.RefObject<HTMLElement>} className={`py-10 ${howItWorksAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              From blank page to portfolio in under an hour
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              No design skills needed. No weeks of prompting. Just your experience and our guided framework.
            </p>
          </div>

          {/* Feature 01 - Import */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-28">
            <div className="order-1 lg:order-1">
              <div className="inline-block bg-primary/40 text-white font-heading font-bold text-sm tracking-wide mb-3 px-3 py-1.5 rounded-full">01 — IMPORT</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Import your experience in seconds
              </h3>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Upload your resume. Our AI extracts information and experience, building the foundation for your portfolio.
              </p>
              <Button asChild size="lg" className="px-6 py-5 h-auto text-base bg-primary text-white hover:bg-primary/90 inline-flex items-center gap-2 rounded-xl font-semibold">
                <a href="https://app.prodfolio.io/login" target="_blank" rel="noopener noreferrer">
                  Log in <span aria-hidden="true">→</span>
                </a>
              </Button>
            </div>
            <div className="order-2 lg:order-2">
              {/* Import UI Mockup */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 max-w-md mx-auto lg:ml-auto hover-lift">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/15">
                  <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white text-sm">Resume Upload</div>
                    <div className="text-xs text-white/60">resume_sarah_chen.pdf</div>
                  </div>
                  <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-sm text-white/80">Basics filled in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-sm text-white/80">About section created</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-sm text-white/80">Professional summary written</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-white/15 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-sm text-white/60">Adding experience...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 02 - Build */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-28">
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-primary/40 text-white font-heading font-bold text-sm tracking-wide mb-3 px-3 py-1.5 rounded-full">02 — BUILD</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Structure your story with SIGNAL
              </h3>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Our guided framework walks you through each case study. No more staring at a blank page.
              </p>
              <Button asChild size="lg" className="px-6 py-5 h-auto text-base bg-primary text-white hover:bg-primary/90 inline-flex items-center gap-2 rounded-xl font-semibold">
                <a href="/how-it-works">
                  See the framework <span aria-hidden="true">→</span>
                </a>
              </Button>
            </div>
            <div className="order-2 lg:order-1">
              {/* SIGNAL Framework UI Mockup */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 max-w-md mx-auto lg:mr-auto hover-lift">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/15">
                  <div>
                    <div className="font-semibold text-white">SIGNAL Framework</div>
                    <div className="text-xs text-white/60">Case Study Builder</div>
                  </div>
                  <div className="text-xs font-medium text-green-400 bg-green-400/15 px-2 py-1 rounded-full">4/6 Complete</div>
                </div>
                <div className="space-y-2">
                  {[
                    { letter: 'S', label: 'Situation', status: 'complete', desc: 'Context & challenge' },
                    { letter: 'I', label: 'Insight', status: 'complete', desc: 'Key discovery' },
                    { letter: 'G', label: 'Goals', status: 'complete', desc: 'What you aimed for' },
                    { letter: 'N', label: 'Navigation', status: 'active', desc: 'How you got there' },
                    { letter: 'A', label: 'Achievement', status: 'pending', desc: 'Measurable outcomes' },
                    { letter: 'L', label: 'Learnings', status: 'pending', desc: 'Key takeaways' },
                  ].map((item) => (
                    <div key={item.letter} className={`flex items-center gap-3 p-2 rounded-lg ${item.status === 'active' ? 'bg-white/10 border border-primary/40' : ''}`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                        item.status === 'complete' ? 'bg-green-400/20 text-green-400' :
                        item.status === 'active' ? 'bg-primary text-white' :
                        'bg-white/10 text-white/40'
                      }`}>
                        {item.status === 'complete' ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                        ) : item.letter}
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${item.status === 'pending' ? 'text-white/40' : 'text-white'}`}>{item.label}</div>
                        <div className="text-xs text-white/50">{item.desc}</div>
                      </div>
                      {item.status === 'active' && (
                        <div className="text-xs text-primary font-medium">Writing...</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature 03 - Share */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <div className="inline-block bg-primary/40 text-white font-heading font-bold text-sm tracking-wide mb-3 px-3 py-1.5 rounded-full">03 — SHARE</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                One link. Unlimited impact.
              </h3>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Get your personalized portfolio link. Share it with hiring managers, add it to LinkedIn, and own your narrative with a professional presence.
              </p>
              <Button asChild size="lg" className="px-6 py-5 h-auto text-base bg-primary text-white hover:bg-primary/90 inline-flex items-center gap-2 rounded-xl font-semibold">
                <a href="https://app.prodfolio.io/login" target="_blank" rel="noopener noreferrer">
                  Log in <span aria-hidden="true">→</span>
                </a>
              </Button>
            </div>
            <div className="order-2 lg:order-2">
              {/* Share UI Mockup */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 max-w-md mx-auto lg:ml-auto hover-lift">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-semibold text-white">Share Settings</div>
                  <div className="text-xs font-medium text-green-400 bg-green-400/15 px-3 py-1 rounded-full">Live</div>
                </div>
                {/* Case Study Lock Toggle */}
                <div className="bg-white/10 rounded-xl p-4 mb-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                      <span className="text-sm font-medium text-white">Lock your case study</span>
                    </div>
                    {/* Toggle switch - ON state */}
                    <div className="w-11 h-6 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                </div>
                {/* Portfolio Link */}
                <div className="space-y-2">
                  <div className="text-xs text-white/50">Your portfolio link</div>
                  <div className="bg-white/10 rounded-lg p-3 flex items-center gap-2 border border-white/10">
                    <div className="flex-1 text-sm text-white/70 font-mono truncate">app.prodfolio.io/p/your-name</div>
                    <button className="px-3 py-1.5 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary/90">Copy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsAnimation.ref as React.RefObject<HTMLElement>} className={`py-12 ${testimonialsAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="prodfolio-container max-w-[1400px]">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Hear it from PMs like you
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
            Your next PM role starts with your portfolio.
          </h2>
          <Button asChild className="px-8 py-5 h-auto text-base bg-white text-primary font-semibold hover:bg-white/90 hover:scale-105 transition-all shadow-xl rounded-xl">
            <Link to="/transition">
              Move Your Portfolio
            </Link>
          </Button>
          <p className="mt-4">
            <Link to="/quiz" className="text-sm text-white/60 hover:text-white/90 transition-colors underline underline-offset-2">
              Not sure where to start? Find out what kind of PM you are ➜
            </Link>
          </p>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>;
};
export default Landing;