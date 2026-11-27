import EarlierWorks, { EarlierWorksLegend } from './EarlierWorks'

function InternshipFeature({ internship }) {
  return (
    <article className="experience-feature" data-reveal>
      <header className="experience-feature-heading">
        <div><span className="experience-eyebrow">Featured internship experience</span><h3>{internship.title}</h3></div>
        <p>{internship.type}<br />{internship.period}</p>
      </header>
      <div className="experience-feature-body">
        <div className="experience-overview"><h4>Project overview</h4><p>{internship.description}</p><p className="experience-team-note">The Computer Vision Model and Backend API were developed by teammates.</p></div>
        <div className="experience-responsibilities"><h4>My responsibilities</h4><ul>{internship.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </div>
      <div className="experience-technologies"><span>Technologies used</span><ul>{internship.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
    </article>
  )
}

export default function ExperienceArchive({ internship }) {
  return <div className="experience-archive">
    <InternshipFeature internship={internship} />
    <div className="academic-archive">
      <div className="archive-heading">
        <span className="experience-eyebrow">Earlier academic projects</span>
        <EarlierWorksLegend />
      </div>
      <EarlierWorks />
    </div>
  </div>
}
