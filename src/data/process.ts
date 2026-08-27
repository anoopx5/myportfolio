import { ProcessStep } from "../types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, audience and project goals.",
    details: [
      "Brand & audience discovery",
      "Goal & feature definition",
      "Content & structure planning"
    ]
  },
  {
    number: "02",
    title: "Design",
    description: "Create the visual direction, structure and user experience.",
    details: [
      "Bespoke visual identity",
      "Wireframing & user journeys",
      "Responsive layout mockups"
    ]
  },
  {
    number: "03",
    title: "Develop",
    description: "Build the responsive website using modern frontend technologies.",
    details: [
      "Clean, modern semantic code",
      "Interactive components & motion",
      "Speed & performance tuning"
    ]
  },
  {
    number: "04",
    title: "Launch",
    description: "Test, optimize and deploy the website.",
    details: [
      "Cross-browser & device testing",
      "SEO, meta & analytics setup",
      "Fast deployment on Netlify"
    ]
  }
];
