import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { featuredSkills, skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The stack I reach for."
    >
      <Reveal>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {featuredSkills.map(({ name, icon: Icon, color }) => (
            <li
              key={name}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-ink-900/60
                         px-3 py-5 transition-colors hover:border-accent/40 hover:bg-ink-800/60"
            >
              <Icon className={`text-3xl ${color}`} aria-hidden="true" />
              <span className="text-center text-xs font-medium text-slate-300">{name}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 60}>
            <div className="rounded-xl border border-white/10 bg-ink-900/40 p-5">
              <h3 className="text-sm font-semibold text-white">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
