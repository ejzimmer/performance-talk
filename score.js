export default class ScoreDial extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.innerHTML = this.template;
    
    if (this.score < 50) {
      shadowRoot.querySelector('.mask-full').style.display = 'none';
    }
  }

  get score() {
    const attr = this.attributes['score'];
    return attr ? attr.value : 0;
  }

  get label() {
    const attr = this.attributes['label'];
    return attr ? attr.value : '';
  }

  get angle() {
    return this.score > 50 ? 0 : ((50 - this.score) / 100) * -1;
  }
  get obtuseAngle() {
    return (this.score - 50) / 100;
  }

  get template() {
    return `
      ${this.style}
      <div class="gauge-wrapper">
        <div class="gauge gauge--${this.level}">
          <div class="circle">
            <div class="mask mask-half">
              <div class="fill"></div>
            </div>
            <div class="mask mask-full">
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
      .fill {
        animation: 1s turn forwards linear;
      }

      .mask-half {
        --from-angle: -180deg;
        --angle: ${this.angle}turn;
      }
      .mask-full {
        --from-angle: 0;
        --angle: ${this.obtuseAngle}turn;
      }

      @keyframes turn {
        from {
          transform: rotate(var(--from-angle));
        }
        to {
          transform: rotate(var(--angle));
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
        clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
        border-radius: 50%;
      }

      .mask.mask-full {
        clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
      }

      .mask {
        position: absolute;
      }

      .mask .fill {
        background-color: currentColor;
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