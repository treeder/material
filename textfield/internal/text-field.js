/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement, html, nothing } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { live } from 'lit/directives/live.js'
import { styleMap } from 'lit/directives/style-map.js'
import { html as staticHtml } from 'lit/static-html.js'
import { requestUpdateOnAriaChange } from '../../internal/aria/delegate.js'
import { stringConverter } from '../../internal/controller/string-converter.js'
import { redispatchEvent } from '../../internal/events/redispatch-event.js'
import { createValidator, getValidityAnchor, mixinConstraintValidation, } from '../../labs/behaviors/constraint-validation.js'
import { mixinElementInternals } from '../../labs/behaviors/element-internals.js'
import { getFormValue, mixinFormAssociated, } from '../../labs/behaviors/form-associated.js'
import { mixinOnReportValidity, onReportValidity, } from '../../labs/behaviors/on-report-validity.js'
import { TextFieldValidator } from '../../labs/behaviors/validators/text-field-validator.js'
// Separate variable needed for closure.
const textFieldBaseClass = mixinOnReportValidity(mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(LitElement))))
/**
 * A text field component.
 *
 * @fires select {Event} The native `select` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event)
 * --bubbles
 * @fires change {Event} The native `change` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
 * --bubbles
 * @fires input {InputEvent} The native `input` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
 * --bubbles --composed
 */
