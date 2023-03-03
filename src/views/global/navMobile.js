import barba from '@barba/core'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

import { lenis } from './lenis'

const navMobile = (data) => {
  function navFunction() {
    if (data.next.namespace != 'home') {
      let mm = gsap.matchMedia()
      mm.add('(max-width: 767px)', () => {
        let main = false
        ScrollTrigger.create({
          trigger: '.main',
          start: 'top top',
          onEnter: () => {
            main = true
          },
          onLeaveBack: () => {
            main = false
          },
        })
        function scroll() {
          if (main === false) {
            gsap.to(window, { scrollTo: '.main' })
          } else return
        }

        const lineOne = document.querySelector('.hamburger-line1')
        const lineTwo = document.querySelector('.hamburger-line2')
        const li = gsap.utils.toArray('.list-nav-mob > li')
        let height = window.innerHeight
        let nav = gsap.timeline({ paused: true })
        nav
          .set('.nav-mobile', { opacity: 1 })
          .set(
            '.menu-mobile-container',
            { width: '100%', height: height, marginBottom: -height },
            0
          )
          .to(lineOne, { top: '15px', duration: 0.2 }, 0)
          .to(lineTwo, { top: '49px', duration: 0.2 }, 0)
          .to('.menu-mobile-container', { backgroundColor: '#f47224' }, 0)
          .to(lineOne, { top: '32px', width: '36px', duration: 0.2 }, '+=0.1')
          .to(lineTwo, { top: '32px', width: '36px', duration: 0.2 }, '<')
          .to(lineOne, { transformOrigin: 'center', rotate: 45, duration: 0.3 })
          .to(
            lineTwo,
            { transformOrigin: 'center', rotate: -45, duration: 0.3 },
            '<'
          )
          .from(li, { autoAlpha: 0, yPercent: 50, stagger: 0.25 }, '<')
          .from(
            '.link-social-nav-mob',
            { autoAlpha: 0, yPercent: 50, stagger: 0.2 },
            '-=0.25'
          )

        document.querySelector('.hamburger').addEventListener('click', () => {
          let progress = nav.progress()
          if (progress == 0) {
            scroll()
            nav.play()
            lenis.stop()
          } else {
            scroll()
            nav.reverse()
            lenis.start()
          }
        })

        function goToStudio() {
          barba.go('https://www.alexiaferdinand.fr/studio')
        }
        function goToPortfolio() {
          barba.go('https://www.alexiaferdinand.fr/portfolio')
        }

        li[0].addEventListener('click', () => {
          nav.reverse()
          nav.eventCallback('onReverseComplete', () => {
            goToStudio()
            lenis.start()
          })
        })

        li[1].addEventListener('click', () => {
          nav.reverse()
          nav.eventCallback('onReverseComplete', () => {
            goToPortfolio()
            lenis.start()
          })
        })
      })
    } else return
  }
  return gsap.delayedCall(2, navFunction)
}

export default navMobile
