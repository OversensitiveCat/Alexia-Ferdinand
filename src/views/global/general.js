import { gsap } from 'gsap'

const setHeading = () => {
  return gsap.to('.main-heading', {
    top: 0,
    autoAlpha: 1,
    duration: 1,
    ease: 'power4.out',
  })
}

const animationLeave = (container) => {
  return gsap.to(container, { autoAlpha: 0, yPercent: 50, duration: 1 })
}

const reset = () => {
  let tl = gsap.timeline()
  tl.set('.main-heading', { top: 0, autoAlpha: 1 }).to(window, { scrollTo: 0 })
  return tl
}
const rectifyHeight = () => {
  let headerHeight = document.querySelector('.main-heading').offsetHeight
  return gsap.set('.empty-header', { height: headerHeight, duration: 0 })
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

export { setHeading, animationLeave, reset, rectifyHeight, color }
