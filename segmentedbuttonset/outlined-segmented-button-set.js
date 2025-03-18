/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { OutlinedSegmentedButtonSet } from './internal/outlined-segmented-button-set.js'
import { styles as outlinedStyles } from './internal/outlined-styles.js'
import { styles as sharedStyles } from './internal/shared-styles.js'
/**
 * MdOutlinedSegmentedButtonSet is the custom element for the Material
 * Design outlined segmented button set component.
 * @final
 * @suppress {visibility}
 */
export let MdOutlinedSegmentedButtonSet = class MdOutlinedSegmentedButtonSet extends OutlinedSegmentedButtonSet {
}
MdOutlinedSegmentedButtonSet.styles = [sharedStyles, outlinedStyles]

customElements.define('md-outlined-segmented-button-set', MdOutlinedSegmentedButtonSet)