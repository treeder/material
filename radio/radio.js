// Suggested code may be subject to a license. Learn more: ~LicenseLog:434939353.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:320597804.
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Radio } from './internal/radio.js'
import { styles } from './internal/radio-styles.js'
/**
 * @summary Radio buttons allow users to select one option from a set.
 *
 * @description
 * Radio buttons are the recommended way to allow users to make a single
 * selection from a list of options.
 *
 * Only one radio button can be selected at a time.
 *
 * Use radio buttons to:
 * - Select a single option from a set
 * - Expose all available options
 *
 * @final
 * @suppress {visibility}
 */
export class MdRadio extends Radio { }
MdRadio.styles = [styles]
customElements.define('md-radio', MdRadio)
//# sourceMappingURL=radio.js.map