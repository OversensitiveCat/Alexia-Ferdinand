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

  let tl = gsap.timeline()

  let mm = gsap.matchMedia()
  mm.add(
    {
      isTabDesk: '(min-width: 768px)',
      isMobile: '(max-width: 767px)',
    },
    (context) => {
      let { isTabDesk, isMobile } = context.conditions

      if (isTabDesk) {
        tl.from(container, {
          autoAlpha: 0,
          yPercent: 75,
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
            charsTitleProject,
            {
              autoAlpha: 0,
              scale: 0.5,
              transformOrigin: 'bottom left',
              duration: 0.2,
              ease: 'power2.out',
              stagger: { amount: 0.6 },
            },
            '-=0.5'
          )

        return tl
      } else if (isMobile) {
        tl.from(container, {
          autoAlpha: 0,
          yPercent: 40,
          duration: 1.2,
          ease: 'power1.out',
        })
          .from('.hamburger', {
            opacity: 0,
            yPercent: 200,
            duration: 0.6,
          })
          .from(
            charsTitleProject,
            {
              autoAlpha: 0,
              scale: 0.5,
              transformOrigin: 'bottom left',
              duration: 0.2,
              ease: 'power2.out',
              stagger: { amount: 0.6 },
            },
            '-=0.3'
          )

        return tl
      }
    }
  )
}

export default enterProject
