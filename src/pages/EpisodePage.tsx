import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getEpisodeBySlug, getRelatedEpisodes } from "@/data/episodes";
import {
  Clock,
  Calendar,
  ChevronRight,
  Home,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  MapPin,
  Building2,
  Globe,
  Tag,
  CheckCircle2,
  Youtube,
  BookOpen,
  Headphones
} from "lucide-react";
import meaganPhoto from "@/assets/meagan-photo.png";
import santianaPhoto from "@/assets/santiana-photo.png";

const BUZZSPROUT_PODCAST_ID = "2410339";

const EpisodePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const heroAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();

  const episode = slug ? getEpisodeBySlug(slug) : undefined;
  const relatedEpisodes = slug ? getRelatedEpisodes(slug, 2) : [];

  // Scroll to top when page loads or episode changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Load Buzzsprout player script
  useEffect(() => {
    if (!episode?.buzzsproutId) return;

    const containerId = `buzzsprout-player-${episode.buzzsproutId}`;
    const scriptId = `buzzsprout-script-${episode.buzzsproutId}`;

    // Remove any existing script for this episode
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Create and load the Buzzsprout script
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://www.buzzsprout.com/${BUZZSPROUT_PODCAST_ID}/episodes/${episode.buzzsproutId}.js?container_id=${containerId}&player=large`;
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [episode?.buzzsproutId]);

  // SEO with episode-specific metadata
  useSEO({
    title: episode
      ? `${episode.title} with ${episode.guest.name} | The Product Pivot Podcast`
      : "Episode Not Found | The Product Pivot Podcast",
    description: episode?.longDescription || "Episode not found",
    canonical: `https://prodfolio.io/podcast/episodes/${slug}`,
    structuredData: episode ? [
      {
        "@context": "https://schema.org",
        "@type": "PodcastEpisode",
        "name": episode.title,
        "description": episode.longDescription,
        "datePublished": episode.publishedAt,
        "duration": episode.duration,
        "url": `https://prodfolio.io/podcast/episodes/${slug}`,
        "partOfSeries": {
          "@type": "PodcastSeries",
          "name": "The Product Pivot",
          "url": "https://prodfolio.io/podcast"
        },
        "author": [
          { "@type": "Person", "name": "Meagan Glenn" },
          { "@type": "Person", "name": "Santiana Brace" }
        ],
        "guest": {
          "@type": "Person",
          "name": episode.guest.name,
          "jobTitle": episode.guest.role
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": episode.title,
        "description": episode.longDescription,
        "thumbnailUrl": episode.thumbnail || `https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`,
        "uploadDate": episode.publishedAt,
        "duration": episode.duration,
        "embedUrl": `https://www.youtube.com/embed/${episode.youtubeId}`,
        "contentUrl": `https://www.youtube.com/watch?v=${episode.youtubeId}`,
        "publisher": {
          "@type": "Organization",
          "name": "Prodfolio",
          "logo": {
            "@type": "ImageObject",
            "url": "https://prodfolio.io/prodfolio-icon.png"
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://prodfolio.io"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Podcast",
            "item": "https://prodfolio.io/podcast"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": episode.title,
            "item": `https://prodfolio.io/podcast/episodes/${slug}`
          }
        ]
      }
    ] : undefined
  });

  if (!episode) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]">
        <Navbar />
        <div className="prodfolio-container py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Episode Not Found</h1>
          <p className="text-white/70 mb-8">The episode you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/podcast">← Back to Podcast</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const [year, month, day] = episode.publishedAt.split('-');
  const formattedDate = new Date(Number(year), Number(month) - 1, Number(day)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const topicLabels: Record<string, string> = {
    hiring: "Hiring & Recruiting",
    career: "Career Transitions",
    ai: "AI & Tech",
    leadership: "Leadership"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]">
      <Navbar />

      {/* Breadcrumb Navigation */}
      <nav className="prodfolio-container max-w-[1200px] mx-auto pt-24 px-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 text-white/60 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          <li className="text-white/40">
            <ChevronRight className="w-4 h-4" />
          </li>
          <li>
            <Link
              to="/podcast"
              className="text-white/60 hover:text-white transition-colors"
            >
              Podcast
            </Link>
          </li>
          <li className="text-white/40">
            <ChevronRight className="w-4 h-4" />
          </li>
          <li className="text-white/80 truncate max-w-[200px] sm:max-w-none" title={episode.title}>
            {episode.title}
          </li>
        </ol>
      </nav>

      {/* Hero Section with Episode Header */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-8 pb-6 px-4 ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          {/* Episode Number & Topic */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {episode.episodeNumber && (
              <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm font-medium">
                {episode.episodeNumber}
              </span>
            )}
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              {topicLabels[episode.topic]}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            {episode.title}
          </h1>

          {/* Guest Info */}
          <p className="text-lg md:text-xl text-primary mb-4">
            with {episode.guest.name}, {episode.guest.role} at {episode.guest.company}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {episode.duration}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section
        ref={contentAnimation.ref as React.RefObject<HTMLElement>}
        className={`pb-12 px-4 ${contentAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Main Media Player */}
              {episode.buzzsproutId ? (
                /* Audio Player (Buzzsprout) - Primary when available */
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div id={`buzzsprout-player-${episode.buzzsproutId}`}></div>
                </div>
              ) : (
                /* Video Player - Fallback when no audio */
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black/50">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                    title={episode.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Listen On Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={episode.appleUrl || "https://podcasts.apple.com/sk/podcast/the-product-pivot-stories-of-career-shifts/id1784108281"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-b from-[#F452FF] to-[#832BC1] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392l.12.672-.672.12c-.576.096-.96.168-.96.168l-.096-.576c-.312-1.512-.888-2.688-1.896-3.696-1.32-1.392-3.024-2.16-4.8-2.16-3.696 0-6.696 3-6.696 6.696 0 .432.048.864.12 1.272.144.792.408 1.536.768 2.208.528 1.008 1.272 1.872 2.16 2.544l.144.12-.024.168c-.048.216-.168.768-.216 1.008l-.048.24-.216-.144c-1.08-.768-1.944-1.776-2.544-2.928a8.238 8.238 0 01-.888-2.544 8.238 8.238 0 01-.144-1.464 8.192 8.192 0 012.399-5.809A8.254 8.254 0 0111.865 2.568zm.048 3.792c1.464 0 2.832.576 3.864 1.608a5.478 5.478 0 011.536 3.24l.048.576-.576.072c-.432.048-.768.096-.768.096l-.072-.432c-.144-1.008-.576-1.92-1.272-2.64-.816-.816-1.896-1.272-3.048-1.272-2.376 0-4.32 1.944-4.32 4.32 0 .288.024.576.072.864.12.672.36 1.296.72 1.872.456.744 1.08 1.368 1.824 1.824l.144.096-.048.168c-.072.264-.192.72-.264.984l-.048.168-.168-.096c-.888-.552-1.608-1.296-2.136-2.16a6.332 6.332 0 01-.816-2.136 6.332 6.332 0 01-.096-1.08c0-1.68.648-3.264 1.848-4.464a6.309 6.309 0 014.572-1.908zm-.024 3.72a2.61 2.61 0 012.28 1.344 2.61 2.61 0 01-.96 3.552c-.144.096-.312.168-.48.24v2.208l-.024.456c-.024.6-.048 1.2-.096 1.8-.048.456-.096.912-.168 1.368-.072.504-.36.912-.816 1.104a1.6 1.6 0 01-1.392-.048c-.408-.24-.672-.648-.744-1.128-.072-.432-.12-.864-.168-1.296-.048-.6-.072-1.2-.096-1.8l-.024-.456v-2.208a2.61 2.61 0 01-.48-.24 2.61 2.61 0 01-.96-3.552 2.61 2.61 0 012.28-1.344h.848z"/>
                  </svg>
                  Apple Podcasts
                </a>
                <a
                  href={episode.spotifyUrl || "https://open.spotify.com/show/6V84WaWyUxMA4FGoLLZYJI"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#1DB954] text-white rounded-lg text-sm font-medium hover:bg-[#1DB954]/90 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Spotify
                </a>
                <a
                  href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#FF0000] text-white rounded-lg text-sm font-medium hover:bg-[#FF0000]/90 transition-all"
                >
                  <Youtube className="w-4 h-4" aria-hidden="true" />
                  YouTube
                </a>
              </div>

              {/* About This Episode */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h2 className="text-lg font-bold text-white mb-4">About This Episode</h2>
                <div className="text-white/80 leading-relaxed whitespace-pre-line">
                  {episode.longDescription}
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h2 className="text-lg font-bold text-white mb-4">Key Takeaways</h2>
                <ul className="space-y-3">
                  {episode.takeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Mentioned */}
              {episode.resourcesMentioned && episode.resourcesMentioned.length > 0 && (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
                    Resources Mentioned
                  </h2>
                  <ul className="space-y-3">
                    {episode.resourcesMentioned.map((resource, index) => (
                      <li key={index}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                          {resource.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* About the Guest */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h2 className="text-lg font-bold text-white mb-4">About {episode.guest.name}</h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  {episode.guest.bio}
                </p>

                {/* Connect with Guest */}
                <div className="flex flex-wrap gap-3">
                  {episode.guest.linkedin && (
                    <a
                      href={episode.guest.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg text-sm font-medium hover:bg-[#0A66C2]/90 transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </a>
                  )}
                  {episode.guest.twitter && (
                    <a
                      href={episode.guest.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg text-sm font-medium hover:bg-[#1DA1F2]/90 transition-all"
                    >
                      <Twitter className="w-4 h-4" />
                      Follow on Twitter
                    </a>
                  )}
                  {episode.guest.instagram && (
                    <a
                      href={episode.guest.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </a>
                  )}
                  {episode.guest.website && (
                    <a
                      href={episode.guest.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      Website
                    </a>
                  )}
                </div>
              </div>

              {/* About The Product Pivot */}
              <div className="bg-gradient-to-r from-primary/20 to-coral/20 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
                <h2 className="text-lg font-bold text-white mb-4">About The Product Pivot</h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  The Product Pivot is a podcast for product managers who want to level up their careers.
                  Hosted by Meagan Glenn and Santiana Brace, each episode features candid conversations
                  with PMs, recruiters, and product leaders about what it really takes to succeed in product management.
                </p>

                {/* Hosts */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center gap-3">
                    <img src={meaganPhoto} alt="Meagan Glenn, Co-host of The Product Pivot podcast" className="w-12 h-12 rounded-full bg-primary/20" loading="lazy" decoding="async" />
                    <div>
                      <p className="font-bold text-white">Meagan Glenn</p>
                      <a href="https://www.linkedin.com/in/meagan-glenn/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                        LinkedIn →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={santianaPhoto} alt="Santiana Brace, Co-host of The Product Pivot podcast" className="w-12 h-12 rounded-full bg-primary/20" loading="lazy" decoding="async" />
                    <div>
                      <p className="font-bold text-white">Santiana Brace</p>
                      <a href="https://www.linkedin.com/in/santiana-brace/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                        LinkedIn →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Guest Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Guest Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  {/* Guest Photo */}
                  {episode.guest.photo ? (
                    <img
                      src={episode.guest.photo}
                      alt={`${episode.guest.name}, podcast guest from ${episode.guest.company}`}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover bg-gradient-to-br from-primary/20 to-coral/20"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-primary to-coral flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {episode.guest.name.split(' ').filter(n => /^[a-zA-Z]/.test(n)).map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}

                  {/* Guest Name & Role */}
                  <h3 className="text-xl font-bold text-white text-center mb-1">
                    {episode.guest.name}
                  </h3>
                  <p className="text-primary text-center mb-6">
                    {episode.guest.role}
                  </p>

                  {/* Guest Details */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider">Company</p>
                        <p className="text-white">{episode.guest.company}</p>
                      </div>
                    </div>

                    {episode.guest.industry && (
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/40 text-xs uppercase tracking-wider">Industry</p>
                          <p className="text-white">{episode.guest.industry}</p>
                        </div>
                      </div>
                    )}

                    {episode.guest.website && (
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white/40 text-xs uppercase tracking-wider">Website</p>
                          <a
                            href={episode.guest.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline break-all"
                          >
                            {episode.guest.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Topics Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-white">Topics Discussed</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {episode.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-primary to-coral rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Build Your PM Portfolio
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Stand out in your next PM interview with a professional portfolio.
                  </p>
                  <Button asChild className="w-full bg-white text-navy hover:bg-white/90 font-semibold">
                    <a href="https://app.prodfolio.io/sign-up">
                      Get Started Free
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Episodes */}
      {relatedEpisodes.length > 0 && (
        <section className="py-12 px-4 bg-white/5">
          <div className="prodfolio-container max-w-[1200px] mx-auto">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">
              More Episodes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedEpisodes.map((ep) => (
                <Link
                  key={ep.id}
                  to={`/podcast/episodes/${ep.slug}`}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all group"
                >
                  <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-coral/20 overflow-hidden">
                    <img
                      src={ep.thumbnail || `https://img.youtube.com/vi/${ep.youtubeId}/hqdefault.jpg`}
                      alt={`The Product Pivot podcast episode: ${ep.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2">{ep.title}</h3>
                    <p className="text-primary text-sm">with {ep.guest.name}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link to="/podcast">View All Episodes</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default EpisodePage;
