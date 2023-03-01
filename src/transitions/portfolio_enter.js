import { gsap } from 'gsap'
import SplitType from 'split-type'

const enterPortfolio = (container) => {
  let splitChars = new SplitType('[split-chars]', {
    types: 'chars',
    tagName: 'span',
  })

  console.log(splitChars)

  gsap.set('#portfolio-raw2', { opacity: 0 })

  let charsPortfolioTitle = gsap.utils.toArray('.portfolio-title .char')
  let itemsRawOne = gsap.utils.toArray('#portfolio-raw1 > .portfolio-item')
  let flowersRawOne = gsap.utils.toArray('#portfolio-raw1 > .flower-project')

  const portfolioEnter = gsap.timeline()

  portfolioEnter
    .from(container, {
      autoAlpha: 0,
      yPercent: 50,
      duration: 1,
      ease: 'power4.out',
    })
    .from(charsPortfolioTitle, {
      autoAlpha: 0,
      yPercent: 60,
      duration: 0.2,
      ease: 'power2.out',
      stagger: { amount: 0.6 },
    })
    .from(
      itemsRawOne,
      { autoAlpha: 0, yPercent: 50, duration: 0.8, stagger: { amount: 1.2 } },
      '-=0.3'
    )
    .from(flowersRawOne, {
      autoAlpha: 0,
      yPercent: 100,
      rotate: 180,
      stagger: 0.2,
      transformOrigin: 'center',
    })

  return portfolioEnter
}

export default enterPortfolio
