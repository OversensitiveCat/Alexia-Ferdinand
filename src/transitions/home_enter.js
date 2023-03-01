import { gsap } from 'gsap'
import SplitType from 'split-type'

gsap.set('.home, .main-heading', { autoAlpha: 0 })

const animationHome = (container) => {
  window.addEventListener('DOMContentLoaded', () => {
    let splitCharsHome = new SplitType('[split-chars-home]', {
      types: 'chars',
      tagName: 'span',
    })

    console.log(splitCharsHome)

    let homeHeading = document.querySelector('.main-heading')
    let charsHomeHeading = homeHeading.querySelectorAll('.char')
    let homeSubheading = document.querySelector('.home-subheading')
    let charsHomeSubheading = homeSubheading.querySelectorAll('.char')
    let enterButton = document.querySelector('.enter-button')

    let tl = gsap.timeline()

    tl.to('.home-hide', { autoAlpha: 0, delay: 0.5 })
      .to(container, { autoAlpha: 1 }, '<')
      .to('.loading-number', {
        innerText: 100,
        duration: 3,
        snap: { innerText: 1 },
        ease: 'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})',
      })
      .to('.loading-line', { width: '100%', duration: 3 }, '<')
      .from(
        charsHomeHeading,
        {
          yPercent: -120,
          duration: 0.3,
          autoAlpha: 0,
          stagger: { amount: 0.7 },
        },
        '<'
      )
      .from(
        charsHomeSubheading,
        { duration: 0.15, autoAlpha: 0, stagger: { amount: 0.6 } },
        '-=1.5'
      )
      .from(enterButton, { autoAlpha: 0, yPercent: 100, duration: 0.75 })

    gsap.set('.main-heading', { autoAlpha: 1 })

    enterButton.addEventListener('mouseover', () => {
      gsap.to(enterButton, { padding: '18px 21px', duration: 0.1 })
    })
    enterButton.addEventListener('mouseleave', () => {
      gsap.to(enterButton, { padding: '15px 18px', duration: 0.1 })
    })

    return tl
  })
}

const headingHome = () => {
  let tl = gsap.timeline()
  tl.to('.main-heading', { autoAlpha: 0 }).to('.main-heading', { bottom: 0 })
  return tl
}

const leaveFromHome = (container) => {
  return gsap.to(container, { autoAlpha: 0, duration: 0.5 })
}

export { animationHome, headingHome, leaveFromHome }
