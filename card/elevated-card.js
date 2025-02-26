/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Card } from './internal/card.js'
import { styles as elevatedStyles } from './internal/elevated-styles.js'
import { styles as sharedStyles } from './internal/shared-styles.js'
/**
 * @final
 * @suppress {visibility}
 */
export let MdElevatedCard = class MdElevatedCard extends Card {
}
MdElevatedCard.styles = [sharedStyles, elevatedStyles]
customElements.define('md-elevated-card', MdElevatedCard)
//# sourceMappingURL=elevated-card.js.map