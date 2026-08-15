import { Calendar, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSEO } from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const scrollRef = useScrollAnimation();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  useSEO({
    title: "Product Portfolio Builder Pricing | Free & Pro Plans - Prodfolio",
    description: "Compare Prodfolio pricing plans — from Free to Premium. Build and showcase your product portfolio with AI-powered storytelling tools.",
    canonical: "https://prodfolio.io/pricing",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I switch plans later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle."
          }
        },
        {
          "@type": "Question",
          "name": "What payment methods do you accept?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We accept credit/debit cards, Apple Pay, Google Pay, and Link by Stripe for one-click checkout."
          }
        },
        {
          "@type": "Question",
          "name": "Can I try before I buy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Start free and explore Prodfolio. When you're ready for more, try Founding Member with a 14-day free trial — no charge until the trial ends. Cancel anytime."
          }
        },
        {
          "@type": "Question",
          "name": "Can I cancel anytime?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Cancel your subscription anytime from your account settings."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Prodfolio different from other portfolio tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're built by PMs, for PMs. Every feature is designed around how you actually work and what hiring managers actually want to see. Plus, you're joining a community of product people who get it."
          }
        }
      ]
    },
    breadcrumbs: [
      { name: "Home", url: "https://prodfolio.io" },
      { name: "Pricing", url: "https://prodfolio.io/pricing" },
    ],
  });

  return (
    <div className="min-h-screen gradient-mesh-bg" id="main-content" role="main">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-4">
        <div className="prodfolio-container text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 text-white">
            Invest in your <span className="gradient-text">PM career</span>
          </h1>
          <p className="text-xl text-white/80 mb-4">
            For less than the cost of a coffee per week, stand out in every application.
          </p>
          <div className="glass-card inline-block px-6 py-4 mt-2 border border-coral-dark/40 text-left max-w-2xl">
            <p className="text-white/90">
              <strong className="text-white">Prodfolio is closed to new subscriptions.</strong> The platform shuts down on September 1, 2026. Existing members can{" "}
              <Link to="/transition" className="text-primary underline underline-offset-2 hover:text-white transition-colors">move their portfolio in five steps</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="pt-6 pb-2">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1.5 shadow-xl">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 rounded-full transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-white text-navy font-medium shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
                billingCycle === "annual"
                  ? "bg-white text-navy font-medium shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Annual
              <span className="text-xs bg-coral text-white px-2 py-0.5 rounded-full font-bold">
                Save 28%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section
        ref={scrollRef.ref as React.RefObject<HTMLElement>}
        className={`pt-4 pb-8 ${scrollRef.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch">
            {/* Free Plan */}
            <Card
              className="relative flex flex-col bg-white/95 backdrop-blur-md border border-primary/20 hover-lift transition-all duration-300"
              style={{ borderRadius: '24px' }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2 mb-2 min-h-[32px]">
                  <CardTitle className="text-xl font-heading text-navy">Free</CardTitle>
                </div>
                <div className="mt-3 mb-2">
                  <div className="text-5xl font-heading font-bold text-navy">$0</div>
                  <div className="mt-2 min-h-[44px]" />
                </div>
                <CardDescription className="text-sm leading-relaxed text-navy/70 min-h-[20px]">
                  Build your first portfolio
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 pb-4 flex-grow">
                <ul className="space-y-3">
                  {[
                    "1 portfolio with unlimited edits",
                    "Professional themes (5 options)",
                    "3 AI-generated case studies",
                    "AI resume uploads",
                    "Profile picture",
                    "SIGNAL framework with guided prompts",
                    "Public portfolio link",
                    "Basic analytics",
                    '"Built with Prodfolio" footer'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-snug text-navy">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0 pb-6 mt-auto flex-col">
                <Button
                  disabled
                  className="w-full h-12 font-semibold bg-navy/40 text-white/70 cursor-not-allowed"
                  style={{ borderRadius: '12px' }}
                >
                  New sign-ups closed
                </Button>
              </CardFooter>
            </Card>

            {/* Founding Member Plan */}
            <Card
              className="relative flex flex-col bg-white/95 backdrop-blur-md border-2 border-primary shadow-xl ring-2 ring-primary/20 hover-lift transition-all duration-300"
              style={{ borderRadius: '24px' }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-auto">
                <span className="bg-coral text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xl">
                  LIMITED SPOTS
                </span>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2 mb-2 min-h-[32px]">
                  <CardTitle className="text-xl font-heading text-navy">Founding Member</CardTitle>
                </div>
                <div className="mt-3 mb-2">
                  <div className="text-5xl font-heading font-bold text-navy">
                    {billingCycle === "monthly" ? "$15" : "$10.75"}
                  </div>
                  <div className="mt-2 min-h-[44px]">
                    <div className="text-sm text-navy/70">
                      per month{billingCycle === "annual" && <span className="block text-xs mt-0.5">$129 billed annually</span>}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed text-navy/70 min-h-[20px]">
                  Everything unlocked + founder perks
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 pb-4 flex-grow">
                <ul className="space-y-3">
                  {[
                    "Unlimited portfolios, AI case studies & resume uploads",
                    "Password-protected portfolios",
                    "Custom domain (yourname.com)",
                    "Custom themes & colors",
                    "Advanced analytics dashboard",
                    "Remove Prodfolio branding",
                    "Priority support",
                    "Portfolio review within 30 days",
                    "Direct Slack access to founders",
                    "Monthly AMAs & roadmap sessions",
                    "Founding Member badge on your portfolio",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm leading-snug text-navy">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0 pb-6 mt-auto flex-col">
                <Button
                  disabled
                  className="w-full h-12 font-semibold bg-navy/40 text-white/70 cursor-not-allowed"
                  style={{ borderRadius: '12px' }}
                >
                  New sign-ups closed
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee Section */}
      <section className="pt-4 pb-2">
        <div className="prodfolio-container max-w-4xl">
          <div className="glass-card p-5 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-heading font-bold text-white">30-Day Money-Back Guarantee</h3>
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              Try Prodfolio risk-free. If you're not satisfied within 30 days, we'll refund you, no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-8 pb-10">
        <div className="prodfolio-container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-6 text-white">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="faq-0" className="glass-card px-5 py-1 border-none">
              <AccordionTrigger className="text-lg font-heading font-bold text-white hover:no-underline py-4">
                Can I switch plans later?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 leading-relaxed pb-4">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-1" className="glass-card px-5 py-1 border-none">
              <AccordionTrigger className="text-lg font-heading font-bold text-white hover:no-underline py-4">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 leading-relaxed pb-4">
                We accept credit/debit cards, Apple Pay, Google Pay, and Link by Stripe for one-click checkout.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2" className="glass-card px-5 py-1 border-none">
              <AccordionTrigger className="text-lg font-heading font-bold text-white hover:no-underline py-4">
                Can I try before I buy?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 leading-relaxed pb-4">
                Yes! Start free and explore Prodfolio. When you're ready for more, try Founding Member with a 14-day free trial — no charge until the trial ends. Cancel anytime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3" className="glass-card px-5 py-1 border-none">
              <AccordionTrigger className="text-lg font-heading font-bold text-white hover:no-underline py-4">
                Can I cancel anytime?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 leading-relaxed pb-4">
                Absolutely. Cancel your subscription anytime from your account settings. We may reach out for feedback on how to improve :)
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4" className="glass-card px-5 py-1 border-none">
              <AccordionTrigger className="text-lg font-heading font-bold text-white hover:no-underline py-4">
                What makes Prodfolio different from other portfolio tools?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 leading-relaxed pb-4">
                We're built by PMs, for PMs. Every feature is designed around how you actually work and what hiring managers actually want to see. Plus, you're joining a community of product people who get it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Live Setup Session CTA */}
      <section className="pt-2 pb-6">
        <div className="prodfolio-container max-w-4xl">
          <a
            href="https://cal.com/prodfolio/portfolio-setup"
            target="_blank"
            rel="noopener noreferrer"
            className="block glass-card p-5 hover:bg-white/15 transition-all group"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Want help getting started?</p>
                  <p className="text-white/70 text-sm">Join a free 1-hour live setup session — Tuesdays & Thursdays. Leave with a published portfolio.</p>
                </div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all hidden sm:flex">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>


      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Pricing;
