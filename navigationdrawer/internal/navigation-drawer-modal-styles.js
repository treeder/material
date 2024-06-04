/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./labs/navigationdrawer/internal/navigation-drawer-modal-styles.css.
import { css } from 'lit'
export const styles = css`
:host {
    --_container-color: var(--md-navigation-drawer-modal-container-color, var(--md-sys-color-surface-container-low, #fff));
    --_container-height: var(--md-navigation-drawer-modal-container-height, 100%);
    --_container-shape: var(--md-navigation-drawer-modal-container-shape, 0 16px 16px 0);
    --_container-width: var(--md-navigation-drawer-modal-container-width, 360px);
    --_divider-color: var(--md-navigation-drawer-modal-divider-color, #000);
    --_modal-container-elevation: var(--md-navigation-drawer-modal-modal-container-elevation, 1);
    --_scrim-color: var(--md-navigation-drawer-modal-scrim-color, );
    --_scrim-opacity: var(--md-navigation-drawer-modal-scrim-opacity, 1);
    --_standard-container-elevation: var(--md-navigation-drawer-modal-standard-container-elevation, 0);
    --md-elevation-level: var(--_modal-container-elevation)
}

.md3-navigation-drawer-modal {
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    position: absolute;
    top: 0;
    inline-size: 0;
    transition: inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s, visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s;
    z-index: 100000;
}

.md3-navigation-drawer-modal--opened {
    transition: inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s, visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s
}

.md3-navigation-drawer-modal--pivot-at-start {
    justify-content: flex-start
}

.md3-navigation-drawer-modal__slot-content {
    display: flex;
    flex-direction: column;
    position: relative
}

.md3-navigation-drawer-modal__scrim {
    inset: 0;
    opacity: 0;
    position: absolute;
    visibility: hidden;
    background-color: var(--_scrim-color);
    transition: opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s, visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s
}

.md3-navigation-drawer-modal--scrim-visible {
    visibility: visible;
    opacity: var(--_scrim-opacity);
    transition: opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s, visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s
}
`
//# sourceMappingURL=navigation-drawer-modal-styles.js.map