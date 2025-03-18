/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Tab } from './tab.js'
/**
 * A primary tab component.
 */
export class PrimaryTab extends Tab {
    static properties = {
        inlineIcon: { type: Boolean, attribute: 'inline-icon' },
    };
    constructor() {
        super(...arguments)
        /**
         * Whether or not the icon renders inline with label or stacked vertically.
         */
        this.inlineIcon = false
    }
    getContentClasses() {
        return {
            ...super.getContentClasses(),
            'stacked': !this.inlineIcon,
        }
    }
}