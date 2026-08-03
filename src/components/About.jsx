import Section from './ui/Section'
import Reveal from './ui/Reveal'
import Profile from '../assets/mahima-portrait.jpg'

const focusAreas = [
  {
    title: 'Component architecture',
    body: 'Reusable, data-driven components with state modelled explicitly, so new requirements extend the model instead of adding another branch.',
  },
  {
    title: 'Performance in production',
    body: 'Code splitting, lazy loading, render profiling and cache tuning, measured against LCP and TBT rather than guessed at.',
  },
  {
    title: 'Working across the team',
    body: 'Comfortable holding the API contract conversation with backend, the spacing conversation with design, and the edge-case conversation with QA.',
  },
]

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Frontend is the part of the product people actually touch."
    >
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div className="space-y-5 text-base leading-8 text-slate-400">
          <p>
            I started in enterprise software at Capgemini, building incident-management interfaces
            used every day by support teams, where a broken state isn&apos;t a design nitpick, it&apos;s
            someone unable to log a fault. That set the standard I still work to.
          </p>
          <p>
            Since then I&apos;ve moved deeper into the React ecosystem: a MERN stack programme and two
            freelance builds, then production work at{' '}
            <span className="font-medium text-slate-200">Sorted</span>, where I own frontend features
            end to end. Most of my recent work sits in real-time, data-heavy UI: GraphQL layers with
            Apollo, Firebase sync, and interactive modules whose state has to stay consistent as
            users move through them.
          </p>
          <ul className="grid gap-4 pt-4 sm:grid-cols-3">
            {focusAreas.map((area) => (
              <li key={area.title} className="rounded-xl border border-white/10 bg-ink-900/60 p-4">
                <h3 className="text-sm font-semibold text-white">{area.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{area.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={120} className="justify-self-center lg:justify-self-end">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-accent/25 to-accent-deep/25 blur-2xl"
            />
            <img
              src={Profile}
              alt="Portrait of Mahima Dhore"
              width={320}
              height={384}
              loading="lazy"
              decoding="async"
              className="relative h-96 w-80 rounded-3xl border border-white/10 object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
