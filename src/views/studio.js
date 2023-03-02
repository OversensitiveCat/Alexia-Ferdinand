import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const studio = () => {
  function studioFunction() {
    gsap.set('#services, #faq', { opacity: 1 })
    let mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: '(min-width: 992px)',
        isTabDesk: '(min-width: 768px)',
        isTablet: '(max-width: 991px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        let { isDesktop, isTabDesk, isTablet, isMobile } = context.conditions

        if (isDesktop) {
          console.log('Desktop')
        }
        if (isDesktop == false) {
          console.log('Not desktop')
        }
        if (isTablet && isMobile == false) {
          console.log('Tablet')
        }
        if (isMobile) {
          console.log('Mobile')
        }
        if (isTabDesk) {
          console.log('Tablet & Desktop')
        }

        // eslint-disable-next-line no-unused-vars
        const titles = new SplitType('[split-letters]', {
          types: 'chars',
          tagName: 'span',
        })
        // eslint-disable-next-line no-unused-vars
        const words = new SplitType('[split-words]', {
          types: 'words',
          tagName: 'span',
        })

        if (isTabDesk) {
          // TIMELINE SERVICES

          let tlServ = gsap.timeline({ paused: true })
          tlServ
            .from('.services-title .char', {
              autoAlpha: 0,
              yPercent: 60,
              duration: 0.2,
              ease: 'power2.out',
              stagger: { amount: 0.6 },
            })
            .from(
              '.service-subtitle',
              { autoAlpha: 0, yPercent: -100 },
              '-=0.2'
            )
            .from(
              '.service-text1',
              { autoAlpha: 0, stagger: 0.2, yPercent: 50, duration: 0.4 },
              '-=0.25'
            )
            .from(
              '.service-text2',
              { autoAlpha: 0, stagger: 0.2, yPercent: 50, duration: 0.4 },
              '<'
            )
            .from(
              '.service-text3',
              { autoAlpha: 0, stagger: 0.2, yPercent: 50, duration: 0.4 },
              '<'
            )
            .from('.outils-title', {
              autoAlpha: 0,
              yPercent: 50,
              duration: 0.7,
            })
            .from('.outils .word', {
              autoAlpha: 0,
              xPercent: 30,
              stagger: { amount: 1 },
            })

          ScrollTrigger.create({
            trigger: '.services-title',
            start: 'top bottom',
            onLeaveBack: () => {
              tlServ.progress(0), tlServ.pause()
            },
          })

          ScrollTrigger.create({
            trigger: '.services-title',
            start: 'center 85%',
            onEnter: () => tlServ.play(),
          })

          // TIMELINE FAQ

          let tlFaq = gsap.timeline({ paused: true })
          tlFaq
            .from('.faq-title .char', {
              autoAlpha: 0,
              yPercent: 60,
              duration: 0.2,
              ease: 'power2.out',
              stagger: { amount: 0.6 },
            })
            .from('.faq-description', {
              opacity: 0,
              yPercent: 100,
              duration: 1,
              stagger: 0.2,
            })
            .from('.line', { opacity: 0, yPercent: 30, duration: 0.8 }, '-=0.5')
            .from(
              '#numOne',
              { opacity: 0, duration: 0.6, yPercent: 100 },
              '-=0.5'
            )
            .from(
              '#faqOne .word',
              { opacity: 0, duration: 0.3, stagger: { amount: 1.5 } },
              '-=0.3'
            )
            .from(
              '#numTwo',
              { opacity: 0, duration: 0.6, yPercent: 100 },
              '+=0.2'
            )
            .from(
              '#faqTwo .word',
              { opacity: 0, duration: 0.3, stagger: { amount: 1.5 } },
              '-=0.3'
            )
            .from(
              '#numThree',
              { opacity: 0, duration: 0.6, yPercent: 100 },
              '+=0.2'
            )
            .from(
              '#faqThree .word',
              { opacity: 0, duration: 0.3, stagger: { amount: 1.5 } },
              '-=0.3'
            )

          ScrollTrigger.create({
            trigger: '.faq-title',
            start: 'top bottom',
            onLeaveBack: () => {
              tlFaq.progress(0)
              tlFaq.pause()
            },
          })

          ScrollTrigger.create({
            trigger: '.faq-title',
            start: 'center 80%',
            onEnter: () => tlFaq.play(),
          })
        }

        // TABLET && MOBILE
        if (isDesktop == false) {
          console.log('Tablet & Mobile')
        }
        //   // TITRE
        //   const charsTitleService = gsap.utils.toArray('.services-title .char')

        //   let tlTitle = gsap.timeline({ paused: true })
        //   tlTitle.from(charsTitleService, {
        //     autoAlpha: 0,
        //     yPercent: 60,
        //     duration: 0.2,
        //     ease: 'power2.out',
        //     stagger: { amount: 0.6 },
        //   })

        //   ScrollTrigger.create({
        //     trigger: charsTitleService,
        //     start: 'top bottom',
        //     onLeaveBack: () => {
        //       tlTitle.progress(0), tlTitle.pause()
        //     },
        //   })
        //   ScrollTrigger.create({
        //     trigger: charsTitleService,
        //     start: 'center 85%',
        //     onEnter: () => tlTitle.play(),
        //   })

        //   // TITRE MOB
        //   let tlTitleMob = gsap.timeline({ paused: true })
        //   tlTitleMob.from('.services-title-mob', {
        //     autoAlpha: 0,
        //     yPercent: 60,
        //     duration: 0.8,
        //     ease: 'power2.out',
        //   })

        //   ScrollTrigger.create({
        //     trigger: '.services-title-mob',
        //     start: 'top bottom',
        //     onLeaveBack: () => {
        //       tlTitleMob.progress(0), tlTitleMob.pause()
        //     },
        //   })
        //   ScrollTrigger.create({
        //     trigger: '.services-title-mob',
        //     start: 'center 85%',
        //     onEnter: () => tlTitleMob.play(),
        //   })

        //   // SERVICES
        //   let tlWeb = gsap.timeline({ paused: true })
        //   tlWeb
        //     .from('#web-subtitle', { autoAlpha: 0, yPercent: -100 })
        //     .from('.service-text1', {
        //       autoAlpha: 0,
        //       stagger: 0.2,
        //       yPercent: 50,
        //       duration: 0.4,
        //     })

        //   ScrollTrigger.create({
        //     trigger: '#web-subtitle',
        //     start: 'top bottom',
        //     onLeaveBack: () => {
        //       tlWeb.progress(0)
        //       tlWeb.pause()
        //     },
        //   })

        //   ScrollTrigger.create({
        //     trigger: '#web-subtitle',
        //     start: 'center 85%',
        //     onEnter: () => tlWeb.play(),
        //   })

        //   let tlGra = gsap.timeline({ paused: true })
        //   tlGra
        //     .from('#graphic-subtitle', { autoAlpha: 0, yPercent: -100 })
        //     .from('.service-text2', {
        //       autoAlpha: 0,
        //       stagger: 0.2,
        //       yPercent: 50,
        //       duration: 0.4,
        //     })

        //   ScrollTrigger.create({
        //     trigger: '#graphic-subtitle',
        //     start: 'top bottom',
        //     onLeaveBack: () => {
        //       tlGra.progress(0)
        //       tlGra.pause()
        //     },
        //   })

        //   ScrollTrigger.create({
        //     trigger: '#graphic-subtitle',
        //     start: 'center 85%',
        //     onEnter: () => tlGra.play(),
        //   })

        //   let tlPho = gsap.timeline({ paused: true })
        //   tlPho
        //     .from('#photo-subtitle', { autoAlpha: 0, yPercent: -100 })
        //     .from('.service-text3', {
        //       autoAlpha: 0,
        //       stagger: 0.2,
        //       yPercent: 50,
        //       duration: 0.4,
        //     })

        //   ScrollTrigger.create({
        //     trigger: '#photo-subtitle',
        //     start: 'top bottom',
        //     onLeaveBack: () => {
        //       tlPho.progress(0)
        //       tlPho.pause()
        //     },
        //   })

        //   ScrollTrigger.create({
        //     trigger: '#photo-subtitle',
        //     start: 'center 85%',
        //     onEnter: () => tlPho.play(),
        //   })

        //   let serviceFlower = gsap.timeline({ paused: true })
        //   serviceFlower.from('.para-studio-flower2', {
        //     autoAlpha: 0,
        //     yPercent: 50,
        //   })

        //   ScrollTrigger.create({
        //     trigger: '.para-studio-flower2',
        //     start: 'top bottom',
        //     onLeaveBack: () => {
        //       serviceFlower.progress(0)
        //       serviceFlower.pause()
        //     },
        //   })
        //   ScrollTrigger.create({
        //     trigger: '.para-studio-flower2',
        //     start: 'center 85%',
        //     onEnter: () => serviceFlower.play(),
        //   })

        //   // OUTILS

        //   let wordsOutils = gsap.utils.toArray('.outils .word')
        //   let tlOutils = gsap.timeline({ paused: true })
        //   tlOutils
        //     .from('.outils-title', {
        //       autoAlpha: 0,
        //       yPercent: 50,
        //       duration: 0.7,
        //     })
        //     .from(
        //       wordsOutils,
        //       { autoAlpha: 0, xPercent: 30, stagger: { amount: 1 } },
        //       '-=0.3'
        //     )

        //   ScrollTrigger.create({
        //     trigger: '.outils-title',
        //     start: 'top bottom',
        //     onLeaveBack: () => {
        //       tlOutils.progress(0)
        //       tlOutils.pause()
        //     },
        //   })

        //   ScrollTrigger.create({
        //     trigger: '.outils-title',
        //     start: 'center 85%',
        //     onEnter: () => tlOutils.play(),
        //   })

        // MOBILE
        if (isMobile) {
          console.log('Mobile')
        }
        //   // TITRE
        //   const titleFaq = document.querySelector('.faq-title')
        //   let charsTitleFaq = titleFaq.querySelectorAll('.char')

        //   let tlTitleFaq = gsap.timeline({ paused: true })
        //   tlTitleFaq.from(charsTitleFaq, {
        //     autoAlpha: 0,
        //     yPercent: 60,
        //     duration: 0.2,
        //     ease: 'power2.out',
        //     stagger: { amount: 0.6 },
        //   })

        //   ScrollTrigger.create({
        //     trigger: titleFaq,
        //     start: 'top bottom',
        //     onLeaveBack: () => {
        //       tlTitleFaq.progress(0)
        //       tlTitleFaq.pause()
        //     },
        //   })

        //   ScrollTrigger.create({
        //     trigger: titleFaq,
        //     start: 'center 80%',
        //     onEnter: () => tlTitleFaq.play(),
        //   })

        //   // TITRE MOB
        //   const titleFaqMob = document.querySelector('.faq-title-mob')

        //   let tlTitleFaqMob = gsap.timeline({ paused: true })
        //   tlTitleFaqMob.from(titleFaqMob, {
        //     autoAlpha: 0,
        //     yPercent: 40,
        //     duration: 0.8,
        //     ease: 'power2.out',
        //   })

        //   ScrollTrigger.create({
        //     trigger: titleFaqMob,
        //     start: 'top bottom',
        //     onLeaveBack: () => {
        //       tlTitleFaqMob.progress(0)
        //       tlTitleFaqMob.pause()
        //     },
        //   })
        //   ScrollTrigger.create({
        //     trigger: titleFaqMob,
        //     start: 'center 80%',
        //     onEnter: () => tlTitleFaqMob.play(),
        //   })

        //   // DESCRIPTION
        //   const descs = gsap.utils.toArray('.faq-description')
        //   descs.forEach((desc) => {
        //     let tlDescFaq = gsap.timeline({ paused: true })
        //     tlDescFaq.from(desc, {
        //       opacity: 0,
        //       yPercent: 50,
        //       duration: 1,
        //       stagger: 0.2,
        //     })

        //     ScrollTrigger.create({
        //       trigger: desc,
        //       start: 'top bottom',
        //       onLeaveBack: () => {
        //         tlDescFaq.progress(0), tlDescFaq.pause()
        //       },
        //     })
        //     ScrollTrigger.create({
        //       trigger: desc,
        //       start: 'center 80%',
        //       onEnter: () => tlDescFaq.play(),
        //     })
        //   })

        //   // FAQPARA
        //   const paras = gsap.utils.toArray('.faq-div')
        //   paras.forEach((para) => {
        //     let number = para.querySelector('.number-orange')
        //     let text = para.querySelector('.faq-paragraph')
        //     let words = text.querySelectorAll('.word')
        //     let tlparaFaq = gsap.timeline({ paused: true })

        //     tlparaFaq
        //       .from(number, { opacity: 0, duration: 0.6, yPercent: 100 })
        //       .from(
        //         words,
        //         { opacity: 0, duration: 0.3, stagger: { amount: 1.5 } },
        //         '-=0.3'
        //       )

        //     ScrollTrigger.create({
        //       trigger: para,
        //       start: 'top bottom',
        //       onLeaveBack: () => {
        //         tlparaFaq.progress(0), tlparaFaq.pause()
        //       },
        //     })
        //     ScrollTrigger.create({
        //       trigger: para,
        //       start: 'center 80%',
        //       onEnter: () => tlparaFaq.play(),
        //     })
        //   })
        // }
      }
    )
  }

  return gsap.delayedCall(1.5, studioFunction)
}

export default studio
