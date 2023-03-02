import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'

import { reset } from './transitions/global'
import { animationLeave } from './transitions/global'
import { color } from './transitions/global'
import {
  homeEnter,
  homeLeave,
  headingHome,
} from './transitions/home_transitions'
import enterPortfolio from './transitions/portfolio_enter'
import enterStudio from './transitions/studio_enter'
import footer from './views/global/footer'
import { setLenis } from './views/global/lenis'
import navMobile from './views/global/navMobile'
import portfolio from './views/portfolio'
import studio from './views/studio'

barba.hooks.leave((data) => {
  window.scrollTo(0, 0)
  color(data)
})

barba.hooks.beforeEnter((data) => {
  window.addEventListener('unload', () => window.scrollTo(0, 0))
  reset(data)
})
barba.hooks.afterEnter((data) => {
  setLenis()
  footer(data)
  navMobile(data)
})

barba.use(barbaPrefetch)

barba.init({
  timeout: 4000,
  debug: true,
  views: [
    {
      namespace: 'studio',
      afterEnter() {
        studio()
      },
    },
    {
      namespace: 'portfolio',
      afterEnter() {
        portfolio()
      },
    },
  ],
  transitions: [
    {
      name: 'enter-home',
      to: { namespace: ['home'] },
      once() {
        homeEnter()
      },
      beforeEnter: () => headingHome(),
      enter() {
        homeEnter()
      },
    },
    {
      name: 'home-to-studio',
      from: { namespace: ['home'] },
      to: { namespace: ['studio'] },
      leave: ({ current }) => homeLeave(current.container),
      enter({ next }) {
        enterStudio(next.container)
      },
    },
    {
      name: 'studio',
      to: { namespace: ['studio'] },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        enterStudio(next.container)
      },
      once({ next }) {
        enterStudio(next.container)
      },
    },
    {
      name: 'portfolio',
      to: { namespace: ['portfolio'] },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        enterPortfolio(next.container)
      },
      once({ next }) {
        enterPortfolio(next.container)
      },
    },
    // {
    //   name: 'project',
    //   to: { namespace: ['project'] },
    //   beforeOnce: ({ next }) => {
    //     reset(next.container), rectifyHeight(next.container)
    //   },
    //   once({ next }) {
    //     enterProject(next.container)
    //   },
    //   leave: ({ current }) => animationLeave(current.container),
    //   beforeEnter: ({ next }) => {
    //     reset(next.container), rectifyHeight(next.container)
    //   },
    //   enter({ next }) {
    //     enterProject(next.container)
    //   },
    // },
  ],
})
