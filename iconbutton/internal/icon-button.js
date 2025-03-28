/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '../../focus/md-focus-ring.js'
import '../../ripple/ripple.js'
import { html, LitElement, nothing } from 'lit'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { literal, html as staticHtml } from 'lit/static-html.js'
import { requestUpdateOnAriaChange } from '../../internal/aria/delegate.js'
import { setupFormSubmitter, } from '../../internal/controller/form-submitter.js'
import { isRtl } from '../../internal/controller/is-rtl.js'
import { internals, mixinElementInternals, } from '../../labs/behaviors/element-internals.js'
// Separate variable needed for closure.
const iconButtonBaseClass = mixinElementInternals(LitElement)
/**
 * A button for rendering icons.
 *
 * @fires input {InputEvent} Dispatched when a toggle button toggles --bubbles
 * --composed
 * @fires change {Event} Dispatched when a toggle button toggles --bubbles
 */
export class IconButton extends iconButtonBaseClass {
    static properties = {
        disabled: { type: Boolean, reflect: true },
        flipIconInRtl: { type: Boolean, attribute: 'flip-icon-in-rtl' },
        href: { type: String },
        target: { type: String },
        ariaLabelSelected: { type: String, attribute: 'aria-label-selected' },
        toggle: { type: Boolean },
        selected: { type: Boolean, reflect: true },
        type: { type: String },
        value: { type: String },
        flipIcon: { type: Boolean }
    }
    constructor() {
        super(...arguments)
        /**
         * Disables the icon button and makes it non-interactive.
         */
        this.disabled = false
        /**
         * Flips the icon if it is in an RTL context at startup.
         */
        this.flipIconInRtl = false
        /**
         * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
         */
        this.href = ''
        /**
         * Sets the underlying `HTMLAnchorElement`'s `target` attribute.
         */
        this.target = ''
        /**
         * The `aria-label` of the button when the button is toggleable and selected.
         */
        this.ariaLabelSelected = ''
        /**
         * When true, the button will toggle between selected and unselected
         * states
         */
        this.toggle = false
        /**
         * Sets the selected state. When false, displays the default icon. When true,
         * displays the selected icon, or the default icon If no `slot="selected"`
         * icon is provided.
         */
        this.selected = false
        /**
         * The default behavior of the button. May be "text", "reset", or "submit"
         * (default).
         */
        this.type = 'submit'
        /**
         * The value added to a form with the button's name when the button submits a
         * form.
         */
        this.value = ''
        this.flipIcon = isRtl(this, this.flipIconInRtl)
    }
    get name() {
        return this.getAttribute('name') ?? ''
    }
    set name(name) {
        this.setAttribute('name', name)
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this[internals].form
    }
    /**
     * The labels this element is associated with.
     */
    get labels() {
        return this[internals].labels
    }
    /**
     * Link buttons cannot be disabled.
     */
    willUpdate() {
        if (this.href) {
            this.disabled = false
        }
    }
    render() {
        const tag = this.href ? literal`div` : literal`button`
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this
        const hasToggledAriaLabel = ariaLabel && this.ariaLabelSelected
        const ariaPressedValue = !this.toggle ? nothing : this.selected
        let ariaLabelValue = nothing
        if (!this.href) {
            ariaLabelValue =
                hasToggledAriaLabel && this.selected
                    ? this.ariaLabelSelected
                    : ariaLabel
        }
        return staticHtml`<${tag}
        class="icon-button ${classMap(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || nothing}"
        aria-haspopup="${(!this.href && ariaHasPopup) || nothing}"
        aria-expanded="${(!this.href && ariaExpanded) || nothing}"
        aria-pressed="${ariaPressedValue}"
        ?disabled="${!this.href && this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${!this.selected ? this.renderIcon() : nothing}
        ${this.selected ? this.renderSelectedIcon() : nothing}
        ${this.renderTouchTarget()}
        ${this.href && this.renderLink()}
  </${tag}>`
    }
    renderLink() {
        // Needed for closure conformance
        const { ariaLabel } = this
        return html`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target || nothing}"
        aria-label="${ariaLabel || nothing}"></a>
    `
    }
    getRenderClasses() {
        return {
            'flip-icon': this.flipIcon,
            'selected': this.toggle && this.selected,
        }
    }
    renderIcon() {
        return html`<span class="icon"><slot></slot></span>`
    }
    renderSelectedIcon() {
        // Use default slot as fallback to not require specifying multiple icons
        return html`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`
    }
    renderTouchTarget() {
        return html`<span class="touch"></span>`
    }
    renderFocusRing() {
        // TODO(b/310046938): use the same id for both elements
        return html`<md-focus-ring
      part="focus-ring"
      for=${this.href ? 'link' : 'button'}></md-focus-ring>`
    }
    renderRipple() {
        // TODO(b/310046938): use the same id for both elements
        return html`<md-ripple
      for=${this.href ? 'link' : nothing}
      ?disabled="${!this.href && this.disabled}"></md-ripple>`
    }
    connectedCallback() {
        this.flipIcon = isRtl(this, this.flipIconInRtl)
        super.connectedCallback()
    }
    async handleClick(event) {
        // Allow the event to propagate
        await 0
        if (!this.toggle || this.disabled || event.defaultPrevented) {
            return
        }
        this.selected = !this.selected
        this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }))
        // Bubbles but does not compose to mimic native browser <input> & <select>
        // Additionally, native change event is not an InputEvent.
        this.dispatchEvent(new Event('change', { bubbles: true }))
    }
}
(() => {
    requestUpdateOnAriaChange(IconButton)
    setupFormSubmitter(IconButton)
})()
/** @nocollapse */
IconButton.formAssociated = true
/** @nocollapse */
IconButton.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
}