export class TextField extends textFieldBaseClass {
    static properties = {
        error: { type: Boolean },
        errorText: { type: String, attribute: 'error-text' },
        label: { type: String },
        required: { type: Boolean },
        value: { type: String },
        prefixText: { type: String, attribute: 'prefix-text' },
        suffixText: { type: String, attribute: 'suffix-text' },
        hasLeadingIcon: { type: Boolean, attribute: 'hast-leading-icon' },
        hasTrailingIcon: { type: Boolean, attribute: 'hast-trailing-icon' },
        supportingText: { type: String, attribute: 'supporting-text' },
        textDirection: { type: String, attribute: 'text-direction' },
        rows: { type: Number },
        cols: { type: Number },
        inputMode: { type: String },
        max: { type: String },
        maxLength: { type: Number },
        min: { type: String },
        minLength: { type: Number },
        noSpinner: { type: Boolean, attribute: 'no-spinner' },
        pattern: { type: String },
        placeholder: { type: String, reflect: true },
        readOnly: { type: Boolean, reflect: true },
        multiple: { type: Boolean, reflect: true },
        step: { type: String },
        type: { type: String, reflect: true },
        autocomplete: { type: String, reflect: true },
        focused: { type: Boolean, reflect: true },
        nativeError: { type: Boolean, attribute: 'native-error' },
        nativeErrorText: { type: String, attribute: 'native-error-text' },
        dirty: { type: Boolean },
    }
    constructor() {
        super(...arguments)
        /**
         * Gets or sets whether or not the text field is in a visually invalid state.
         *
         * This error state overrides the error state controlled by
         * `reportValidity()`.
         */
        this.error = false
        /**
         * The error message that replaces supporting text when `error` is true. If
         * `errorText` is an empty string, then the supporting text will continue to
         * show.
         *
         * This error message overrides the error message displayed by
         * `reportValidity()`.
         */
        this.errorText = ''
        /**
         * The floating Material label of the textfield component. It informs the user
         * about what information is requested for a text field. It is aligned with
         * the input text, is always visible, and it floats when focused or when text
         * is entered into the textfield. This label also sets accessibilty labels,
         * but the accessible label is overriden by `aria-label`.
         *
         * Learn more about floating labels from the Material Design guidelines:
         * https://m3.material.io/components/text-fields/guidelines
         */
        this.label = ''
        /**
         * Indicates that the user must specify a value for the input before the
         * owning form can be submitted and will render an error state when
         * `reportValidity()` is invoked when value is empty. Additionally the
         * floating label will render an asterisk `"*"` when true.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required
         */
        this.required = false
        /**
         * The current value of the text field. It is always a string.
         */
        this.value = ''
        /**
         * An optional prefix to display before the input value.
         */
        this.prefixText = ''
        /**
         * An optional suffix to display after the input value.
         */
        this.suffixText = ''
        /**
         * Whether or not the text field has a leading icon. Used for SSR.
         */
        this.hasLeadingIcon = false
        /**
         * Whether or not the text field has a trailing icon. Used for SSR.
         */
        this.hasTrailingIcon = false
        /**
         * Conveys additional information below the text field, such as how it should
         * be used.
         */
        this.supportingText = ''
        /**
         * Override the input text CSS `direction`. Useful for RTL languages that use
         * LTR notation for fractions.
         */
        this.textDirection = ''
        /**
         * The number of rows to display for a `type="textarea"` text field.
         * Defaults to 2.
         */
        this.rows = 2
        /**
         * The number of cols to display for a `type="textarea"` text field.
         * Defaults to 20.
         */
        this.cols = 20
        // <input> properties
        this.inputMode = ''
        /**
         * Defines the greatest value in the range of permitted values.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
         */
        this.max = ''
        /**
         * The maximum number of characters a user can enter into the text field. Set
         * to -1 for none.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
         */
        this.maxLength = -1
        /**
         * Defines the most negative value in the range of permitted values.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
         */
        this.min = ''
        /**
         * The minimum number of characters a user can enter into the text field. Set
         * to -1 for none.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
         */
        this.minLength = -1
        /**
         * When true, hide the spinner for `type="number"` text fields.
         */
        this.noSpinner = false
        /**
         * A regular expression that the text field's value must match to pass
         * constraint validation.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
         */
        this.pattern = ''
        /**
         * Defines the text displayed in the textfield when it has no value. Provides
         * a brief hint to the user as to the expected type of data that should be
         * entered into the control. Unlike `label`, the placeholder is not visible
         * and does not float when the textfield has a value.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder
         */
        this.placeholder = ''
        /**
         * Indicates whether or not a user should be able to edit the text field's
         * value.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
         */
        this.readOnly = false
        /**
         * Indicates that input accepts multiple email addresses.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple
         */
        this.multiple = false
        /**
         * Returns or sets the element's step attribute, which works with min and max
         * to limit the increments at which a numeric or date-time value can be set.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
         */
        this.step = ''
        /**
         * The `<input>` type to use, defaults to "text". The type greatly changes how
         * the text field behaves.
         *
         * Text fields support a limited number of `<input>` types:
         *
         * - text
         * - textarea
         * - email
         * - number
         * - password
         * - search
         * - tel
         * - url
         *
         * See
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
         * for more details on each input type.
         */
        this.type = 'text'
        /**
         * Describes what, if any, type of autocomplete functionality the input
         * should provide.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
         */
        this.autocomplete = ''
        /**
         * Returns true when the text field has been interacted with. Native
         * validation errors only display in response to user interactions.
         */
        this.dirty = false
        this.focused = false
        /**
         * Whether or not a native error has been reported via `reportValidity()`.
         */
        this.nativeError = false
        /**
         * The validation message displayed from a native error via
         * `reportValidity()`.
         */
        this.nativeErrorText = ''
    }
    /**
     * Gets or sets the direction in which selection occurred.
     */
    get selectionDirection() {
        return this.getInputOrTextarea().selectionDirection
    }
    set selectionDirection(value) {
        this.getInputOrTextarea().selectionDirection = value
    }
    /**
     * Gets or sets the end position or offset of a text selection.
     */
    get selectionEnd() {
        return this.getInputOrTextarea().selectionEnd
    }
    set selectionEnd(value) {
        this.getInputOrTextarea().selectionEnd = value
    }
    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    get selectionStart() {
        return this.getInputOrTextarea().selectionStart
    }
    set selectionStart(value) {
        this.getInputOrTextarea().selectionStart = value
    }
    /**
     * The text field's value as a number.
     */
    get valueAsNumber() {
        const input = this.getInput()
        if (!input) {
            return NaN
        }
        return input.valueAsNumber
    }
    set valueAsNumber(value) {
        const input = this.getInput()
        if (!input) {
            return
        }
        input.valueAsNumber = value
        this.value = input.value
    }
    /**
     * The text field's value as a Date.
     */
    get valueAsDate() {
        const input = this.getInput()
        if (!input) {
            return null
        }
        return input.valueAsDate
    }
    set valueAsDate(value) {
        const input = this.getInput()
        if (!input) {
            return
        }
        input.valueAsDate = value
        this.value = input.value
    }
    get hasError() {
        return this.error || this.nativeError
    }
    /**
     * Selects all the text in the text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
     */
    select() {
        this.getInputOrTextarea().select()
    }
    setRangeText(...args) {
        // Calling setRangeText with 1 vs 3-4 arguments has different behavior.
        // Use spread syntax and type casting to ensure correct usage.
        this.getInputOrTextarea().setRangeText(...args)
        this.value = this.getInputOrTextarea().value
    }
    /**
     * Sets the start and end positions of a selection in the text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
     *
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    setSelectionRange(start, end, direction) {
        this.getInputOrTextarea().setSelectionRange(start, end, direction)
    }
    /**
     * Decrements the value of a numeric type text field by `step` or `n` `step`
     * number of times.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
     *
     * @param stepDecrement The number of steps to decrement, defaults to 1.
     */
    stepDown(stepDecrement) {
        const input = this.getInput()
        if (!input) {
            return
        }
        input.stepDown(stepDecrement)
        this.value = input.value
    }
    /**
     * Increments the value of a numeric type text field by `step` or `n` `step`
     * number of times.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp
     *
     * @param stepIncrement The number of steps to increment, defaults to 1.
     */
    stepUp(stepIncrement) {
        const input = this.getInput()
        if (!input) {
            return
        }
        input.stepUp(stepIncrement)
        this.value = input.value
    }
    /**
     * Reset the text field to its default value.
     */
    reset() {
        this.dirty = false
        this.value = this.getAttribute('value') ?? ''
        this.nativeError = false
        this.nativeErrorText = ''
    }
    attributeChangedCallback(attribute, newValue, oldValue) {
        if (attribute === 'value' && this.dirty) {
            // After user input, changing the value attribute no longer updates the
            // text field's value (until reset). This matches native <input> behavior.
            return
        }
        super.attributeChangedCallback(attribute, newValue, oldValue)
    }
    render() {
        const classes = {
            'disabled': this.disabled,
            'error': !this.disabled && this.hasError,
            'textarea': this.type === 'textarea',
            'no-spinner': this.noSpinner,
        }
        return html`
      <span class="text-field ${classMap(classes)}">
        ${this.renderField()}
      </span>
    `
    }
    updated(changedProperties) {
        // Keep changedProperties arg so that subclasses may call it
        // If a property such as `type` changes and causes the internal <input>
        // value to change without dispatching an event, re-sync it.
        const value = this.getInputOrTextarea().value
        if (this.value !== value) {
            // Note this is typically inefficient in updated() since it schedules
            // another update. However, it is needed for the <input> to fully render
            // before checking its value.
            this.value = value
        }
    }
    renderField() {
        return staticHtml`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type === 'textarea'}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`
    }
    renderLeadingIcon() {
        return html`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `
    }
    renderTrailingIcon() {
        return html`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `
    }
    renderInputOrTextarea() {
        const style = { 'direction': this.textDirection }
        const ariaLabel = this.ariaLabel || this.label || nothing
        // lit-anaylzer `autocomplete` types are too strict
        // tslint:disable-next-line:no-any
        const autocomplete = this.autocomplete
        // These properties may be set to null if the attribute is removed, and
        // `null > -1` is incorrectly `true`.
        const hasMaxLength = (this.maxLength ?? -1) > -1
        const hasMinLength = (this.minLength ?? -1) > -1
        if (this.type === 'textarea') {
            return html`
        <textarea
          class="input"
          style=${styleMap(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          ?disabled=${this.disabled}
          maxlength=${hasMaxLength ? this.maxLength : nothing}
          minlength=${hasMinLength ? this.minLength : nothing}
          placeholder=${this.placeholder || nothing}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${live(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
          autocomplete=${autocomplete || nothing}></textarea>
      `
        }
        const prefix = this.renderPrefix()
        const suffix = this.renderSuffix()
        // TODO(b/243805848): remove `as unknown as number` and `as any` once lit
        // analyzer is fixed
        // tslint:disable-next-line:no-any
        const inputMode = this.inputMode
        return html`
      <div class="input-wrapper">
        ${prefix}
        <input
          class="input"
          style=${styleMap(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          ?disabled=${this.disabled}
          inputmode=${inputMode || nothing}
          max=${(this.max || nothing)}
          maxlength=${hasMaxLength ? this.maxLength : nothing}
          min=${(this.min || nothing)}
          minlength=${hasMinLength ? this.minLength : nothing}
          pattern=${this.pattern || nothing}
          placeholder=${this.placeholder || nothing}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${(this.step || nothing)}
          type=${this.type}
          .value=${live(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} 
          autocomplete=${autocomplete || nothing}
          />
        ${suffix}
      </div>
    `
    }
    renderPrefix() {
        return this.renderAffix(this.prefixText, /* isSuffix */ false)
    }
    renderSuffix() {
        return this.renderAffix(this.suffixText, /* isSuffix */ true)
    }
    renderAffix(text, isSuffix) {
        if (!text) {
            return nothing
        }
        const classes = {
            'suffix': isSuffix,
            'prefix': !isSuffix,
        }
        return html`<span class="${classMap(classes)}">${text}</span>`
    }
    getErrorText() {
        return this.error ? this.errorText : this.nativeErrorText
    }
    handleFocusChange() {
        // When calling focus() or reportValidity() during change, it's possible
        // for blur to be called after the new focus event. Rather than set
        // `this.focused` to true/false on focus/blur, we always set it to whether
        // or not the input itself is focused.
        this.focused = this.inputOrTextarea?.matches(':focus') ?? false
    }
    handleInput(event) {
        this.dirty = true
        this.value = event.target.value
    }
    redispatchEvent(event) {
        redispatchEvent(this, event)
    }
    getInputOrTextarea() {
        if (!this.inputOrTextarea) {
            // If the input is not yet defined, synchronously render.
            // e.g.
            // const textField = document.createElement('md-outlined-text-field');
            // document.body.appendChild(textField);
            // textField.focus(); // synchronously render
            this.connectedCallback()
            this.scheduleUpdate()
        }
        if (this.isUpdatePending) {
            // If there are pending updates, synchronously perform them. This ensures
            // that constraint validation properties (like `required`) are synced
            // before interacting with input APIs that depend on them.
            this.scheduleUpdate()
        }
        return this.inputOrTextarea
    }
    getInput() {
        if (this.type === 'textarea') {
            return null
        }
        return this.getInputOrTextarea()
    }
    handleIconChange() {
        this.hasLeadingIcon = this.leadingIcons.length > 0
        this.hasTrailingIcon = this.trailingIcons.length > 0
    }
    [getFormValue]() {
        return this.value
    }
    formResetCallback() {
        this.reset()
    }
    formStateRestoreCallback(state) {
        this.value = state
    }
    focus() {
        // Required for the case that the user slots a focusable element into the
        // leading icon slot such as an iconbutton due to how delegatesFocus works.
        this.getInputOrTextarea().focus()
    }
    [createValidator]() {
        return new TextFieldValidator(() => ({
            state: this,
            renderedControl: this.inputOrTextarea,
        }))
    }
    [getValidityAnchor]() {
        return this.inputOrTextarea
    }
    [onReportValidity](invalidEvent) {
        // Prevent default pop-up behavior.
        invalidEvent?.preventDefault()
        const prevMessage = this.getErrorText()
        this.nativeError = !!invalidEvent
        this.nativeErrorText = this.validationMessage
        if (prevMessage === this.getErrorText()) {
            this.field?.reannounceError()
        }
    }

    /*
    __decorate([
    query('.input')
], TextField.prototype, "inputOrTextarea", void 0);
__decorate([
    query('.field')
], TextField.prototype, "field", void 0);
__decorate([
    queryAssignedElements({ slot: 'leading-icon' })
], TextField.prototype, "leadingIcons", void 0);
__decorate([
    queryAssignedElements({ slot: 'trailing-icon' })
], TextField.prototype, "trailingIcons", void 0);
*/
    get inputOrTextarea() {
        return this.renderRoot?.querySelector('.input')
    }
    get field() {
        return this.renderRoot?.querySelector('.field')
    }
    get leadingIcons() {
        let slots = this.renderRoot?.querySelector("slot[name='leading-icon']")
        return slots.assignedElements()
        // let slots = this.renderRoot.querySelector(".aria-describedby")
        // return slots.assignedElements()
        // return this.renderRoot.querySelectorAll('.leading')
    }
    get trailingIcons() {
        let slots = this.renderRoot?.querySelector("slot[name='trailing-icon']")
        return slots.assignedElements()
    }

}
(() => {
    requestUpdateOnAriaChange(TextField)
})()
/** @nocollapse */
TextField.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
}
