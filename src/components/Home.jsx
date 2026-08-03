import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { profile, links, stats } from '../data/site'

export default function Home() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative mx-auto flex min-h-screen w-full max-w-content flex-col justify-center
                 px-6 pb-20 pt-28 md:px-8"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[min(900px,100%)]
                   -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]"
      />

      <p className="flex items-center gap-2 text-sm font-medium text-slate-400">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Open to React Frontend Developer roles
      </p>

      <h1
        id="home-heading"
        className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white
                   sm:text-5xl lg:text-6xl"
      >
        I build React interfaces that
        <span className="bg-gradient-to-r from-accent to-accent-deep bg-clip-text text-transparent">
          {' '}
          stay fast as they scale.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        I&apos;m {profile.name}, a {profile.role} with 3+ years shipping production frontends in
        React, TypeScript, Redux Toolkit and GraphQL. Currently at{' '}
        <span className="font-medium text-slate-200">Sorted</span>, where I own features end to end:
        requirement to release, including the performance work that keeps them quick.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
        <span className="inline-flex items-center gap-2">
          <MapPin size={15} aria-hidden="true" />
          {profile.location}
        </span>
        <a
          href={links.email}
          className="inline-flex items-center gap-2 transition-colors hover:text-accent"
        >
          <Mail size={15} aria-hidden="true" />
          {profile.email}
        </a>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href="#projects"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3
                     text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
        >
          View my work
          <ArrowRight
            size={16}
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>

        <a
          href={profile.resume}
          download
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15
                     px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:bg-white/5"
        >
          <Download size={16} aria-hidden="true" />
          Download resume
        </a>

        <div className="flex items-center gap-2 sm:ml-2">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mahima Dhore on LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15
                       text-slate-300 transition hover:border-accent hover:text-accent"
          >
            <FaLinkedin size={18} aria-hidden="true" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mahima Dhore on GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15
                       text-slate-300 transition hover:border-accent hover:text-accent"
          >
            <FaGithub size={18} aria-hidden="true" />
          </a>
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10
                     bg-white/10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-ink-950 px-5 py-6">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block text-2xl font-bold text-white md:text-3xl">{stat.value}</span>
              <span className="mt-1 block text-xs leading-5 text-slate-400">{stat.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
