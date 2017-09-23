const results = {
  pwa: 45,
  performance: 64,
  accessibility: 100,
  practices: 77,
};

export default class InitialScoresController {
  static calculateAngle(score) {
    return (score - 50) / 100 * 360;
  }

  static getTemplate() {
    return `
    <div class="gauge-wrapper">
      <div class="gauge">
        <div class="circle">
          <div class="mask mask-full" 
            style="transform: rotate(${InitialScoresController.calculateAngle(75)}deg)">
            <div class="fill fill--warning"></div>
          </div>
          <div class="mask mask-half">
            <div class="fill fill--warning"></div>
          </div>
        </div>
      </div>
      <div class="centre">
        <div class="number number--warning">${results.performance}</div>
      </div>
    </div>
    `;
  }
}

{/* <div class="lh-gauge lh-gauge--average" data-progress="55">
      <div class="lh-gauge__circle">
        <div class="lh-gauge__mask lh-gauge__mask--full" style="transform: rotate(99deg);">
          <div class="lh-gauge__fill" style="transform: rotate(99deg);"></div>
        </div>
        <div class="lh-gauge__mask lh-gauge__mask--half">
          <div class="lh-gauge__fill" style="transform: rotate(99deg);"></div>
          <div class="lh-gauge__fill lh-gauge__fill--fix" style="transform: rotate(198deg);"></div>
        </div>
      </div>
      <div class="lh-gauge__percentage">55</div>
    </div> */}