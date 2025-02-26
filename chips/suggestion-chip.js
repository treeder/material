/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { styles as elevatedStyles } from './internal/elevated-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
import { SuggestionChip } from './internal/suggestion-chip.js';
import { styles } from './internal/suggestion-styles.js';
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
export let MdSuggestionChip = class MdSuggestionChip extends SuggestionChip {
};
MdSuggestionChip.styles = [sharedStyles, elevatedStyles, styles];
customElements.define('md-suggestion-chip', MdSuggestionChip)
