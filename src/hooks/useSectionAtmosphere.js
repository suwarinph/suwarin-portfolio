import { useCallback, useEffect, useRef } from 'react'
import { useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'

const sectionAtmospheres = [
  { id: 'top', hex: '#EFF2EE', rgb: [239, 242, 238] },
  { id: 'about', hex: '#EFF2EE', rgb: [239, 242, 238] },
  { id: 'skills', hex: '#EFF2EE', rgb: [239, 242, 238] },
  { id: 'work', hex: '#D7E5DA', rgb: [228, 236, 229] },
  { id: 'experience', hex: '#EFF2EE', rgb: [239, 242, 238] },
  { id: 'journey', hex: '#D7E5DA', rgb: [215, 229, 218] },
]

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function blendColor(from, to, progress) {
  const channels = from.map((channel, index) => Math.round(channel + (to[index] - channel) * progress))
  return `#${channels.map((channel) => channel.toString(16).padStart(2, '0')).join('')}`
}

export function useSectionAtmosphere() {
  const { scrollY } = useScroll()
  const reducedMotion = useReducedMotion()
  const reducedMotionRef = useRef(reducedMotion)
  const sectionPositions = useRef([])
  reducedMotionRef.current = reducedMotion

  const updateAtmosphere = useCallback((scrollPosition) => {
    const sections = sectionPositions.current
    if (!sections.length) return

    const viewportCenter = scrollPosition + window.innerHeight / 2
    let color = sections[0].hex

    if (reducedMotionRef.current) {
      for (const section of sections) {
        if (viewportCenter < section.top) break
        color = section.hex
      }
    } else {
      let foundBlend = false
      for (let index = 0; index < sections.length - 1; index += 1) {
        const current = sections[index]
        const next = sections[index + 1]
        const before = Math.min(110, current.height * 0.22)
        const after = Math.min(110, next.height * 0.22)
        const start = next.top - before
        const end = next.top + after

        if (viewportCenter < start) {
          color = current.hex
          foundBlend = true
          break
        }
        if (viewportCenter <= end) {
          color = blendColor(current.rgb, next.rgb, clamp((viewportCenter - start) / (end - start), 0, 1))
          foundBlend = true
          break
        }
      }
      if (!foundBlend) color = sections[sections.length - 1].hex
    }

    document.documentElement.style.setProperty('--page-atmosphere', color)
  }, [])

  useMotionValueEvent(scrollY, 'change', updateAtmosphere)

  useEffect(() => {
    updateAtmosphere(scrollY.get())
  }, [reducedMotion, scrollY, updateAtmosphere])

  useEffect(() => {
    const root = document.documentElement
    const previousColor = root.style.getPropertyValue('--page-atmosphere')

    const measureSections = () => {
      const scrollPosition = window.scrollY
      sectionPositions.current = sectionAtmospheres
        .map((section) => {
          const element = document.getElementById(section.id)
          if (!element) return null
          const bounds = element.getBoundingClientRect()
          return {
            ...section,
            top: bounds.top + scrollPosition,
            height: bounds.height,
          }
        })
        .filter(Boolean)
      updateAtmosphere(scrollPosition)
    }

    measureSections()
    window.addEventListener('resize', measureSections, { passive: true })
    return () => {
      window.removeEventListener('resize', measureSections)
      sectionPositions.current = []
      if (previousColor) root.style.setProperty('--page-atmosphere', previousColor)
      else root.style.removeProperty('--page-atmosphere')
    }
  }, [updateAtmosphere])
}
