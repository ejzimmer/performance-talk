export default class PerformanceIsHard {
  static getTemplate() {
    return `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 100" class="wifi-logo">
      <circle cx="50" cy="95" r="4" />
      <path d="M40 95 a 10 10 0 0 1 10 -10" stroke="black" fill="none" stroke-width="5" />
      <path d="M30 95 a 20 20 0 0 1 20 -20" stroke="black" fill="none" stroke-width="5" />
      <path d="M20 95 a 30 30 0 0 1 30 -30" stroke="black" fill="none" stroke-width="5" />
      <polygon points="48,97.5 20,92.5, 52,92.5" />
    </svg>
    <img src="images/api.svg" />
    <img src="images/Nokia-3310.jpg" />
    <img src="images/browser-logos.jpg" />
    <img src="images/js-logo.png" />
    <img src="images/html5-logo.svg" />
    <img src="images/cssom.png" />`
  }
}