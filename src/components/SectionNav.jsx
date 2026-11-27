import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'

export default function SectionNav({ items, label = 'On this page' }) {
  const ids = items.map((item) => item.id)
  const active = useScrollSpy(ids)
  const [open, setOpen] = useState(false)
  const current = items.find((item) => item.id === active) || items[0]

  return (
    <div className="section-nav-wrap">
      <div className="section-nav-label">{label}</div>
      <button className="section-select" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>{current?.label}<ChevronDown size={15} /></button>
      <nav className={`section-nav ${open ? 'is-open' : ''}`} aria-label={label}>
        {items.map((item) => <a key={item.id} href={`#${item.id}`} className={active === item.id ? 'active' : ''} aria-current={active === item.id ? 'location' : undefined} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
    </div>
  )
}
