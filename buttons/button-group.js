import { html, LitElement, css } from 'lit'

export class ButtonGroup extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      flex-direction: row;
      vertical-align: middle;
    }

    /* Standard group adds gap between buttons */
    :host(:not([connected])) {
      gap: 8px; /* M3 standard button group gap */
    }

    /* Target all buttons except the first one */
    :host([connected]) ::slotted([group-position='middle']),
    :host([connected]) ::slotted([group-position='last']),
    :host([connected]) ::slotted(*:not(:first-child):not([group-position='first'])) {
      /* Target variant-specific variables explicitly */
      --md-button-container-shape-start-start: 0;
      --md-button-container-shape-end-start: 0;
      --md-filled-tonal-button-container-shape-start-start: 0;
      --md-filled-tonal-button-container-shape-end-start: 0;
      --md-elevated-button-container-shape-start-start: 0;
      --md-elevated-button-container-shape-end-start: 0;
      --md-outlined-button-container-shape-start-start: 0;
      --md-outlined-button-container-shape-end-start: 0;
      --md-icon-button-container-shape-start-start: 0;
      --md-icon-button-container-shape-end-start: 0;

      /* Overlap borders */
      margin-inline-start: -1px;
    }

    /* Target all buttons except the last one */
    :host([connected]) ::slotted([group-position='middle']),
    :host([connected]) ::slotted([group-position='first']),
    :host([connected]) ::slotted(*:not(:last-child):not([group-position='last'])) {
      /* Target variant-specific variables explicitly */
      --md-button-container-shape-start-end: 0;
      --md-button-container-shape-end-end: 0;
      --md-filled-tonal-button-container-shape-start-end: 0;
      --md-filled-tonal-button-container-shape-end-end: 0;
      --md-elevated-button-container-shape-start-end: 0;
      --md-elevated-button-container-shape-end-end: 0;
      --md-outlined-button-container-shape-start-end: 0;
      --md-outlined-button-container-shape-end-end: 0;
      --md-icon-button-container-shape-start-end: 0;
      --md-icon-button-container-shape-end-end: 0;
    }

    /* Ensure the active/hovered/focused button is on top to show full border */
    :host([connected]) ::slotted(*:hover),
    :host([connected]) ::slotted(*:focus-within),
    :host([connected]) ::slotted(*:active) {
      z-index: 2;
      position: relative;
    }

    /* Selected state needs to be above unselected for connected groups */
    :host([connected]) ::slotted([selected]) {
      z-index: 1;
      position: relative;
    }
  `

  static properties = {
    connected: { type: Boolean, reflect: true },
  }

  constructor() {
    super()
    this.connected = false
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'group')
    }
  }

  connectedCallback() {
    super.connectedCallback()
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'group')
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties)
    this.updateConnectedPositions()
  }

  updated(changedProperties) {
    super.updated(changedProperties)
    if (changedProperties.has('connected')) {
      this.updateConnectedPositions()
    }
  }

  handleSlotChange() {
    this.updateConnectedPositions()
  }

  get buttons() {
    const slot = this.renderRoot?.querySelector('slot')
    const elements = slot?.assignedElements({ flatten: true }) ?? []
    return elements.filter((el) => !['STYLE', 'SCRIPT', 'TEMPLATE'].includes(el.tagName))
  }

  updateConnectedPositions() {
    const buttons = this.buttons
    const count = buttons.length

    buttons.forEach((button, index) => {
      if (!this.connected || count <= 1) {
        button.removeAttribute('group-position')
      } else if (index === 0) {
        button.setAttribute('group-position', 'first')
      } else if (index === count - 1) {
        button.setAttribute('group-position', 'last')
      } else {
        button.setAttribute('group-position', 'middle')
      }
    })
  }

  render() {
    return html`<slot @slotchange=${this.handleSlotChange}></slot>`
  }
}

customElements.define('md-button-group', ButtonGroup)
