import { gsap } from 'gsap'
import SplitType from 'split-type'

const homeEnter = () => {
  let heading = new SplitType('.main-heading', {
    types: 'chars',
    tagName: 'span',
  })
  let subHeading = new SplitType('.home-subheading', {
    types: 'chars',
    tagName: 'span',
  })

  let enterButton = document.querySelector('.enter-button')

  let tl = gsap.timeline()

  tl.to('.main-heading, .home-subheading', {
    autoAlpha: 1,
  })
    .to('.home-hide', { autoAlpha: 0 })
    .to('.loading-number', {
      innerText: 100,
      duration: 3,
      snap: { innerText: 1 },
      ease: 'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})',
    })
    .to('.loading-line', { width: '100%', duration: 3 }, '<')
    .from(
      heading.chars,
      {
        yPercent: -80,
        duration: 0.15,
        autoAlpha: 0,
        stagger: { amount: 0.7 },
      },
      '<'
    )
    .from(
      subHeading.chars,
      { duration: 0.15, autoAlpha: 0, stagger: { amount: 0.6 } },
      '-=1.8'
    )
    .from(enterButton, { autoAlpha: 0, yPercent: 100, duration: 0.7 }, '-=0.8')

  enterButton.addEventListener('mouseover', () => {
    gsap.to(enterButton, { scale: 1.05, duration: 0.4 })
  })
  enterButton.addEventListener('mouseleave', () => {
    gsap.to(enterButton, { scale: 1, duration: 0.4 })
  })

  return tl
}

const headingHome = () => {
  let tl = gsap.timeline()
  tl.to('.main-heading, .home-subheading', {
    autoAlpha: 0,
    height: 'auto',
  }).to('.heading-container', {
    position: 'absolute',
    top: '35%',
  })
  return tl
}

const homeLeave = (container) => {
  let tl = gsap.timeline()
  tl.to(container, { autoAlpha: 0 })
    .to('.home-subheading', { opacity: 0 }, '<')
    .to('.home-subheading', { height: 0, duration: 0 })
    .to('.heading-container', { top: 0 })
    .to('.heading-container', { position: 'relative' })
  return tl
}

export { homeEnter, headingHome, homeLeave }
