const wifiDial = `
<div class="bounce-in">
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 55 50" class="wifi-logo">
    <circle cx="50" cy="45" r="4" />
    <path d="M40 45 a 10 10 0 0 1 10 -10" stroke="black" fill="none" stroke-width="5" />
    <path d="M30 45 a 20 20 0 0 1 20 -20" stroke="black" fill="none" stroke-width="5" />
    <path d="M20 45 a 30 30 0 0 1 30 -30" stroke="black" fill="none" stroke-width="5" />
    <polygon points="48,47.5 20,42.5, 52,42.5" />
  </svg>
</div>`;

const pics = ['api.svg', 
              'Nokia-3310.png', 
              'firefox.png', 
              'v8.png', 
              'webkit.png', 
              'IE6.png', 
              'js-logo.png', 
              'html5-logo.svg', 
              'cssom.png'];

export default class PerformanceIsHard {

  constructor() {
    document.querySelectorAll('.hidden').forEach((img, index) => {
      setTimeout(() => {
        img.classList.remove('hidden');
        img.classList.add('bounce-in');
        if (img.src.endsWith('IE6.png')) {
          img.addEventListener('animationend', (event) => {
            img.classList.remove('bounce-in');
            event.target.classList.add('fall-down');
          }, { once: true });
        } 
      }, 500 * (index + 1));
    });
  }

  static getTemplate() {
    return `
    <div id="performance-factors" class="bounce-in-pics">
      ${wifiDial}
      ${pics.map(pic => (PerformanceIsHard.getElement(pic))).join('')}
    </div>`;
  }

  static getElement(file) {
    return `<div><img class="hidden" src="images/${file}" /></div>`;
  }
}