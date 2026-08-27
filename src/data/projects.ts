import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "agentily",
    number: "01",
    name: "Agentily",
    category: "Real Estate",
    filterCategory: "Real Estate",
    description: "A premium real estate website designed to create trust, communicate property services and give the brand a modern professional presence.",
    url: "https://agentily.netlify.app/",
    image: "/projects/agentily.png",
    highlights: [
      "Trust-focused property presentation",
      "Interactive listing exploration",
      "Mobile-first responsive architecture",
      "High-conversion inquiry funnel",
      "Modern editorial aesthetics",
      "Fast lightweight performance"
    ],
    accentColor: "#D9937D",
    accentGlow: "rgba(217, 147, 125, 0.25)",
    badgeColor: "border-[#D9937D]/30 text-[#161616] bg-[#D9937D]/10",
    overview: {
      clientType: "Premium Real Estate & Advisory Agency",
      objective: "Build a trustworthy, high-end digital presence that positions the agency as a premier partner for luxury property buyers, sellers, and investors.",
      deliverables: [
        "Editorial property showcase and catalog",
        "Direct lead capture and consultation booking",
        "Amenity, location, and property filters",
        "Responsive, performance-optimized layout"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Netlify"]
    },
    previewVisual: {
      badge: "Real Estate & Property Advisory",
      headline: "Find a place worth calling yours.",
      subheadline: "Exclusive residential portfolios, penthouses, and prime commercial real estate with bespoke advisory.",
      ctaText: "Explore Properties",
      stats: [
        { label: "Prime Estates", value: "180+" },
        { label: "Client Advisory", value: "100% Direct" },
        { label: "Market Accuracy", value: "Real-Time" }
      ],
      features: [
        { title: "Bespoke Advisory", subtitle: "Tailored acquisition strategy", icon: "Building2" },
        { title: "Verified Portfolios", subtitle: "Curated architectural properties", icon: "ShieldCheck" },
        { title: "Market Valuation", subtitle: "Data-backed intelligence", icon: "TrendingUp" }
      ],
      imageGradient: "from-stone-900 via-neutral-900 to-stone-950"
    }
  },
  {
    id: "dentflare",
    number: "02",
    name: "DentFlare",
    category: "Dental Clinic",
    filterCategory: "Healthcare",
    description: "A clean healthcare website designed around trust, clarity and appointment-focused user experience.",
    url: "https://dentflare.netlify.app/",
    image: "/projects/dentflare.png",
    highlights: [
      "Patient-first approachable UX",
      "Direct appointment booking flow",
      "Clean clinical visual language",
      "Procedure & treatment breakdown",
      "Fully responsive across all devices",
      "Trust-building credentials"
    ],
    accentColor: "#38B2AC",
    accentGlow: "rgba(56, 178, 172, 0.2)",
    badgeColor: "border-teal-500/30 text-teal-800 bg-teal-50",
    overview: {
      clientType: "Modern Dental Clinic & Aesthetics Practice",
      objective: "Provide an approachable, calming digital experience that eliminates treatment anxiety and streamlines appointment scheduling.",
      deliverables: [
        "Treatment catalog & transparent care guide",
        "Frictionless online consultation booking",
        "Dentist credential and hygiene showcase",
        "Accessible, high-contrast mobile design"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Netlify"]
    },
    previewVisual: {
      badge: "Modern Dental Studio",
      headline: "A healthier smile starts with better care.",
      subheadline: "Thoughtful dentistry, advanced technology, and a calmer experience designed around you.",
      ctaText: "Book Appointment",
      stats: [
        { label: "Patient Rating", value: "4.9 / 5" },
        { label: "Smiles Transformed", value: "2,500+" },
        { label: "Wait Times", value: "Near Zero" }
      ],
      features: [
        { title: "Smile Design", subtitle: "Veneers, whitening & alignment", icon: "Sparkles" },
        { title: "Precision Care", subtitle: "State-of-the-art implants", icon: "Activity" },
        { title: "Family Care", subtitle: "Preventative pediatric & adult health", icon: "HeartHandshake" }
      ],
      imageGradient: "from-slate-900 via-teal-950/70 to-slate-950"
    }
  },
  {
    id: "msislamicstore",
    number: "03",
    name: "MS Islamic Store",
    category: "Ecommerce",
    filterCategory: "Ecommerce",
    description: "A modern ecommerce experience focused on product presentation, category discovery and a refined Islamic fashion brand identity.",
    url: "https://msislamicstore.netlify.app/",
    image: "/projects/ms-islamic-store.png",
    highlights: [
      "Refined fashion brand identity",
      "Category discovery & filtering",
      "Product presentation grids",
      "Frictionless shopping flow",
      "Mobile-optimized catalog",
      "High visual appeal"
    ],
    accentColor: "#10B981",
    accentGlow: "rgba(16, 185, 129, 0.2)",
    badgeColor: "border-emerald-500/30 text-emerald-800 bg-emerald-50",
    overview: {
      clientType: "Boutique Islamic Fashion & Lifestyle Brand",
      objective: "Create a modern, elegant ecommerce storefront that celebrates modest fashion with high-definition product visual storytelling.",
      deliverables: [
        "Curated apparel & prayer wear catalogs",
        "Intuitive category navigation (Abayas, Thobes, Gifts)",
        "Responsive shopping bag and quick-view mockups",
        "Mobile-first fast browsing engine"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Ecommerce UX", "Netlify"]
    },
    previewVisual: {
      badge: "Autumn & Winter 2026 Collection",
      headline: "Elegance in Faith",
      subheadline: "Discover beautiful Islamic essentials designed for prayer, gifting, and everyday faith.",
      ctaText: "Shop Collection",
      stats: [
        { label: "Happy Customers", value: "10,000+" },
        { label: "Authentic Pieces", value: "260+" },
        { label: "Global Stores", value: "4 Locations" }
      ],
      features: [
        { title: "Artisan Fabrics", subtitle: "Breathable linen & silk blends", icon: "ShoppingBag" },
        { title: "Bespoke Gifts", subtitle: "Custom engraved essentials", icon: "Gift" },
        { title: "Fluid Checkout", subtitle: "Instant cart & navigation flow", icon: "CreditCard" }
      ],
      imageGradient: "from-slate-900 via-emerald-950/60 to-stone-950"
    }
  },
  {
    id: "saffronamber",
    number: "04",
    name: "Saffron & Ember",
    category: "Restaurant / Fine Dining",
    filterCategory: "Restaurant",
    description: "A visually rich restaurant website combining premium typography, food storytelling and reservation-focused interaction.",
    url: "https://saffronamber.netlify.app/",
    image: "/projects/saffron-and-ember.png",
    highlights: [
      "Cinematic gastronomy storytelling",
      "Tasting menu presentation",
      "Table reservation CTA pipeline",
      "Atmospheric typography & palette",
      "Private dining inquiries",
      "Sensory culinary visuals"
    ],
    accentColor: "#F59E0B",
    accentGlow: "rgba(245, 158, 11, 0.2)",
    badgeColor: "border-amber-500/30 text-amber-800 bg-amber-50",
    overview: {
      clientType: "Fine Dining & Artisanal Woodfire Grill",
      objective: "Capture the sensory allure and culinary heritage of the restaurant online to drive table bookings and private event reservations.",
      deliverables: [
        "Rich menu presentation with dietary markers",
        "Atmospheric culinary storytelling layout",
        "Interactive table booking flow",
        "Chef table & private dining information"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Gastronomy UI", "Netlify"]
    },
    previewVisual: {
      badge: "Modern Indian & Kerala Heritage",
      headline: "Where Tradition Meets the Flame",
      subheadline: "An elevated Indian dining experience inspired by bold spices, timeless recipes, and the warmth of Kerala.",
      ctaText: "Reserve a Table",
      stats: [
        { label: "Tasting Menus", value: "Curated 7 & 9 Courses" },
        { label: "Wine Pairings", value: "Sommelier Selected" },
        { label: "Atmosphere", value: "Intimate & Warm" }
      ],
      features: [
        { title: "Open Hearth Grill", subtitle: "Smoked heritage ingredients", icon: "Flame" },
        { title: "Sommelier Pairings", subtitle: "Rare vintages & craft drinks", icon: "Wine" },
        { title: "Private Dining", subtitle: "Exclusive chef-table sessions", icon: "Utensils" }
      ],
      imageGradient: "from-stone-950 via-amber-950/60 to-stone-900"
    }
  },
  {
    id: "velora",
    number: "05",
    name: "Velora Beauty Lounge",
    category: "Beauty / Salon",
    filterCategory: "Beauty",
    description: "A sophisticated beauty salon website designed around premium branding, service presentation and appointment conversion.",
    url: "https://velorabeautysaloon.netlify.app/",
    image: "/projects/velora.png",
    highlights: [
      "High-end beauty salon aesthetic",
      "Service & treatment menu hierarchy",
      "Appointment conversion funnel",
      "Editorial typography treatment",
      "Stylist & specialist portfolio",
      "Polished luxury tone"
    ],
    accentColor: "#E11D48",
    accentGlow: "rgba(225, 29, 72, 0.2)",
    badgeColor: "border-rose-500/30 text-rose-800 bg-rose-50",
    overview: {
      clientType: "Luxury Salon, Spa & Hair Studio",
      objective: "Establish a prestigious, high-touch digital presence that reflects salon artistry and simplifies specialist appointments.",
      deliverables: [
        "Full salon treatment menu & pricing guide",
        "Specialist & aesthetician portfolio showcase",
        "Online appointment booking interface",
        "Mobile-first high-fashion design"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Luxe UI", "Netlify"]
    },
    previewVisual: {
      badge: "Beverly Hills Premier Beauty Sanctuary",
      headline: "Where Beauty Meets Confidence.",
      subheadline: "Discover personalized beauty treatments designed to make you look beautiful, feel confident, and leave feeling renewed.",
      ctaText: "Book an Appointment",
      stats: [
        { label: "Client Satisfaction", value: "99.4%" },
        { label: "Signature Treatments", value: "14,000+" },
        { label: "Master Stylists", value: "18 Specialists" }
      ],
      features: [
        { title: "Hair Couture", subtitle: "Balayage, styling & treatments", icon: "Scissors" },
        { title: "Skin Therapies", subtitle: "Hydrafacials & anti-aging", icon: "Sparkles" },
        { title: "Bridal Suites", subtitle: "VIP bespoke bridal packages", icon: "Crown" }
      ],
      imageGradient: "from-stone-950 via-rose-950/50 to-neutral-950"
    }
  }
];


