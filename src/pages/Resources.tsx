import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Youtube, Headphones, Clock, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { episodes, type Episode } from "@/data/episodes";
import meaganPhoto from "@/assets/meagan-photo.png";
import santianaPhoto from "@/assets/santiana-photo.png";

type SeasonFilter = "all" | "s1" | "s2" | "s3";

const seasonFilters: { value: SeasonFilter; label: string; comingSoon?: boolean }[] = [
  { value: "all", label: "All Episodes" },
  { value: "s1", label: "Season 1" },
  { value: "s2", label: "Season 2" },
  { value: "s3", label: "Season 3" }
];

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState<SeasonFilter>("all");
  const heroAnimation = useScrollAnimation();
  const episodesAnimation = useScrollAnimation(0);

  useSEO({
    title: "The Product Pivot Podcast | PM Career Stories & Insights | Prodfolio",
    description: "Real conversations with product leaders about hiring, career growth, and the evolving product landscape. Subscribe to The Product Pivot podcast.",
    canonical: "https://prodfolio.io/podcast",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "PodcastSeries",
      "name": "The Product Pivot",
      "description": "Real conversations with product people about hiring and the product landscape today.",
      "url": "https://prodfolio.io/podcast",
      "author": [
        { "@type": "Person", "name": "Meagan Glenn" },
        { "@type": "Person", "name": "Santiana Brace" }
      ]
    },
    breadcrumbs: [
      { name: "Home", url: "https://prodfolio.io" },
      { name: "Podcast", url: "https://prodfolio.io/podcast" },
    ],
  });

  // Season comes from the explicit `season` field when set, otherwise from the
  // episodeNumber prefix (S1E1, S2E1, etc.). Episodes 25 onward switched to
  // absolute numbering, so their prefix no longer encodes a season.
  const getSeasonFromEpisode = (episode: Episode): SeasonFilter | null => {
    if (episode.season) return `s${episode.season}` as SeasonFilter;
    const { episodeNumber } = episode;
    if (!episodeNumber) return null;
    if (episodeNumber.startsWith("S1")) return "s1";
    if (episodeNumber.startsWith("S2")) return "s2";
    if (episodeNumber.startsWith("S3")) return "s3";
    return null;
  };

  // Newest first, by publish date.
  const sortedEpisodes = [...episodes].sort((a, b) =>
    (b.publishedAt || "").localeCompare(a.publishedAt || "")
  );
  const featuredEpisode = sortedEpisodes[0];

  const filteredEpisodes = activeFilter === "all"
    ? sortedEpisodes.filter(ep => ep.slug !== featuredEpisode?.slug)
    : sortedEpisodes.filter(ep => getSeasonFromEpisode(ep) === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]">
      <Navbar />

      {/* Hero Section - Podcast Branding */}
      <section
        ref={heroAnimation.ref as React.RefObject<HTMLElement>}
        className={`pt-28 pb-12 px-4 ${heroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Podcast Info */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-primary font-medium mb-3 uppercase tracking-wider text-sm">A Prodfolio Podcast</p>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-white leading-tight">
                The Product Pivot
              </h1>
              <p className="text-xl text-white/80 mb-6 max-w-xl leading-relaxed">
                Real conversations with product people about hiring, career growth, and the evolving product landscape.
              </p>

              {/* Subscribe Buttons */}
              <p className="text-white/60 text-sm mb-4">Subscribe on your favorite platform:</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <a
                  href="https://www.youtube.com/@TheProductPivot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-[#FF0000] text-white rounded-lg font-medium hover:bg-[#FF0000]/90 transition-all hover:scale-105"
                >
                  <Youtube className="w-5 h-5" aria-hidden="true" />
                  YouTube
                </a>
                <a
                  href="https://open.spotify.com/show/6V84WaWyUxMA4FGoLLZYJI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-[#1DB954] text-white rounded-lg font-medium hover:bg-[#1DB954]/90 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Spotify
                </a>
                <a
                  href="https://podcasts.apple.com/sk/podcast/the-product-pivot-stories-of-career-shifts/id1784108281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-gradient-to-b from-[#F452FF] to-[#832BC1] text-white rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105"
                >
                  <Headphones className="w-5 h-5" aria-hidden="true" />
                  Apple Podcasts
                </a>
              </div>

              {/* Hosts - Inline */}
              <div className="flex flex-wrap items-center gap-4 text-sm justify-center lg:justify-start">
                <span className="text-white/50">Hosted by</span>
                <div className="flex items-center gap-2">
                  <img src={meaganPhoto} alt="Meagan Glenn, Co-host of The Product Pivot podcast" className="w-8 h-8 rounded-full border border-primary/40 bg-primary/20" loading="eager" decoding="async" />
                  <a href="https://www.linkedin.com/in/meagan-glenn/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary">Meagan Glenn</a>
                </div>
                <span className="text-white/30">&</span>
                <div className="flex items-center gap-2">
                  <img src={santianaPhoto} alt="Santiana Brace, Co-host of The Product Pivot podcast" className="w-8 h-8 rounded-full border border-primary/40 bg-primary/20" loading="eager" decoding="async" />
                  <a href="https://www.linkedin.com/in/santiana-brace/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary">Santiana Brace</a>
                </div>
              </div>
            </div>

            {/* Right - Podcast Logo/Branding */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-primary via-coral to-primary p-1">
                  <div className="w-full h-full rounded-3xl bg-[#1a1a2e] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl md:text-7xl mb-2">🎙️</div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">The Product</h2>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-coral">Pivot</h2>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-coral rounded-full animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full animate-pulse delay-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode Spotlight */}
      {activeFilter === "all" && featuredEpisode && (
        <section className="px-4 pt-4">
          <div className="prodfolio-container max-w-[1200px] mx-auto">
            <article className="grid md:grid-cols-2 md:items-center bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/30 shadow-lg shadow-primary/10">
              <Link to={`/podcast/episodes/${featuredEpisode.slug}`} className="block group p-4 md:p-6">
                <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-coral/20 overflow-hidden rounded-xl">
                  <img
                    src={featuredEpisode.thumbnail || `https://img.youtube.com/vi/${featuredEpisode.youtubeId}/hqdefault.jpg`}
                    alt={`The Product Pivot podcast episode: ${featuredEpisode.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {featuredEpisode.episodeNumber && (
                    <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {featuredEpisode.episodeNumber}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {featuredEpisode.duration}
                  </div>
                </div>
              </Link>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 self-start mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-coral bg-coral/10 px-3 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-coral" />
                    Latest Episode
                  </span>
                  {featuredEpisode.topics?.[0] && (
                    <span className="text-[10px] text-primary/80 bg-primary/10 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      {featuredEpisode.topics[0]}
                    </span>
                  )}
                </div>
                <Link to={`/podcast/episodes/${featuredEpisode.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 hover:text-primary transition-colors">
                    {featuredEpisode.title}
                  </h2>
                </Link>
                <p className="text-primary text-sm font-medium mb-1">
                  with {featuredEpisode.guest.name}
                </p>
                <p className="text-white/50 text-xs mb-4">
                  {featuredEpisode.guest.role}, {featuredEpisode.guest.company}
                </p>
                <p className="text-white/70 text-sm md:text-base line-clamp-3 mb-5">
                  {featuredEpisode.description}
                </p>
                <Link
                  to={`/podcast/episodes/${featuredEpisode.slug}`}
                  className="inline-flex items-center gap-2 self-start bg-primary text-white px-5 py-2.5 rounded-full font-medium shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all"
                >
                  <Play className="w-4 h-4" />
                  Listen Now
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Season Filters */}
      <section className="py-8 px-4">
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {seasonFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeFilter === filter.value
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {filter.value === "all" && <Play className="w-4 h-4" />}
                {filter.label}
                {filter.comingSoon && (
                  <span className="ml-1 text-xs bg-coral/80 text-white px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section
        ref={episodesAnimation.ref as React.RefObject<HTMLElement>}
        className={`py-12 px-4 ${episodesAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="prodfolio-container max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">
            {activeFilter === "all" ? "All Episodes" : `${seasonFilters.find(f => f.value === activeFilter)?.label}`}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.map((episode) => (
              <article
                key={episode.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all group"
              >
                {/* Episode Thumbnail */}
                <Link to={`/podcast/episodes/${episode.slug}`} className="block">
                  <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-coral/20 overflow-hidden">
                    <img
                      src={episode.thumbnail || `https://img.youtube.com/vi/${episode.youtubeId}/hqdefault.jpg`}
                      alt={`The Product Pivot podcast episode: ${episode.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    {episode.episodeNumber && (
                      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {episode.episodeNumber}
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {episode.duration}
                    </div>
                  </div>
                </Link>

                {/* Episode Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Link to={`/podcast/episodes/${episode.slug}`} className="flex-1 min-w-0">
                      <h3 className="text-lg font-heading font-bold text-white line-clamp-2 hover:text-primary transition-colors">
                        {episode.title}
                      </h3>
                    </Link>
                    {episode.topics?.[0] && (
                      <span className="text-[10px] text-primary/80 bg-primary/10 px-1.5 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-1">
                        {episode.topics[0]}
                      </span>
                    )}
                  </div>
                  <p className="text-primary text-sm font-medium mb-2">
                    with {episode.guest.name}
                  </p>
                  <p className="text-white/50 text-xs mb-3">
                    {episode.guest.role}, {episode.guest.company}
                  </p>
                  <p className="text-white/70 text-sm line-clamp-2 mb-4">
                    {episode.description}
                  </p>
                  <Link
                    to={`/podcast/episodes/${episode.slug}`}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Listen & Learn More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredEpisodes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/60">No episodes found for this season yet. Check back soon!</p>
            </div>
          ) : null}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 cta-glow-section">
        <div className="prodfolio-container max-w-[600px] mx-auto">
          <div className="bg-[#9E85F9]/10 backdrop-blur-md rounded-2xl border border-[#9E85F9]/25 shadow-[0_8px_32px_rgba(158,133,249,0.2)] p-8 text-center">
            <h3 className="text-xl font-heading font-bold text-white mb-3">Follow The Product Pivot</h3>
            <p className="text-white/70 mb-6">
              Stay connected and never miss an episode or update.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/company/theproductpivot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@theproductpivot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/theproductpivot/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
