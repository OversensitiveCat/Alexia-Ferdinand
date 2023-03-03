import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const enterStudio = (container) => {
  let mm = gsap.matchMedia()
  mm.add(
    {
      isTabDesk: '(min-width: 768px)',
      isMobile: '(max-width: 767px)',
    },
    (context) => {
      let { isTabDesk, isMobile } = context.conditions

      // ALL
      let tl = gsap.timeline()
      let stars = gsap.utils.toArray('.studio-flower')
      let tlStar = gsap.timeline()
      tlStar.from(stars, {
        rotate: 360,
        ease: 'none',
        duration: 5,
        repeat: -1,
        transformOrigin: 'center',
      })

      const servicesBox = gsap.utils.toArray('.service'),
        servicesUn = servicesBox[0].querySelectorAll('.service-text'),
        servicesDeux = servicesBox[1].querySelectorAll('.service-text'),
        servicesTrois = servicesBox[2].querySelectorAll('.service-text')

      // TABLET & MOBILE
      if (isTabDesk) {
        gsap.set('.studio-content', { opacity: 0 })
        stars.forEach((star) => {
          star.addEventListener('mouseenter', () => {
            gsap.to(star, { scale: 1.1, duration: 0.3 })
            tlStar.timeScale(2)
          })
          star.addEventListener('mouseleave', () => {
            gsap.to(star, { scale: 1, duration: 0.3 })
            tlStar.timeScale(1)
          })
        })

        tl.from(container, {
          autoAlpha: 0,
          yPercent: 75,
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
            '.studio-flower.blue',
            { autoAlpha: 0, yPercent: 200, duration: 0.4 },
            '-=0.3'
          )
          .from('.service-subtitle', { autoAlpha: 0, yPercent: -100 }, '-=0.2')
          .from(
            servicesUn,
            { autoAlpha: 0, stagger: 0.2, yPercent: 50, duration: 0.4 },
            '-=0.25'
          )
          .from(
            servicesDeux,
            { autoAlpha: 0, stagger: 0.2, yPercent: 50, duration: 0.4 },
            '<'
          )
          .from(
            servicesTrois,
            { autoAlpha: 0, stagger: 0.2, yPercent: 50, duration: 0.4 },
            '<'
          )

        return tl
      }

      // MOBILE
      else if (isMobile) {
        gsap.set('.studio-content, .service', { opacity: 0 })

        tl.from(container, {
          autoAlpha: 0,
          yPercent: 75,
          duration: 1.2,
          ease: 'power1.inOut',
        })
          .from('.hamburger', {
            opacity: 0,
            yPercent: 200,
            duration: 0.6,
          })
          .from(
            '.highlight_paragraph',
            {
              opacity: 0,
              yPercent: -15,
              duration: 0.6,
              ease: 'power1.out',
            },
            '-=0.3'
          )
          .from(
            '.studio-flower.blue',
            { opacity: 0, yPercent: 200, duration: 0.5 },
            '-=0.2'
          )

        return tl
      }
    }
  )
}

export default enterStudio
