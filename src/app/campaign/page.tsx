import {
  MarketingNav,
  HeroSection,
  StatsBar,
  LogoBar,
  FeaturesSection,
  CaseStudySection,
  PricingSection,
  CTABanner,
  MarketingFooter,
} from "@/components/fospha/marketing"

import {
  TestimonialSection,
  FAQSection,
  ComparisonTable,
  TimelineSection,
  VideoSection,
  TeamSection,
  AwardStrip,
} from "@/components/fospha/marketing-2"

export default function CampaignPage() {
  return (
    <div style={{ background: "#FFFFFF" }}>

      <MarketingNav />

      <HeroSection
        eyebrow="Marketing Attribution"
        headline="Know exactly what's driving your revenue"
        subheadline="Fospha gives you accurate, always-on measurement across every paid channel — so you can spend with confidence and grow faster."
        primaryCta={{ label: "Get a demo", href: "#" }}
        secondaryCta={{ label: "See how it works", href: "#" }}
        badge="Now with AI-powered forecasting"
      />

      <StatsBar
        background="dark"
        stats={[
          { value: "£2.4B+", label: "Ad spend measured"  },
          { value: "98%",    label: "Signal coverage"     },
          { value: "3.2×",   label: "Average ROAS uplift" },
          { value: "200+",   label: "Brands trust Fospha" },
        ]}
      />

      <AwardStrip
        eyebrow="Recognition"
        background="cream"
        awards={[
          { title: "Best Attribution Platform", body: "Marketing Tech Awards",      year: "2025", category: "Winner"    },
          { title: "Top Rated Tool",            body: "G2 Enterprise Analytics",    year: "2025", category: "Leader"    },
          { title: "Fastest Growing",           body: "Deloitte Technology Fast 50", year: "2024", category: "Top 50"   },
          { title: "Best ROI",                  body: "G2 Winter Report",            year: "2025", category: "Leader"   },
        ]}
      />

      <LogoBar
        eyebrow="Trusted by the world's fastest-growing commerce brands"
        logos={[
          { name: "ASOS" },
          { name: "Gymshark" },
          { name: "MADE.COM" },
          { name: "Charlotte Tilbury" },
          { name: "Huel" },
          { name: "Represent" },
        ]}
      />

      <TimelineSection
        eyebrow="How it works"
        headline="Up and running in days, not months"
        subheadline="No complex engineering required. Connect your data, configure your channels, and start seeing results."
        background="white"
        steps={[
          { title: "Connect your data",      description: "Link your ad platforms, analytics, and CRM in minutes using our pre-built integrations."   },
          { title: "Configure your channels",description: "Tell Fospha which channels and campaigns to measure. We handle the rest automatically."      },
          { title: "See the full picture",   description: "Get accurate attribution across every touchpoint — from first click to final conversion."    },
          { title: "Optimise and grow",      description: "Use Fospha's insights to reallocate budget, improve ROAS, and scale what's actually working." },
        ]}
      />

      <FeaturesSection
        eyebrow="Why Fospha"
        headline="The attribution platform built for modern commerce"
        subheadline="Stop flying blind. Get the full picture of what's working across every channel, every day."
        background="white"
        columns={3}
        features={[
          { eyebrow: "Core",  title: "Always-on attribution",    description: "Continuously measure the true impact of every channel — paid social, search, display, TV, and more."          },
          { eyebrow: "Halo",  title: "Cross-channel halo effects",description: "Understand how your channels work together. See which campaigns lift performance across your entire mix."    },
          { eyebrow: "Glow",  title: "Creative intelligence",    description: "Know which creatives are actually driving revenue, not just clicks. Optimise spend toward what converts."     },
          { eyebrow: "Beam",  title: "Incrementality testing",   description: "Run controlled experiments to measure the true incremental impact of campaigns without relying on last-click." },
          { eyebrow: "Prism", title: "Unified reporting",        description: "One dashboard for every channel, every metric, every team. Spend less time in spreadsheets."                  },
          { eyebrow: "Spark", title: "AI-powered intelligence", description: "Intelligence that sharpens insight and saves time — automated recommendations that turn measurement into action faster." },
        ]}
      />

      <VideoSection
        eyebrow="See it in action"
        headline="Watch how Fospha works"
        subheadline="A 3-minute walkthrough of the platform from setup to insight."
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        background="dark"
      />

      <TestimonialSection
        eyebrow="What our customers say"
        background="white"
        testimonials={[
          {
            quote: "Fospha gave us visibility we simply didn't have before. We could finally see which channels were genuinely driving revenue — and it completely changed how we allocate budget.",
            name: "Sarah Mitchell",
            title: "VP Marketing",
            company: "Gymshark",
          },
          {
            quote: "We discovered that our upper-funnel activity was driving far more value than last-click ever showed us. Within 90 days we'd reallocated £400K of budget and seen a meaningful ROAS improvement.",
            name: "James Thornton",
            title: "Head of Performance",
            company: "Charlotte Tilbury",
          },
          {
            quote: "The ROI on Fospha paid for itself in weeks. The platform is genuinely easy to use and the team's support during onboarding was exceptional.",
            name: "Priya Sharma",
            title: "Growth Director",
            company: "Huel",
          },
        ]}
      />

      <CaseStudySection
        eyebrow="Customer Stories"
        headline="See what Fospha does for brands like yours"
        cases={[
          { brand: "Gymshark",          category: "Fitness & Apparel", result: "3.8×",  resultLabel: "ROAS improvement",                    quote: "Fospha gave us visibility we simply didn't have before.",                              background: "#E3EEFF" },
          { brand: "Charlotte Tilbury", category: "Beauty",            result: "+42%",  resultLabel: "Revenue from previously dark channels", quote: "We discovered upper-funnel activity was driving far more value than last-click showed.", background: "#FFF3DA" },
          { brand: "Huel",              category: "Health & Nutrition", result: "£1.2M", resultLabel: "Additional revenue in first 90 days",   quote: "The ROI on Fospha paid for itself in weeks.",                                         background: "#F9DCC4" },
        ]}
      />

      <ComparisonTable
        eyebrow="Compare plans"
        headline="Find the right plan for your brand"
        tierNames={["Starter", "Growth", "Enterprise"]}
        highlightedTier={1}
        rows={[
          { feature: "Ad spend measured",      category: "Measurement", tiers: ["Up to £5M",    "Up to £25M",  "Unlimited"]    },
          { feature: "Paid channels",          tiers: ["3 channels",   "Unlimited",    "Unlimited"]    },
          { feature: "Attribution models",     tiers: ["1 model",      "3 models",     "Custom"]        },
          { feature: "Data freshness",         category: "Reporting",   tiers: ["Daily",        "Real-time",    "Real-time"]     },
          { feature: "Custom dashboards",      tiers: [false,          true,           true]            },
          { feature: "API access",             tiers: [false,          true,           true]            },
          { feature: "Incrementality testing", category: "Advanced",    tiers: [false,          true,           true]            },
          { feature: "Media mix modelling",    tiers: [false,          false,          true]            },
          { feature: "White-label reports",    tiers: [false,          false,          true]            },
          { feature: "Support",                category: "Support",     tiers: ["Email",        "Dedicated CSM","On-site"]       },
          { feature: "SLA guarantee",          tiers: [false,          false,          true]            },
        ]}
      />

      <PricingSection
        eyebrow="Pricing"
        headline="Simple, transparent pricing"
        tiers={[
          {
            name: "Starter", price: "£999", period: "/ month",
            description: "For growing brands ready to move beyond last-click attribution.",
            cta: "Start free trial",
            features: ["Up to £5M ad spend measured", "3 paid channels", "Daily reporting", "Standard integrations", "Email support"],
          },
          {
            name: "Growth", price: "£2,499", period: "/ month",
            description: "For scaling brands that need full-funnel visibility across all channels.",
            cta: "Get a demo", highlighted: true,
            features: ["Up to £25M ad spend measured", "Unlimited channels", "Real-time reporting", "Advanced integrations", "Dedicated CSM", "Incrementality testing"],
          },
          {
            name: "Enterprise",
            description: "For large brands and agencies with complex measurement needs.",
            cta: "Contact sales",
            features: ["Unlimited ad spend", "Custom data models", "White-label reporting", "SLA guarantees", "On-site onboarding", "Custom integrations"],
          },
        ]}
      />

      <TeamSection
        eyebrow="The team"
        headline="Built by people who've been in your shoes"
        background="white"
        members={[
          { name: "Sam Carter",      title: "CEO",  bio: "Previously VP Marketing at ASOS. Spent 10 years on the brand side before building Fospha." },
          { name: "Dom Devlin",      title: "CPO",  bio: "Product leader with 12 years building analytics tools for e-commerce and retail brands." },
          { name: "Tom Sheepshanks", title: "CRO",  bio: "Helped scale three SaaS businesses from seed to Series C. Passionate about data-driven growth." },
          { name: "Keith Robinson",  title: "CTO",  bio: "Former engineering lead at Google. Built measurement infrastructure at scale before Fospha." },
        ]}
      />

      <FAQSection
        eyebrow="FAQ"
        headline="Frequently asked questions"
        background="white"
        columns={2}
        items={[
          { question: "How long does it take to get set up?",          answer: "Most customers are fully up and running within 3–5 business days. Our onboarding team will guide you through every step."                                                        },
          { question: "Which ad platforms does Fospha integrate with?", answer: "We integrate with all major platforms including Meta, Google, TikTok, Pinterest, Snapchat, YouTube, and more. We also support custom integrations via our API."                    },
          { question: "How is Fospha different from GA4 or MTA?",       answer: "Fospha uses a combination of data-driven attribution, incrementality testing, and media mix modelling to give you the most accurate picture of what's actually driving revenue."    },
          { question: "Do I need engineering resource to get started?", answer: "No. Our integrations are no-code and take minutes to configure. We don't require any pixel implementation or complex technical setup."                                              },
          { question: "Can I use Fospha alongside my existing tools?",  answer: "Yes. Fospha is designed to complement your existing stack. It connects to your analytics, CRM, and ad platforms without replacing them."                                            },
          { question: "What does the pricing include?",                 answer: "All plans include onboarding support, access to the Fospha platform, and regular reporting. Higher tiers include a dedicated CSM and more advanced features."                       },
        ]}
      />

      <CTABanner
        headline="Ready to see the full picture?"
        subheadline="Join 200+ brands using Fospha to measure what matters and grow faster."
        primaryCta={{ label: "Get a demo", href: "#" }}
        secondaryCta={{ label: "Talk to sales", href: "#" }}
      />

      <MarketingFooter />

    </div>
  )
}
