import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const animationLeave = (container) => {
  return gsap.to(container, {
    autoAlpha: 0,
    yPercent: 75,
    duration: 0.8,
    ease: 'power1.inOut',
  })
}

const reset = (data) => {
  if (data.next.namespace != 'home') {
    let tl = gsap.timeline()
    tl.set('.home-subheading', { opacity: 0, height: 0, duration: 0 }).set(
      '.heading-container',
      { position: 'relative' }
    )
    return tl
  } else return
}

const color = (data) => {
  let parser = new DOMParser()
  let dom = parser.parseFromString(data.next.html, 'text/html')
  let main = dom.querySelector('.main')
  let background = main.getAttribute('data-background')
  let color = main.getAttribute('data-color')
  let tl = gsap.timeline()
  tl.to('body', { backgroundColor: background }).to(
    '.main-heading',
    {
      color: color,
    },
    '<'
  )
  return tl
}

export { animationLeave, reset, color }
