import Reveal from './Reveal'

export default function Section({ id, eyebrow, title, children, className = '' }) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`mx-auto w-full max-w-content px-6 py-20 md:px-8 md:py-20 ${className}`}
    >
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2
          id={headingId}
          className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          {title}
        </h2>
      </Reveal>

      <div className="mt-12">{children}</div>
    </section>
  )
}
