/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Card } from './internal/card.js';
import { styles as filledStyles } from './internal/filled-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
/**
 * @final
 * @suppress {visibility}
 */
export let MdFilledCard = class MdFilledCard extends Card {
};
MdFilledCard.styles = [sharedStyles, filledStyles];
customElements.define('md-filled-card', MdFilledCard)
//# sourceMappingURL=filled-card.js.map