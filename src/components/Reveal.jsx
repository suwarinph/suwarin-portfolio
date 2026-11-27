import { motion, useReducedMotion } from 'motion/react'

const MotionDiv = motion.div

export default function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion()
  return (
    <MotionDiv
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</MotionDiv>
  )
}
