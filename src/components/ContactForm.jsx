import { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { profile } from '../data/site'

const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

const isConfigured = Object.values(EMAILJS).every(Boolean)

const FIELDS = [
  { name: 'name', label: 'Your name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Your email', type: 'email', autoComplete: 'email' },
]

const EMPTY = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (event) =>
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))

  // Sends through EmailJS when configured, otherwise falls back to mailto.
  async function handleSubmit(event) {
    event.preventDefault()

    if (!isConfigured) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${values.name || 'a visitor'}`)
      const body = encodeURIComponent(`${values.message}\n\n${values.name}\n${values.email}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      // Loaded on demand so the SDK stays out of the main bundle.
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        { from_name: values.name, reply_to: values.email, message: values.message },
        { publicKey: EMAILJS.publicKey }
      )
      setStatus('sent')
      setValues(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {FIELDS.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-slate-300">
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            required
            value={values[field.name]}
            onChange={update}
            className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white
                       placeholder:text-slate-600 focus:border-accent focus:outline-none"
          />
        </div>
      ))}

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={update}
          className="w-full resize-y rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm
                     text-white placeholder:text-slate-600 focus:border-accent focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3
                   text-sm font-semibold text-ink-950 transition hover:bg-accent-soft
                   disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? (
          <>
            <Loader2 size={16} aria-hidden="true" className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} aria-hidden="true" />
            Send message
          </>
        )}
      </button>

      <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm">
        {status === 'sent' && (
          <span className="text-emerald-400">Thanks, your message is on its way.</span>
        )}
        {status === 'error' && (
          <span className="text-rose-400">
            That didn&apos;t send. Please email me directly at {profile.email}.
          </span>
        )}
      </p>
    </form>
  )
}
