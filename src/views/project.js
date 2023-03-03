import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

//// PROJECT ////

const project = (data) => {
  function projectFunction() {
    if (
      data.next.namespace != 'home' &&
      data.next.namespace != 'studio' &&
      data.next.namespace != 'portfolio'
    ) {
      // Intro
      gsap.set('.description-project, .site-live-button', { opacity: 1 })

      let tl = gsap.timeline({ paused: true })
      tl.from('.project-present', { opacity: 0, yPercent: 30, duration: 0.6 })
        .from(
          '.project-services-heading',
          { opacity: 0, yPercent: -100 },
          '-=0.2'
        )
        .from('.project-service', {
          opacity: 0,
          stagger: 0.25,
          yPercent: 50,
          duration: 0.4,
        })
        .from(
          '.site-live-button',
          { opacity: 0, yPercent: 50, duration: 0.6 },
          '-=0.5'
        )

      ScrollTrigger.create({
        trigger: '.description-project',
        start: 'top bottom',
        onLeaveBack: () => {
          tl.progress(0)
          tl.pause()
        },
      })

      ScrollTrigger.create({
        trigger: '.description-project',
        start: 'center 85%',
        onEnter: () => tl.play(),
      })

      // Force videos to play
      let videos = gsap.utils.toArray('video')
      videos.forEach((video) => {
        ;(video.muted = true), video.play()
      })

      // Content anim
      const medias = gsap.utils.toArray('.project-media')
      medias.forEach((media) => {
        let tl = gsap.timeline({
          scrollTrigger: { trigger: media, start: 'top 70%' },
        })
        let content = media.querySelector('.media-content')
        tl.from(content, {
          opacity: 0,
          scale: 0.8,
          transformOrigin: 'center',
          duration: 1,
          ease: 'power2.out',
        })
      })

      const subTitles = gsap.utils.toArray('.project-sub')
      subTitles.forEach((sub) => {
        gsap.from(sub, {
          scrollTrigger: {
            trigger: sub,
            start: 'top 75%',
          },
          opacity: 0,
          yPercent: 60,
          duration: 0.6,
        })
      })

      const paras = gsap.utils.toArray('.project-paragraph')
      paras.forEach((para) => {
        gsap.from(para, {
          scrollTrigger: {
            trigger: para,
            start: 'top 75%',
          },
          opacity: 0,
          yPercent: 40,
          duration: 0.8,
        })
      })
    } else return
  }
  return gsap.delayedCall(1.5, projectFunction)
}

export default project
