/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChipSet } from './internal/chip-set.js';
import { styles } from './internal/chip-set-styles.js';
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
export let MdChipSet = class MdChipSet extends ChipSet {
};
MdChipSet.styles = [styles];

customElements.define('md-chip-set', MdChipSet)
