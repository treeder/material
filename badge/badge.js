/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { customElement } from 'lit/decorators.js'
import { Badge } from './internal/badge.js'
import { styles } from './internal/badge-styles.js'
/**
 * @final
 * @suppress {visibility}
 */
export let MdBadge = class MdBadge extends Badge {
}
MdBadge.styles = [styles]

customElements.define('md-badge', MdBadge)

//# sourceMappingURL=badge.js.map