import barba from '@barba/core'
import { gsap } from 'gsap'

import { lenis } from './lenis'

const navMobile = (data) => {
  function navFunction() {
    if (data.next.namespace != 'home') {
      let mm = gsap.matchMedia()
      mm.add('(max-width: 767px)', () => {
        const lineOne = document.querySelector('.line-hamburger1')
        const lineTwo = document.querySelector('.line-hamburger2')

        let nav = gsap.timeline({ paused: true, ease: 'power2.in' })
        nav
          .to(lineOne, { top: '10px', duration: 0.25 })
          .to(lineTwo, { top: '40px', duration: 0.25 }, '<')
          .to('.main', { backgroundColor: '#f47224' }, '<')
          .to('.main-heading', { autoAlpha: 0 }, '<')
          .to('.card-background', { backgroundColor: '#f47224' }, '<')
          .to('.content', { autoAlpha: 0 }, '<')
          .to('.nav_link-container-mob', { scale: 1, duration: 0.1 })
          .to(
            lineOne,
            { top: '25px', width: '25px', height: '2px', duration: 0.2 },
            '+=0.1'
          )
          .to(
            lineTwo,
            { top: '25px', width: '25px', height: '2px', duration: 0.2 },
            '<'
          )
          .to(lineOne, { transformOrigin: 'center', rotate: 45, duration: 0.3 })
          .to(
            lineTwo,
            { transformOrigin: 'center', rotate: -45, duration: 0.3 },
            '<'
          )
          .from('.studio-nav-mob', { autoAlpha: 0, yPercent: 50 }, '<')
          .from('.portfolio-nav-mob', { autoAlpha: 0, yPercent: 50 }, '-=0.25')
          .from('.contact-nav-mob', { autoAlpha: 0, yPercent: 50 }, '-=0.25')
          .from(
            '.link-social-nav-mob',
            { autoAlpha: 0, yPercent: 50, stagger: 0.2 },
            '-=0.25'
          )

        function goToStudio() {
          barba.go('https://www.alexiaferdinand.fr/le-studio')
        }
        function goToPortfolio() {
          barba.go('https://www.alexiaferdinand.fr/portfolio')
        }

        document
          .querySelector('.hamburger-container')
          .addEventListener('click', () => {
            let progress = nav.progress()
            if (progress == 0) {
              const viewportHeight = window.innerHeight
              const headingHeight =
                document.querySelector('.main-heading').offsetHeight
              const height = viewportHeight - headingHeight - 80
              gsap.to('.nav_link-container-mob', { height: height })
              nav.play()
              lenis.stop()
            } else if (progress == 1) {
              nav.reverse()
              lenis.start()
            }
          })

        document
          .querySelector('.studio-nav-mob')
          .addEventListener('click', () => {
            nav.reverse()
            nav.eventCallback('onReverseComplete', () => {
              goToStudio()
              lenis.start()
            })
          })

        document
          .querySelector('.portfolio-nav-mob')
          .addEventListener('click', () => {
            nav.reverse()
            nav.eventCallback('onReverseComplete', () => {
              goToPortfolio()
              lenis.start()
            })
          })
      })
    } else return
  }
  return gsap.delayedCall(1, navFunction)
}

export default navMobile
