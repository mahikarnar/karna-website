import { useReveal } from '../hooks/useReveal'

/**
 * Reveal — wraps any content with a scroll-triggered fade-up.
 *
 * Props:
 *   className  — extra classes to add alongside "reveal"
 *   delay      — CSS transition-delay in ms (for stagger)
 *   tag        — HTML element to render (default: div)
 */
export default function Reveal({ children, className = '', delay = 0, tag: Tag = 'div' }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
