/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./labs/navigationdrawer/internal/navigation-drawer-styles.css.
import { css } from 'lit'
export const styles = css`
:host {
    /* display: block; */
    --_container-color: var(--md-navigation-drawer-container-color, var(--md-sys-color-surface-container-low, #fff));
    --_container-height: var(--md-navigation-drawer-container-height, 100vh);
    --_container-shape: var(--md-navigation-drawer-container-shape, 0 16px 16px 0);
    --_container-width: var(--md-navigation-drawer-container-width, 320px);
    --_divider-color: var(--md-navigation-drawer-divider-color, #000);
    --_modal-container-elevation: var(--md-navigation-drawer-modal-container-elevation, 1);
    --_standard-container-elevation: var(--md-navigation-drawer-standard-container-elevation, 0);
    --md-elevation-level: var(--_standard-container-elevation);
    --md-elevation-shadow-color: var(--_divider-color)
}

.md3-navigation-drawer {
    display: none;
    width: var(--_container-width);
    /*height: 100%;*/
    height: var(--_container-height);
    background-color: var(--_container-color);
    border-radius: var(--_container-shape);
/*    inline-size: 0; */
    box-sizing: border-box;
    /* display: flex; */
/*    justify-content: flex-end; */
    position: sticky; 
    top: 0; 
    overflow: hidden;
    overflow-y: auto; 
    visibility: hidden;
    transition: inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s, visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s
}

md-elevation {
    z-index: 0
}

.md3-navigation-drawer--opened {
    visibility: visible;
    display: block;
    transition: inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s, visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.md3-navigation-drawer--pivot-at-start {
    justify-content: flex-start
}

.md3-navigation-drawer__slot-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}
`
//# sourceMappingURL=navigation-drawer-styles.js.map