export default class LoadTimeAfterController {

  constructor() {
    setTimeout(() => {
      document.querySelector('.paint').style.width = '20%';
      document.querySelectorAll('.interactive').forEach(element => element.style.width = '65%');
      document.querySelector('.index').style.width = '40%';
    });
  }

  static getTemplate() {
    return `<div class="measures after">
    <div class="times">
      <div>First meaningful paint 1,380ms</div>
      <hr class="measure fast paint">
      <div>First interactive 3,490ms</div>
      <hr class="measure fast interactive">
      <div>Consistently interactive 3,490ms</div>
      <hr class="measure fast interactive">
    </div>
    <div class="perceptual-speed-index">
      <div>Perceptual speed index 4,029</div>
      <hr class="measure index medium">
    </div>
    <div class="input-latency">
      <div>Input latency 16ms</div>
      <hr class="measure latency fast">
    </div>
  </div>`
  }
}