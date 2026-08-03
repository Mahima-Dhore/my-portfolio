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
    title: 'Frameworks & Libraries',
    items: [
      'React.js (v19)',
      'Redux Toolkit (RTK)',
      'Context API',
      'Tailwind CSS',
      'Bootstrap',
      'Node.js',
      'Express.js',
    ],
  },
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'API & Data',
    items: ['GraphQL', 'Apollo Client', 'REST APIs', 'React Query', 'Firebase'],
  },
  {
    title: 'Database',
    items: ['MySQL'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'Vite', 'Postman', 'WP Engine', 'Figma', 'VS Code', 'Cursor AI', 'Claude AI'],
  },
  {
    title: 'Practices',
    items: [
      'Component Architecture',
      'Code Splitting',
      'Lazy Loading',
      'Responsive Design',
      'Cross-Browser Compatibility',
      'Core Web Vitals (LCP, TBT)',
      'Accessibility',
      'Agile/Scrum',
    ],
  },
]
