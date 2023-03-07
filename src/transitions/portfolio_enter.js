import { gsap } from 'gsap'
import SplitType from 'split-type'

const enterPortfolio = (container) => {
  let portfolioTitle = new SplitType('.portfolio-title', {
    types: 'chars',
    tagName: 'span',
  })

  gsap.set('#portfolio-raw2', { opacity: 0 })

  let itemsRawOne = gsap.utils.toArray('#portfolio-raw1 > .portfolio-item')
  let flowersRawOne = gsap.utils.toArray('#portfolio-raw1 > .flower-project')

  const tl = gsap.timeline()

  let mm = gsap.matchMedia()
  mm.add(
    {
      isTabDesk: '(min-width: 768px)',
      isMobile: '(max-width: 767px)',
    },
    (context) => {
      let { isTabDesk, isMobile } = context.conditions

      tl.from(container, {
        autoAlpha: 0,
        yPercent: isTabDesk ? 75 : 40,
        duration: 1.2,
        ease: 'power1.inOut',
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
          portfolioTitle.chars,
          {
            autoAlpha: 0,
            yPercent: 50,
            duration: 0.2,
            ease: 'power2.out',
            stagger: { amount: 1 },
          },
          '<'
        )
        .from(
          itemsRawOne,
          {
            opacity: 0,
            yPercent: isMobile ? 20 : 30,
            duration: 0.8,
            stagger: { amount: 0.6 },
          },
          '-=0.8'
        )
        .from(
          flowersRawOne,
          {
            autoAlpha: 0,
            yPercent: 100,
            rotate: 180,
            stagger: 0.2,
            transformOrigin: 'center',
          },
          '-=0.5'
        )
    }
  )

  return tl
}

export default enterPortfolio
