export default class TimeToPaintController {

  constructor() {
    setTimeout(() => {
      document.querySelectorAll('.measure').forEach(time => time.classList.add('grown'));
    }, 100);

    const body = document.querySelector('body');
    body.addEventListener('click', (event) => {
      this.embiggen(event, '.times');

      body.addEventListener('click', (event) => {
        this.embiggen(event, '.perceptual-speed-index');

        body.addEventListener('click', (event) => {
          this.embiggen(event, '.input-latency');
        }, { once: true });
      }, { once: true });
    }, { once: true });
  }

  embiggen(event, selector) {
    event.stopPropagation();
    const bigAlready = document.querySelector('.embiggen');
    if (bigAlready) bigAlready.classList.remove('embiggen');
    document.querySelector(selector).classList.add('embiggen');
  }

  static getTemplate() {
    return `
      <div class="measures">
        <div class="times">
          <div>First meaningful paint 5,330ms</div>
          <hr class="measure slow">
          <div>First interactive 5,330ms</div>
          <hr class="measure fast">
          <div>Consistently interactive 5,330ms</div>
          <hr class="measure fast">
        </div>
        <div class="perceptual-speed-index">
          <div>Perceptual speed index 5,471</div>
          <hr class="measure index medium">
        </div>
        <div class="input-latency">
          <div>Input latency 16ms</div>
          <hr class="measure latency fast">
        </div>
      </div>
    `;
  }
}