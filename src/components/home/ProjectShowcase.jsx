import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import ProjectImage from '../ProjectImage'

function ProjectPanel({ project, index }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const selectedImageRef = useRef(0)
  const gallery = useMemo(() => [project.cover, ...project.gallery], [project.cover, project.gallery])

  useEffect(() => {
    const nodes = gallery.map((_, imageIndex) => document.getElementById(`${project.id}-detail-${imageIndex}`)).filter(Boolean)
    if (!nodes.length) return undefined
    const ratios = new Map()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const imageIndex = Number(entry.target.dataset.imageIndex)
        if (entry.isIntersecting) ratios.set(imageIndex, entry.intersectionRatio)
        else ratios.delete(imageIndex)
      })

      const next = [...ratios.entries()].sort((a, b) => b[1] - a[1])[0]
      if (!next) return

      const [nextIndex, nextRatio] = next
      const currentRatio = ratios.get(selectedImageRef.current) ?? 0
      const currentIsVisible = ratios.has(selectedImageRef.current)
      if (nextIndex !== selectedImageRef.current && (!currentIsVisible || nextRatio >= currentRatio + 0.12)) {
        selectedImageRef.current = nextIndex
        setSelectedImage(nextIndex)
      }
    }, { rootMargin: '-34% 0px -48% 0px', threshold: [0, 0.25, 0.5, 0.75] })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [gallery, project.id])

  return (
    <article className="showcase-project" data-reveal>
      <div className="showcase-preview"><div className="showcase-preview-frame">
        {gallery.map((image, imageIndex) => <div className="showcase-preview-layer" data-active={selectedImage === imageIndex} aria-hidden={selectedImage !== imageIndex} key={image.file}>
          <ProjectImage image={image} aspect="4/3" loading="eager" />
        </div>)}
        <span className="preview-counter">0{selectedImage + 1} / 0{gallery.length}</span>
      </div></div>
      <div className="showcase-details">
        <div className="showcase-topline"><span>0{index + 1} / FEATURED PROJECT</span><span>{project.type}</span></div>
        <h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
        <ul className="stack-tags" aria-label="Technologies">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <div className="project-quicklinks"><Link to={project.route}>Explore case study <ArrowUpRight size={16} /></Link>{project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a> : <span className="coming-soon">Live demo · Coming Soon</span>}</div>
        <div className="showcase-story">
          {gallery.map((image, imageIndex) => <div className="showcase-story-item" id={`${project.id}-detail-${imageIndex}`} data-image-index={imageIndex} key={image.file}>
            <span className="story-number">0{imageIndex + 1}</span><div><h4>{image.title || project.title}</h4><p>{image.description}</p></div>
            <div className="mobile-project-image"><ProjectImage image={image} /></div>
          </div>)}
        </div>
      </div>
    </article>
  )
}

export default function ProjectShowcase() {
  return <div className="project-showcase">{projects.map((project, index) => <ProjectPanel key={project.id} project={project} index={index} />)}</div>
}
