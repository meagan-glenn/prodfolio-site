import rachelPhoto from "@/assets/rachel-kronenfeld.jpeg";
import rachelThumbnail from "@/assets/rachel-episode-thumbnail.jpg";
import brandonPhoto from "@/assets/brandon-green.jpeg";
import brandonThumbnail from "@/assets/brandon-episode-thumbnail.jpg";
import hostsThumbnail from "@/assets/meet-the-hosts-thumbnail.jpg";
import tylerPhoto from "@/assets/tyler-johnson.jpeg";
import tylerThumbnail from "@/assets/tyler-episode-thumbnail.jpg";
import varshinePhoto from "@/assets/varshine-sridharan.png";
import varshineThumbnail from "@/assets/varshine-episode-thumbnail.jpg";
import brodyPhoto from "@/assets/brody-clemmer.jpeg";
import brodyThumbnail from "@/assets/brody-episode-thumbnail.jpg";
import olympiaPhoto from "@/assets/olympia-todisco.jpeg";
import olympiaThumbnail from "@/assets/olympia-episode-thumbnail.jpg";
import trevorPhoto from "@/assets/trevor-acy.jpeg";
import trevorThumbnail from "@/assets/trevor-episode-thumbnail.jpg";
import gaborPhoto from "@/assets/gabor-cselle.jpeg";
import grahamPhoto from "@/assets/graham-reed.jpeg";
import heidiPhoto from "@/assets/heidi-ram.jpeg";
import nickPhoto from "@/assets/nick-photo.jpeg";
import eddiePhoto from "@/assets/eddie-rosenfeld.jpeg";
import aaronPhoto from "@/assets/aaron-kesler.png";
import s3KickoffThumbnail from "@/assets/The Product Pivot. Season 3. Season 3 Kickoff.png";
import heidiThumbnail from "@/assets/The Product Pivot. Season 3. Heidi Ram. Thumbnail.png";
import christinaThumbnail from "@/assets/The Product Pivot. S3E3 Christina. Thumbnail.png";
import christinaPhoto from "@/assets/christina pic.jpeg";
import stevePhoto from "@/assets/Steve Johnson.jpeg";
import steveThumbnail from "@/assets/Steve Thumbnail.png";
import riettePhoto from "@/assets/Riette picture.jpeg";
import rietteThumbnail from "@/assets/Riette Thumnail.png";
import kartikeyaPhoto from "@/assets/kartikeya photo.jpeg";
import kartikeyaThumbnail from "@/assets/s3e6 Kartikeya.png";
import alyxPhoto from "@/assets/Alyx photo.jpeg";
import alyxThumbnail from "@/assets/Alyx Thumbnail.png";
import zachPhoto from "@/assets/zach photo.jpeg";
import zachThumbnail from "@/assets/Zach thumbnail.png";
import aaronS3E9Thumbnail from "@/assets/aaron-thumbnail-s3e9.png";
import johnPhoto from "@/assets/john image.jpeg";
import johnThumbnail from "@/assets/John thumbnail.png";
import steveS3E10Thumbnail from "@/assets/Steve Thumnail Ep25.png";
import aaronEp28Thumbnail from "@/assets/Aaron episode 28 thumbnail.png";
import andresPhoto from "@/assets/Andres photo.jpeg";
import andresThumbnail from "@/assets/Andres Thumbnail.png";
import davidPhoto from "@/assets/david photo.jpeg";
import davidThumbnail from "@/assets/David Thumbnail.png";
import jammePhoto from "@/assets/Jamme Picture.jpeg";
import jammeThumbnail from "@/assets/Thumbnail Jamme.png";

