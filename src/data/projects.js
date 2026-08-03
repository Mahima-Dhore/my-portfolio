export const projects = [
  {
    title: 'Outlier-Stats',
    tagline: 'Real-time sports statistics platform',
    context: 'Sorted · Production',
    highlight: 'Multi-module app with live data sync',
    description:
      'A multi-module statistics platform with season-based views and content that updates live. I built the GraphQL data layer and the performance strategy behind it.',
    points: [
      'Implemented an Apollo Client GraphQL layer backed by Firebase real-time sync, so scores and standings update in place without a page refresh.',
      'Tuned Apollo cache policies to stop redundant network round-trips when users switch between seasons and modules.',
      'Cut time-to-interactive with route-based code splitting and lazy loading across the module boundaries.',
    ],
    challenge:
      'Keeping the UI responsive while several modules subscribed to the same live dataset. Solved with normalised Apollo cache reads and careful subscription scoping rather than refetching per view.',
    tech: ['React 19', 'GraphQL', 'Apollo Client', 'Firebase', 'Zustand', 'React Router', 'Vite', 'Auth (Okta/Auth0)'],
    links: {},
  },
  {
    title: 'Outlier-Brackets',
    tagline: 'Interactive tournament bracket engine',
    context: 'Sorted · Production',
    highlight: '500+ entries at launch, architected for 10K+',
    description:
      'A fully interactive bracket module where users pick winners through multiple stages and each selection cascades into later rounds. Shipped to production and scaled through a peak traffic event.',
    points: [
      'Built the progression logic that maps a winner from one round into the correct slot of the next, driven entirely by a structured data model rather than hardcoded positions.',
      'Modelled every visual state (active, highlighted, locked, disabled) as data, which kept the component extensible as new tournament formats were added.',
      'Added shareable bracket export with html2canvas, and tracked real-user Core Web Vitals after release.',
    ],
    challenge:
      'A bracket is a tree with strict dependency rules, so changing an early pick has to invalidate everything downstream. Deriving each round from the previous one, instead of storing duplicated state per round, removed a whole class of desync bugs.',
    tech: ['React', 'Redux Toolkit', 'React Query', 'Tailwind CSS', 'html2canvas', 'web-vitals'],
    links: {},
  },
  {
    title: 'PAMIR',
    tagline: 'Enterprise incident & spare-parts platform',
    context: 'Capgemini · Enterprise',
    highlight: 'Used daily by support and service teams',
    description:
      'Front Office and Back Office interfaces for an enterprise-scale incident management and spare-parts tracking system serving a large automotive client.',
    points: [
      'Built responsive UI for ticket creation, incident handling, multi-criteria search and reporting workflows.',
      'Integrated REST endpoints with proper error and loading states, coordinating contracts directly with backend teams.',
      'Improved cross-team tracking and reporting, and documented designs in TDDs.',
    ],
    tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'JSP', 'Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Jira'],
    links: {},
  },
  {
    title: 'Plantify',
    tagline: 'Plant e-commerce storefront',
    context: 'Freelance',
    highlight: 'end-to-end ownership, from layout to API integration',
    description:
      'A plant e-commerce and information site built independently as a freelance engagement, and my first end-to-end ownership of a product, from layout to API integration.',
    points: [
      'Designed and built the responsive React UI, product listing pages and interactive components from scratch.',
      'Integrated REST APIs and handled the data model for catalogue and content pages.',
    ],
    tech: ['React.js', 'JavaScript', 'CSS3', 'REST APIs'],
    links: {},
  },
]
