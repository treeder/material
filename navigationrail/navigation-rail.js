/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { NavigationRail } from './internal/navigation-rail.js'
import { styles } from './internal/navigation-rail-styles.js'
/**
 * @final
 * @suppress {visibility}
 */
export let MdNavigationRail = class MdNavigationRail extends NavigationRail {
}
MdNavigationRail.styles = [styles]

customElements.define('md-navigation-rail', MdNavigationRail)