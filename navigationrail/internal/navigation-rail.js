/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '../../elevation/elevation.js'
import { html, LitElement, nothing } from 'lit'
import { requestUpdateOnAriaChange } from '../../internal/aria/delegate.js'
import { isRtl } from '../../internal/controller/is-rtl.js'
import { NavigationBar } from '../../navigationbar/internal/navigation-bar.js'
/**
 * b/265346501 - add docs
 *
 * @fires navigation-bar-activated {CustomEvent<tab: NavigationTab, activeIndex: number>}
 * Dispatched whenever the `activeIndex` changes. --bubbles --composed
 */
export class NavigationRail extends NavigationBar {
    static properties = {
        ...NavigationBar.properties,
    }
    constructor() {
        super(...arguments)
    }
    render() {
        // Needed for closure conformance
        const { ariaLabel } = this
        return html`<div
      class="md3-navigation-bar md3-navigation-rail"
      role="tablist"
      aria-label=${ariaLabel || nothing}
      @keydown="${this.handleKeydown}"
      @navigation-tab-interaction="${this.handleNavigationTabInteraction}"
      @navigation-tab-rendered=${this.handleNavigationTabConnected}
      ><md-elevation part="elevation"></md-elevation>
      <div class="md3-navigation-bar__tabs-slot-container md3-navigation-rail__tabs-slot-container">
        <div class="md3-navigation-rail-top">
            <slot name="menu"></slot>
            <slot name="fab"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
      </div></div>
      `
    }


}
(() => {
    requestUpdateOnAriaChange(NavigationBar)
})()
