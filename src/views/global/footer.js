import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footer = (data) => {
  function footerAnim() {
    if (data.next.namespace != 'home') {
      let mailLink = document.querySelector('.mail-link')
      gsap.set(mailLink, { autoAlpha: 1 })

      let tl = gsap.timeline({ paused: true })
      tl.from(mailLink, { autoAlpha: 0, yPercent: 75, duration: 0.75 }).from(
        '.flower-mail',
        { rotate: -90, transformOrigin: 'center', duration: 0.75 },
        '<'
      )

      ScrollTrigger.create({
        trigger: '.card-background',
        start: 'bottom bottom',
        onLeaveBack: () => {
          tl.progress(0)
          tl.pause()
        },
      })

      ScrollTrigger.create({
        trigger: '.card-background',
        start: 'bottom 75%',
        onEnter: () => tl.play(),
      })

      let tlMail = gsap.timeline({ paused: true })
      tlMail
        .to('.mail-underline', {
          width: '100%',
          duration: 0.5,
          ease: 'power4.in',
        })
        .to(
          '.flower-mail',
          {
            scale: 1.2,
            rotate: 90,
            transformOrigin: 'center',
            duration: 0.5,
            ease: 'power1.in',
          },
          '<'
        )

      mailLink.addEventListener('mouseenter', () => tlMail.play())
      mailLink.addEventListener('mouseleave', () => tlMail.reverse())
    } else return
  }

  return gsap.delayedCall(1.5, footerAnim)
}

export default footer
