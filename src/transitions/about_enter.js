import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const enterAbout = (container) => {
  gsap.set('#services, #faq', { opacity: 0 })

  let paraAbout = gsap.utils.toArray('[paraAbout]')

  let tl = gsap.timeline()
  tl.from(container, {
    autoAlpha: 0,
    yPercent: 50,
    duration: 1,
    ease: 'power4.out',
  })
    .from(
      '.highlight_paragraph',
      {
        autoAlpha: 0,
        yPercent: -25,
        duration: 1,
        ease: 'power2.out',
      },
      '-=0.2'
    )
    .from(paraAbout, { autoAlpha: 0, yPercent: 50, duration: 0.6 })
    .from(
      '.para-studio-flower',
      { autoAlpha: 0, yPercent: 200, duration: 0.4 },
      '-=0.3'
    )

  return tl
}

export default enterAbout