export interface Episode {
  id: string;
  slug: string;
  title: string;
  episodeNumber?: string; // e.g., "S2E27"
  guest: {
    name: string;
    role: string;
    company: string;
    website?: string;
    industry?: string;
    bio: string;
    photo?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  description: string;
  longDescription: string;
  youtubeId: string;
  spotifyUrl?: string;
  appleUrl?: string;
  buzzsproutId?: string; // For audio embed
  topic: "hiring" | "career" | "ai" | "leadership";
  topics: string[]; // Multiple topic tags
  duration: string;
  publishedAt: string;
  takeaways: string[];
  resourcesMentioned?: { title: string; url: string }[];
  keywords: string[];
  thumbnail?: string; // Custom thumbnail image (optional, defaults to YouTube thumbnail)
}

export const episodes: Episode[] = [
  {
    id: "1",
    slug: "from-pi-to-pm",
    title: "From PI to PM",
    episodeNumber: "S1E1",
    guest: {
      name: "Rachel Kronenfeld",
      role: "Product Manager",
      company: "LifeRaft",
      website: "https://www.liferaftinc.com",
      industry: "Open Source Intelligence & Software",
      bio: "Rachel Kronenfeld is a Product Manager at LifeRaft, a software company specializing in open source online intelligence and investigation. Before pivoting to product, Rachel spent years as a licensed private investigator and served as Director of Services at a managed service firm, where she actually used LifeRaft's product as a customer. Her unique journey from subject matter expert to PM showcases how deep industry knowledge can be a powerful path into product management.",
      photo: rachelPhoto,
      linkedin: "https://www.linkedin.com/in/rachel-kronenfeld-6911426b/"
    },
    description: "How Rachel pivoted from private investigator to product manager by leveraging her subject matter expertise.",
    longDescription: "Rachel Kronenfeld's path to product management is unlike any other. After years as a private investigator and Director of Services at an intelligence firm, she made the leap to PM at LifeRaft, a software she used as a customer.\n\nIn this episode, Rachel shares how she positioned herself for a PM role without traditional product experience, the challenges of learning on the job, and why being a subject matter expert gave her unique advantages. She also discusses working closely with engineering and design teams, letting go of perfectionism in favor of iteration, and why the 'PM is dead' narrative shouldn't discourage aspiring product managers.",
    thumbnail: rachelThumbnail,
    youtubeId: "qS4IxwD9dCo",
    buzzsproutId: "16604831",
    spotifyUrl: "https://open.spotify.com/episode/3nQHBEp1IqG0PqWtQB0l0n",
    topic: "career",
    topics: ["Career Transition", "Subject Matter Expert", "Pivoting to Product", "Transferable Skills", "Cross-functional Collaboration"],
    duration: "43 min",
    publishedAt: "2024-11-15",
    takeaways: [
      "You can pivot to PM from any background, subject matter expertise is incredibly valuable",
      "Transferable skills from sales, CX, and marketing apply directly to product management",
      "Product management looks different at every company, so be ready to learn on the job",
      "Building strong relationships with engineering, design, and other departments is critical",
      "Let go of perfectionism—focus on MVPs and iterate based on customer feedback",
      "Don't let 'PM is dead' narratives discourage you, fix your algorithm and stay positive"
    ],
    resourcesMentioned: [
      { title: "Cracking the PM Career by Jackie Bavaro & Gayle Laakmann McDowell", url: "https://www.crackingthepmcareer.com" },
      { title: "Inspired by Marty Cagan", url: "https://www.svpg.com/inspired-how-to-create-products-customers-love/" }
    ],
    keywords: ["pivot to product management", "subject matter expert PM", "career transition", "private investigator to PM", "breaking into product", "transferable skills", "LifeRaft"]
  },
  {
    id: "2",
    slug: "from-music-school-to-staff-pm",
    title: "From Music School to Staff PM",
    episodeNumber: "S1E2",
    guest: {
      name: "Brandon Lucas Green",
      role: "Staff Product Manager",
      company: "Buffer",
      website: "https://buffer.com",
      industry: "Social Media & SaaS",
      bio: "Brandon Lucas Green is a Staff Product Manager at Buffer, the popular social media management platform. His unconventional journey from music school to tech showcases how creativity and adaptability can be powerful assets in product management. Brandon has navigated various work environments throughout his career and brings a unique perspective on the evolving nature of product management and what it takes to thrive in today's competitive PM landscape.",
      photo: brandonPhoto,
      linkedin: "https://www.linkedin.com/in/brandonlgreen/"
    },
    description: "Brandon's unconventional journey from music school to Staff PM at Buffer, and how creativity shapes his approach to product.",
    longDescription: "In this episode, hosts Santi and Meagan sit down with Brandon Lucas Green, a Staff Product Manager at Buffer, to explore his unconventional journey from music school to tech and how he navigated the world of product management.\n\nBrandon shares pivotal moments in his career, the challenges he faced, and how adaptability has shaped his success in different work environments. He also discusses the role of creativity in product management, offers insights into today's job market for PMs, and emphasizes the importance of self-reflection for career growth.\n\nFrom the evolving nature of product management to practical advice for aspiring PMs, this episode is packed with valuable takeaways.",
    thumbnail: brandonThumbnail,
    youtubeId: "5zn1aQwMo8E",
    buzzsproutId: "16600311",
    spotifyUrl: "https://open.spotify.com/episode/5JREScrUH29f8unFQlHFVG",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-creativity-in-product-management/id1784108281?i=1000691160955",
    topic: "career",
    topics: ["Career Transition", "Creativity in PM", "Job Market Insights", "Self-Reflection", "Remote Work"],
    duration: "45 min",
    publishedAt: "2024-12-01",
    takeaways: [
      "Unconventional backgrounds like music can bring unique creativity to product management",
      "Adaptability is essential for success across different work environments and company cultures",
      "Self-reflection is a critical skill for continuous career growth as a PM",
      "The PM job market is evolving, understanding current trends helps you position yourself",
      "Creativity isn't just for designers, it's a core PM skill for problem-solving",
      "Pivotal career moments often come from unexpected challenges and how you respond to them"
    ],
    resourcesMentioned: [
      { title: "Buffer", url: "https://buffer.com" }
    ],
    keywords: ["staff product manager", "Buffer", "career transition", "music to tech", "creativity in product management", "PM job market", "remote product manager", "career growth"]
  },
  {
    id: "3",
    slug: "meet-the-hosts",
    title: "Meet Your Hosts",
    episodeNumber: "S1E3",
    guest: {
      name: "Santi & Meagan",
      role: "Your Hosts",
      company: "Prodfolio",
      website: "https://prodfolio.io/",
      industry: "Product Management, SaaS",
      bio: "Santiana Brace is a Product Leader at LifeRaft who pivoted from retail management through customer support and QA into product. Meagan Glenn is a Fractional Product Lead who transitioned from customer success into founding PM roles. Together, they share a passion for mentoring job seekers and helping others break into product management.",
      linkedin: "https://www.linkedin.com/in/santiana-brace/"
    },
    description: "Get to know your hosts Santi and Meagan, their journeys into product, and how The Product Pivot podcast came to be.",
    longDescription: "In this special episode, hosts Santi and Meagan share their own pivots into product management and the story behind The Product Pivot podcast.\n\nSanti's journey took her from retail management to customer support coordinator, then QA analyst, before finally landing in product. Meagan transitioned from customer success roles into founding PM positions at early-stage startups. Both share how mentorship shaped their careers, the importance of feedback, and why customer experience backgrounds create uniquely empathetic PMs.\n\nThey also reveal how a LinkedIn connection turned into a podcast partnership, and their mission to help even just one person through sharing these conversations.",
    thumbnail: hostsThumbnail,
    youtubeId: "YUNFlHuEQyg",
    buzzsproutId: "16662282",
    spotifyUrl: "https://open.spotify.com/episode/12qg8mul8WEQnVmVKfaHcv",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-meet-your-hosts/id1784108281?i=1000694415392",
    topic: "career",
    topics: ["Career Transition", "Mentorship", "Customer Experience", "Podcast Origin Story"],
    duration: "53 min",
    publishedAt: "2024-12-15",
    takeaways: [
      "You can pivot to PM from any background, even retail",
      "CX and customer support experience builds crucial empathy for product management",
      "Mentorship is essential, seek it out and pay it forward when you can",
      "Feedback isn't a personal attack, it's someone investing time to help you improve",
      "Data is king, but context is queen, you need both to make great product decisions",
      "PMs are the organizational glue, they build relationships across every department"
    ],
    keywords: ["product pivot hosts", "Santi Brace", "Meagan Glenn", "pivot to product management", "CX to PM", "mentorship", "product management podcast", "career transition"]
  },
  {
    id: "4",
    slug: "from-product-marketing-to-pm",
    title: "From Marketing to Product Management",
    episodeNumber: "S1E4",
    guest: {
      name: "Tyler (TJ) Johnson",
      role: "Product Manager",
      company: "Nectar",
      website: "https://nectarhr.com",
      industry: "Employee Recognition & Rewards",
      bio: "Tyler (TJ) Johnson is a Product Manager at Nectar, an employee recognition and rewards platform. He pivoted from customer marketing and product marketing into his first PM role in April 2024. TJ's journey is unique—Nectar's founders have been his best friends since age 3, and he joined the company after experiencing firsthand how customer obsession and relationship-building translate directly into product management success.",
      photo: tylerPhoto,
      linkedin: "https://www.linkedin.com/in/tylerbjohnson24/"
    },
    description: "How TJ leveraged his product marketing background and customer obsession to land his first PM role at Nectar.",
    longDescription: "In this episode, hosts Santi and Meagan talk with Tyler (TJ) Johnson about his recent pivot from product marketing to product management at Nectar, an employee recognition and rewards platform.\n\nTJ shares how his customer-facing background in marketing gave him invaluable skills for PM work, why building strong relationships with engineers is critical, and the importance of 'wearing the hat before you have the position.' He also discusses the value of dogfooding your own product, how good leaders create more leaders (not followers), and why Marty Cagan's 'Inspired' shaped his understanding of product management.\n\nWith a unique backstory, the founders are his childhood best friends, Tyler offers honest insights into navigating a PM role at a company where relationships run deep.",
    thumbnail: tylerThumbnail,
    youtubeId: "LDeP5TyASDc",
    buzzsproutId: "16729958",
    spotifyUrl: "https://open.spotify.com/episode/0RR7hCiFRtdFxkrYUH72yn",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-from-marketing-to-product-management/id1784108281?i=1000697647289",
    topic: "career",
    topics: ["Career Transition", "Product Marketing to PM", "Customer Obsession", "Engineering Relationships", "Startup Culture"],
    duration: "48 min",
    publishedAt: "2025-01-01",
    takeaways: [
      "Customer obsession from marketing roles translates directly to PM success",
      "Wear the hat before you have the position—start doing PM work before the title",
      "Good leaders create more leaders, not followers",
      "Building strong relationships with engineers turns them from mercenaries into missionaries",
      "Dogfooding your own product gives you invaluable customer empathy",
      "Your customer-facing background is a superpower, not a limitation",
      "Transferable skills matter more than traditional PM experience"
    ],
    resourcesMentioned: [
      { title: "Inspired by Marty Cagan", url: "https://www.svpg.com/inspired-how-to-create-products-customers-love/" }
    ],
    keywords: ["product marketing to PM", "career transition", "customer obsession", "Nectar", "employee recognition", "first PM role", "transferable skills", "engineering relationships", "dogfooding"]
  },
  {
    id: "5",
    slug: "big-tech-myths",
    title: "Big Tech Myths - A PM's Journey to Microsoft",
    episodeNumber: "S1E5",
    guest: {
      name: "Varshine Sridharan",
      role: "AI Product Lead",
      company: "Microsoft Copilot & Agents",
      website: "https://www.microsoft.com/copilot",
      industry: "Big Tech & AI",
      bio: "Varshine (Varsh) Sridharan is an AI Product Lead at Microsoft, building Gen AI products including Copilot. With nearly seven years of overall experience and four years in product management, she started her career as a solutions engineer at Microsoft in India before pivoting to PM at Twilio—then returning to Microsoft as a Senior PM. Varsh is passionate about mentoring aspiring PMs and breaking myths about what it takes to get into big tech.",
      photo: varshinePhoto,
      linkedin: "https://www.linkedin.com/in/varshine/"
    },
    description: "Varsh breaks myths about breaking into big tech and shares how she pivoted from solutions engineering to PM at Microsoft.",
    longDescription: "In this episode, hosts Santi and Meagan sit down with Varshine (Varsh) Sridharan, an AI Product Lead at Microsoft working on Copilot, to debunk common myths about breaking into big tech and discuss the evolving landscape of AI product management.\n\nVarsh shares her unconventional journey from solutions engineering at Microsoft India to TPM at Twilio, then pivoting internally to PM before returning to Microsoft. She emphasizes that you don't need big tech experience to get into big tech—what matters is your product building skills and customer empathy.\n\nThe conversation covers practical advice for job seekers: pivot internally rather than externally, create a niche with AI side projects, leverage LinkedIn strategically, and practice relentlessly for PM interviews. Varsh also discusses how AI is transforming product management, enabling PMs to bridge gaps between design and engineering like never before.",
    thumbnail: varshineThumbnail,
    youtubeId: "RLgCLZ-9ICU",
    buzzsproutId: "16772572",
    spotifyUrl: "https://open.spotify.com/episode/4RIcXJmJCKrMO17n7WJ4Jg",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-big-tech-myths-a-pms-journey-to-microsoft/id1784108281?i=1000698748381",
    topic: "career",
    topics: ["Big Tech", "AI Product Management", "Career Transition", "Interview Prep", "Networking", "Internal Transfers"],
    duration: "49 min",
    publishedAt: "2025-01-15",
    takeaways: [
      "You don't need big tech experience to get into big tech, product building skills matter more",
      "Get any job first, then move into PM internally rather than holding out for the perfect PM role",
      "Create a competitive edge with AI projects and side hustles to stand out in today's market",
      "Leverage your industry background when applying—your niche knowledge is a strength",
      "Practice, practice, practice for PM interviews, write out answers and do mock interviews",
      "Use LinkedIn strategically, engage with content, write posts about products, build connections",
      "AI is the pivotal moment for PMs. Learn to bridge design and engineering gaps with AI tools",
      "Rejection means 'not right now,' so use the time to improve your skills and try again"
    ],
    resourcesMentioned: [
      { title: "Cracking the PM Interview by Gayle Laakmann McDowell", url: "https://www.crackingthepminterview.com" },
      { title: "Exponent PM Interview Prep", url: "https://www.tryexponent.com" },
      { title: "Lenny's Newsletter", url: "https://www.lennysnewsletter.com" },
      { title: "Lewis Lin PM Community", url: "https://www.lewis-lin.com" }
    ],
    keywords: ["big tech PM", "Microsoft product manager", "AI product management", "Copilot", "breaking into big tech", "internal transfer", "PM interview prep", "career transition", "TPM to PM", "solutions engineering"]
  },
  {
    id: "6",
    slug: "is-product-management-evolving-or-disappearing",
    title: "Is Product Management Evolving or Disappearing",
    episodeNumber: "S1E6",
    guest: {
      name: "Brody Clemmer",
      role: "Lead Product Manager",
      company: "Little Otter",
      website: "https://www.littleotterhealth.com",
      industry: "Healthcare & Mental Health",
      bio: "Brody Clemmer is the Lead Product Manager at Little Otter, a pediatric mental health startup. With nearly 12 years in the product world, Brody came from an entrepreneurial background—running his own web development firm before discovering product management. He never went to college, going straight into the workforce after high school, and believes that a 'figure it out' mindset is what sets great PMs apart. Brody is passionate about coaching product managers and even helps PMs transition out of product when it's no longer the right fit.",
      photo: brodyPhoto,
      linkedin: "https://www.linkedin.com/in/brodyclemmer/"
    },
    description: "Brody shares his provocative take on the future of product management and why the role may not exist in 10 years as we know it today.",
    longDescription: "In this thought-provoking episode, hosts Santi and Meagan sit down with Brody Clemmer, Lead Product Manager at Little Otter, to discuss the evolving nature of product management.\n\nBrody shares his unconventional path from running a bootstrapped web development firm at 22 to becoming a lead PM, all without a college degree. He challenges common assumptions about the PM career path, arguing that product management is a role, not a career, and that the title may not exist in 10 years, though product thinking will always be needed.\n\nThe conversation dives deep into the differences between startups and big tech, the importance of staying in the problem space, adaptive communication, and why Brody sometimes coaches PMs out of product management entirely. His hot take: go after another career path first, use product thinking foundations, and you'll find your way into product if it's meant to be.",
    thumbnail: brodyThumbnail,
    youtubeId: "4ZLUXW06jbg",
    buzzsproutId: "16815265",
    spotifyUrl: "https://open.spotify.com/episode/7jKcv6eBAXTtN5z7hLAawe",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-is-product-management-evolving-or/id1784108281?i=1000699663079",
    topic: "career",
    topics: ["Future of PM", "Career Philosophy", "Startup Culture", "Problem Space", "Generalist Skills", "No Degree Path"],
    duration: "60 min",
    publishedAt: "2025-01-29",
    takeaways: [
      "Intense curiosity is the most important trait for product managers - lean into it",
      "Product management looks drastically different before Series D vs after - know the difference",
      "Your job is to add value to the business - figure out how to do that, whatever it takes",
      "Master adaptive communication - it's not what you say, it's what they hear",
      "Stay in the problem space far longer than you're comfortable with before jumping to solutions",
      "Product management may not exist as a title in 10 years, but product thinking always will",
      "Consider going after another career path first - use product thinking foundations in any role",
      "Product management is a role, not a career path - there's a ceiling, and that's okay",
      "The 'figure it out' mindset separates great PMs from good ones",
      "When evaluating startups, ask: would they still have a business without the technology?"
    ],
    resourcesMentioned: [
      { title: "Generalist World Community", url: "https://www.generalist.world" }
    ],
    keywords: ["future of product management", "PM career path", "startup PM", "generalist", "problem space", "no degree PM", "entrepreneurial PM", "product thinking", "adaptive communication", "Little Otter"]
  },
  {
    id: "7",
    slug: "from-newsrooms-to-roadmaps",
    title: "From Newsrooms to Roadmaps: Olympia's Journey",
    episodeNumber: "S1E7",
    guest: {
      name: "Olympia Bardis",
      role: "Senior Product Manager",
      company: "CNBC",
      website: "https://www.cnbc.com",
      industry: "Media & Finance",
      bio: "Olympia Bardis is a Senior Product Manager at CNBC, where she builds products for retail investors. With a journalism degree and dreams of being an on-air reporter, Olympia spent five and a half years in legacy media at Fox News before pivoting to product management. She credits Mel Robbins' 5 Second Rule for giving her the courage to advocate for herself and make the leap. A native New Yorker with a passion for storytelling, she believes the 'gift of yap' is one of the most underrated PM skills.",
      photo: olympiaPhoto,
      linkedin: "https://www.linkedin.com/in/olympiabardis/"
    },
    description: "Olympia shares her journey from journalism school to building products for investors at CNBC, and why storytelling is a PM superpower.",
    longDescription: "In this episode, hosts Santi and Meagan chat with Olympia Bardis, Senior Product Manager at CNBC, about her unconventional pivot from journalism to product management.\n\nOlympia shares how she graduated from journalism school wanting to be an on-air reporter, quickly realized it wasn't for her, and spent five and a half years figuring out her next move. With encouragement from an IT friend and inspiration from Mel Robbins' 5 Second Rule, she hustled her way into a hybrid content/product role at Fox before transitioning to CNBC.\n\nThe conversation covers the power of self-advocacy, treating yourself as a product, embracing rejection as redirection, and why the 'gift of yap' (storytelling) is crucial for product managers. Olympia also shares her hot take on whether the PM industry's trend toward hyper-specialization helps or hinders the profession.",
    thumbnail: olympiaThumbnail,
    youtubeId: "pUYPr4m22g4",
    buzzsproutId: "16858395",
    spotifyUrl: "https://open.spotify.com/episode/6VNFMBEiE1IvAYv2tErSE7",
    appleUrl: "https://podcasts.apple.com/sk/podcast/from-newsrooms-to-roadmaps-olympias-journey/id1784108281?i=1000700798306",
    topic: "career",
    topics: ["Journalism to PM", "Self-Advocacy", "Storytelling", "Career Pivot", "Media Industry", "Rejection & Resilience"],
    duration: "44 min",
    publishedAt: "2025-02-12",
    takeaways: [
      "You are your own best advocate, so keep ringing the bell about your career goals",
      "It's okay to fall out of love with things and pivot - that's how you grow",
      "Treat yourself as a product and iterate on your skills and approach",
      "You know more than you think, trust yourself and have conviction in your ideas",
      "Every rejection is a redirection and a great learning moment",
      "Take breaks when needed to sharpen skills, network, and reflect",
      "Storytelling is a crucial PM skill, the 'gift of yap' transfers directly from journalism",
      "Be flexible, open-minded, and adaptable - PMs are essentially contortionists"
    ],
    resourcesMentioned: [
      { title: "Contagious: Why Things Catch On by Jonah Berger", url: "https://jonahberger.com/books/contagious/" },
      { title: "Measure What Matters by John Doerr", url: "https://www.whatmatters.com/the-book" },
      { title: "The 5 Second Rule by Mel Robbins", url: "https://www.melrobbins.com/book/the-5-second-rule/" }
    ],
    keywords: ["journalism to PM", "CNBC product manager", "career pivot", "self-advocacy", "storytelling", "media industry PM", "rejection", "Mel Robbins", "transferable skills", "retail investors"]
  },
  {
    id: "8",
    slug: "fractional-pm-unpacked",
    title: "Fractional PM Unpacked",
    episodeNumber: "S1E8",
    guest: {
      name: "Trevor Acy",
      role: "Fractional Product Leader",
      company: "Delta Product Group",
      website: "https://www.linkedin.com/in/trevoracy/",
      industry: "Consulting & Fractional PM",
      bio: "Trevor Acy is a fractional product leader offering part-time product management, coaching, and training for business leaders. Previously a director of marketing in Nashville, Trevor pivoted to product after reading 'Inspired' and attending an SVPG workshop - even taking a demotion to make the switch. He moved home to Mississippi to help build the tech and startup ecosystem, working with nonprofits like The Bean Path and the Mississippi Coding Academy to spread product thinking across the state.",
      photo: trevorPhoto,
      linkedin: "https://www.linkedin.com/in/trevoracy/"
    },
    description: "Trevor unpacks fractional product management, how he pivoted from marketing, and his mission to build Mississippi's tech ecosystem.",
    longDescription: "In this episode, hosts Santi and Meagan sit down with Trevor Acy, a fractional product leader at Delta Product Group, to explore the world of fractional product management and his journey from marketing director to PM.\n\nTrevor shares how reading 'Inspired' and attending an SVPG workshop transformed his thinking - he told his CTO, 'I'm tired of telling people our product is good. I want to make our product better.' He spent a year applying product principles in his marketing role before taking a demotion to become an IC product manager.\n\nThe conversation covers practical advice for aspiring PMs (just get the reps in), the benefits of fractional work for companies, why you should do unscalable things for as long as possible, and Trevor's passion project: building Mississippi's tech and startup ecosystem through education and mentorship.",
    thumbnail: trevorThumbnail,
    youtubeId: "EBVblJFDbUQ",
    buzzsproutId: "16895298",
    spotifyUrl: "https://open.spotify.com/episode/1XVDKaegavbjGnB4ZzUQFB",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-fractional-pm-unpacked/id1784108281?i=1000701729849",
    topic: "career",
    topics: ["Fractional PM", "Marketing to PM", "Startup Ecosystem", "Coaching & Training", "Career Transition", "Community Building"],
    duration: "60 min",
    publishedAt: "2025-02-26",
    takeaways: [
      "Apply product principles in your current role before transitioning",
      "You can still think product-first even if your company is a feature factory",
      "Asking dumb questions is a PM superpower",
      "Sneak in customer-centered work alongside feature requests, then show the results",
      "Do unscalable things for as long as possible, you'll learn where the real problems are",
      "Great PMs hold strong opinions while being totally open to counter information",
      "Fractional work opportunities come from people you know, not cold outreach",
      "Get comfortable promoting yourself",
      "Find existing bright spots in your community and offer to help, opportunities follow"
    ],
    resourcesMentioned: [
      { title: "Inspired by Marty Cagan", url: "https://www.svpg.com/inspired-how-to-create-products-customers-love/" },
      { title: "Mississippi Coding Academy", url: "https://mscoding.org" }
    ],
    keywords: ["fractional product manager", "marketing to PM", "SVPG", "Inspired", "Mississippi tech", "product coaching", "startup ecosystem", "Delta Product Group", "career transition", "community building"]
  },
  {
    id: "9",
    slug: "season-two-kickoff",
    title: "Season Two Kickoff and More!",
    episodeNumber: "S2E1",
    guest: {
      name: "Santi & Meagan",
      role: "Your Hosts",
      company: "Prodfolio",
      website: "https://prodfolio.io",
      industry: "Product Management, SaaS",
      bio: "In this special hosts-only episode, Meagan and Santi recap Season 1, share personal updates (Meagan went fractional, Santi moved to ProdOps), tease Season 2 guests, and announce Prodfolio - their new portfolio platform for PMs. They also share community-submitted product tips and call for Season 3 guest suggestions.",
      linkedin: "https://www.linkedin.com/company/the-product-pivot/"
    },
    description: "Hosts Meagan and Santi recap Season 1, share updates, tease Season 2 guests, and announce their new project: Prodfolio.",
    longDescription: "In this special hosts-only episode, Meagan and Santi kick off Season 2 by reflecting on the incredible journey of Season 1, with over 1,000 views and even being recognized in public!\n\nThey share personal career updates: Meagan pivoted to fractional product management after a layoff, while Santi transitioned into a Product Operations role. The hosts also announce Prodfolio, their passion project to help aspiring PMs build credibility through portfolio documentation.\n\nThe episode features community-submitted product tips, teasers for Season 2 guests (including a product recruiter, AI PM expert, and Big Tech PM), and a call for Season 3 suggestions. A behind-the-scenes look at the humans behind The Product Pivot.",
    youtubeId: "MqNuW8qXzmU",
    buzzsproutId: "17773184",
    spotifyUrl: "https://open.spotify.com/episode/0s8UN6C159QMczcJcarJfi",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-season-2-kickoff-more/id1784108281?i=1000724599598",
    topic: "career",
    topics: ["Season Recap", "Hosts Update", "Prodfolio Announcement", "Community Tips", "Season 2 Preview"],
    duration: "50 min",
    publishedAt: "2025-03-12",
    takeaways: [
      "Product people don't come from product backgrounds, that's a universal truth from Season 1",
      "Transferable skills are the heart of the PM pivot journey",
      "If you always argue from the customer's perspective, you'll never lose an argument",
      "Build something, then iterate with user feedback",
      "What separates senior PMs isn't just experience, it's mindset",
      "The PM role is whatever it takes to get the product launch over the line",
      "If your content helps one person, you did your job",
      "Treat yourself as a product and iterate"
    ],
    resourcesMentioned: [],
    keywords: ["season recap", "hosts episode", "Prodfolio", "PM portfolio", "product operations", "fractional PM", "season two", "community tips", "career update", "behind the scenes"]
  },
  {
    id: "10",
    slug: "from-8-rejections-to-google",
    title: "From 8 Rejections to Google",
    episodeNumber: "S2E2",
    guest: {
      name: "Gabor Mayer",
      role: "Product Manager, Commerce",
      company: "Google",
      website: "https://www.google.com",
      industry: "Big Tech & E-commerce",
      bio: "Gabor Mayer is a Product Manager at Google Commerce. His PM journey started in 2007 as a programmer who kept ending up on the couch talking to customers. He worked at LogMeIn where he helped create Rescue Lens, a remote support tool used by companies like Microsoft and HP. After being rejected by Google 8 times between 2016 and 2021, he finally landed his dream role through intensive preparation and coaching. He now coaches other PMs and is writing a book on PM interviews.",
      photo: gaborPhoto,
      linkedin: "https://www.linkedin.com/in/mayergabor/"
    },
    description: "Gabor shares his journey of 8 Google rejections, what changed between interview one and his final offer, and why being a good PM interviewee is a separate skill.",
    longDescription: "In this episode, hosts Santi and Meagan sit down with Gabor Mayer, Product Manager at Google Commerce, to discuss his inspiring journey from 8 rejections to finally landing his dream role at Google.\n\nGabor shares how his PM journey started in 2007 when he realized he loved talking to customers more than computers. He opens up about the personal motivation behind his persistence - wanting to prove to himself that he was a 'prime talent' after years of feeling like a secondary one.\n\nThe conversation covers the critical difference between being a good product manager and being a good PM interviewee, how AI will become standard for all PMs (like mobile did), his PM interview readiness quiz, and the three ways to break into product: APM programs, internal transfers, and building something. Gabor also teases his upcoming book on PM interviews.",
    youtubeId: "AEXiTi2yFkA",
    buzzsproutId: "17812722",
    spotifyUrl: "https://open.spotify.com/episode/6NahFn6O6RLFKOU8O3oxeL",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-from-8-rejections-to-google/id1784108281?i=1000725743756",
    topic: "career",
    topics: ["Big Tech", "Google PM", "Interview Prep", "Rejection & Persistence", "AI in PM", "FAANG"],
    duration: "42 min",
    publishedAt: "2025-03-26",
    takeaways: [
      "Being a good PM and being a good PM interviewee are two completely different skill sets",
      "Rejection is redirection, Gabor was rejected 8 times before landing Google",
      "AI will become part of regular PM work like mobile did before - learn it now",
      "Don't push AI into products just because it exists - ask what problem it solves 10x better",
      "Use AI in your daily work to understand its capabilities and spark creative ideas",
      "Three ways to break into PM: APM programs, internal transfers, or build something",
      "Job hunting takes 6-9 months on average in this competitive market",
      "Treat interview prep like a video game - unlock each level one at a time",
      "If you make your users successful, your product will be successful"
    ],
    resourcesMentioned: [
      { title: "Gabor's PM Interview Readiness Quiz", url: "https://test.bigupgrade.com/" },
      { title: "Cracking the PM Interview", url: "https://www.crackingthepminterview.com" },
      { title: "Decode and Conquer by Lewis Lin", url: "https://www.lewis-lin.com/decode-and-conquer" }
    ],
    keywords: ["Google PM", "FAANG interview", "PM interview prep", "8 rejections", "Big Tech", "AI product management", "Notebook LM", "interview skills", "career persistence", "LogMeIn"]
  },
  {
    id: "11",
    slug: "evolution-of-product-ops",
    title: "The Evolution of Product Ops: A Deep Dive with Graham Reed",
    episodeNumber: "S2E3",
    guest: {
      name: "Graham Reed",
      role: "Head of Product Operations",
      company: "HeliosX Group",
      website: "https://www.heliosx.com",
      industry: "Healthcare & Telehealth",
      bio: "Graham Reed is the Head of Product Operations at HeliosX Group. He's been doing product ops for about five years, having 'fallen into it' after a decade in product management. Graham has built product ops functions from scratch at multiple companies and is passionate about the community-driven, anti-gatekeeping nature of the discipline. He's currently creating a UK meetup group for product ops professionals.",
      photo: grahamPhoto,
      linkedin: "https://www.linkedin.com/in/grahamreed/"
    },
    description: "Graham dives deep into product operations - when to bring it in, the skills needed, and why it's the most welcoming community in product.",
    longDescription: "In this episode, hosts Santi and Meagan sit down with Graham Reed, Head of Product Operations at HeliosX Group, for a comprehensive exploration of the product ops discipline.\n\nGraham shares how he 'fell into' product ops after a decade in product management, and has since built product ops functions from scratch at multiple companies. He discusses when businesses should consider product ops (typically around 150+ employees), the key skills needed (soft skills over experience), and the difference between being a team of one versus building specialized teams.\n\nThe conversation covers how product ops helps teams focus on their 'primary function,' supports product leadership, and why the discipline is proudly community-driven and anti-gatekeeping - the opposite of the sometimes gate-kept product management world. Graham also shares his spicy take on a metric we should all stop pretending to care about.",
    youtubeId: "FHoWewjQ8uc",
    buzzsproutId: "17850430",
    spotifyUrl: "https://open.spotify.com/episode/7lIt1DOoFL3k8w7RQo1f9k",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-evolution-of-product-ops-a-deep-dive-with-graham-reed/id1784108281?i=1000727079788",
    topic: "career",
    topics: ["Product Operations", "Career Transition", "Team Building", "Ways of Working", "Community", "Change Management"],
    duration: "55 min",
    publishedAt: "2025-04-09",
    takeaways: [
      "Every business has product ops as a function, even without a dedicated role",
      "Product ops typically becomes needed around 150+ employees (startup to scale-up transition)",
      "Soft skills matter more than experience - communication, empathy, problem-solving are key",
      "Product ops helps teams focus on their 'primary function' by removing friction",
      "You don't have to be a PM first, but it helps understand touch points between teams",
      "The role is community-driven, not book-driven - very welcoming to newcomers",
      "Look at what's not being addressed in your team - that's your product ops opportunity",
      "Product ops supports both the teams on the ground AND leadership",
      "No two days are the same - you need to switch between strategic and tactical thinking",
      "Velocity is a metric we should stop pretending to care about"
    ],
    resourcesMentioned: [
      { title: "Product Operations by Melissa Perri & Denise Tilles", url: "https://www.productoperations.com" },
      { title: "Product Ops Confidential", url: "https://www.productopsconfidential.com/" }
    ],
    keywords: ["product operations", "product ops", "HeliosX", "ways of working", "change management", "team efficiency", "product leadership", "community-driven", "anti-gatekeeping", "velocity metric"]
  },
  {
    id: "12",
    slug: "power-of-storytelling-in-hiring",
    title: "The Power of Storytelling in Hiring",
    episodeNumber: "S2E4",
    guest: {
      name: "Heidi Ram",
      role: "Product Recruiter, Practice Lead",
      company: "The Product Recruiter",
      website: "https://theproductrecruiter.com",
      industry: "Recruiting & Talent Acquisition",
      bio: "Heidi Ram is a Practice Lead at The Product Recruiter, a Toronto-based firm that helps technology companies make tough hiring decisions in product, UX, and product marketing. With 26+ years in recruiting, she works with CEOs, founders, and chief product officers to find top PM talent across North America. Heidi is passionate about helping candidates tell their story effectively and advocates for being strategic and intentional about career moves.",
      photo: heidiPhoto,
      linkedin: "https://www.linkedin.com/in/heidiram/"
    },
    description: "Heidi shares recruiter insights on storytelling, standing out in hiring, and why your narrative matters more than your frameworks.",
    longDescription: "In this episode, hosts Santi and Meagan sit down with Heidi Ram, Practice Lead at The Product Recruiter, to get insider insights on what makes PM candidates stand out in today's competitive hiring market.\n\nHeidi shares why successful product managers are defined by their 'before and after' narrative, not by the frameworks they use or how many cross-functional teams they mention. She breaks down how to optimize LinkedIn as your marketing tech stack, craft resumes that convert to interviews, and why less experienced candidates often focus too much on the 'how' instead of business outcomes.\n\nThe conversation covers crucial career advice: move towards something rather than away from something, understand that it's hard everywhere, and ask two essential questions before accepting any role. Heidi also shares practical guidance for those pivoting into product: join a tech company in any role, excel there, then pivot internally.",
    youtubeId: "Zg4SOZexDUE",
    buzzsproutId: "17895630",
    spotifyUrl: "https://open.spotify.com/episode/7ux2FTINmf6IHTY1jlCyfH",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-the-power-of-storytelling-in-hiring/id1784108281?i=1000728254048",
    topic: "hiring",
    topics: ["Hiring & Recruiting", "Storytelling", "Job Search Strategy", "Resume Optimization", "LinkedIn", "Career Transition", "Interview Process"],
    duration: "51 min",
    publishedAt: "2025-04-23",
    takeaways: [
      "Success in PM hiring means showing a 'before and after' narrative with quantifiable impact on the product and business",
      "LinkedIn is your marketing tech stack. Optimize for recruiters with searchable titles and clear product focus",
      "Less experienced candidates focus too much on 'how' (frameworks, cross-functional) instead of business outcomes",
      "Move towards something, not away from something. Don't leave just because things get hard",
      "It's hard everywhere. Every company has challenges, so know your tolerance",
      "Two essential questions before accepting: Do I want to do this job? Can I work with these people?",
      "For pivoting into PM: join a tech company in any role, excel there, then pivot internally",
      "The average PM tenure is about 2 years. It's okay to join knowing it's not forever",
      "Most people don't start their career in product. It's a journey into product from other roles"
    ],
    resourcesMentioned: [
      { title: "The Product Recruiter", url: "https://theproductrecruiter.com" }
    ],
    keywords: ["product recruiter", "hiring", "storytelling", "LinkedIn optimization", "resume", "job search", "interview process", "career transition", "before and after narrative", "business outcomes", "PM tenure", "The Product Recruiter"]
  },
  {
    id: "13",
    slug: "from-incubator-to-product-management",
    title: "From Incubator to Product Management: Nikhil's Journey",
    episodeNumber: "S2E5",
    guest: {
      name: "Nikhil (Nick) Punjabi",
      role: "AI Product Manager",
      company: "Dash Social",
      website: "https://dashsocial.com",
      industry: "Social Media & AI",
      bio: "Nick Punjabi is an AI Product Manager at Dash Social with nearly 5.5 years in product management. His journey started at Innovacorp (now Invest Nova Scotia) where he worked on the programs team supporting early-stage tech companies and startup founders. While working full time, he completed a master's degree in tech entrepreneurship and innovation. Nick is passionate about customer discovery, AI adoption in product, and helping aspiring PMs understand that starting a business, even a lemonade stand, is one of the best ways to learn product fundamentals.",
      photo: nickPhoto,
      linkedin: "https://www.linkedin.com/in/nikhil-punjabi/"
    },
    description: "Nick shares his journey from supporting startups at an incubator to becoming an AI PM, and why starting a side hustle teaches you PM fundamentals.",
    longDescription: "In this episode, hosts Santi and Meagan sit down with Nick Punjabi, AI Product Manager at Dash Social, to explore his unique path from working in a startup incubator to product management.\n\nNick shares how supporting founders at Innovacorp inspired him to pursue product, leading him to complete a master's in tech entrepreneurship while working full time. He breaks down why starting any business, even a lemonade stand, teaches you the fundamentals of product management better than most courses.\n\nThe conversation covers practical advice for career changers: map your transferable skills to PM competencies, build a portfolio that tells your story, document your journey publicly, and embrace AI as a tool to sharpen rather than fear. Nick also delivers a memorable lesson on the dangers of over-solutioning: don't build a plane when someone just wants Jerry's bicycle to get lemonade.",
    youtubeId: "UisomxfRnpk",
    buzzsproutId: "17929207",
    spotifyUrl: "https://open.spotify.com/episode/61FxN7RF1pUs5wKaflOlYF",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-from-incubator-to-product/id1784108281?i=1000729358273",
    topic: "career",
    topics: ["Career Transition", "Startup Ecosystem", "AI in PM", "Entrepreneurship", "Portfolio Building", "Customer Discovery"],
    duration: "50 min",
    publishedAt: "2025-05-07",
    takeaways: [
      "Starting a business or side hustle is one of the best ways to learn PM fundamentals",
      "Product managers are at the center of solutions that can genuinely change people's lives",
      "You must evangelize your product internally and externally. Be the herald of your product",
      "Don't over-solution: don't build a plane when someone just wants a bicycle",
      "If you haven't adopted AI in your day-to-day as a PM, you are behind",
      "Done is better than perfect. Perfectionism actually hurts PM work",
      "Build a portfolio mapping your transferable skills to PM competencies",
      "Document your journey to PM publicly. It differentiates you from the competition"
    ],
    resourcesMentioned: [
      { title: "Innovacorp / Invest Nova Scotia", url: "https://www.investnovascotia.ca" },
      { title: "Udemy PM Courses", url: "https://www.udemy.com" }
    ],
    keywords: ["incubator to PM", "startup ecosystem", "AI product manager", "side hustle", "customer discovery", "transferable skills", "portfolio", "storytelling", "done is better than perfect", "vanity metrics", "over-solutioning", "Dash Social", "Halifax"]
  },
  {
    id: "14",
    slug: "power-of-saying-yes",
    title: "The Power of Saying Yes (and Figuring It Out Later)",
    episodeNumber: "S2E6",
    guest: {
      name: "Eduardo (Eddie) Rosenfeld",
      role: "VP, Applied AI",
      company: "Lavender",
      website: "https://lavender.ai",
      industry: "AI & Sales Tech",
      bio: "Eddie Rosenfeld is the VP of Applied AI at Lavender.ai, where he helped build Aura, their autonomous outbound agent. His path into tech is wildly unconventional. He studied philosophy and wanted to be a screenwriter until COVID hit right before graduation. He went from filing paperwork to becoming a CEO's right-hand man, then moved to Spain and Mexico to build a blockchain database. He joined Lavender after learning a program overnight to complete an unsolicited task for the CTO. Eddie embodies startup hustle and the power of just saying yes and figuring it out later.",
      photo: eddiePhoto,
      linkedin: "https://www.linkedin.com/in/eduardorosenfeld/"
    },
    description: "Eddie shares his unconventional journey from philosophy major to VP of Applied AI, and why attitude matters more than experience in startups.",
    longDescription: "In this episode, hosts Santi and Meagan sit down with Eddie Rosenfeld, VP of Applied AI at Lavender.ai, to explore his wildly unconventional path into tech and startup life.\n\nEddie shares how he went from studying philosophy and writing comedy scripts to moving across the world for a blockchain project, eventually landing at Lavender by learning a program overnight to impress the CTO. He breaks down why attitude trumps experience, how to prioritize when everything is on fire, and the difference between band-aid fixes and surgery in startup product work.\n\nThe conversation covers practical startup wisdom: if something takes under 5 minutes just do it, build product for customers not for cool ideas, reach out directly when job hunting, and remember that your network is your net worth. Eddie also delivers a memorable reminder: it's less about experience and more about being curious and willing to grind.",
    youtubeId: "G-OiJXM2fyA",
    buzzsproutId: "17974920",
    spotifyUrl: "https://open.spotify.com/episode/6loW2Y9XzTZYvoA4smc6sE",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-the-power-of-saying-yes-and/id1784108281?i=1000730849013",
    topic: "career",
    topics: ["Startup Culture", "Career Transition", "Product Ops", "Customer Feedback", "Hustle Mindset", "AI"],
    duration: "65 min",
    publishedAt: "2025-05-21",
    takeaways: [
      "It's less about experience and more about attitude. Be curious and willing to grind.",
      "If you can do something in under 5 minutes, just do it.",
      "Startups are always choosing between band-aids and surgery.",
      "Build product for your customers, not because you think it would be cool.",
      "When applying to startups, reach out directly to teams. Don't apply into the void.",
      "Your network is your net worth. Nurture relationships with everyone you meet.",
      "Burnout is real. Have outlets outside of work to decompress.",
      "Embrace feedback as a gift. It helps you become a better person and teammate."
    ],
    resourcesMentioned: [
      { title: "Purdue Applied Artificial Intelligence Course", url: "https://bootcamp-sl.discover.online.purdue.edu/applied-artificial-intelligence-course" }
    ],
    keywords: ["startup", "do whatever it takes", "product ops", "Lavender", "AI", "customer feedback", "saying yes", "figuring it out", "band-aid vs surgery", "network", "philosophy to tech", "hustle", "attitude over experience"]
  },
  {
    id: "15",
    slug: "why-ai-should-be-boring",
    title: "Why AI Should Be Boring - And That's a Good Thing",
    episodeNumber: "S2E7",
    guest: {
      name: "Aaron Kesler",
      role: "VP, Product Management (AI)",
      company: "RozieAI",
      website: "https://rozie.ai",
      industry: "AI & Conference Tech",
      bio: "Aaron Kesler is VP of Product at RozieAI after 12 years in product management. His journey started founding a company in college, then working at Starbucks after quitting tech—where his regulars became his mentors and connected him to his next role. He moved through technical support, then took over as PM when the previous one left. He went on to Blue Cross and SnapLogic, where he led AI product management with two of the company's most successful launches. Aaron is also writing a book on Lean Pub about pivoting into product management.",
      linkedin: "https://www.linkedin.com/in/aaron-kesler/",
      photo: aaronPhoto
    },
    description: "Aaron explains why AI should become boring, how vibe coding changes everything, and why AI PM skills are just traditional PM skills focused on mundane problems.",
    longDescription: "In this episode, hosts Santi and Meagan sit down with Aaron Kesler, VP of Product at RozieAI, to discuss why the best AI is ultimately boring AI—and why that's exactly what we should want.\n\nAaron shares his unconventional journey from founding a startup in college to working at Starbucks (where his regulars became mentors who landed him his next role), eventually becoming an AI product leader. He breaks down why AI PM skills are really just traditional PM skills focused on automating mundane tasks, why companies building 'AI for AI's sake' will fail fast, and how vibe coding is about to disrupt everyone.\n\nThe conversation covers practical AI adoption advice: start with ChatGPT and just talk to it, focus on tasks you hate doing, and embrace experimentation. Aaron also shares insights from his upcoming book on pivoting into PM, including controversial advice: if you're doing the role, give yourself the title.",
    youtubeId: "Kw9ssA8sSsI",
    buzzsproutId: "18016313",
    spotifyUrl: "https://open.spotify.com/episode/2fDK57b1AvFTtpLJHEE2y3",
    appleUrl: "https://podcasts.apple.com/sk/podcast/the-product-pivot-why-ai-should-be-boring-and-thats/id1784108281?i=1000732007380",
    topic: "ai",
    topics: ["AI Product Management", "Vibe Coding", "Career Transition", "Experimentation Culture", "Automation"],
    duration: "55 min",
    publishedAt: "2025-06-04",
    takeaways: [
      "AI PM skills are traditional PM skills - focus on customer problems, not the technology",
      "AI is perfect for automating mundane, repetitive tasks that people hate doing",
      "Companies building 'AI for AI's sake' without solving real problems will fail fast",
      "Vibe coding enables non-technical people to build products - be aware of this disruption",
      "AI should become boring - let it do boring things so we can focus on interesting work",
      "Start with ChatGPT if you haven't - just chat with it like you'd chat with a person",
      "Focus on what you hate doing daily/weekly/monthly - that's where AI helps most",
      "If you're doing the PM role, give yourself the title - your resume is a marketing document",
      "Product management is one of the most political roles - build relationships with everyone",
      "NPS scores provide zero value - instead ask 'If this product went away, how upset would you be?'"
    ],
    resourcesMentioned: [
      { title: "ChatGPT", url: "https://chat.openai.com" },
      { title: "Aaron Kesler's Links", url: "https://kesler.io/links/" }
    ],
    keywords: ["AI product management", "vibe coding", "boring AI", "automation", "ChatGPT", "RozieAI", "SnapLogic", "product management skills", "customer problems", "NPS", "experimentation", "Starbucks to PM"]
  },
  {
    id: "16",
    slug: "season-three-kickoff",
    title: "Season 3 Kickoff with Santi and Meagan",
    episodeNumber: "S3E1",
    guest: {
      name: "Santi & Meagan",
      role: "Your Hosts",
      company: "Prodfolio",
      website: "https://prodfolio.io",
      industry: "Product Management, SaaS",
      bio: "Santi and Meagan are the co-hosts of The Product Pivot and co-founders of Prodfolio, a portfolio platform for product managers. In this Season 3 opener, they get honest about the past year — building Prodfolio, recording a full season in two weeks, and navigating life as PMs who build on the side.",
      linkedin: "https://www.linkedin.com/company/the-product-pivot/"
    },
    description: "Meagan and Santi get honest about building Prodfolio, running discovery, co-founder dynamics, and why 'not the right time' is never really the reason.",
    longDescription: "Season 3 of The Product Pivot starts with an episode that's a little different.\n\nHost Meagan Glenn sits down with co-founder and co-host Santi to talk openly about the past year of building Prodfolio — a portfolio platform for product managers — while navigating a second pregnancy, a toddler, gestational diabetes, a full-time job, and a podcast. This is the first time Santi is talking about it publicly.\n\nTogether they cover what discovery and beta testing looked like for Prodfolio, how they recorded an entire season in two weeks before Santi went on leave, the co-founder dynamic that kept them from burning out, and why they believe the PM skill set is one of the most transferable things you can develop.\n\nWhether you're a PM considering building something on the side, a founder trying to figure out how to keep momentum when life gets complicated, or just someone who wants an honest look at what it takes — this one's worth your time.",
    youtubeId: "rzXENTGRFho",
    buzzsproutId: "18893969",
    spotifyUrl: "https://open.spotify.com/episode/3MYxJRZPqJbXsHjjbDW7Y6",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-product-pivot-season-3-kickoff-with-santi-and-meagan/id1784108281?i=1000757046421",
    topic: "career",
    topics: ["Season Kickoff", "Hosts Update", "Season 3 Preview", "Career Reflections"],
    duration: "56 min",
    publishedAt: "2026-03-24",
    takeaways: [
      "You can build something meaningful while life is happening — finding your personal groove matters more than having perfect conditions",
      "Low pressure produces more than high pressure — removing expectations of each other and staying in open communication actually gets more done",
      "Never skip discovery — validate your idea through real conversations before you build anything",
      "Watching beta users navigate the product in real time is the most valuable thing you can do, not surveys, not assumptions — observation",
      "Everything applied to building Prodfolio — discovery, prioritization, retros, user research — came directly from product management. Building on the side sharpens your PM instincts in ways a job alone can't",
      "There's an advantage to moving early if the market gap is real — don't rush to ship something broken, but don't overthink timing either"
    ],
    resourcesMentioned: [],
    keywords: ["The Product Pivot", "product management podcast", "Prodfolio", "PM portfolio", "product discovery", "user research", "co-founder relationship", "side project as a PM", "women in product", "building a startup", "PM career advice", "Meagan Glenn", "Santi"],
    thumbnail: s3KickoffThumbnail
  },
  {
    id: "17",
    slug: "youre-the-product-your-career-is-too",
    title: "You're the Product. Your Career Is Too.",
    episodeNumber: "S3E2",
    guest: {
      name: "Heidi Ram",
      role: "Practice Lead",
      company: "The Product Recruiter",
      website: "https://theproductrecruiter.com",
      industry: "Recruiting & Product Management",
      bio: "Heidi Ram is a Practice Lead at The Product Recruiter and has spent 25 years placing product leaders across North America. She's seen every version of this market — the boom years, the layoffs, the slow rebuilds. In this episode, she introduces her concept of 'candidate mode,' profiles three resume personas PMs get wrong, and breaks down what hiring managers actually scan for.",
      photo: heidiPhoto,
      linkedin: "https://www.linkedin.com/in/heidiram/"
    },
    description: "Heidi Ram returns with recruiter-tested advice on entering 'candidate mode,' fixing your PM resume, and treating your job search like a product problem.",
    longDescription: "We brought Heidi Ram back, and she came with receipts.\n\nHeidi is a Practice Lead at The Product Recruiter and has spent 25 years placing product leaders across North America. She's seen every version of this market, and right now, she's watching a lot of talented product people make the same avoidable mistakes.\n\nThis episode picks up where Part 1 left off, and it gets specific fast. Heidi introduces a concept she calls 'candidate mode,' and breaks down what it actually looks like when product people fail to enter it. Then she goes deep on resumes, profiling three personas she sees constantly and what each one gets wrong before a hiring manager even finishes the first line.\n\nIf you're job searching, sitting on a dusty resume, or just starting to feel the market shift beneath you, this one's worth a listen.",
    youtubeId: "UyHPS0tZvZs",
    buzzsproutId: "18901784",
    spotifyUrl: "https://open.spotify.com/episode/4xJ50WpGj7RvfGszVtG3Bn",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-product-pivot-youre-the-product-your-career-is/id1784108281?i=1000758450279",
    topic: "hiring",
    topics: ["PM Resume", "Job Search", "Candidate Mode", "Recruiting", "Career Strategy", "Hiring Trends"],
    duration: "46 min",
    publishedAt: "2026-03-31",
    takeaways: [
      "Treat your job search like a product problem — do discovery on the roles you're pursuing before investing in interviews",
      "Staying in 'passive mode' costs you the meeting before you even know you wanted it — enter candidate mode deliberately",
      "The market has shifted — employers are making strategic singular hires with rapid ROI expectations, not scaling teams",
      "Three resume personas Heidi sees constantly — and how each one undermines your chances before anyone reads past line one",
      "The 'how' belongs in the interview, not the resume — your resume should tell the value story, not list your process",
      "The path into product usually runs through your current employer — internal moves are still the most common entry point, and aspiring PMs often overlook them",
      "Initiative is underrated — expressing willingness to grow is something employers genuinely value",
      "AI skilling is becoming the differentiator",
      "Product careers are uniquely elastic — IC, director, back to IC — in ways most roles aren't. Use that to your advantage"
    ],
    resourcesMentioned: [
      { title: "The Skip Podcast", url: "https://open.spotify.com/show/4oT2rxMsRP64h9NXuA11DJ" },
      { title: "Resume Coaching - The Product Recruiter", url: "https://www.theproductrecruiter.com/resume-coaching" },
      { title: "AI PM Course by Miqdad Jaffer", url: "https://productmanagement.ai/" },
      { title: "Google Agent Development Kit (ADK)", url: "https://google.github.io/adk-docs/" }
    ],
    keywords: ["Heidi Ram", "The Product Recruiter", "PM resume tips", "candidate mode", "product manager job search", "PM career advice", "resume mistakes", "hiring trends", "product management career", "AI product manager", "career pivot into product", "resume coaching"],
    thumbnail: heidiThumbnail
  },
  {
    id: "18",
    slug: "from-bdr-to-product-manager",
    title: "From BDR to Product Manager: The Non-Linear Path Works",
    episodeNumber: "S3E3",
    guest: {
      name: "Christina Aragon",
      role: "Associate Product Manager",
      company: "ThinkLP",
      website: "https://www.thinklp.com/",
      industry: "Loss Prevention, SaaS",
      bio: "Christina Aragon is an Associate Product Manager at ThinkLP. She pivoted from software engineering through a BDR role before landing her first PM position. With a background in both engineering and sales, Christina brings a rare cross-functional perspective to product and isn't afraid to talk about imposter syndrome, gate-keeping in PM, and what it actually takes to break in early.",
      photo: christinaPhoto,
      linkedin: "https://www.linkedin.com/in/christina-aragon11/"
    },
    description: "Christina shares what it's actually like to be an associate PM in 2025, how she broke in through a non-linear path, and why the product community is both welcoming and gate-kept.",
    longDescription: "The APM role has been showing steady growth the last year, but what does it look like when you land one?\n\nChristina Aragon joins Meagan and Santi to talk about her path from civil engineering to software engineering to a BDR role, and finally into product. She gets honest about imposter syndrome, what it feels like to step into a room full of experienced PMs when you're just getting started, and how she uses her engineering and sales background to communicate across teams.\n\nThe conversation gets real about whether the product community is gate-kept, why entry-level PM roles still require years of experience, and what it actually takes to get your foot in the door when nobody's handing you one.",
    youtubeId: "B3fq-XvTELk",
    buzzsproutId: "18957826",
    spotifyUrl: "https://open.spotify.com/episode/2daevW5FzhIZxIFEqWiR6l",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-product-pivot-from-bdr-to-associate-pm-christina/id1784108281?i=1000760037486",
    topic: "career",
    topics: ["Associate PM", "Breaking Into Product", "Imposter Syndrome", "Networking", "Gate-keeping in PM", "Cross-functional Communication"],
    duration: "48 min",
    publishedAt: "2026-04-07",
    takeaways: [
      "The associate PM role is disappearing from job boards, so how did Christina actually land one?",
      "Having engineering and sales experience changes how you show up as a PM in ways most people don't expect",
      "Christina communicates completely differently with engineers than she does with sales, and she explains exactly how she decides",
      "Imposter syndrome doesn't go away with seniority. Every PM has it, from associate to VP",
      "The product community is welcoming once you're in, but breaking in is the hard part. Christina and the hosts get honest about why",
      "Christina's cold outreach strategy is specific and repeatable, and it's how she got her foot in the door",
      "You don't need to pay for a course to build PM skills. Christina shares the free resources that actually helped her",
      "Give engineers creative freedom and real customer context. The more bought in they are, the better the work"
    ],
    resourcesMentioned: [
      { title: "Product Management Specialization (University of Alberta) - Coursera", url: "https://www.coursera.org/specializations/product-management" }
    ],
    keywords: ["Christina Aragon", "associate product manager", "APM role", "breaking into product management", "imposter syndrome PM", "fintech PM", "entry-level product manager", "PM networking tips", "gate-keeping product management", "BDR to PM", "software engineering to PM", "cross-functional communication", "aspiring PM", "product management career"],
    thumbnail: christinaThumbnail
  },
  {
    id: "28",
    slug: "product-manager-or-problem-manager",
    title: "Product Manager or Problem Manager?",
    episodeNumber: "S3E4",
    guest: {
      name: "Steve Johnson",
      role: "Founder & Principal Consultant",
      company: "Product Growth Leaders",
      website: "https://www.productgrowthleaders.com/",
      industry: "Product Management Coaching & Training",
      bio: "Steve Johnson has spent 30+ years coaching product management teams. After starting as a programmer and then working in sales engineering and sales, Steve stumbled into product management and went on to become a VP of Product. He spent 15 years at Pragmatic Marketing before founding Product Growth Leaders, where he flipped training on its head: less talking, more doing. Steve is known for his direct style, his focus on friction as the core of the PM role, and his provocative take that maybe we should be calling ourselves problem managers instead.",
      photo: stevePhoto,
      linkedin: "https://www.linkedin.com/in/sjohnson717/"
    },
    description: "After 30+ years coaching PM teams, Steve Johnson argues product managers should really be called problem managers — and explains why the best PMs never tell other people how to do their jobs.",
    longDescription: "In this episode, Santi and Meagan sit down with Steve Johnson, founder of Product Growth Leaders and a 30-year veteran of product management coaching. Steve shares his unconventional path from programmer to sales engineer to PM, and what he's learned from training product teams across thousands of companies.\n\nSteve makes the case that the best PMs bring a business mindset, not a technology mindset, and that the most damaging habit in the field is telling other people how to do their jobs. He digs into how the PM role has swung between business and technical over the decades, what AI is actually changing (and what it isn't), why product community folklore around certifications and bootcamps doesn't match hiring reality, and why the title 'product manager' might be misleading us about what the job really is.\n\nAlong the way, Steve shares a story about turning a three-month implementation into three weeks by solving the right problem, why marketing is one of a PM's most underrated partners, and the one red flag that makes him walk away from any product — or job description.",
    thumbnail: steveThumbnail,
    youtubeId: "iGXXkrbKcCU",
    buzzsproutId: "19053064",
    spotifyUrl: "https://open.spotify.com/episode/3wX7VnwqrMctFJmUZGvxgj",
    appleUrl: "https://podcasts.apple.com/sk/podcast/product-manager-or-problem-manager-steve-johnson-product/id1784108281?i=1000762903393",
    topic: "career",
    topics: ["PM Role Evolution", "What Makes a Great PM", "Product Coaching", "AI and Product Management", "Business Mindset", "Pivoting to Product"],
    duration: "50 min",
    publishedAt: "2026-04-21",
    takeaways: [
      "Steve argues the title 'product manager' might be the wrong one entirely — and offers a replacement that changes how you approach the role",
      "The number one trait that separates great PMs from everyone else, and it's not technical skill",
      "Why the worst habit in product management is something most PMs do every single day without realizing it",
      "A real story of cutting implementation time from three months to three weeks by reframing the problem instead of building the requested feature",
      "What Steve thinks AI is actually going to change about product management over the next 18 months — and what it won't",
      "Why hiring managers almost never care about PM certifications or bootcamps, and what they look for instead",
      "The move most aspiring PMs get wrong when trying to break into the role, and the path Steve has seen actually work",
      "Steve's personal red flag when evaluating any product, company, or job description"
    ],
    resourcesMentioned: [
      { title: "Product Growth Leaders", url: "https://www.productgrowthleaders.com/" },
      { title: "Customer Conversations: A Product Manager's Superpower by Steve Johnson", url: "https://www.amazon.com/dp/B0GNWN9NC8" }
    ],
    keywords: ["Steve Johnson", "Product Growth Leaders", "problem manager", "what makes a good product manager", "PM coaching", "product management training", "PM role evolution", "AI product management", "pivoting into product management", "business mindset PM", "product manager vs product owner", "friction in product management", "Pragmatic Marketing", "product management career", "breaking into product management"]
  },
  {
    id: "29",
    slug: "from-publisher-to-product-manager",
    title: "From Publisher to Product Manager: An Accidental PM's Take on AI",
    episodeNumber: "S3E5",
    guest: {
      name: "Riëtte Verster",
      role: "Senior Product Manager",
      company: "Liferaft",
      website: "https://www.liferaftinc.com",
      industry: "Threat Intelligence & Software",
      bio: "Riëtte Verster is a Senior Product Manager at Liferaft, a threat intelligence platform serving analysts and investigators. She started her career in educational publishing at Pearson in South Africa, where she did product management work for years before realizing it had a name — building digital tools for early reading curricula and helping lead the print-to-digital transition. After moving to Canada, she pivoted into tech through mobile gaming and eventually into B2B SaaS. Today she works at the intersection of AI and high-skepticism users, where shipping a 'gimmick' gets caught fast and customer trust is non-negotiable.",
      photo: riettePhoto,
      linkedin: "https://www.linkedin.com/in/ri%C3%ABtte-verster-product-manager/"
    },
    description: "Liferaft Senior PM Riëtte Verster on stumbling into product management, why most AI features fail customers, and the shift coming for every app you build.",
    longDescription: "In this episode, Santi and Meagan sit down with Riëtte Verster, Senior Product Manager at Liferaft. Riëtte's path into product is one of the most unique we've heard on the show: she started in educational publishing at Pearson in South Africa, and quietly did product management for years before discovering the role had a name. The print-to-digital transition pulled her toward tech, a move to Canada pulled her into mobile gaming, and eventually she landed in B2B SaaS at the intersection of AI and high-skepticism users.\n\nFrom there, Riëtte makes a sharp case that most AI product work right now is solving the wrong problem. She's seen the pattern up close: customers get pushed by their boards to 'do AI,' teams ship something that demos well, leading indicators look great, but then nobody uses it. She walks through what actually separates AI features that earn revenue from ones that flatter a roadmap and the maintenance tax that shows up the moment you ship anything built on a foundation model.\n\nAlong the way: a moment in the conversation that genuinely surprised her about where apps are headed next, the personal red flag she's learned to spot in herself before it derails a project, and the imposter-syndrome trap she thinks every PM falls into.",
    thumbnail: rietteThumbnail,
    youtubeId: "aAzx6OqCJAo",
    buzzsproutId: "19085395",
    spotifyUrl: "https://open.spotify.com/episode/5eOnqFrs8FyccnI1kwIPkJ",
    appleUrl: "https://podcasts.apple.com/us/podcast/from-publisher-to-product-manager-an-accidental-pms/id1784108281?i=1000764135067",
    topic: "ai",
    topics: ["AI in Product Management", "Solving Real Problems", "Pivoting to Product", "Customer-Centric AI", "Imposter Syndrome"],
    duration: "39 min",
    publishedAt: "2026-04-28",
    takeaways: [
      "You can do product management for years without knowing it has a name. Subject matter expertise plus curiosity about digital transformation is a legitimate path in.",
      "Most AI features fail because they solve a board-level mandate to 'do AI' instead of a real customer problem. Early excitement and leading indicators will mislead you.",
      "Building on foundation models adds an ongoing maintenance tax to your roadmap. Every model update means your foundational assumptions need re-validation.",
      "The next shift in product design could be building for AI agents as users, not just humans. Most teams aren't designing for it yet.",
      "Senior PMs burn out trying to know everything. The job isn't to have every answer, it's to deeply understand your customers and trust the experts around you."
    ],
    resourcesMentioned: [
      { title: "Liferaft", url: "https://www.liferaftinc.com" }
    ],
    keywords: ["Riette Verster", "Riëtte Verster", "Liferaft", "AI product management", "ethical AI", "agentic apps", "PM red flags", "language models product", "threat intelligence", "pivoting into product management", "customer-centric AI", "AI gimmick", "senior product manager", "product management AI", "South Africa product manager", "PM imposter syndrome", "accidental product manager", "publishing to product management"]
  },
  {
    id: "30",
    slug: "breaking-into-product-without-the-title",
    title: "Breaking Into Product Without the Title",
    episodeNumber: "S3E6",
    guest: {
      name: "Kartikeya Shah",
      role: "Project Manager II",
      company: "RozieAI",
      website: "https://www.rozie.ai",
      industry: "AI & Customer Experience",
      bio: "Kartikeya Shah is a Project Manager II at RozieAI, an AI-led customer experience platform. His path to product spans engineering, market research, business analytics, and an MBA from NC State, where a chance conversation with a career advisor introduced him to product innovation. After landing a project management role at RozieAI, Kartikeya started doing product work directly under Aaron Kesler — managing his own product end to end while still officially in a PM-adjacent title. He's a case study in transferable skills, intentional networking, and not waiting for permission to do the job.",
      photo: kartikeyaPhoto,
      linkedin: "https://www.linkedin.com/in/kartikeyancsu/"
    },
    description: "RozieAI's Kartikeya Shah on doing product work before getting the title, transferable skills from project management, and the networking strategy that built him a 350-person spreadsheet.",
    longDescription: "In this episode, Santi and Meagan sit down with Kartikeya Shah, Project Manager II at RozieAI, an AI-powered customer experience company. Kartikeya's path is one a lot of aspiring PMs will recognize: he wanted product, but the entry-level product roles all asked for three to five years of experience. So he took a project management job at a software company instead, mentored by RozieAI's product leader Aaron Kesler, and started doing real product work — managing his own product end to end — within months of joining.\n\nKartikeya makes a clear case for not waiting for the title. He talks through the transferable skills that pulled him into product (customer research, data analytics, stakeholder management), the moment his manager handed him a product to run, and what he's learning that no certification or framework book taught him. He's honest about the cons too: the 'entry-level' job posting that secretly requires five years, the difficulty of saying no when you're wired to please, and the gap between the RICE framework on paper and what actually ships.\n\nAlong the way: the networking system that grew his contact spreadsheet to over 300 people, the two questions he asks every connection, and why he reached out to customer insights managers and marketing directors instead of just other PMs.",
    thumbnail: kartikeyaThumbnail,
    youtubeId: "l6YVddhecNk",
    buzzsproutId: "19097286",
    spotifyUrl: "https://open.spotify.com/episode/3P9KL8KaBzK8vRcpm5K4Ci",
    appleUrl: "https://podcasts.apple.com/us/podcast/breaking-into-product-without-the-title-with/id1784108281?i=1000766246874",
    topic: "career",
    topics: ["Pivoting to Product", "Project Management to Product", "Networking", "Mentorship", "Transferable Skills", "Breaking Into Product"],
    duration: "46 min",
    publishedAt: "2026-05-05",
    takeaways: [
      "Don't wait for the title to do the work. Volunteering for product responsibilities under a mentor can move you into the role faster than waiting for an entry-level posting that secretly requires five years of experience.",
      "Almost every role has transferable skills to product management. Map your current responsibilities against PM skills, surface the overlap on your resume, and lead with it when you apply.",
      "Frameworks like RICE and MoSCoW are useful to know but rarely the right tool in the moment. Live your reality and let the business goals and customer needs decide what gets built.",
      "Networking compounds. Asking every connection two questions ('Can you connect me to two more people?' and 'Would you review my resume?') turns a handful of conversations into hundreds over time.",
      "Don't only network with PMs. Customer insights managers, marketing directors, and data leaders sit one connection away from the product community and often open more doors than cold-messaging PMs ever will."
    ],
    resourcesMentioned: [
      { title: "Why AI Should Be Boring with Aaron Kesler (Kartikeya's mentor)", url: "https://prodfolio.io/podcast/episodes/why-ai-should-be-boring" },
      { title: "Cracking the PM Interview by Gayle Laakmann McDowell & Jackie Bavaro", url: "https://www.crackingthepminterview.com" },
      { title: "The Design of Everyday Things by Don Norman", url: "https://www.nngroup.com/books/design-everyday-things-revised/" },
      { title: "Decode and Conquer by Lewis C. Lin", url: "https://www.amazon.com/Decode-Conquer-Answers-Product-Management/dp/0615930417" }
    ],
    keywords: ["Kartikeya Shah", "RozieAI", "Aaron Kesler", "breaking into product management", "project manager to product manager", "aspiring product manager", "PM networking", "transferable skills product management", "product management mentor", "entry level product manager", "pivoting to product", "MBA product management", "PM job search", "no title product work"]
  },
  {
    id: "31",
    slug: "dark-side-of-product-management",
    title: "The Dark Side of Product Management Nobody Posts About",
    episodeNumber: "S3E7",
    guest: {
      name: "Alyx Priestley",
      role: "Founder & Principal Consultant",
      company: "Priestley Strategy Consulting",
      website: "https://www.alyxpriestley.com/",
      industry: "Product Management",
      bio: "Alyx Priestley is the Founder and Principal Consultant at Priestley Strategy Consulting, where she helps companies treat product as a real business function instead of a feature factory. Her path into product wasn't a typical one: she grew up around entrepreneurial parents, started her own creative agency, and stumbled into product through the lens of a founder who'd already learned what ruthless prioritization actually costs. Today she writes openly about the parts of product management most people don't post about, mentors PMs across industries, and is currently leading product on a sports tech brand in the golf space.",
      photo: alyxPhoto,
      linkedin: "https://www.linkedin.com/in/alyxpriestley/"
    },
    description: "Founder and consultant Alyx Priestley on the parts of product management nobody posts about: failure, burnout, imposter syndrome, and why product is a business function — not a feature factory.",
    longDescription: "In this episode, Santi and Meagan sit down with Alyx Priestley, Founder of Priestley Strategy Consulting and one of the most direct voices in product. The conversation is about the things product managers don't say out loud: imposter syndrome that doesn't go away when you get senior, burnout that builds because the job is all-consuming by design, leaders who don't know how to communicate when things are going wrong, and the failures that get edited out of every LinkedIn highlight reel.\n\nAlyx makes a sharp case that most companies don't actually treat product as a business function — they treat it as a feature factory. She argues PMs should adopt the founder's mindset (not the mini-CEO mindset, which she has a pointed take on), get into the conversation about pricing and revenue per user, and stop hiding behind user stories that don't tie back to money. She's blunt about why: 'Not everything is about money, but everything's about money.'\n\nThe second half gets personal. Alyx talks about her own struggles handling things going wrong, the moment she realized leading through tough situations isn't about having the answers, and the most direct take on imposter syndrome you'll hear this season. She also shares why she started writing publicly after years of staying quiet, and what changed her mind about going visible.",
    thumbnail: alyxThumbnail,
    youtubeId: "XWQw6Q84IC8",
    buzzsproutId: "19157867",
    spotifyUrl: "https://open.spotify.com/episode/3dTS5d3bZb33KG63MxJ3v0",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-dark-side-of-product-management-nobody-posts/id1784108281?i=1000767419921",
    topic: "leadership",
    topics: ["Product as a Business Function", "Leadership", "Imposter Syndrome", "Burnout", "Failing Forward", "Founder Mindset"],
    duration: "63 min",
    publishedAt: "2026-05-12",
    takeaways: [
      "The reframe Alyx uses for imposter syndrome — the bluntest you'll hear this season — and why she insists on saying it that way.",
      "Why 'product as a business function' is currently a structural gap at most companies, and the specific question Alyx says PMs should start asking that nobody wants to answer.",
      "The two mindsets every PM mixes up, and why one of them is actively dangerous to adopt.",
      "The moment Alyx realized she was failing at handling things going wrong, and the unexpected shift that pulled her out.",
      "The cost calculation Alyx uses every time she's stuck between two product decisions — a habit she learned running her own business, not from any PM book."
    ],
    resourcesMentioned: [
      { title: "Alyx Priestley on Medium", url: "https://medium.com/@alyx.priestley" },
      { title: "P&L for Product People — Product Economics", url: "https://www.producteconomics.uk/" },
      { title: "Escaping the Build Trap by Melissa Perri", url: "https://www.amazon.com/Escaping-Build-Trap-Effective-Management/dp/149197379X" }
    ],
    keywords: ["Alyx Priestley", "Priestley Strategy Consulting", "dark side of product management", "product as a business function", "founder mindset product manager", "imposter syndrome product management", "PM burnout", "failing forward", "feature factory", "Melissa Perri", "Build Trap", "product leadership", "revenue per user", "product strategy consultant", "honest product management"]
  },
  {
    id: "32",
    slug: "product-marketing-is-a-partnership-not-a-takeover",
    title: "Product Marketing Is a Partnership, Not a Takeover",
    episodeNumber: "S3E8",
    guest: {
      name: "Zach O'Neal",
      role: "Director of Product Marketing",
      company: "Luma",
      website: "https://lumalabs.ai/",
      industry: "Multimodal AI",
      bio: "Zach O'Neal is a 0-to-1 product marketing leader with 12+ years turning frontier tech into stories worth telling. He currently leads Product Marketing & Growth at Luma, where he built the founding PMM function for one of the most ambitious multimodal AI companies on the market, owning positioning, pricing, lifecycle, and a full-funnel growth engine across paid, influencer, and SEO/GEO. Before Luma, he was the founding marketing leader at a generative AI company shipping to Disney, Netflix, Sony, Amazon, and Warner Bros., and previously scaled product marketing across Disney+, Hulu, and ESPN+ for a combined 157M+ monthly users. He blends analytical rigor with creative instinct, and is at his best translating technical roadmaps into narratives that whole teams can ship behind.",
      photo: zachPhoto,
      linkedin: "https://www.linkedin.com/in/zachoneal/"
    },
    description: "Luma's Zach O'Neal on why most product marketing teams are getting the job wrong from day one, the four years it took to fix it at Disney+, and the AI take most marketers don't want to hear.",
    longDescription: "In this episode, Santi and Meagan sit down with Zach O'Neal, a 0-to-1 product marketing leader who currently runs Product Marketing & Growth at Luma and previously scaled subscriber experience PMM across Disney+, Hulu, and ESPN+. Zach makes the case that most product marketing teams are getting the job wrong from the very first day. They show up, take credit for product's work, and treat the function as a takeover instead of the central nervous system that actually amplifies it. He breaks down why getting this relationship right is the difference between a launch that sings and one nobody remembers a month later.\n\nThe second half covers how to pivot into product marketing without a creative background, how PMM scales from a global enterprise to a 200-person startup, and Zach's blunt take on AI that every marketer needs to hear. He closes with the Marvel and IMAX Enhanced launch on Disney+ as a real example of what happens when PMM and PM actually move together, and what gets left on the table when they don't.",
    thumbnail: zachThumbnail,
    youtubeId: "CoIR2yIRWbw",
    buzzsproutId: "19195781",
    spotifyUrl: "https://open.spotify.com/episode/1L9W4RNAKrdaSfwVtO7ABV",
    appleUrl: "https://podcasts.apple.com/us/podcast/product-marketing-is-a-partnership-not-a/id1784108281?i=1000768580304",
    topic: "leadership",
    topics: ["Product Marketing", "PMM × PM Partnership", "Cross-Functional Collaboration", "AI in Marketing", "Storytelling & Positioning", "Marketing Leadership"],
    duration: "56 min",
    publishedAt: "2026-05-19",
    takeaways: [
      "The PMM takeover mindset that kills the partnership, and the central nervous system reframe Zach uses to reset every new hire.",
      "The 'yes and / no but' rule Zach drills into every PMM on his team, and why bad decision-makers don't last.",
      "The four years Zach has from his own side of the table at Disney+, and the wall that had to come down before PM and PMM could finally hit a stride.",
      "Why engineering bandwidth is a marketing narrative problem, not an ops one, and how PMM is supposed to have product's back when the sprint can't fit it.",
      "Zach's blunt AI take that most marketers don't want to hear, and the habits that are writing people out of the room."
    ],
    resourcesMentioned: [
      { title: "Product Marketing Alliance", url: "https://www.productmarketingalliance.com/" }
    ],
    keywords: ["Zach O'Neal", "Luma", "Luma AI", "product marketing", "PMM", "product marketing vs product management", "PM PMM partnership", "Disney Plus product marketing", "Hulu", "ESPN Plus", "Product Marketing Alliance", "inbound product marketing", "outbound product marketing", "go-to-market", "multimodal AI", "generative AI", "AI in marketing", "Marvel IMAX Enhanced", "pivoting to product marketing", "central nervous system marketing", "yes and no but"]
  },
  {
    id: "33",
    slug: "from-ic-to-executive-what-actually-changes",
    title: "From IC to Executive: What Actually Changes",
    episodeNumber: "S3E9",
    guest: {
      name: "Aaron Kesler",
      role: "Vice President of Product Management",
      company: "RozieAI",
      website: "https://www.roziesynopsis.com/",
      industry: "Product Management",
      bio: "Aaron Kesler is Vice President of Product Management at RozieAI, where he leads product on Rozie Synopsis — an AI platform that listens at live events and turns them into evergreen summaries, synopses, and reports. He has over a decade in product management across technical support, healthcare, and enterprise AI, including leading AI product at SnapLogic on two of the company's most successful launches. Aaron writes the Become an AI Product Manager newsletter on LinkedIn, created the FORGE framework for AI PMs, and authored a book for people pivoting into product management. He's also a returning Product Pivot guest — last on the show as he was just stepping into the Rozie role.",
      photo: aaronPhoto,
      linkedin: "https://www.linkedin.com/in/aaron-kesler/"
    },
    description: "Aaron Kesler returns as VP of Product at RozieAI to talk about the one shift nobody warns you about going from IC to executive, the FORGE framework for AI PMs, and a $4.5M boring-AI story he tells onstage but rarely in print.",
    longDescription: "In this episode, Santi and Meagan welcome Aaron Kesler back to the show — now Vice President of Product Management at RozieAI, where he leads product on Rozie Synopsis, the company's AI platform for turning live events into evergreen reports. The last time Aaron was on, he'd just started at Rozie. This time he's running the team, and he doesn't sugarcoat what changed.\n\nAaron makes a sharp distinction most new executives learn the hard way: ICs spend their entire career figuring out what they can control. Executives have to give that up. He walks through what replaces it, what it costs, and the trap almost every first-time leader falls into — the one he names as his own biggest red flag.\n\nThe conversation widens into AI product stickiness — why ChatGPT, Claude, and Perplexity feel interchangeable, and what actually builds loyalty when switching costs are near zero. Aaron tells a $4.5M boring-AI story from a former customer that he closes his ProductCamp talks with, and breaks down the FORGE framework he built when he realized his own newsletter wasn't giving readers anything tangible to act on. Find, Organize, Rank, Generate, Evaluate — each letter mapped back to a PM fundamental most people already have, but don't know how to apply to AI.\n\nPlus: the AI-as-decision-partner thought experiment that gets darker the longer you think about it, why fundamentals beat AI shortcuts for new leaders, and Aaron's spicy take on product educators who are publishing into the ether.",
    thumbnail: aaronS3E9Thumbnail,
    youtubeId: "eKjE4uAni6s",
    buzzsproutId: "19242757",
    spotifyUrl: "https://open.spotify.com/episode/1AZdbxHxRzkwyoKpqgeRD8",
    appleUrl: "https://podcasts.apple.com/us/podcast/from-ic-to-executive-what-actually-changes-with-aaron/id1784108281?i=1000769673367",
    topic: "leadership",
    topics: ["Leadership", "IC to Executive", "AI Product Management", "Frameworks", "Continuous Discovery", "Product Stickiness"],
    duration: "49 min",
    publishedAt: "2026-05-26",
    takeaways: [
      "The IC-to-executive shift Aaron says nobody actually warned him about — and the one word that replaces 'control' the day you sit in the seat.",
      "Why Aaron thinks AI is dangerous for first-time leaders specifically, and the fundamentals he says you have to build before the AI partner can help you.",
      "The $4.5M boring-AI story Aaron closes his ProductCamp talks with — a 300-person field team, eight hours a week each, and a 'magical news feed' the end users never knew was AI.",
      "The FORGE framework — Find, Organize, Rank, Generate, Evaluate — and how Aaron maps each letter back to a product fundamental every PM already has, so AI PM stops feeling like a different job.",
      "Aaron's biggest red flag as a PM-turned-VP, plus the spicy take on product educators that he stopped just short of naming names on."
    ],
    resourcesMentioned: [
      { title: "Introducing the FORGE Framework", url: "https://www.linkedin.com/pulse/introducing-forge-framework-mental-model-become-ai-product-kesler-z0sre/" },
      { title: "Become an AI Product Manager (Aaron's newsletter)", url: "https://www.linkedin.com/newsletters/become-an-ai-product-manager-7287598826540916736/" },
      { title: "Aaron Kesler's website", url: "https://www.kesler.io/" },
      { title: "Continuous Discovery Habits by Teresa Torres", url: "https://www.amazon.com/Continuous-Discovery-Habits-Discover-Products/dp/1736633309" },
      { title: "Why AI Should Be Boring with Aaron Kesler (S2)", url: "https://prodfolio.io/podcast/episodes/why-ai-should-be-boring" }
    ],
    keywords: ["Aaron Kesler", "RozieAI", "Rozie Synopsis", "VP of Product", "IC to executive", "first-time executive", "product leadership", "AI product management", "FORGE framework", "Forge framework AI PM", "Become an AI Product Manager", "AI PM", "continuous discovery", "Teresa Torres", "product stickiness", "ChatGPT vs Claude", "boring AI", "ProductCamp", "influence without authority", "delegation", "leadership transition", "AI product loyalty"]
  },
  {
    id: "34",
    slug: "most-pms-arent-doing-product-management",
    title: "Most PMs Aren't Doing Product Management",
    episodeNumber: "Episode 25",
    guest: {
      name: "Steve Johnson",
      role: "Founder & Principal Consultant",
      company: "Product Growth Leaders",
      website: "https://www.productgrowthleaders.com/",
      industry: "Product Management Coaching & Training",
      bio: "Steve Johnson has spent 30+ years coaching product management teams. After starting as a programmer and then working in sales engineering and sales, Steve stumbled into product management and went on to become a VP of Product. He spent 15 years at Pragmatic Marketing before founding Product Growth Leaders, where he flipped training on its head: less talking, more doing. Steve is known for his direct style, his focus on friction as the core of the PM role, and his provocative take that maybe we should be calling ourselves problem managers instead. He's a returning Product Pivot guest, back to map out his QUARTZ framework for the full scope of product management.",
      photo: stevePhoto,
      linkedin: "https://www.linkedin.com/in/sjohnson717/"
    },
    description: "Steve Johnson returns to map the full scope of product management with his QUARTZ framework: why most PMs are doing design and dev instead of the job, and the one superpower AI can't take from them.",
    longDescription: "Steve Johnson, founder of Product Growth Leaders, is back, and this time he's brought a framework. Steve walks Santi and Meagan through QUARTZ, his open model for the entire scope of product management, and makes the case that most PMs today have drifted out of the business role into design, development, and ticket-shepherding without realizing it.\n\nFrom there the conversation gets sharp: what AI and vibe coding are actually doing to the PM role, why customer conversations are the one thing that can't be automated away, and a clear-eyed take on the AI bubble: token economics, the layoffs, and what Steve thinks happens 18 months from now when the real cost of AI lands.\n\nAlong the way: why founders keep losing touch with their own market, the prototyping trap that quietly corrupts your design process, how to become the market expert at your company (even if it takes a little civil disobedience), and the one piece of his own advice Steve secretly ignores.",
    youtubeId: "4hzVeaJR7uw",
    spotifyUrl: "https://open.spotify.com/episode/4W5sYa2a7f3hGItCsYRqUi",
    buzzsproutId: "19312719",
    thumbnail: steveS3E10Thumbnail,
    appleUrl: "https://podcasts.apple.com/us/podcast/the-pm-skill-ai-cant-replace-with-steve-johnson/id1784108281?i=1000771883923",
    topic: "career",
    topics: ["PM Role & Scope", "QUARTZ Framework", "AI and Product Management", "Customer Conversations", "Founder Lessons", "Product Strategy"],
    duration: "72 min",
    publishedAt: "2026-06-09",
    takeaways: [
      "The QUARTZ framework: Steve's model for the full scope of PM, and the parts almost everyone skips",
      "Why most product managers are doing design and development instead of product management, and how to tell if you're one of them",
      "The PM superpower Steve says AI can never replace",
      "What actually happens to the PM role 18 months from now when AI's real costs hit",
      "The prototyping trap that quietly corrupts your design process before it starts",
      "How to become your company's market expert, even when no one gives you permission",
      "The one piece of his own best-practice advice Steve admits he secretly ignores"
    ],
    resourcesMentioned: [
      { title: "Product Growth Leaders", url: "https://www.productgrowthleaders.com/" },
      { title: "The QUARTZ Open Framework", url: "https://www.productgrowthleaders.com/quartz" },
      { title: "Customer Conversations: A Product Manager's Superpower by Steve Johnson", url: "https://www.amazon.com/Customer-Conversations-Product-Managers-Superpower-ebook/dp/B0GNWN9NC8" },
      { title: "Turn Ideas Into Products by Steve Johnson", url: "https://www.amazon.com/Turn-Ideas-Into-Products-Framework-ebook/dp/B0CZMYLRW9" }
    ],
    keywords: ["Steve Johnson", "QUARTZ framework", "Product Growth Leaders", "scope of product management", "what is product management", "AI product management", "customer conversations", "PM role evolution", "vibe coding product managers", "AI bubble", "token costs AI", "product management business role", "persona definition", "breaking into product management", "Turn Ideas into Product"]
  },
  {
    id: "35",
    slug: "how-product-managers-actually-get-hired",
    title: "How Product Managers Actually Get Hired",
    episodeNumber: "Episode 26",
    guest: {
      name: "Andres Tenias",
      role: "Senior Talent Acquisition Specialist",
      company: "Lantern",
      website: "https://lanternstudios.com/",
      industry: "Recruitment & Talent Acquisition",
      bio: "Andres Tenias has spent close to a decade in tech recruitment, fumbling into the field after a commerce degree and never looking back. He's recruited agency-side and worked as an account manager across enterprise and startups, owned his own software development studios, and even earned a software engineering diploma to get closer to the work he hires for. Now a Senior Talent Acquisition Specialist at Lantern, he focuses on data and AI talent and has screened and placed countless product owners and product managers along the way. He's known for a curiosity-driven, ask-a-thousand-questions approach to screening and for the kind of candid hiring advice that helps candidates actually get in the room.",
      photo: andresPhoto,
      linkedin: "https://www.linkedin.com/in/andresteniasgil"
    },
    description: "Recruiter Andres Tenias pulls back the curtain on how product managers actually get hired, from what makes a candidate stand out in a screen to the small moves most people skip that quietly cost them the job.",
    longDescription: "Santi and Meagan sit down with Andres Tenias, a Senior Talent Acquisition Specialist at Lantern who's spent nearly a decade recruiting across tech, to talk about what really happens on the other side of a product manager job search.\n\nAndres breaks down what separates candidates who get hired from the ones who get passed over: how to talk about your projects so a recruiter actually understands your impact, why your LinkedIn often matters more than your portfolio for getting found, and how to work with the search tools recruiters use to surface talent. He gets into where product skills transfer outside of tech, what's changing as the PM role blends business thinking with building, and a reframe that keeps job-search rejection from quietly wrecking your confidence.\n\nIt's a candid, tactical look at hiring from someone who does it every day, full of the kind of advice that feels obvious in hindsight and is easy to miss in the moment.",
    youtubeId: "WGETM3tpDVI",
    spotifyUrl: "https://open.spotify.com/episode/0fWksxn9eeI9iQ92K1vG3y",
    buzzsproutId: "19386337",
    thumbnail: andresThumbnail,
    appleUrl: "https://podcasts.apple.com/us/podcast/how-product-managers-actually-get-hired-with-andres/id1784108281?i=1000773899701",
    topic: "hiring",
    topics: ["Getting Hired", "PM Job Search", "Recruiting & Hiring", "LinkedIn & Findability", "Career Pivots", "Networking"],
    duration: "65 min",
    publishedAt: "2026-06-23",
    takeaways: [
      "What recruiters actually look for when they screen a product manager, and the signal that tells them you're ready to go to market",
      "Why your LinkedIn can do more for your job search than your portfolio, and how to make yourself findable",
      "How to talk about your projects so the impact lands, without the assumptions that lose six candidates out of ten",
      "Where product skills transfer outside of tech, and how to reframe your experience so it actually resonates",
      "The mindset shift that keeps job-search rejection from quietly wrecking your confidence",
      "The simple post-interview follow-up most candidates skip that makes you stand out",
      "A slightly sneaky way to figure out exactly who landed the role you wanted, and what to do with it"
    ],
    resourcesMentioned: [
      { title: "Andres Tenias on LinkedIn", url: "https://www.linkedin.com/in/andresteniasgil" }
    ],
    keywords: ["Andres Tenias", "how product managers get hired", "product manager job search", "tech recruiter advice", "product manager hiring", "product owner recruiting", "LinkedIn for product managers", "how recruiters screen candidates", "product manager portfolio", "getting hired as a product manager", "product management career", "PM interview tips", "transferable product skills", "non-tech product roles", "job search rejection", "networking for product managers", "talent acquisition", "Lantern"]
  },
  {
    id: "36",
    slug: "building-your-way-into-product",
    title: "Building Your Way Into Product",
    episodeNumber: "Episode 27",
    guest: {
      name: "David Nduka",
      role: "Founder & Product Manager",
      company: "Navim AI + Kweeve",
      website: "https://www.navim.ca",
      industry: "Immigration Legal Tech + Fintech",
      photo: davidPhoto,
      bio: "David Nduka wears three hats: mechanical engineer for the Government of Canada by day, product manager for Ottawa fintech startup Kweeve, and founder of Navim AI, an immigration companion he built after his own work permit ordeal — six months of waiting only to learn he'd applied for the wrong permit, leaving him one week of status in Canada. Before Navim, he co-founded NXoCare, a digital health startup helping cancer patients organize their health information, which he prototyped entirely with no-code tools as a non-technical founder. Years of talking to users, sketching Figma mock-ups, and running usability tests taught him he'd been doing product work all along — he just didn't have the title yet.",
      linkedin: "https://www.linkedin.com/in/dnduka/"
    },
    description: "Founder and engineer David Nduka on building his way into product management — from no-code prototypes for cancer patients to an AI immigration companion born from having one week of status left in Canada.",
    longDescription: "Santi and Meagan sit down with David Nduka, a mechanical engineer for the Government of Canada who moonlights as a startup founder and product manager, to talk about what happens when you build your way into product instead of interviewing your way in.\n\nDavid shares how his first startup, NXoCare, taught him he'd been doing product work all along — user interviews, prototypes, usability tests — without ever holding the title, and how a six-month immigration mistake that left him one week of status in Canada became the pain point behind Navim AI. He gets tactical about how beginners can start building today, why distribution deserves attention from day zero instead of day one hundred, and how customer conversations handed him a six-month roadmap and a pivot toward B2B.\n\nThe conversation also covers protecting your weekends while building on the side, voice-first workflows that turn an hour of talking into a PRD, and whether the 'user obsessed' PMs of LinkedIn are actually talking to users.",
    spotifyUrl: "https://open.spotify.com/episode/6L1tbe7G7a989u6K7BAcN7",
    appleUrl: "https://podcasts.apple.com/us/podcast/building-your-way-into-product-with-david-nduka/id1784108281?i=1000775828315",
    youtubeId: "lG0eq0oNZjs",
    buzzsproutId: "19458892",
    thumbnail: davidThumbnail,
    topic: "career",
    topics: ["Pivoting to Product", "Building & Side Projects", "AI Tools & Vibe Coding", "Founder Lessons", "Distribution & Growth", "Customer Conversations"],
    duration: "67 min",
    publishedAt: "2026-07-07",
    takeaways: [
      "How you're probably already doing product work, long before anyone calls you a PM",
      "Where to even start when you've got an idea but no product experience — plus the free thing David jokingly calls a university",
      "Why acting on your ideas just seems to hand you more of them, and why David would tell you \"good luck\" if you ran off with one",
      "How David figures out which ideas are worth chasing and which ones to jot down and quietly forget",
      "The one thing David wishes he'd thought about from day one, before it snuck up on him",
      "How a few honest conversations with users handed David a six-month roadmap — and nudged him toward B2B",
      "How David keeps building on nights and weekends around a full-time job without running himself into the ground"
    ],
    resourcesMentioned: [
      { title: "The Compass by Navim — immigration newsletter", url: "https://the-compass-by-navim.beehiiv.com/" },
      { title: "David's YouTube Playlist", url: "https://www.youtube.com/playlist?list=PLqnn4Jd2OTiOUPYOboUa2N8b-vVIxASs9" },
      { title: "V0 by Vercel", url: "https://v0.dev" }
    ],
    keywords: ["David Nduka", "Navim AI", "immigration legal tech", "building your way into product", "breaking into product management", "no-code product management", "Bubble no-code", "vibe coding", "V0 Vercel", "side projects while working full time", "accidental product manager", "pain point product ideas", "distribution from day zero", "B2C to B2B pivot", "customer conversations", "founder product manager", "NXoCare", "Kweeve", "voice-first AI workflow", "Wispr Flow", "user obsessed product managers"]
  },
  {
    id: "37",
    slug: "vibe-coding-wont-get-you-hired-as-a-pm",
    title: "Vibe Coding Won't Get You Hired as a PM",
    episodeNumber: "Episode 28",
    guest: {
      name: "Aaron Kesler",
      role: "Co-Founder & Head of Product",
      company: "Rozie Synopsis",
      website: "https://www.roziesynopsis.com/",
      industry: "Product Management",
      bio: "Aaron Kesler is Co-Founder and Head of Product at Rozie Synopsis — an AI platform that listens at live events and turns them into evergreen summaries, synopses, and reports for attendees, exhibitors, and organizers. He has over a decade in product management across technical support, healthcare, and enterprise AI, including leading AI product at SnapLogic on two of the company's most successful launches. Aaron writes the Become an AI Product Manager newsletter on LinkedIn, created the FORGE framework for AI PMs, and authored a book for people pivoting into product management. This is his third time on the show — and each visit has come with a new title, from stepping into Rozie, to VP of Product, to, now, officially co-founder.",
      photo: aaronPhoto,
      linkedin: "https://www.linkedin.com/in/aaron-kesler/"
    },
    description: "Aaron Kesler returns — now officially co-founder at Rozie Synopsis — to break down what's actually happening inside PM interview loops right now: the one thing he screens for, the answer that loses him immediately, and the deceptively simple test he uses to cut through AI buzzwords.",
    longDescription: "Santi and Meagan welcome Aaron Kesler back for a third time — now officially co-founder and head of product at Rozie Synopsis — to talk about what's actually happening inside PM interview loops right now. The catalyst was a LinkedIn thread on hiring PMs in the age of AI, and Aaron doesn't hold back: interviewing is brutal on both sides, loops have ballooned to eight interviews in a single day, and yet the thing he's screening for is almost embarrassingly simple.\n\nAaron sets the entire bar at one skill — can you critically think? — and explains why so many candidates still trip over it. 'I vibe coded a solution' is a weak answer; he wants the discovery before it and the evaluation after it. He unpacks the 'explain it to my non-technical mother' test (describe your AI product without saying 'AI,' 'agentic,' or 'RAG'), why five minutes on a company's website is a bare-minimum most candidates skip, and why the widespread 'the market is so bad, why bother' mindset is exactly backwards when the bar is this low.\n\nThe conversation widens into whether PMs need to be vibe coding in 2026 (tinkering yes, shipping to production no), the coming merge between product and engineering as building gets cheaper, and how curiosity — not a job title — is what Aaron is really hiring for. Plus the two things Aaron is personally building right now: a fully agentic ticket-to-code system for his engineering team, and a searchable web app that preserves his wife's handwritten family recipes.",
    youtubeId: "wVVFKKggViA",
    buzzsproutId: "19475740",
    spotifyUrl: "https://open.spotify.com/episode/0xGhOJHopBG7NkRO9PutMn",
    appleUrl: "https://podcasts.apple.com/us/podcast/vibe-coding-wont-get-you-hired-as-a-pm-with-aaron-kesler/id1784108281?i=1000777735391",
    thumbnail: aaronEp28Thumbnail,
    topic: "hiring",
    topics: ["PM Interviewing", "Hiring", "AI Product Management", "Vibe Coding", "Critical Thinking", "Discovery"],
    duration: "77 min",
    publishedAt: "2026-07-21",
    takeaways: [
      "The single skill Aaron sets his entire interview bar at — and why he calls it a shockingly low bar that candidates still keep missing.",
      "The answer about AI work that makes Aaron tune out almost immediately, and what he's actually listening for instead.",
      "The deceptively simple test Aaron uses to find out if you really understand your own product — plus the words you're not allowed to say.",
      "The bare-minimum prep step most candidates skip entirely, and why standing out right now is easier than everyone assumes.",
      "Whether PMs really need to be vibe coding in 2026 — and the line Aaron says it should never cross.",
      "Where Aaron thinks product and engineering are headed as building keeps getting cheaper, and what that means for the engineers who stick around.",
      "The two things Aaron is building on his own time right now — one for work, and one that has nothing to do with it."
    ],
    resourcesMentioned: [
      { title: "Introducing the FORGE Framework", url: "https://www.linkedin.com/pulse/introducing-forge-framework-mental-model-become-ai-product-kesler-z0sre/" },
      { title: "Become an AI Product Manager (Aaron's newsletter)", url: "https://www.linkedin.com/newsletters/become-an-ai-product-manager-7287598826540916736/" },
      { title: "Lovable", url: "https://lovable.dev" }
    ],
    keywords: ["Aaron Kesler", "RozieAI", "Rozie Synopsis", "PM interviewing", "PM interview questions", "product manager interview", "hiring PMs in the age of AI", "AI product management", "vibe coding", "critical thinking", "product discovery", "non-technical mother test", "explain it simply", "case study portfolio", "product trio", "product engineering merge", "shipping to production", "Lovable", "Cursor", "Claude Code", "Base44", "standing out in interviews", "PM job search", "curiosity hiring", "FORGE framework", "co-founder product manager"]
  },
  {
    id: "38",
    slug: "the-title-did-what-skills-couldnt",
    title: "The Title Did What Skills Couldn't",
    episodeNumber: "Episode 29",
    guest: {
      name: "John Fontenot",
      role: "Founder",
      company: "Path2Product",
      website: "https://path2product.io",
      industry: "Product Management Education",
      bio: "John Fontenot is the founder of Path2Product, a Prodfolio partner that helps aspiring PMs get hands-on product experience before they have the job title. Originally from Louisiana and now based in Utah, John discovered product management from the other side of the table — as a software partnerships manager at Intel, trying to convince PMs to change their roadmaps. After roughly a hundred applications and some blunt recruiter feedback, he took a deliberately indirect route in through a SaaS sales role, then UX research, then product. Eight years and a string of senior IC, group PM, and director titles later, he's spent six years building Path2Product on the side. He's currently on sabbatical, writing The Product Market Gap with product marketer Daria Love.",
      photo: johnPhoto,
      linkedin: "https://www.linkedin.com/in/johnrfontenot/"
    },
    description: "John Fontenot went from hundreds of ignored applications to recruiters in his inbox two weeks later — same skills, new title. That gap is why he built Path2Product, and why he says most of what aspiring PMs are told about breaking in is backwards.",
    longDescription: "Santi and Meagan sit down with John Fontenot, founder of Path2Product and a Prodfolio partner, for an episode that starts with a story most aspiring PMs need to hear: John spent two years and hundreds of applications trying to get into product, got nowhere, finally backdoored his way in through sales and UX research — and then, two weeks after changing his title on LinkedIn, recruiters started reaching out unprompted. Same person, same skills, two weeks of experience. That gap became the entire thesis of the company he's spent six years building.\n\nFrom there the conversation gets pointed. John calls out the hypocrisy of a field where most people fell into the job, bumbled through it for a decade, and now demand ten years of experience from everyone else. He explains why certifications keep failing the people who buy them, names the one he thinks aspiring PMs should skip, and lays out what he found when he pressure-tested the assumption that product management is different everywhere — the small set of things that never change no matter the industry or the tooling.\n\nThe episode also widens into working life: why John thinks a PE-backed company will teach you more about being a PM than a hyper-growth VC startup, the hour a day he's quietly taken out of his day job for over a decade, why he tells people to block their own calendars before someone else does, and a hard-won lesson about who you can safely vent to at work. Plus the book he's co-writing on the product market gap, the LinkedIn-page workaround he endorses for people building their own projects, and the line he draws at lying on a resume.",
    thumbnail: johnThumbnail,
    youtubeId: "jumU4gFSxv8",
    buzzsproutId: "19459432",
    spotifyUrl: "https://open.spotify.com/episode/5QyjlwQgu8N6WUVjcwu7C0",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-title-did-what-skills-couldnt-with-john/id1784108281?i=1000779898872",
    topic: "career",
    topics: ["Breaking Into Product", "Experience Gap", "PM Certifications", "Career Growth", "Building on the Side", "Product Market Fit"],
    duration: "68 min",
    publishedAt: "2026-08-04",
    takeaways: [
      "The two-week title change that brought in more recruiters than two years and hundreds of applications ever did — and what John concluded about how hiring actually works.",
      "The backdoor route John took into product after recruiters told him his plan was impossible, and why he still recommends the indirect path.",
      "The certification John thinks aspiring PMs should actively avoid, and the reason he'll say it out loud even at the risk of a defamation suit.",
      "What survived when John pressure-tested the claim that product management is different at every company — the core that never changes, no matter the industry or the tools.",
      "Why John says a PE-backed company will make you a better PM than a hyper-growth VC startup, even though everyone chases the equity.",
      "The hour a day John has taken out of his day job for over a decade, and why he considers it well within ethical bounds.",
      "The LinkedIn workaround John endorses for people building their own projects — and the exact line where it turns into lying."
    ],
    resourcesMentioned: [
      { title: "Path2Product", url: "https://path2product.io" },
      { title: "Email John Fontenot", url: "mailto:john@path2product.io" },
      { title: "Crossing the Chasm by Geoffrey Moore", url: "https://www.amazon.com/Crossing-Chasm-3rd-Disruptive-Mainstream/dp/0062292986" },
      { title: "Inside the Tornado by Geoffrey Moore", url: "https://www.amazon.com/Inside-Tornado-Strategies-Silicon-Hypergrowth/dp/0060745819" },
      { title: "Daria Love on LinkedIn (co-author, The Product Market Gap)", url: "https://www.linkedin.com/in/darialove/" }
    ],
    keywords: ["John Fontenot", "Path2Product", "Path to Product", "breaking into product management", "PM experience gap", "aspiring product manager", "product management certifications", "Product School worth it", "how to become a product manager without experience", "PM portfolio", "product management title", "LinkedIn title change", "career pivot to product", "UX research to product management", "PE backed vs VC backed", "product market gap", "Daria Love", "PM and PMM partnership", "Crossing the Chasm", "Geoffrey Moore", "continuous learning knowledge worker", "calendar blocking", "building a side project", "product first principles"]
  },
  {
    id: "39",
    slug: "how-a-side-hustle-can-fund-your-passion",
    title: "How a Side Hustle Can Fund Your Passion",
    episodeNumber: "Episode 30",
    guest: {
      name: "Jamme Alexander",
      role: "Founder",
      company: "Engineering Women",
      website: "https://www.engineeringwomen.co",
      industry: "Workforce Development & Drone Technology",
      bio: "Jamme Alexander is the founder of Engineering Women, a workforce development and consulting firm headquartered in Mesa, Arizona, building drone, AI, and technical training programs — including an FAA Drone Pilot Academy and NextGen, a youth track led by her 16-year-old daughter. Originally from Council Bluffs, Iowa, Jamme is a serial entrepreneur whose path ran through management at the Mall of America, the art scene, a candle company, and private events before she taught herself commercial drone software development and cross-trained into machine learning, embedded systems, and AR/VR. She still runs Zen Events, the Arizona events and bartending company she built from a single Thumbtack profile — and which has funded Engineering Women for all eight years of its life.",
      photo: jammePhoto,
      linkedin: "https://www.linkedin.com/in/jammealexander/"
    },
    description: "Jamme Alexander got licensed to bartend for eighteen dollars because a stranger on Facebook needed help. Thirty days later she cut out the middleman — and that side hustle became the business that funds her real work: teaching teens to fly certified drones and build with AI.",
    longDescription: "Jamme Alexander got her bartending license for eighteen dollars because a stranger on Facebook was looking for help. Thirty days and a handful of private parties later, she realized she didn't need the middleman, put up a Thumbtack profile, and started booking directly. That became Zen Events. And Zen Events became the thing that pays for Engineering Women — the Mesa, Arizona workforce development company where Jamme teaches youth to fly certified drones and build with AI.\n\nThat's the spine of this episode, and Jamme is blunt about it: one business funds the other, and has for all eight years. Santi and Meagan walk her back through how each piece got built — the candle company whose first vendor event cleared $850 in three hours and taught her to keep her own hands on the product, the word-of-mouth engine that turned one wedding into five, the vendor network she assembled by noticing what every bride kept asking for. None of it is a tech product. All of it runs on product instincts: find the pain point, ship against it, talk to the people paying you.\n\nThe back half is what the money is for. Jamme lays out the FAA pilot course she's building from scratch — nervous system regulation and conflict management sit in the curriculum next to airspace rules — and the youth unemployment number that keeps her building it. Her 16-year-old daughter got certified at 14, has shipped two AI apps, and now leads a youth publication under the program. Plus: the year Jamme skipped Arizona Tech Week because she didn't think she belonged, what happened the year she finally walked in, and the most practical answer we've had on this show to the question every working parent asks.",
    youtubeId: "gUXZmoanA_s",
    buzzsproutId: "19532434",
    spotifyUrl: "https://open.spotify.com/episode/37kQCLtgugtDxiX7wS9F1j",
    appleUrl: "https://podcasts.apple.com/us/podcast/how-a-side-hustle-can-fund-your-passion-with/id1784108281?i=1000782766533",
    thumbnail: jammeThumbnail,
    topic: "career",
    topics: ["Entrepreneurship", "Side Hustles", "Product Mindset Outside Tech", "Women in Tech", "Building for the Next Generation", "Working Parenthood"],
    duration: "40 min",
    publishedAt: "2026-08-11",
    takeaways: [
      "An eighteen-dollar license and a stranger on Facebook started the whole thing. Thirty days in, Jamme saw she didn't need the middleman and went direct.",
      "Two businesses, on purpose: Zen Events pays the bills so Engineering Women can take risks. Jamme says neither would be standing without the other, and it's been that way for eight years.",
      "The candle company's first vendor event cleared $850 in three hours. That night taught her to keep her hands on the product and get in front of the people buying it.",
      "You don't need a tech product to build product instincts. Events, candles, and drone services all came from the same move: find the pain point, ship against it, then ask the customer what's still missing.",
      "The FAA pilot course Jamme is writing from scratch puts nervous system regulation and conflict management next to airspace rules — because a nervous pilot flies like one.",
      "The youth unemployment number that keeps her building, and what she's putting in front of her own kids because of it: a daughter certified at 14, two AI apps shipped, now running a youth publication.",
      "She skipped Arizona Tech Week one year because she didn't think she belonged. The year she finally walked in, the room went quiet — and that reaction told her more about her idea than any pitch meeting.",
      "Her number one networking tip, and the two days she took back for herself with a single sentence to her kids."
    ],
    resourcesMentioned: [
      { title: "Engineering Women", url: "https://www.engineeringwomen.co" },
      { title: "FAA Drone Pilot Academy (Engineering Women)", url: "https://www.engineeringwomen.co/academy" },
      { title: "Zen Events", url: "https://zeneventservices.com/" },
      { title: "Jamme Alexander on LinkedIn", url: "https://www.linkedin.com/in/jammealexander/" }
    ],
    keywords: ["Jamme Alexander", "Engineering Women", "side hustle funding a startup", "serial entrepreneur", "women in tech Arizona", "Mesa Arizona tech", "Arizona Tech Week", "FAA Part 107 drone pilot", "drone pilot certification", "commercial drone software", "workforce development", "youth workforce development", "women in STEM", "product mindset without a tech product", "product management outside tech", "entrepreneurship for moms", "working parent balance", "networking tips", "intentional learning", "Zen Events", "NextGen youth program", "AI workforce training", "self-taught technologist"]
  }
];

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find(ep => ep.slug === slug);
}

export function getRelatedEpisodes(currentSlug: string, limit: number = 2): Episode[] {
  const current = episodes.find(ep => ep.slug === currentSlug);
  const others = episodes.filter(ep => ep.slug !== currentSlug);
  if (!current) return others.slice(0, limit);
  // Surface other episodes with the same guest first, then fill the rest.
  const sameGuest = others.filter(ep => ep.guest.name === current.guest.name);
  const rest = others.filter(ep => ep.guest.name !== current.guest.name);
  return [...sameGuest, ...rest].slice(0, limit);
}
