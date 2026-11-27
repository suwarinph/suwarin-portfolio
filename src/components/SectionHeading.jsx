import { ArrowUpRight } from 'lucide-react'

export default function SectionHeading({ number, title, description, href, linkLabel }) {
  return (
    <div className="section-heading" data-reveal>
      <div><span className="section-number">{number}</span><h2>{title}</h2></div>
      {description && <p>{description}</p>}
      {href && <a href={href} className="text-link">{linkLabel || 'Explore'} <ArrowUpRight size={15} /></a>}
    </div>
  )
}
