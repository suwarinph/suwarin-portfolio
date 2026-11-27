import { ArrowUpRight, Braces, Code2, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'

const MotionDiv = motion.div
const copyVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const reduced = useReducedMotion()
  return (
    <section className="hero section-shell" id="top">
      <MotionDiv className="hero-copy" variants={copyVariants} initial={reduced ? false : 'hidden'} animate="show">
        <motion.p className="hero-eyebrow section-number" variants={itemVariants}>SUWARIN PHOTAK / FRONTEND DEVELOPER</motion.p>
        <motion.h1 variants={itemVariants}>{profile.heroHeadline.lead}<br /><span>{profile.heroHeadline.accent}</span></motion.h1>
        <motion.p className="hero-summary" variants={itemVariants}>{profile.summary}</motion.p>
        <motion.div className="hero-actions" variants={itemVariants}>
          <Link className="button button-dark" to="/projects">Explore Projects <ArrowUpRight size={15} /></Link>
        </motion.div>
      </MotionDiv>
      <MotionDiv className="hero-portrait" initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: reduced ? 0 : 0.2 }}>
        <div className="portrait-frame">
          <img src={profile.portrait} alt="Portrait of Suwarin Photak" loading="eager" decoding="async" />
        </div>
        <div className="hero-float-label" aria-label="Frontend Developer working with React and Vue">
          <span>FRONTEND DEVELOPER</span>
          <strong>React <i aria-hidden="true" /> Vue</strong>
        </div>
        <span className="hero-float-icon hero-float-sparkles" aria-hidden="true"><Sparkles size={19} /></span>
        <span className="hero-float-icon hero-float-braces" aria-hidden="true"><Braces size={18} /></span>
        <span className="hero-float-icon hero-float-code" aria-hidden="true"><Code2 size={18} /></span>
      </MotionDiv>
    </section>
  )
}
