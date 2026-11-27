import { ArrowDownToLine, ArrowUpRight, FileText, Github, Mail, GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'
import { internship } from '../data/experience'
import Hero from '../components/home/Hero'
import ProjectShowcase from '../components/home/ProjectShowcase'
import ExperienceArchive from '../components/home/ExperienceArchive'
import SkillsGrid from '../components/home/SkillsGrid'
import TrainingTimeline from '../components/home/TrainingTimeline'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { useSectionAtmosphere } from '../hooks/useSectionAtmosphere'

export default function HomePage() {
  useSectionAtmosphere()

  return <>
    <Hero />

    <section className="page-section section-shell about-section" id="about">
      <header className="about-heading">
        <span className="section-number">02 / ABOUT ME &amp; EDUCATION</span>
      </header>
      <div className="about-editorial">
        <Reveal className="about-copy">
          <h2>Beyond the interface.</h2>
          {profile.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </Reveal>
        <Reveal className="focus-card" delay={0.08}>
          <h3>What I Focus On</h3>
          <ol>{profile.focusAreas.map((area, index) => <li key={area}><span>{String(index + 1).padStart(2, '0')}</span>{area}</li>)}</ol>
        </Reveal>
      </div>
      <Reveal className="education-strip" delay={0.12}>
        <span className="education-icon"><GraduationCap size={19} strokeWidth={1.7} /></span>
        <div className="education-detail"><strong>{profile.education.institution}</strong><span>{profile.education.degree}</span></div>
        <span className="education-year">2026</span>
      </Reveal>
    </section>

    <section className="page-section section-shell skills-section" id="skills">
      <SectionHeading number="03" title="Technical skills" description="Tools and technologies I’ve worked with so far." />
      <SkillsGrid />
    </section>

    <section className="page-section section-shell" id="work">
      <SectionHeading number="04" title="Featured projects" description="A closer look at the projects I’ve built and learned from." href="/projects" linkLabel="All projects" />
      <ProjectShowcase />
    </section>

    <section className="page-section section-shell experience-section" id="experience">
      <SectionHeading number="05" title="Experience & Earlier Works" description="Practical experience and previous academic projects." />
      <ExperienceArchive internship={internship} />
    </section>

    <section className="page-section section-shell journey-section" id="journey">
      <SectionHeading number="06" title="Training journey" description="Topics explored through technical training and practice." />
      <TrainingTimeline />
    </section>



    <section className="contact-section" id="contact"><div className="contact-inner section-shell"><div className="contact-copy">
      <span className="section-number">07 / GET IN TOUCH</span><h2>Let’s connect.</h2><p>{profile.contact}</p></div>
      <div className="contact-links"><a href={`mailto:${profile.email}`}><span><Mail size={17} /></span><div><small>Email</small><strong>{profile.email}</strong></div><ArrowUpRight size={17} /></a><a href={profile.github} target="_blank" rel="noreferrer"><span><Github size={17} /></span>
      <div><small>GitHub</small><strong>github.com/suwarinph</strong></div><ArrowUpRight size={17} /></a>
      <a href={profile.resume} target="_blank" rel="noreferrer"><span><FileText size={17} /></span><div><small>Resume</small><strong>Open PDF</strong></div><ArrowDownToLine size={17} /></a></div></div>
      <div className="contact-bottom section-shell">
      <span>Available for frontend opportunities</span>
    <span>Khon Kaen, Thailand</span></div></section>
  </>
}
