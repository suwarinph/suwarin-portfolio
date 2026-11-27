import { Code2, Database, PanelsTopLeft, Server, Workflow } from 'lucide-react'
import { skillGroups } from '../../data/skills'

const icons = { code: Code2, server: Server, panels: PanelsTopLeft, database: Database, workflow: Workflow }

function SkillCard({ group }) {
  const Icon = icons[group.icon]
  return <article className={`skill-card ${group.featured ? 'skill-card-wide' : ''}`}>
    <div className="skill-card-heading"><span className="skill-icon"><Icon size={17} strokeWidth={1.7} /></span><h3>{group.title}</h3></div>
    <ul className="skill-pills">{group.skills.map(([skill, level]) => <li className={`skill-pill ${level === 'Int.' ? 'is-intermediate' : 'is-beginner'}`} key={skill}><span className="skill-dot" />{skill}<span className="skill-level">{level}</span></li>)}</ul>
  </article>
}

export default function SkillsGrid() {
  return <><div className="skills-grid">{skillGroups.map((group) => <SkillCard key={group.title} group={group} />)}</div><p className="skills-legend"><span className="legend-dot" />Int. = Intermediate <span className="legend-separator">·</span> Beg. = Beginner</p></>
}
