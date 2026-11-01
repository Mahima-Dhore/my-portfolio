import { FaReact, FaJs, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiApollographql,
  SiFirebase,
  SiVite,
  SiJest,
} from 'react-icons/si'

export const featuredSkills = [
  { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'Redux Toolkit', icon: SiRedux, color: 'text-purple-400' },
  { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-400' },
  { name: 'Apollo Client', icon: SiApollographql, color: 'text-indigo-300' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-amber-400' },
  { name: 'Vite', icon: SiVite, color: 'text-violet-400' },
  { name: 'Jest', icon: SiJest, color: 'text-rose-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
]


export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'React.js (v19)',
      'React Hooks',
      'React Router',
      'JavaScript (ES6+ — async/await, Promises)',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    title: 'State & Data',
    items: [
      'Redux Toolkit (RTK)',
      'Context API',
      'GraphQL',
      'Apollo Client',
      'REST APIs',
      'Firebase',
      'MySQL',
      'Okta (OAuth-based Authentication)',
    ],
  },
  {
    title: 'Performance & Quality',
    items: [
      'Code Splitting',
      'Lazy Loading',
      'Rendering Optimization',
      'Core Web Vitals',
      'Responsive Design',
      'Cross-Browser Compatibility',
      'Accessibility (WCAG)',
    ],
  },
  {
    title: 'Testing, CI/CD & Tools',
    items: [
      'Jest',
      'React Testing Library',
      'Git',
      'CI/CD Pipelines',
      'Vite',
      'Postman',
      'Figma',
      'Node.js',
      'Express.js',
    ],
  },
  {
    title: 'AI-Assisted Development',
    items: [
      'GitHub Copilot',
      'Cursor AI',
      'Claude AI',
      'ChatGPT',
    ],
  },
  {
    title: 'Architecture & Practices',
    items: [
      'Clean Architecture',
      'Component-Driven Design',
      'Separation of Concerns',
      'Modular Code Organization',
      'Code Reviews',
      'Agile/Scrum',
    ],
  },
];

