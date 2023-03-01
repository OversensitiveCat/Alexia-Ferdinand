import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const nextPortfolio = () => {
  function portfolio() {
    gsap.set('#portfolio-raw2', { autoAlpha: 1 })

    let itemsRawTwo = gsap.utils.toArray('#portfolio-raw2 > .portfolio-item')
    let flowersRawTwo = gsap.utils.toArray('#portfolio-raw2 > .flower-project')

    const tl = gsap.timeline({ paused: true })
    tl.from(
      itemsRawTwo,
      { autoAlpha: 0, yPercent: 50, duration: 0.8, stagger: { amount: 0.8 } },
      '-=0.3'
    ).from(flowersRawTwo, {
      autoAlpha: 0,
      yPercent: 100,
      rotate: 180,
      stagger: 0.2,
      transformOrigin: 'center',
    })

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
  }

  return gsap.delayedCall(2, portfolio)
}

//// FLOWER portfolio

const flowerPortfolio = () => {
  let flowers = gsap.utils.toArray('.flower-project')

  flowers.forEach((flower) => {
    flower.addEventListener('mouseenter', () => {
      gsap.to(flower, { rotate: 180, duration: 2, ease: 'power4.out' })
    })
    flower.addEventListener('mouseleave', () => {
      gsap.to(flower, { rotate: -180, duration: 2, ease: 'power4.out' })
    })
  })
}

//// MARQUEE portfolio

const marquee = () => {
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

export { marquee, flowerPortfolio, nextPortfolio }
