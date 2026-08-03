import { ExternalLink, Lock, Lightbulb } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { projects } from '../data/projects'

function ProjectLinks({ links, title }) {
  const hasLinks = Boolean(links.live || links.code)

  if (!hasLinks) {
    return (
      <p className="inline-flex items-center gap-2 text-xs text-slate-500">
        <Lock size={13} aria-hidden="true" />
        Private client work. Happy to walk through the code and decisions in an interview.
      </p>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          <ExternalLink size={15} aria-hidden="true" />
          Live demo
          <span className="sr-only">of {title}</span>
        </a>
      )}
      {links.code && (
        <a
          href={links.code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white hover:underline"
        >
          <FaGithub size={15} aria-hidden="true" />
          Source
          <span className="sr-only">for {title}</span>
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Things I've built and shipped."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 80} className="h-full">
            <article className="card flex h-full flex-col p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-accent">{project.tagline}</p>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-400">
                  {project.context}
                </span>
              </div>

              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-emerald-400">
                {project.highlight}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>

              <ul className="mt-4 space-y-2.5">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-400">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              {project.challenge && (
                <div className="mt-5 rounded-xl border border-accent/20 bg-accent/5 p-4">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                    <Lightbulb size={14} aria-hidden="true" />
                    Hardest part
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{project.challenge}</p>
                </div>
              )}

              <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.tech.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 border-t border-white/5 pt-4">
                <ProjectLinks links={project.links} title={project.title} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
