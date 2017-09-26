const results = {
  pwa: 45,
  performance: 64,
  accessibility: 100,
  practices: 77,
};

export default class InitialScoresController {

  constructor() {
    document.querySelector('body').addEventListener('click', this.zoom, { once: true });
  }

  zoom(event) {
    event.stopPropagation();
    document.querySelector('.zoomer').classList.add('zoomed');
  }

  static getTemplate() {
    return `
    <div class="all-scores">
      <score-dial score="${results.pwa}" label="Progressive Web App"></score-dial>
      <score-dial score="${results.performance}" label="Performance"></score-dial>
      <score-dial class="zoomer" score="${results.accessibility}" label="Accessibility"></score-dial> 
      <score-dial score="${results.practices}" label="Best Practices"></score-dial>
    </div>`;
  }
}
