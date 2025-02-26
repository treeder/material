/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement } from 'lit'
import { property } from 'lit/decorators.js'
/**
 * A divider component.
 */
export class Divider extends LitElement {
    static properties = {
        inset: { type: Boolean, reflect: true },
        insetStart: { type: Boolean, reflect: true, attribute: 'inset-start' },
        insetEnd: { type: Boolean, reflect: true, attribute: 'inset-end' },
    };
    constructor() {
        super(...arguments)
        /**
         * Indents the divider with equal padding on both sides.
         */
        this.inset = false
        /**
         * Indents the divider with padding on the leading side.
         */
        this.insetStart = false
        /**
         * Indents the divider with padding on the trailing side.
         */
        this.insetEnd = false
    }
}
