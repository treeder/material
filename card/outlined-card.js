/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Card } from './internal/card.js';
import { styles as outlinedStyles } from './internal/outlined-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
/**
 * @final
 * @suppress {visibility}
 */
export let MdOutlinedCard = class MdOutlinedCard extends Card {
};
MdOutlinedCard.styles = [sharedStyles, outlinedStyles];
customElements.define('md-outlined-card', MdOutlinedCard);
//# sourceMappingURL=outlined-card.js.map