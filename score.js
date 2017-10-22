export default class ScoreDial extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.innerHTML = this.template;
  }

  get score() {
    return this.attributes['score'].value;
  }

  get label() {
    return this.attributes['label'].value;
  }

  get angle() {
    return (this.score/200) * 360;
  }

  get fixAngle() {
    return (this.score/100) * 360;
  }

  get template() {
    return `
      ${this.style}
      <div class="gauge-wrapper">
        <div class="gauge gauge--${this.level}">
          <div class="circle">
            <div class="mask mask-full">
              <div class="fill"></div>
            </div>
            <div class="mask mask-half">
              <div class="fill"></div>
            </div>
          </div>
          <div class="percentage">${this.score}</div>
        </div>
        <div class="gauge-label">${this.label}</div>
      </div>`
  }

  get level() {
    return this.score > 75 ? 'pass' : 'warning';
  }

  get style() {
    return `

    <style>
      .fill, .mask-full {
        animation: 1s turn forwards linear;
      }

      @keyframes turn {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(${this.angle}deg);
        }
      }

      .gauge-wrapper {
        position: relative;
        display: inline-flex;
        align-items: center;
        flex-direction: column;
        flex: 1;
        --pass-colour: #00D100;
        --warning-colour: orange;
        --diameter: 200px;
        width: 100%;
        height: 100%;
      }
      
      .gauge {
        background-color: #24c;
        height: var(--diameter);
        width: var(--diameter);
        border-radius: 50%;
        --inset-size: calc(.88 * var(--diameter));
        --spacer: calc(.06 * var(--diameter));
        --transition-length: 1s;
      }

      .gauge--pass {
        --circle-colour: var(--pass-colour);
        color: var(--circle-colour);
      }
      .gauge--warning {
        --circle-colour: var(--warning-colour);
        color: var(--circle-colour);
      }
      
      .mask, .fill {
        height: var(--diameter);
        width: var(--diameter);
        position: absolute;
        border-radius: 50%;
        transition: transform var(--transition-length);
      }
      
      .mask {
        clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
      }

      .mask .fill {
        clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        background-color: var(--circle-colour);
        backface-visibility: hidden;
      }

      .percentage {
        font-size: 3em;
        border-radius: 50%;
        width: var(--inset-size);
        height: var(--inset-size);
        position: absolute;
        margin-left: var(--spacer);
        margin-top: var(--spacer);
        background-color: var(--background-colour);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .gauge-label {
        font-size: 2em;
        margin-top: 20px;
        text-align: center;
      }
   </style>`;
  }
}

window.customElements.define('score-dial', ScoreDial);