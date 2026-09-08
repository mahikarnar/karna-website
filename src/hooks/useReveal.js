import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — attaches an IntersectionObserver to a ref.
 * Returns [ref, isVisible].
 * Once visible it stays visible (no re-hide on scroll back).
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el) // fire once, then stop watching
        }
      },
      { threshold: 0.12, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
