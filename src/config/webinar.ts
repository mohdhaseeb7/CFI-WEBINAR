export const WEBINAR_CONFIG = {
  // Title/meta of the webinar
  title: "A Career in Tech Is More Possible Than You Think",
  meta: {
    title: "A Career in Tech Is More Possible Than You Think | Free Live Webinar",
    description: "Join our free, live 1-hour session to see how modern websites and apps are built, and discover your path into tech with zero prior coding experience.",
  },
  
  // Hero section config
  hero: {
    stickerText: "1-Hour Free Session",
    headlineFirst: "A Career in Tech Is ",
    headlineGradient: "More Possible",
    headlineLast: " Than You Think",
    description: "Join a free, live 1-hour session to see how modern websites and apps actually get built and where you could fit in, no matter your background or experience level.",
    ctaText: "Reserve My Free Seat",
    trustText: "Trusted by 12,000+ past learners",
    checklist: [
      "100% Free Webinar",
      "Beginner Friendly",
      "No Code Experience Needed",
    ],
  },
  
  // Webinar details (dates, platform, etc.)
  details: {
    date: "Sunday, 4 July",
    time: "6:00 PM – 7:00 PM (IST)",
    timezone: "IST",
    location: "Live Interactive Broadcast",
    locationDetail: "Access link sent upon registration",
    duration: "1 hour",
    countdownDateStr: "2026-07-04T18:00:00", // ISO date string for countdown timer
  },
  
  // Instructor details
  instructor: {
    sectionTitle: "Meet Our Engineer",
    sectionSubtitle: "Learn directly from an experienced veteran who knows how to explain complex things simply.",
    name: "Omer Ahmed Quadri",
    role: "Full Stack Engineer & Mentor",
    photoUrl: "/instructor-photo.jpg",
    badge: "Live Instructor",
    bio: "Omer has spent years working as a full stack developer, and just as many years teaching beginners how to get started. They've sat where you're sitting: unsure if tech was \"for them,\" uncertain where to begin. That experience shapes how they teach now, with patience, plain language, and a genuine belief that anyone can learn this if they're given a clear starting point.",
    credentials: [
      { icon: "Briefcase", text: "5+ years professional Full Stack experience" },
      { icon: "Users", text: "Taught and mentored 1,000+ beginner coders" },
      { icon: "Award", text: "Govt. of Telangana Accredited Course Architect" },
    ],
    ctaText: "Reserve My Seat",
    ctaSubtext: "Join Omer for this live interactive Q&A",
  },
  
  // Why join section config
  whyJoin: {
    title: "Why You Should Join Our Webinar",
    introLeading: "A lot of people rule themselves out of tech before they even try.",
    introBody: "They assume it's only for computer science graduates. That it's too hard, too late, or too technical for someone like them. We don't think that's true and we built this webinar to show why.",
    quote: "In one hour, you'll get a clear, honest look at what Full Stack Development actually involves, how the pieces fit together, and what a path into tech could realistically look like for you. No gatekeeping, just a starting point.",
    badge: "Designed for curious beginners",
    ctaText: "Claim My Spot",
  },
  
  // Who should attend & what to learn
  whoAndWhat: {
    title: "Is This For You & What Will You Learn?",
    subtitle: "Let's look at who should join this session and the practical skills you will walk away with.",
    audience: {
      tag: "Target Audience",
      title: "Who Should Attend",
      description: "If you're curious about tech and haven't known where to start, this is for you.",
      list: [
        "College students exploring career options",
        "Recent graduates figuring out what's next",
        "Career switchers considering a move into tech",
        "Working professionals curious about upskilling",
        "Complete beginners with zero coding experience",
      ],
      ctaText: "That's me — Save my spot",
    },
    outcomes: {
      tag: "Key Outcomes",
      title: "What You'll Learn",
      description: "By the end of this session, you will gain a strong foundation:",
      list: [
        "What Full Stack Development actually means",
        "The difference between frontend and backend",
        "How modern websites and apps get built",
        "Career paths and roles available in tech",
        "A step-by-step beginner roadmap",
        "Live code coming together, explained plainly",
        "Resources to keep learning after the session",
      ],
      ctaText: "I want to learn this",
    },
  },
  
  // Testimonials section config
  testimonials: {
    title: "What People Are Saying",
    ctaText: "Join 12,000+ Past Learners",
    list: [
      {
        quote: "I always assumed coding was for people who'd been doing it since high school. This webinar was the first time someone explained it in a way that made sense, and made me think I could actually try.",
        name: "Ananya",
        role: "College Student",
        initials: "AN",
        avatarBg: "from-violet-500 to-purple-600",
      },
      {
        quote: "I was 8 years into a marketing career and curious about switching into tech, but had no idea where to even start. This gave me a real roadmap instead of vague encouragement.",
        name: "Rohit",
        role: "Career Switcher",
        initials: "RH",
        avatarBg: "from-fuchsia-500 to-pink-600",
      },
      {
        quote: "As someone who works in IT support, I'd always wanted to understand development but felt intimidated. This broke it down in a way I could actually follow, live coding included.",
        name: "Priya",
        role: "Working Professional",
        initials: "PR",
        avatarBg: "from-blue-500 to-indigo-600",
      },
    ],
  },

  // Webinar Agenda
  agenda: [
    {
      time: "6:00 PM",
      title: "Welcome & What We'll Cover",
      topics: ["Quick intro to the session", "What to expect", "Why this webinar exists"],
    },
    {
      time: "6:05 PM",
      title: "What Is Full Stack Development?",
      topics: ["Breaking down the term", "Common myths about coding", "Why it's more approachable than it seems"],
    },
    {
      time: "6:15 PM",
      title: "How Modern Apps Are Built",
      topics: ["Frontend vs backend", "How the two talk to each other", "A look at real-world examples"],
    },
    {
      time: "6:30 PM",
      title: "Live Coding Demonstration",
      topics: ["Watching real code come together", "Explained step by step", "No experience needed to follow along"],
    },
    {
      time: "6:45 PM",
      title: "Career Paths in Tech",
      topics: ["Roles beyond just developer", "Different routes into the field", "What skills matter most"],
    },
    {
      time: "6:52 PM",
      title: "Your Beginner Roadmap",
      topics: ["A clear next-steps plan", "What to learn first", "How to keep momentum"],
    },
    {
      time: "6:55 PM",
      title: "Live Q&A",
      topics: ["Bring your questions", "Get personalized guidance", "A learning roadmap to take with you", "Wrap-up and resources"],
    },
  ],
};

// Legacy exports to maintain backward compatibility
export const WEBINAR_DATE = new Date(WEBINAR_CONFIG.details.countdownDateStr);
export const WEBINAR_DURATION_LABEL = WEBINAR_CONFIG.details.duration;
export const WEBINAR_AGENDA = WEBINAR_CONFIG.agenda;
