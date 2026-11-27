import { useEffect, useState } from 'react'

export function useScrollSpy(ids, offset = 140, enabled = true) {
  const [activeId, setActiveId] = useState('')
  const idsKey = ids.join('|')

  useEffect(() => {
    if (!enabled) {
      setActiveId('')
      return undefined
    }

    const currentIds = idsKey.split('|').filter(Boolean)
    if (!currentIds.length) return undefined

    let sectionPositions = []
    let documentHeight = 0
    let frame = 0
    let disposed = false

    const updateActive = () => {
      frame = 0
      if (!sectionPositions.length) return

      const scrollY = window.scrollY
      const atPageEnd = window.innerHeight + scrollY >= documentHeight - 2
      const active = atPageEnd
        ? sectionPositions[sectionPositions.length - 1].id
        : sectionPositions.reduce((current, section) => section.top <= scrollY + offset ? section.id : current, sectionPositions[0].id)

      setActiveId((current) => current === active ? current : active)
    }

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive)
    }

    const measureSections = () => {
      if (disposed) return
      if (frame) window.cancelAnimationFrame(frame)
      frame = 0
      const scrollY = window.scrollY
      sectionPositions = currentIds
        .map((id) => {
          const element = document.getElementById(id)
          if (!element) return null
          return { id, top: element.getBoundingClientRect().top + scrollY }
        })
        .filter(Boolean)
      documentHeight = document.documentElement.scrollHeight
      updateActive()
    }

    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measureSections)
    const main = document.querySelector('main')
    if (main) resizeObserver?.observe(main)

    measureSections()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', measureSections, { passive: true })
    document.fonts?.ready.then(measureSections)
    window.requestAnimationFrame(measureSections)

    return () => {
      disposed = true
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', measureSections)
      resizeObserver?.disconnect()
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [idsKey, offset, enabled])

  return activeId
}
