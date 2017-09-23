const results = {
  pwa: 45,
  performance: 64,
  accessibility: 100,
  practices: 77,
};

export default class InitialScoresController {

  static getTemplate() {
    return `
    <div class="all-scores">
      <score-dial score="${results.pwa}"></score-dial>
      <score-dial score="${results.performance}"></score-dial>
      <score-dial score="${results.accessibility}"></score-dial> 
      <score-dial score="${results.practices}"></score-dial>
    </div>`;
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