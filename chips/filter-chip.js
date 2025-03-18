/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { styles as elevatedStyles } from './internal/elevated-styles.js';
import { FilterChip } from './internal/filter-chip.js';
import { styles } from './internal/filter-styles.js';
import { styles as selectableStyles } from './internal/selectable-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
import { styles as trailingIconStyles } from './internal/trailing-icon-styles.js';
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
export let MdFilterChip = class MdFilterChip extends FilterChip {
};
MdFilterChip.styles = [
    sharedStyles,
    elevatedStyles,
    trailingIconStyles,
    selectableStyles,
    styles,
];

customElements.define('md-filter-chip', MdFilterChip)
