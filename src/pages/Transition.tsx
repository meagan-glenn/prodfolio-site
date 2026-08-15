import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const TEMPLATE_URL = "https://prodfoliocopy.lovable.app/";
const EXPORT_URL = "https://app.prodfolio.io/settings";
const SUPPORT_EMAIL = "hello@prodfolio.io";
const VIDEO_EMBED_URL =
  "https://www.tella.tv/video/vid_cmsrqu4ib00000aj52797cido/embed?b=0&title=1&a=1&loop=0&autoPlay=false&t=0&muted=0&wt=0&o=0";

const PROMPT = `I'm a Prodfolio user. Attached is my Prodfolio export.json. Please map my Prodfolio export into src/content.ts, replacing all of the Meagan Glenn demo content with my real data.

Notes:
Media/image URLs in the export point at Supabase storage and are publicly accessible — use them directly as URLs (don't try to download them into src/assets).
Keep every section that has data: hero (photo, name, title, location, specializations, summary, availability, philosophy, links), case studies with their full SIGNAL content (situation/insight/goals/navigation/achievement/learnings, metrics, media), professional timeline, references (including relationship type), and beyond-work links. Be sure each case study has a hero image, similar to my example here https://www.meaganglenn.me/

If a field in my export doesn't have an obvious slot in content.ts, mention it in your summary rather than silently dropping it.`;

const STEPS: { title: React.ReactNode; body: React.ReactNode }[] = [
  {
    title: (
      <>
        Export your data from <strong className="text-white">Settings → Export</strong>
      </>
    ),
    body: (
      <>
        Log in to{" "}
        <a href={EXPORT_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-white transition-colors">
          app.prodfolio.io
        </a>
        , open Settings, and click Export. You'll get a zip containing <code className="text-white/90 bg-white/10 px-1.5 py-0.5 rounded">export.json</code> plus your media.
      </>
    ),
  },
  {
    title: <>Open the Lovable template</>,
    body: (
      <>
        We built a template that mirrors the Prodfolio layout as closely as possible, so the move shouldn't feel like a rebuild.{" "}
        <a href={TEMPLATE_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-white transition-colors">
          View the template
        </a>
        .
      </>
    ),
  },
  {
    title: (
      <>
        Click <strong className="text-white">Edit with Lovable → Remix</strong>
      </>
    ),
    body: <>This creates your own copy of the template in your Lovable account. Lovable has a free tier; you'll need an account to remix.</>,
  },
  {
    title: <>Paste the prompt below and attach your export</>,
    body: <>Drop the prompt into the Lovable chat, attach your <code className="text-white/90 bg-white/10 px-1.5 py-0.5 rounded">export.json</code>, and send it. Lovable will map your content into the template and tell you if anything didn't have an obvious home.</>,
  },
  {
    title: (
      <>
        Make any tweaks, then hit <strong className="text-white">Publish</strong>
      </>
    ),
    body: <>Adjust anything you like — colors, sections, copy — then publish. Lovable gives you a live URL, and you can connect a custom domain from their settings.</>,
  },
];

const Transition = () => {
  const [copied, setCopied] = useState(false);

  useSEO({
    title: "Migrate Your Portfolio | Prodfolio",
    description:
      "Prodfolio is shutting down on September 1, 2026. Follow this 5-step walkthrough to move your portfolio to a free Lovable template that mirrors your Prodfolio site.",
    canonical: "https://prodfolio.io/transition",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Migrate your Prodfolio portfolio to Lovable",
      description: "Export your Prodfolio data and rebuild it on a Lovable template in five steps.",
      step: [
        { "@type": "HowToStep", name: "Export your data", text: "In Prodfolio, go to Settings → Export and download the zip." },
        { "@type": "HowToStep", name: "Open the Lovable template", text: "Visit the Prodfolio Lovable template." },
        { "@type": "HowToStep", name: "Remix", text: "Click Edit with Lovable → Remix." },
        { "@type": "HowToStep", name: "Paste the prompt", text: "Paste the migration prompt and attach export.json." },
        { "@type": "HowToStep", name: "Publish", text: "Make any tweaks and hit Publish." },
      ],
    },
  });

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — user can still select the text manually.
    }
  };

  return (
    <div className="min-h-screen gradient-mesh-bg" id="main-content" role="main">
      <Navbar />

      <section className="pt-28 pb-20 px-4">
        <div className="prodfolio-container max-w-[860px] mx-auto">
          {/* Header */}
          <div className="mb-10">
            <p className="text-sm font-medium text-white/60 uppercase tracking-widest mb-3">Prodfolio is shutting down September 1, 2026</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
              Move your portfolio in five steps
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              We want everyone to leave with their work intact. This walkthrough takes your Prodfolio export and rebuilds it on a free Lovable template that looks and reads as close to 1:1 as we could make it — and it's yours to change from there.
            </p>
          </div>

          <div className="space-y-8">
            {/* Deadline */}
            <div className="glass-card p-6 border border-coral-dark/40">
              <h2 className="text-lg font-heading font-bold text-white mb-2">What happens on September 1</h2>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-coral-dark font-bold mt-0.5">→</span>
                  <span>Your account, published portfolio, and export stay available <strong className="text-white">until September 1, 2026</strong>. Export before then.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral-dark font-bold mt-0.5">→</span>
                  <span>After September 1 we can't guarantee ongoing support, access, or that portfolio links will continue to resolve.</span>
                </li>
              </ul>
            </div>

            {/* Video */}
            <div className="glass-card p-4 md:p-6">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">Watch the walkthrough</h2>
              <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: "64.7917%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  src={VIDEO_EMBED_URL}
                  title="How to migrate your Prodfolio portfolio to Lovable"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Steps */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-6">Or follow the steps</h2>
              <ol className="space-y-6">
                {STEPS.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-white/75 leading-relaxed">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Prompt */}
            <div className="glass-card p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-white mb-1">The prompt</h2>
                  <p className="text-white/70">Paste this into Lovable along with your export.json.</p>
                </div>
                <Button
                  onClick={copyPrompt}
                  variant="outline"
                  className="shrink-0 border-white/30 bg-white/10 text-white hover:bg-white/20 rounded-xl"
                  aria-live="polite"
                >
                  {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copied ? "Copied" : "Copy prompt"}
                </Button>
              </div>
              <pre className="whitespace-pre-wrap break-words text-sm leading-relaxed text-white/85 bg-black/30 border border-white/10 rounded-xl p-5 font-sans">
                {PROMPT}
              </pre>
            </div>

            {/* Template */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">The template</h2>
              <p className="text-white/70 mb-5 leading-relaxed">
                Same sections, same structure — hero, case studies, timeline, references, and beyond-work links. Remix it and make it yours.
              </p>
              <Button asChild className="bg-white text-navy hover:bg-white/90 font-semibold rounded-xl px-6 py-5 h-auto">
                <a href={TEMPLATE_URL} target="_blank" rel="noopener noreferrer">
                  Open the Lovable template <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                </a>
              </Button>
            </div>

            {/* Help */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">Need a hand?</h2>
              <p className="text-white/75 leading-relaxed">
                If you hit a snag or want a second pair of eyes before you publish, we're happy to help 1:1 through the end of August. Email{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline underline-offset-2 hover:text-white transition-colors">
                  {SUPPORT_EMAIL}
                </a>{" "}
                or DM Meagan on{" "}
                <a href="https://www.linkedin.com/in/meagan-glenn/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-white transition-colors">
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transition;
