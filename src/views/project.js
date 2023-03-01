import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

//// PROJECT ////

const siteButton = () => {
  const button = document.querySelector('.site-live-button')
  const tl = gsap.timeline({ repeat: -1 })

  tl.to(button, {
    rotate: 380,
    transformOrigin: 'center',
    duration: 4,
    ease: 'bounce.out',
    delay: 1,
  }).to(
    button,
    { rotate: 0, transformOrigin: 'center', duration: 4, ease: 'bounce.out' },
    '+=0.5'
  )
  return tl
}

const introProjet = () => {
  function project() {
    gsap.set('.description-project, .site-live-button', { autoAlpha: 1 })

    let tl = gsap.timeline({ paused: true })
    tl.from('.project-present', { autoAlpha: 0, yPercent: 30, duration: 0.6 })
      .from(
        '.project-services-heading',
        { autoAlpha: 0, yPercent: -100 },
        '-=0.2'
      )
      .from('.project-service', {
        autoAlpha: 0,
        stagger: 0.25,
        yPercent: 50,
        duration: 0.4,
      })
      .from(
        '.site-live-button',
        { autoAlpha: 0, yPercent: 50, duration: 0.6 },
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
  }

  return gsap.delayedCall(1, project)
}

const videosPlay = () => {
  let videos = gsap.utils.toArray('video')
  videos.forEach((video) => {
    ;(video.muted = true), video.play()
  })
}

const mediasProjet = () => {
  function mediasAnim() {
    const medias = gsap.utils.toArray('.project-media')
    medias.forEach((media) => {
      let tl = gsap.timeline({
        scrollTrigger: { trigger: media, start: 'top 70%' },
      })
      let content = media.querySelector('.media-content')
      tl.from(content, {
        yPercent: -120,
        scale: 1.2,
        transformOrigin: 'center',
        duration: 1.6,
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
        autoAlpha: 0,
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
        autoAlpha: 0,
        yPercent: 40,
        duration: 0.8,
      })
    })
  }

  return gsap.delayedCall(1.5, mediasAnim)
}

export { siteButton, mediasProjet, videosPlay, introProjet }
