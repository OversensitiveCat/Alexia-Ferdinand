import { gsap } from 'gsap'

const enterProject = (container) => {
  gsap.set('.description-project, .site-live-button', { opacity: 0 })
  let charsTitleProject = gsap.utils.toArray('.title-project .cls-1')
  const button = document.querySelector('.site-live-button')
  const siteButton = gsap.timeline({ repeat: -1 })

  siteButton
    .to(button, {
      rotate: 380,
      transformOrigin: 'center',
      duration: 4,
      ease: 'bounce.out',
      delay: 1,
    })
    .to(
      button,
      { rotate: 0, transformOrigin: 'center', duration: 4, ease: 'bounce.out' },
      '+=0.5'
    )

  const tl = gsap.timeline()
  tl.from(container, {
    autoAlpha: 0,
    yPercent: 25,
    duration: 1.2,
    ease: 'power1.out',
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
