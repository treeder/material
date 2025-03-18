/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Tabs } from './internal/tabs.js'
import { styles } from './internal/tabs-styles.js'
// TODO(b/267336507): add docs
/**
 * @summary Tabs displays a list of selectable tabs.
 *
 * @final
 * @suppress {visibility}
 */
export let MdTabs = class MdTabs extends Tabs {
}
MdTabs.styles = [styles]

customElements.define('md-tabs', MdTabs)
