import barba from '@barba/core'
import barbaPrefetch from '@barba/prefetch'

import {
  homeEnter,
  homeLeave,
  headingHome,
} from './transitions/home_transitions'
import enterStudio from './transitions/studio_enter'
import footer from './views/global/footer'
import { reset } from './views/global/general'
import { setLenis } from './views/global/lenis'
import studio from './views/studio'

barba.hooks.beforeEnter((data) => {
  window.addEventListener('unload', () => window.scrollTo(0, 0))
  reset(data)
})
barba.hooks.afterEnter((data) => {
  setLenis()
  footer(data)
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
      // leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        enterStudio(next.container)
      },
      once({ next }) {
        enterStudio(next.container)
      },
    },
    // {
    //   name: 'portfolio',
    //   to: { namespace: ['portfolio'] },
    //   beforeOnce: ({ next }) => {
    //     reset(next.container), rectifyHeight(next.container)
    //   },
    //   once({ next }) {
    //     enterPortfolio(next.container)
    //   },
    //   leave: ({ current }) => animationLeave(current.container),
    //   beforeEnter: ({ next }) => {
    //     reset(next.container), rectifyHeight(next.container)
    //   },
    //   enter({ next }) {
    //     enterPortfolio(next.container)
    //   },
    // },
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
