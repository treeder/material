/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { requestUpdateOnAriaChange } from '../../internal/aria/delegate.js';
/**
 * A progress component.
 */
export class Progress extends LitElement {
    static properties = {
        value: { type: Number },
        max: { type: Number },
        indeterminate: { type: Boolean },
        fourColor: { type: Boolean, attribute: 'four-color' },
    };
    constructor() {
        super(...arguments);
        /**
         * Progress to display, a fraction between 0 and `max`.
         */
        this.value = 0;
        /**
         * Maximum progress to display, defaults to 1.
         */
        this.max = 1;
        /**
         * Whether or not to display indeterminate progress, which gives no indication
         * to how long an activity will take.
         */
        this.indeterminate = false;
        /**
         * Whether or not to render indeterminate mode using 4 colors instead of one.
         */
        this.fourColor = false;
    }
    render() {
        // Needed for closure conformance
        const { ariaLabel } = this;
        return html `
      <div
        class="progress ${classMap(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${ariaLabel || nothing}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate ? nothing : this.value}
        >${this.renderIndicator()}</div
      >
    `;
    }
    getRenderClasses() {
        return {
            'indeterminate': this.indeterminate,
            'four-color': this.fourColor,
        };
    }
}
(() => {
    requestUpdateOnAriaChange(Progress);
})();