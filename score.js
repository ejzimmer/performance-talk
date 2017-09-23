export default class ScoreDial extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.innerHTML = this.template;
  }

  get score() {
    return this.attributes['score'].value;
  }

  get angle() {
    return (this.score - 50) / 100 * 360;
  }

  get template() {
    return `
      ${this.style}
      <div class="gauge-wrapper">
        <div class="gauge">
          <div class="circle">
            <div class="mask mask-full" 
              style="transform: rotate(${this.angle}deg)">
              <div class="fill fill--${this.level}"></div>
            </div>
            <div class="mask mask-half">
              <div class="fill fill--${this.level}"></div>
            </div>
          </div>
        </div>
        <div class="centre">
          <div class="number number--${this.level}">${this.score}</div>
        </div>
      </div>`
  }

  get level() {
    return this.score > 75 ? 'pass' : 'warning';
  }

  get style() {
    return `

    <style>
      
      .gauge-wrapper {
        position: relative;
        --pass-colour: green;
        --warning-colour: orange;
      }
      
      .gauge {
        background-color: #ccc;
        position: absolute;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        clip-path: polygon(50%, 100%)
      }
      
      .mask, .fill {
        height: 100px;
        width: 100px;
        position: absolute;
        border-radius: 50%;
      }
      
      .mask {
        clip: rect(0px, 100px, 100px, 50px);
      }
      
      .fill--pass {
        background-color: var(--pass-colour);
      }
      .fill--warning {
        background-color: var(--warning-colour);
      }
      
      .centre {
        display: flex;
        border-radius: 50%;
        background-color: var(--background-colour);
        width: 94px;
        height: 94px;
        position: absolute;
        left: 3px;
        top: 3px;
      }
      
      .number {
        margin: auto;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 36px;
      }
      .number--pass {
        color: var(--pass-colour);
      }
      .number--warning {
        color: var(--warning-colour);
      }
    </style>`;
  }
}

window.customElements.define('score-dial', ScoreDial);