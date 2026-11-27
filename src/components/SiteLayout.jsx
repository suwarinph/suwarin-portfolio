import { Link, Outlet, useLocation } from 'react-router-dom'
import { ArrowDownToLine, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useScrollSpy } from '../hooks/useScrollSpy'

const navItems = [
  ['Work', '/#work', 'work'],
  ['About', '/#about', 'about'],
  ['Skills', '/#skills', 'skills'],
  ['Experience', '/#experience', 'experience'],
  ['Journey', '/#journey', 'journey'],
  ['Contact', '/#contact', 'contact'],
]
const navSectionIds = ['top', 'about', 'skills', 'work', 'experience', 'journey', 'contact']

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [requestedSection, setRequestedSection] = useState(null)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const activeSection = useScrollSpy(navSectionIds, 115, isHomePage)
  const highlightedSection = requestedSection || activeSection

  useEffect(() => {
    if (!requestedSection) return undefined
    const clearRequestedSection = () => setRequestedSection(null)
    const timeout = window.setTimeout(clearRequestedSection, 1600)
    document.addEventListener('scrollend', clearRequestedSection, { once: true })
    return () => {
      window.clearTimeout(timeout)
      document.removeEventListener('scrollend', clearRequestedSection)
    }
  }, [requestedSection])

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className={`site-nav ${scrolled ? 'is-compact' : ''}`}>
      <Link to="/" className="nav-brand" aria-label="Suwarin home">{profile.brand}</Link>
      <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        <Link to="/" onClick={() => { setOpen(false); setRequestedSection('top') }} className={isHomePage && highlightedSection === 'top' ? 'active' : ''} aria-current={isHomePage && highlightedSection === 'top' ? 'page' : undefined}>Home</Link>
        {navItems.map(([label, href, id]) => (
          <a key={label} href={href} onClick={() => { setOpen(false); setRequestedSection(id) }} className={isHomePage && highlightedSection === id ? 'active' : ''} aria-current={isHomePage && highlightedSection === id ? 'location' : undefined}>{label}</a>
        ))}
      </nav>
      <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer" aria-label="Open resume PDF in a new tab"><ArrowDownToLine size={14} />Resume</a>
      <button className="nav-menu" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>
    </header>
  )
}

export function SiteFooter() {
  return <footer className="site-footer"><span>Designed &amp; Developed by Suwarin Photak</span><a href="#top">Back to top ↑</a></footer>
}

export default function SiteLayout() {
  return <><a className="skip-link" href="#main">Skip to content</a><SiteNav /><main id="main"><Outlet /></main><SiteFooter /></>
}
