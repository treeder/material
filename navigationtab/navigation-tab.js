/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { NavigationTab } from './internal/navigation-tab.js'
import { styles } from './internal/navigation-tab-styles.js'
/**
 * @final
 * @suppress {visibility}
 */
export let MdNavigationTab = class MdNavigationTab extends NavigationTab {
}
MdNavigationTab.styles = [styles]
customElements.define('md-navigation-tab', MdNavigationTab)
