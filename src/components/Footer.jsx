import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import { profile, links } from '../data/site'

const socials = [
  { icon: FaLinkedin, label: 'LinkedIn', href: links.linkedin, external: true },
  { icon: FaGithub, label: 'GitHub', href: links.github, external: true },
  { icon: Mail, label: 'Email', href: links.email, external: false },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between md:px-8">
        <p className="text-sm text-slate-400">
          <span className="font-medium text-white">{profile.name}</span> &middot; {profile.role}
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-slate-500 transition-colors hover:text-accent"
            >
              <Icon size={17} aria-hidden="true" />
            </a>
          ))}
          <span className="text-xs text-slate-600">&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
