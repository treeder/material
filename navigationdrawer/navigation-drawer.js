/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { NavigationDrawer } from './internal/navigation-drawer.js'
import { styles } from './internal/navigation-drawer-styles.js'
import { styles as sharedStyles } from './internal/shared-styles.js'
/**
 * @final
 * @suppress {visibility}
 */
export let MdNavigationDrawer = class MdNavigationDrawer extends NavigationDrawer {
}
MdNavigationDrawer.styles = [sharedStyles, styles]

customElements.define('md-navigation-drawer', MdNavigationDrawer)