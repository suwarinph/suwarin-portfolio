import { earlierWorks } from '../../data/projects'

export function EarlierWorksLegend() {
  return (
    <div className="academic-legend" aria-label="Technology tag legend">
      <span><i className="is-personal" aria-hidden="true" />Used by me</span>
      <span><i className="is-other" aria-hidden="true" />Other project tech</span>
    </div>
  )
}

export default function EarlierWorks() {
  return <div className="earlier-list">{earlierWorks.map((project, index) => <article className="earlier-row" key={project.title}>
    <span className="earlier-number">0{index + 1}</span>
    <div className="earlier-content">
      <h3>{project.title}</h3>
      <p className="earlier-description">{project.description}</p>
      <ul className="earlier-tech-tags" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => <li className={technology.personallyUsed ? 'is-personal' : 'is-other'} key={technology.name}>{technology.name}</li>)}
      </ul>
    </div>
  </article>)}</div>
}
