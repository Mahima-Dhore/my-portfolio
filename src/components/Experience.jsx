import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Three roles, one throughline: shipping frontends people rely on."
    >
      <ol className="relative space-y-10 border-l border-white/10 pl-6 md:pl-10">
        {experience.map((job, index) => (
          <li key={job.company} className="relative">
            {/* Kept outside Reveal so its animated transform does not shift the dot. */}
            <span
              aria-hidden="true"
              className={`absolute top-8 h-[9px] w-[9px] rounded-full -left-[28px] md:-left-[44px] ${
                job.current ? 'bg-accent ring-4 ring-accent/20' : 'bg-slate-600'
              }`}
            />

            <Reveal delay={index * 90}>
              <article className="card p-6 md:p-7">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {job.role} <span className="text-accent">· {job.company}</span>
                  </h3>
                  <p className="shrink-0 text-sm text-slate-400">{job.period}</p>
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  {job.context} · {job.location}
                  {job.current && (
                    <span className="ml-2 rounded-full bg-emerald-400/10 px-2 py-0.5 font-medium text-emerald-400">
                      Current
                    </span>
                  )}
                </p>

                <p className="mt-4 text-base leading-7 text-slate-300">{job.summary}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-slate-400">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
