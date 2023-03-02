import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const enterStudio = (container) => {
  let paraAbout = gsap.utils.toArray('[paraAbout]')
  gsap.set('#services, #faq', { opacity: 0 })

  let star = document.querySelector('.para-studio-flower')
  let tlStar = gsap.timeline()
  tlStar.from(star, {
    rotate: 360,
    ease: 'none',
    duration: 5,
    repeat: -1,
    transformOrigin: 'center',
  })

  star.addEventListener('mouseenter', () => {
    gsap.to(star, { scale: 1.1, duration: 0.3 })
    tlStar.timeScale(2)
  })
  star.addEventListener('mouseleave', () => {
    gsap.to(star, { scale: 1, duration: 0.3 })
    tlStar.timeScale(1)
  })

  let tl = gsap.timeline()
  tl.from(container, {
    autoAlpha: 0,
    yPercent: 25,
    duration: 1.2,
    ease: 'power1.out',
  })
    .from(
      '.nav-link',
      {
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.2,
        yPercent: 100,
      },
      '-=0.2'
    )
    .from(
      '.highlight_paragraph',
      {
        autoAlpha: 0,
        yPercent: -15,
        duration: 0.6,
        ease: 'power1.out',
      },
      '-=0.4'
    )
    .from(
      paraAbout,
      { autoAlpha: 0, yPercent: 50, duration: 0.6, stagger: 0.2 },
      '-=0.4'
    )
    .from(
      '.para-studio-flower',
      { autoAlpha: 0, yPercent: 200, duration: 0.4 },
      '-=0.3'
    )

  return tl
}

export default enterStudio
