import { html, css, LitElement } from 'lit'
import 'material/textfield/outlined-text-field.js'
import 'material/button/filled-button.js'

class DemoComponent extends LitElement {
    static styles = css`
        /* Add your component styles here */
    `

    render() {
        return html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
        <md-outlined-text-field label="Name" required minlength="4"></md-outlined-text-field>
        <md-filled-button @click=${this.save}>Save</md-filled-button>
    </div>`
    }
    save() {
        console.log("Save button clicked")
    }
}

customElements.define('demo-component', DemoComponent)