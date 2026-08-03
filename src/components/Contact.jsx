import { Mail, Phone, MapPin, Download } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import ContactForm from './ContactForm'
import { profile, links } from '../data/site'

const details = [
  { icon: Mail, label: profile.email, href: links.email },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: MapPin, label: profile.location },
]

const socials = [
  { icon: FaLinkedin, label: 'LinkedIn', href: links.linkedin },
  { icon: FaGithub, label: 'GitHub', href: links.github },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Looking for a React developer?"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-8">
            <p className="max-w-md text-base leading-7 text-slate-400">
              I&apos;m open to React Frontend Developer roles and happy to talk through any of the
              work above. The fastest route is email, and I reply within a day.
            </p>

            <ul className="space-y-4">
              {details.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="inline-flex items-center gap-3 text-slate-300 transition-colors hover:text-accent"
                    >
                      <Icon size={17} aria-hidden="true" className="text-accent" />
                      {label}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-3 text-slate-300">
                      <Icon size={17} aria-hidden="true" className="text-accent" />
                      {label}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2
                             text-sm font-medium text-slate-300 transition hover:border-accent hover:text-accent"
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </a>
              ))}
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm
                           font-semibold text-ink-950 transition hover:bg-accent"
              >
                <Download size={16} aria-hidden="true" />
                Resume (PDF)
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
