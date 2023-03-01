import { gsap } from 'gsap'

const enterProject = (container) => {
  gsap.set('.description-project, .site-live-button', { opacity: 0 })
  let charsTitleProject = gsap.utils.toArray('.title-project .cls-1')

  const tl = gsap.timeline()
  tl.from(container, {
    autoAlpha: 0,
    yPercent: 50,
    duration: 1,
    ease: 'power4.out',
  }).from(charsTitleProject, {
    autoAlpha: 0,
    scale: 0.5,
    transformOrigin: 'bottom left',
    duration: 0.2,
    ease: 'power2.out',
    stagger: { amount: 0.6 },
  })

  return tl
}

export default enterProject
