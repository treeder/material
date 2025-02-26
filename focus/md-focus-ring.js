/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { FocusRing } from './internal/focus-ring.js';
import { styles } from './internal/focus-ring-styles.js';
/**
 * TODO(b/267336424): add docs
 *
 * @final
 * @suppress {visibility}
 */
export let MdFocusRing = class MdFocusRing extends FocusRing {
};
MdFocusRing.styles = [styles];

customElements.define('md-focus-ring', MdFocusRing)
