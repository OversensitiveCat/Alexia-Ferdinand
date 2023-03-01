import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'

import enterAbout from './transitions/about_enter'
import {
  animationHome,
  headingHome,
  leaveFromHome,
} from './transitions/home_enter'
import enterPortfolio from './transitions/portfolio_enter'
import enterProject from './transitions/project_enter'
import { about, servicesAnimation, faqAnimation } from './views/about'
import footer from './views/global/footer'
import {
  setHeading,
  animationLeave,
  reset,
  rectifyHeight,
  color,
} from './views/global/general'
import { setLenis } from './views/global/lenis'
import navMobile from './views/global/navMobile'
import { marquee, flowerPortfolio, nextPortfolio } from './views/portfolio'
import {
  siteButton,
  mediasProjet,
  videosPlay,
  introProjet,
} from './views/project'

barba.hooks.beforeLeave((data) => {
  color(data)
})

barba.hooks.beforeEnter(() => {
  window.addEventListener('resize', () => rectifyHeight())
})

barba.hooks.beforeOnce(() => {
  rectifyHeight(), window.addEventListener('resize', () => rectifyHeight())
})

barba.hooks.beforeEnter(() => {
  setLenis()
})

barba.use(barbaPrefetch)

barba.init({
  timeout: 4000,
  debug: true,
  views: [
    {
      namespace: 'about',
      afterEnter() {
        about(), servicesAnimation(), faqAnimation(), navMobile(), footer()
      },
    },
    {
      namespace: 'portfolio',
      afterEnter() {
        nextPortfolio(), flowerPortfolio(), marquee(), navMobile(), footer()
      },
    },
    {
      namespace: 'project',
      afterEnter() {
        introProjet(),
          siteButton(),
          mediasProjet(),
          videosPlay(),
          navMobile(),
          footer()
      },
    },
  ],
  transitions: [
    {
      name: 'enter-home',
      to: { namespace: ['home'] },
      once({ next }) {
        animationHome(next.container)
      },
      beforeEnter: ({ next }) => headingHome(next.container),
      enter({ next }) {
        animationHome(next.container)
      },
    },
    {
      name: 'leave-home',
      from: { namespace: ['home'] },
      to: { namespace: ['about'] },
      leave: ({ current }) => leaveFromHome(current.container),
      beforeEnter({ next }) {
        rectifyHeight(next.container), setHeading(next.container)
      },
      enter({ next }) {
        enterAbout(next.container)
      },
    },
    {
      name: 'about',
      to: { namespace: ['about'] },
      beforeOnce: ({ next }) => {
        reset(next.container), rectifyHeight(next.container)
      },
      once({ next }) {
        enterAbout(next.container)
      },
      leave: ({ current }) => animationLeave(current.container),
      beforeEnter: ({ next }) => {
        reset(next.container), rectifyHeight(next.container)
      },
      enter({ next }) {
        enterAbout(next.container)
      },
    },
    {
      name: 'portfolio',
      to: { namespace: ['portfolio'] },
      beforeOnce: ({ next }) => {
        reset(next.container), rectifyHeight(next.container)
      },
      once({ next }) {
        enterPortfolio(next.container)
      },
      leave: ({ current }) => animationLeave(current.container),
      beforeEnter: ({ next }) => {
        reset(next.container), rectifyHeight(next.container)
      },
      enter({ next }) {
        enterPortfolio(next.container)
      },
    },
    {
      name: 'project',
      to: { namespace: ['project'] },
      beforeOnce: ({ next }) => {
        reset(next.container), rectifyHeight(next.container)
      },
      once({ next }) {
        enterProject(next.container)
      },
      leave: ({ current }) => animationLeave(current.container),
      beforeEnter: ({ next }) => {
        reset(next.container), rectifyHeight(next.container)
      },
      enter({ next }) {
        enterProject(next.container)
      },
    },
  ],
})
