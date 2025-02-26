/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { AssistChip } from './internal/assist-chip.js'
import { styles } from './internal/assist-styles.js'
import { styles as elevatedStyles } from './internal/elevated-styles.js'
import { styles as sharedStyles } from './internal/shared-styles.js'
/**
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
export let MdAssistChip = class MdAssistChip extends AssistChip {
}
MdAssistChip.styles = [sharedStyles, elevatedStyles, styles]
customElements.define('md-assist-chip', MdAssistChip)
