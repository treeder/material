/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { MenuItemEl } from './internal/menuitem/menu-item.js';
import { styles } from './internal/menuitem/menu-item-styles.js';
/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menu items are the selectable choices within the menu. Menu items must
 * implement the `MenuItem` interface and also have the `md-menu-item`
 * attribute. Additionally menu items are list items so they must also have the
 * `md-list-item` attribute.
 *
 * Menu items can control a menu by selectively firing the `close-menu` and
 * `deselect-items` events.
 *
 * @final
 * @suppress {visibility}
 */
export let MdMenuItem = class MdMenuItem extends MenuItemEl {
};
MdMenuItem.styles = [styles];
customElements.define('md-menu-item', MdMenuItem);
