/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '../../../focus/md-focus-ring.js'
import '../../../labs/item/item.js'
import '../../../ripple/ripple.js'
import { html, LitElement, nothing } from 'lit'
import { property, query, queryAssignedElements, queryAssignedNodes, } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { requestUpdateOnAriaChange } from '../../../internal/aria/delegate.js'
import { SelectOptionController } from './selectOptionController.js'
/**
 * @fires close-menu {CustomEvent<{initiator: SelectOption, reason: Reason, itemPath: SelectOption[]}>}
 * Closes the encapsulating menu on closable interaction. --bubbles --composed
 * @fires request-selection {Event} Requests the parent md-select to select this
 * element (and deselect others if single-selection) when `selected` changed to
 * `true`. --bubbles --composed
 * @fires request-deselection {Event} Requests the parent md-select to deselect
 * this element when `selected` changed to `false`. --bubbles --composed
 */
export class SelectOptionEl extends LitElement {
    static properties = {
        disabled: { type: Boolean, reflect: true },
        isMenuItem: { type: Boolean, attribute: 'md-menu-item', reflect: true },
        selected: { type: Boolean },
        value: { type: String },
        typeaheadText: { type: String, attribute: 'typeahead-text' },
        displayText: { type: String, attribute: 'display-text' },
    };
    constructor() {
        super(...arguments)
        /**
         * Disables the item and makes it non-selectable and non-interactive.
         */
        this.disabled = false
        /**
         * READONLY: self-identifies as a menu item and sets its identifying attribute
         */
        this.isMenuItem = true
        /**
         * Sets the item in the selected visual state when a submenu is opened.
         */
        this.selected = false
        /**
         * Form value of the option.
         */
        this.value = ''
        this.type = 'option'
        this.selectOptionController = new SelectOptionController(this, {
            getHeadlineElements: () => {
                return this.headlineElements
            },
            getSupportingTextElements: () => {
                return this.supportingTextElements
            },
            getDefaultElements: () => {
                return this.defaultElements
            },
            getInteractiveElement: () => this.listItemRoot,
        })
    }
    /**
     * The text that is selectable via typeahead. If not set, defaults to the
     * innerText of the item slotted into the `"headline"` slot.
     */
    get typeaheadText() {
        return this.selectOptionController.typeaheadText
    }
    set typeaheadText(text) {
        this.selectOptionController.setTypeaheadText(text)
    }
    /**
     * The text that is displayed in the select field when selected. If not set,
     * defaults to the textContent of the item slotted into the `"headline"` slot.
     */
    get displayText() {
        return this.selectOptionController.displayText
    }
    set displayText(text) {
        this.selectOptionController.setDisplayText(text)
    }
    render() {
        return this.renderListItem(html`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)
    }
    /**
     * Renders the root list item.
     *
     * @param content the child content of the list item.
     */
    renderListItem(content) {
        return html`
      <li
        id="item"
        tabindex=${this.disabled ? -1 : 0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel || nothing}
        aria-selected=${this.ariaSelected || nothing}
        aria-checked=${this.ariaChecked || nothing}
        aria-expanded=${this.ariaExpanded || nothing}
        aria-haspopup=${this.ariaHasPopup || nothing}
        class="list-item ${classMap(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${content}</li
      >
    `
    }
    /**
     * Handles rendering of the ripple element.
     */
    renderRipple() {
        return html` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`
    }
    /**
     * Handles rendering of the focus ring.
     */
    renderFocusRing() {
        return html` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`
    }
    /**
     * Classes applied to the list item root.
     */
    getRenderClasses() {
        return {
            'disabled': this.disabled,
            'selected': this.selected,
        }
    }
    /**
     * Handles rendering the headline and supporting text.
     */
    renderBody() {
        return html`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `
    }
    focus() {
        // TODO(b/300334509): needed for some cases where delegatesFocus doesn't
        // work programmatically like in FF and select-option
        this.listItemRoot?.focus()
    }
}
(() => {
    requestUpdateOnAriaChange(SelectOptionEl)
})()
/** @nocollapse */
SelectOptionEl.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
}
