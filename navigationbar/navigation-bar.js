/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { NavigationBar } from './internal/navigation-bar.js'
import { styles } from './internal/navigation-bar-styles.js'
/**
 * @final
 * @suppress {visibility}
 */
export let MdNavigationBar = class MdNavigationBar extends NavigationBar {
}
MdNavigationBar.styles = [styles]

customElements.define('md-navigation-bar', MdNavigationBar)