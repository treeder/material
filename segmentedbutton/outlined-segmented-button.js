/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { OutlinedSegmentedButton } from './internal/outlined-segmented-button.js';
import { styles as outlinedStyles } from './internal/outlined-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
/**
 * MdOutlinedSegmentedButton is the custom element for the Material
 * Design outlined segmented button component.
 * @final
 * @suppress {visibility}
 */
export let MdOutlinedSegmentedButton = class MdOutlinedSegmentedButton extends OutlinedSegmentedButton {
};
MdOutlinedSegmentedButton.styles = [sharedStyles, outlinedStyles];

customElements.define('md-outlined-segmented-button', MdOutlinedSegmentedButton)