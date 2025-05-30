/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { SecondaryTab } from './internal/secondary-tab.js'
import { styles as secondaryStyles } from './internal/secondary-tab-styles.js'
import { styles as sharedStyles } from './internal/tab-styles.js'
// TODO(b/267336507): add docs
/**
 * @summary Tab allow users to display a tab within a Tabs.
 *
 * @final
 * @suppress {visibility}
 */
export let MdSecondaryTab = class MdSecondaryTab extends SecondaryTab {
}
MdSecondaryTab.styles = [sharedStyles, secondaryStyles]

customElements.define('md-secondary-tab', MdSecondaryTab)


