/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { styles } from './internal/filled-tonal-styles.js';
import { IconButton } from './internal/icon-button.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
/**
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 *
 * @final
 * @suppress {visibility}
 */
export let MdFilledTonalIconButton = class MdFilledTonalIconButton extends IconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'filled-tonal': true,
            'toggle-filled-tonal': this.toggle,
        };
    }
};
MdFilledTonalIconButton.styles = [sharedStyles, styles];

customElements.define('md-filled-tonal-icon-button', MdFilledTonalIconButton)