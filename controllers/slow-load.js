export default class SlowLoadController {
  constructor() {
    setTimeout(() => {
      document.querySelector('.shit-loading').classList.add('loaded');
    }, 5330)
  }

  static getTemplate() {
    return `<div class="shit-loading"></div>`
  }
}