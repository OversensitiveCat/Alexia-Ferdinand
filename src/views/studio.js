import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const studio = () => {
  function studioFunction() {
    gsap.set('.studio-content', { opacity: 1 })

    const titles = new SplitType('[split-letters]', {
      types: 'chars',
      tagName: 'span',
    })

    titles.elements.forEach((title) => {
      let chars = title.querySelectorAll('.char')
      let tl = gsap.timeline({ paused: true })
      tl.from(chars, {
        autoAlpha: 0,
        yPercent: 40,
        duration: 0.2,
        ease: 'power2.out',
        stagger: { amount: 0.5 },
      })

      ScrollTrigger.create({
        trigger: title,
        start: 'top bottom',
        onLeaveBack: () => {
          tl.progress(0), tl.pause()
        },
      })
      ScrollTrigger.create({
        trigger: title,
        start: 'center 85%',
        onEnter: () => tl.play(),
      })
    })

    const divs = gsap.utils.toArray('[data-anim]')
    divs.forEach((div) => {
      let tl = gsap.timeline({ paused: true })
      if (div.dataset.anim == 1) {
        tl.from(div, {
          autoAlpha: 0,
          yPercent: 30,
          duration: 0.8,
          ease: 'power2.out',
        })

        ScrollTrigger.create({
          trigger: div,
          start: 'top bottom',
          onLeaveBack: () => {
            tl.progress(0), tl.pause()
          },
        })
        ScrollTrigger.create({
          trigger: div,
          start: 'center 85%',
          onEnter: () => tl.play(),
        })
      } else return
    })

    let mm = gsap.matchMedia()
    // DESKTOP
    mm.add('(min-width: 768px)', () => {
      const projects = gsap.utils.toArray('.last-project')
      projects.forEach((project) => {
        let arrow = project.querySelector('.arrow-project')
        project.addEventListener('mouseenter', () => {
          gsap.to(arrow, {
            scale: 1.1,
            yPercent: -10,
            xPercent: 10,
            duration: 0.3,
          })
        })
        project.addEventListener('mouseleave', () => {
          gsap.to(arrow, {
            scale: 1,
            yPercent: 0,
            xPercent: 0,
            duration: 0.3,
          })
        })
      })

      const link = document.querySelector('.link-portfolio')
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { color: '#464e6a', duration: 0.2, ease: 'none' })
      })
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { color: '#f47224', duration: 0.2, ease: 'none' })
      })
    })

    // MOBILE

    mm.add('(max-width: 767px)', () => {
      gsap.set('.studio-content, .service', { opacity: 1 })
      const servicesBox = gsap.utils.toArray('.service')
      servicesBox.forEach((box) => {
        let title = box.querySelector('.service-subtitle')
        let service = box.querySelectorAll('.service-text')
        let tl = gsap.timeline({ paused: true })
        tl.from(title, {
          autoAlpha: 0,
          yPercent: -30,
          duration: 0.8,
          ease: 'power2.out',
        }).from(
          service,
          {
            autoAlpha: 0,
            yPercent: 30,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
          },
          '-=0.4'
        )

        ScrollTrigger.create({
          trigger: box,
          start: 'top bottom',
          onLeaveBack: () => {
            tl.progress(0), tl.pause()
          },
        })
        ScrollTrigger.create({
          trigger: box,
          start: 'center 85%',
          onEnter: () => tl.play(),
        })
      })
    })
  }

  return gsap.delayedCall(1.5, studioFunction)
}

export default studio
