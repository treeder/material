/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./iconbutton/internal/filled-styles.css.
import { css } from 'lit'
export const styles = css`
:host {
  --_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));
  --_container-height: var(--md-filled-icon-button-container-height, 40px);
  --_container-width: var(--md-filled-icon-button-container-width, 40px);
  --_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));
  --_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);
  --_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));
  --_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);
  --_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));
  --_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));
  --_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));
  --_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);
  --_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));
  --_icon-size: var(--md-filled-icon-button-icon-size, 24px);
  --_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));
  --_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));
  --_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);
  --_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));
  --_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));
  --_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));
  --_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));
  --_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));
  --_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));
  --_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));
  --_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));
  --_toggle-focus-icon-color: var(--md-filled-icon-button-toggle-focus-icon-color, var(--md-sys-color-primary, #6750a4));
  --_toggle-hover-icon-color: var(--md-filled-icon-button-toggle-hover-icon-color, var(--md-sys-color-primary, #6750a4));
  --_toggle-hover-state-layer-color: var(--md-filled-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));
  --_toggle-icon-color: var(--md-filled-icon-button-toggle-icon-color, var(--md-sys-color-primary, #6750a4));
  --_toggle-pressed-icon-color: var(--md-filled-icon-button-toggle-pressed-icon-color, var(--md-sys-color-primary, #6750a4));
  --_toggle-pressed-state-layer-color: var(--md-filled-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));
  --_container-shape-start-start: var(--md-filled-icon-button-container-shape-start-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));
  --_container-shape-start-end: var(--md-filled-icon-button-container-shape-start-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));
  --_container-shape-end-end: var(--md-filled-icon-button-container-shape-end-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));
  --_container-shape-end-start: var(--md-filled-icon-button-container-shape-end-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))
}

.icon-button {
  color: var(--_icon-color);
  --md-ripple-hover-color: var(--_hover-state-layer-color);
  --md-ripple-hover-opacity: var(--_hover-state-layer-opacity);
  --md-ripple-pressed-color: var(--_pressed-state-layer-color);
  --md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)
}

.icon-button:hover {
  color: var(--_hover-icon-color)
}

.icon-button:focus {
  color: var(--_focus-icon-color)
}

.icon-button:active {
  color: var(--_pressed-icon-color)
}

.icon-button:disabled {
  color: var(--_disabled-icon-color)
}

.icon-button::before {
  background-color: var(--_container-color);
  border-radius: inherit;
  content: "";
  inset: 0;
  position: absolute;
  z-index: -1
}

.icon-button:disabled::before {
  background-color: var(--_disabled-container-color);
  opacity: var(--_disabled-container-opacity)
}

.icon-button:disabled .icon {
  opacity: var(--_disabled-icon-opacity)
}

.toggle-filled {
  --md-ripple-hover-color: var(--_toggle-hover-state-layer-color);
  --md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)
}

.toggle-filled:not(:disabled) {
  color: var(--_toggle-icon-color)
}

.toggle-filled:not(:disabled):hover {
  color: var(--_toggle-hover-icon-color)
}

.toggle-filled:not(:disabled):focus {
  color: var(--_toggle-focus-icon-color)
}

.toggle-filled:not(:disabled):active {
  color: var(--_toggle-pressed-icon-color)
}

.toggle-filled:not(:disabled)::before {
  background-color: var(--_unselected-container-color)
}

.selected {
  --md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);
  --md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)
}

.selected:not(:disabled) {
  color: var(--_toggle-selected-icon-color)
}

.selected:not(:disabled):hover {
  color: var(--_toggle-selected-hover-icon-color)
}

.selected:not(:disabled):focus {
  color: var(--_toggle-selected-focus-icon-color)
}

.selected:not(:disabled):active {
  color: var(--_toggle-selected-pressed-icon-color)
}

.selected:not(:disabled)::before {
  background-color: var(--_selected-container-color)
}
`
//# sourceMappingURL=filled-styles.js.map