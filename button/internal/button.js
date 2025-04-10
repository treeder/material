/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '../../focus/md-focus-ring.js'
import '../../ripple/ripple.js'
import { html, isServer, LitElement, nothing } from 'lit'
import { property, query, queryAssignedElements } from 'lit/decorators.js'
import { requestUpdateOnAriaChange } from '../../internal/aria/delegate.js'
import { setupFormSubmitter, } from '../../internal/controller/form-submitter.js'
import { dispatchActivationClick, isActivationClick, } from '../../internal/events/form-label-activation.js'
import { internals, mixinElementInternals, } from '../../labs/behaviors/element-internals.js'
// Separate variable needed for closure.
const buttonBaseClass = mixinElementInternals(LitElement)
/**
 * A button component.
 */
export class Button extends buttonBaseClass {


    static properties = {
        disabled: { type: Boolean, reflect: true },
        href: { type: String },
        target: { type: String },
        trailingIcon: { type: Boolean, attribute: 'trailing-icon', reflect: true },
        hasIcon: { type: Boolean, attribute: 'has-icon', reflect: true },
        type: { type: String },
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
    constructor() {
        super()
        /**
         * Whether or not the button is disabled.
         */
        this.disabled = false
        /**
         * The URL that the link button points to.
         */
        this.href = ''
        /**
         * Where to display the linked `href` URL for a link button. Common options
         * include `_blank` to open in a new tab.
         */
        this.target = ''
        /**
         * Whether to render the icon at the inline end of the label rather than the
         * inline start.
         *
         * _Note:_ Link buttons cannot have trailing icons.
         */
        this.trailingIcon = false
        /**
         * Whether to display the icon or not.
         */
        this.hasIcon = false
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
        this.handleActivationClick = (event) => {
            if (!isActivationClick(event) || !this.buttonElement) {
                return
            }
            this.focus()
            dispatchActivationClick(this.buttonElement)
        }
        if (!isServer) {
            this.addEventListener('click', this.handleActivationClick)
        }
    }
    focus() {
        this.buttonElement?.focus()
    }
    blur() {
        this.buttonElement?.blur()
    }
    render() {
        // Link buttons may not be disabled
        const isDisabled = this.disabled && !this.href
        const buttonOrLink = this.href ? this.renderLink() : this.renderButton()
        // TODO(b/310046938): due to a limitation in focus ring/ripple, we can't use
        // the same ID for different elements, so we change the ID instead.
        const buttonId = this.href ? 'link' : 'button'
        return html`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${buttonId}></md-focus-ring>
      <md-ripple for=${buttonId} ?disabled="${isDisabled}"></md-ripple>
      ${buttonOrLink}
    `
    }
    renderButton() {
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this
        return html`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${ariaLabel || nothing}"
      aria-haspopup="${ariaHasPopup || nothing}"
      aria-expanded="${ariaExpanded || nothing}">
      ${this.renderContent()}
    </button>`
    }
    renderLink() {
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this
        return html`<a
      id="link"
      class="button"
      aria-label="${ariaLabel || nothing}"
      aria-haspopup="${ariaHasPopup || nothing}"
      aria-expanded="${ariaExpanded || nothing}"
      href=${this.href}
      target=${this.target || nothing}
      >${this.renderContent()}
    </a>`
    }
    renderContent() {
        const icon = html`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`
        return html`
      <span class="touch"></span>
      ${this.trailingIcon ? nothing : icon}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon ? icon : nothing}
    `
    }
    handleSlotChange() {
        this.hasIcon = this.assignedIcons.length > 0
    }
}
(() => {
    requestUpdateOnAriaChange(Button)
    setupFormSubmitter(Button)
})()
/** @nocollapse */
Button.formAssociated = true
/** @nocollapse */
Button.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
}

//# sourceMappingURL=button.js.map