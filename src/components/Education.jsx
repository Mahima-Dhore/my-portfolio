import { GraduationCap, Trophy } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { education, achievements } from '../data/education'

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & recognition"
      title="Where I trained, and what I've shipped since."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card h-full p-6 md:p-7">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
              <GraduationCap size={16} aria-hidden="true" />
              Education
            </p>
            <h3 className="mt-4 text-lg font-semibold text-white">{education.degree}</h3>
            <p className="mt-2 text-sm text-slate-400">
              {education.institution}, {education.location}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip">{education.period}</span>
              <span className="chip">{education.grade}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="card h-full p-6 md:p-7">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
              <Trophy size={16} aria-hidden="true" />
              Achievements
            </p>
            <ul className="mt-4 space-y-5">
              {achievements.map((item) => (
                <li key={item.title}>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-400">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
