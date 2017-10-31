export default class BetterLoadController {
  constructor() {
    setTimeout(() => {
      const loading = document.querySelector('.loading');
      loading.classList.remove('better-loading');
      loading.classList.add('loaded');
    }, 5000);
  }
  static getTemplate() {
    return `<div class="loading better-loading"></div>`;
  }
}