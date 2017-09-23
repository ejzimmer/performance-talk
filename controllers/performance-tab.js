export default class PerformanceTabController {

  constructor() {
    document.querySelector('body').addEventListener('click', (event) => {
      event.stopPropagation();
      document.querySelector('.performance-tab').classList.add('invisible');
      
      const lemming = document.querySelector('.lemming');
      lemming.classList.add('explosion');
    }, { once: true });
  }

  static getTemplate() {
    return `
      <img class="whole-page performance-tab" src="images/performance-tab.png" />
      <img class="lemming" src="images/lemming.gif" />
      `;
  }
}