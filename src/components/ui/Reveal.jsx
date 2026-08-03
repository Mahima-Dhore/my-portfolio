import { useInView } from '../../hooks/useInView'

// Fades children in the first time they scroll into view.
export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      style={inView ? { animationDelay: `${delay}ms` } : undefined}
      className={`${inView ? 'animate-fade-up' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
