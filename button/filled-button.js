/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { customElement } from 'lit/decorators.js'
import { FilledButton } from './internal/filled-button.js'
import { styles as filledStyles } from './internal/filled-styles.js'
import { styles as sharedElevationStyles } from './internal/shared-elevation-styles.js'
import { styles as sharedStyles } from './internal/shared-styles.js'
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
export let MdFilledButton = class MdFilledButton extends FilledButton {
}
MdFilledButton.styles = [
    sharedStyles,
    sharedElevationStyles,
    filledStyles,
]

customElements.define('md-filled-button', MdFilledButton)

//# sourceMappingURL=filled-button.js.map