import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects, projectBySlug } from '../data/projects'
import ProjectImage from '../components/ProjectImage'
import SectionNav from '../components/SectionNav'

const caseSections = [
  { id: 'overview', label: 'Overview & role' }, { id: 'features', label: 'Features' }, { id: 'architecture', label: 'Architecture' }, { id: 'next-project', label: 'Next project' },
]

export default function CaseStudyPage() {
  const { slug } = useParams()
  const project = projectBySlug(slug)
  if (!project) return <div className="route-page section-shell not-found"><span className="section-number">404 / PROJECT NOT FOUND</span><h1>That project isn’t here.</h1><Link to="/projects">Back to all work <ArrowLeft size={15} /></Link></div>
  const next = projects.find((item) => item.id !== project.id)

  return <div className="case-page">
    <div className="case-hero section-shell"><Link to="/projects" className="back-link"><ArrowLeft size={15} /> All projects</Link><div className="case-hero-copy"><span className="section-number">{project.type} / CASE STUDY</span><h1>{project.title}</h1><p>{project.summary}</p><ul className="stack-tags">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul><div className="case-demo">{project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Visit live project <ExternalLink size={15} /></a> : <span className="coming-soon">Live demo · Coming Soon</span>}</div></div><ProjectImage image={project.cover} className="case-cover" aspect="16/8" /></div>
    <div className="case-layout section-shell"><SectionNav items={caseSections} label="Case study sections" /><div className="case-content">
      <section id="overview" className="case-section"><span className="section-number">01 / PROJECT CONTEXT</span><h2>Overview &amp; my role</h2><div className="case-overview-grid"><p className="case-lead">{project.caseStudy?.overview || project.summary}</p><div className="case-overview-details"><span className="case-label">Project type</span><p>{project.type}</p><span className="case-label">Technology</span><p>{project.stack.join(' · ')}</p><span className="case-label">Role details</span><p>{project.caseStudy?.role || 'Additional role details have not been provided.'}</p>{project.caseStudy?.context && <><span className="case-label">Project context</span><p>{project.caseStudy.context}</p></>}</div></div></section>
      <section id="features" className="case-section"><span className="section-number">02 / WHAT IT INCLUDES</span><h2>Feature showcase</h2><div className="case-feature-list">{project.gallery.map((image, index) => <article className="case-feature" key={image.file}><ProjectImage image={image} aspect="16/10" /><div className="case-feature-copy"><span>0{index + 1}</span><h3>{image.title}</h3><p>{project.features.find((feature) => feature.title === image.title)?.description}</p></div></article>)}</div><ul className="feature-index">{project.features.map((feature) => <li key={feature.title}><span>{feature.title}</span><span>{feature.description}</span></li>)}</ul></section>
      <section id="architecture" className="case-section"><span className="section-number">03 / SYSTEM OVERVIEW</span><h2>System architecture</h2><p className="case-intro">{project.architectureSummary || 'A simplified view based on the technologies identified for this project.'}</p><div className="architecture-flow">{project.architecture.map((item, index) => <div className="architecture-step" key={item.title}><span className="architecture-index">0{index + 1}</span><strong>{item.title}</strong><small>{item.detail}</small>{index < project.architecture.length - 1 && <span className="architecture-arrow" aria-hidden="true">→</span>}</div>)}</div></section>
      <section id="next-project" className="case-section next-case-section"><span className="section-number">04 / KEEP EXPLORING</span><h2>Next project</h2><Link className="next-project-link" to={next.route}><span><small>{next.type}</small><strong>{next.title}</strong></span><ArrowRight size={20} /></Link></section>
    </div></div>
  </div>
}
