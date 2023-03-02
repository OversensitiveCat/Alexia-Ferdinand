import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const animationLeave = (container) => {
  return gsap.to(container, {
    autoAlpha: 0,
    yPercent: 25,
    duration: 1,
    ease: 'power1.in',
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
  let container = data.next.container
  console.log(container)
  console.log(background, color)

  let parser = new DOMParser()
  let dom = parser.parseFromString(data.next.html, 'text/html')
  let main = dom.querySelector('.main')
  let background = main.getAttribute('data-background')
  let color = main.getAttribute('data-color')
  gsap.to('body', { backgroundColor: background })
  gsap.to('.main-heading', { color: color })
}

export { animationLeave, reset, color }
