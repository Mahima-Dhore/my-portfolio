import { useEffect, useState } from 'react'

// Returns the id of the section currently in view.
export function useActiveSection(ids) {
  // Nothing is active while the hero is in view.
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      // Only count a section once it reaches the middle of the screen.
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean)
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [ids])

  return active
}
