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
      <div class="performance-background">
        <img class="lemming" scr="images/lemming.gif" />
      </div>
      `;
  }
}