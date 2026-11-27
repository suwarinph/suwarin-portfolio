import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import SectionHeading from '../components/SectionHeading'
import ProjectImage from '../components/ProjectImage'
import EarlierWorks, { EarlierWorksLegend } from '../components/home/EarlierWorks'

export default function ProjectsPage() {
  return <div className="route-page section-shell">
    <header className="route-hero"><span className="section-number">WORK / 02</span><h1>Selected work,</h1><p>Two featured projects, followed by a short archive of earlier work.</p></header>
    <SectionHeading number="01" title="Featured projects" />
    <div className="projects-index">{projects.map((project, index) => <article className="index-project" key={project.id}><div className="index-project-image"><ProjectImage image={project.cover} aspect="16/9" /><span>0{index + 1}</span></div><div className="index-project-content"><div className="showcase-topline"><span>{project.type}</span><span>{project.stack.join(' · ')}</span></div><h2>{project.title}</h2><p>{project.summary}</p><div className="project-quicklinks"><Link to={project.route}>Read case study <ArrowUpRight size={16} /></Link>{project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a> : <span className="coming-soon">Coming Soon</span>}</div></div></article>)}</div>
    <section className="archive-section"><SectionHeading number="02" title="Earlier works" /><div className="archive-heading"><span className="experience-eyebrow">Earlier academic projects</span><EarlierWorksLegend /></div><EarlierWorks /></section>
  </div>
}
