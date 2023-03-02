import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const portfolio = () => {
  function portfolioFunction() {
    gsap.set('#portfolio-raw2', { autoAlpha: 1 })

    let itemsRawTwo = gsap.utils.toArray('#portfolio-raw2 > .portfolio-item')
    let flowersRawTwo = gsap.utils.toArray('#portfolio-raw2 > .flower-project')

    const tl = gsap.timeline({ paused: true })
    tl.from(
      itemsRawTwo,
      { opacity: 0, yPercent: 30, duration: 0.8, stagger: { amount: 0.6 } },
      '-=0.3'
    ).from(
      flowersRawTwo,
      {
        autoAlpha: 0,
        yPercent: 100,
        rotate: 180,
        stagger: 0.2,
        transformOrigin: 'center',
      },
      '-=0.5'
    )

    ScrollTrigger.create({
      trigger: '#portfolio-raw2',
      start: 'top bottom',
      onLeaveBack: () => {
        tl.progress(0)
        tl.pause()
      },
    })

    ScrollTrigger.create({
      trigger: '#portfolio-raw2',
      start: 'center 80%',
      onEnter: () => tl.play(),
    })

    //// FLOWER portfolio

    let flowers = gsap.utils.toArray('.flower-project')

    flowers.forEach((flower) => {
      flower.addEventListener('mouseenter', () => {
        gsap.to(flower, { rotate: 180, duration: 2, ease: 'power4.out' })
      })
      flower.addEventListener('mouseleave', () => {
        gsap.to(flower, { rotate: -180, duration: 2, ease: 'power4.out' })
      })
    })

    //// MARQUEE portfolio

    let marquees = gsap.utils.toArray('.marquee-project-item')
    marquees.forEach((marquee) => {
      gsap
        .to(marquee, {
          xPercent: -100,
          repeat: -1,
          duration: 20,
          ease: 'linear',
        })
        .totalProgress(0.5)
    })
  }
  return gsap.delayedCall(1, portfolioFunction)
}

export default portfolio
