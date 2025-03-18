/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { FilledField } from './internal/filled-field.js'
import { styles as filledStyles } from './internal/filled-styles.js'
import { styles as sharedStyles } from './internal/shared-styles.js'
/**
 * TODO(b/228525797): add docs
 * @final
 * @suppress {visibility}
 */
export let MdFilledField = class MdFilledField extends FilledField {
}
MdFilledField.styles = [sharedStyles, filledStyles]
customElements.define('md-filled-field', MdFilledField)
