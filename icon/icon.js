/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Icon } from './internal/icon.js'
import { styles } from './internal/icon-styles.js'
/**
 * @final
 * @suppress {visibility}
 */
export let MdIcon = class MdIcon extends Icon {
}
/** @nocollapse */
MdIcon.styles = [styles]

customElements.define('md-icon', MdIcon)
