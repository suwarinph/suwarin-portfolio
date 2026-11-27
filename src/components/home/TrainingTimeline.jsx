import { useEffect, useRef, useState } from 'react'
import { BookOpen, Check } from 'lucide-react'
import { motion, useReducedMotion, useScroll } from 'motion/react'
import { training } from '../../data/experience'

const MotionSpan = motion.span

export default function TrainingTimeline() {
  const timelineRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const [activeId, setActiveId] = useState(`training-${training[0]?.id ?? ''}`)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 65%', 'end 35%'],
  })

  useEffect(() => {
    const topics = training
      .map((topic) => document.getElementById(`training-${topic.id}`))
      .filter(Boolean)
    if (!topics.length || !('IntersectionObserver' in window)) return undefined

    const updateActiveTopic = (entries) => {
      const midpoint = window.innerHeight / 2
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          const aCenter = a.boundingClientRect.top + a.boundingClientRect.height / 2
          const bCenter = b.boundingClientRect.top + b.boundingClientRect.height / 2
          return Math.abs(aCenter - midpoint) - Math.abs(bCenter - midpoint)
        })
      if (visible[0]) setActiveId(visible[0].target.id)
    }
    const createObserver = () => {
      const verticalInset = Math.round(window.innerHeight * 0.42)
      return new IntersectionObserver(updateActiveTopic, { rootMargin: `-${verticalInset}px 0px -${verticalInset}px 0px`, threshold: 0 })
    }
    let observer = createObserver()

    topics.forEach((topic) => observer.observe(topic))
    const handleResize = () => {
      observer.disconnect()
      observer = createObserver()
      topics.forEach((topic) => observer.observe(topic))
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const progressStyle = { scaleY: reducedMotion ? 1 : scrollYProgress }

  return <div className="training-layout" ref={timelineRef}>
    <nav className="training-rail" aria-label="Training topics">
      <span className="training-line-track" aria-hidden="true" />
      <MotionSpan className="training-line-progress" aria-hidden="true" style={progressStyle} />
      {training.map((topic, index) => {
        const id = `training-${topic.id}`
        const active = activeId === id
        return <a className={active ? 'active' : ''} aria-current={active ? 'location' : undefined} href={`#${id}`} key={topic.id}>
          <span>{String(index + 1).padStart(2, '0')}</span>{topic.title}
        </a>
      })}
    </nav>
    <div className="training-content">
      <span className="training-line-track training-line-track-mobile" aria-hidden="true" />
      <MotionSpan className="training-line-progress training-line-progress-mobile" aria-hidden="true" style={progressStyle} />
      {training.map((topic) => {
        const id = `training-${topic.id}`
        return <article className={`training-topic ${activeId === id ? 'is-active' : ''}`} id={id} key={topic.id}>
          <div className="training-topic-title"><span><BookOpen size={16} /></span><h3>{topic.title}</h3></div>
          <ul>{topic.items.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
        </article>
      })}
    </div>
  </div>
}
