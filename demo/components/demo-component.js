import { html, css, LitElement } from 'lit'
import 'material/textfield/outlined-text-field.js'
import 'material/button/filled-button.js'
import 'material/button/outlined-button.js'
import 'material/card/outlined-card.js'
import 'material/chips/chip-set.js'
import 'material/chips/assist-chip.js'
import 'material/chips/filter-chip.js'
import 'material/chips/input-chip.js'
import 'material/chips/suggestion-chip.js'

import { styles as sharedStyles } from './styles.js'

class DemoComponent extends LitElement {
    static styles = [
        sharedStyles,
        css`
        md-outlined-card {
            width: 300px;
            background: var(--md-sys-color-surface); 
            overflow: hidden;
        }
        md-outlined-card img {
            width: 100%;
            height: 160px;
            object-fit: cover;
        }
        .card-title {
            font-size: 1.2rem;
            font-weight: 500;
        }
    `]

    render() {
        return html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
        <md-outlined-text-field label="Name" required minlength="4"></md-outlined-text-field>
        <md-outlined-text-field label="Email" type="email" required></md-outlined-text-field>
        <md-outlined-text-field label="Password" type="password" required></md-outlined-text-field>
        <md-outlined-text-field label="Phone" type="tel" required></md-outlined-text-field>
        <md-outlined-text-field label="File" type="file" required></md-outlined-text-field>
        <md-outlined-text-field label="Date" type="date" required></md-outlined-text-field>
        <md-filled-button @click=${this.save}>Save</md-filled-button>

        <md-chip-set>
            <md-assist-chip label="Assist chip"></md-assist-chip>
            <md-filter-chip label="Filter chip"></md-filter-chip>
            <md-input-chip label="Input chip"></md-input-chip>
            <md-suggestion-chip label="Suggestion chip"></md-suggestion-chip>
        </md-chip-set>

        <div class="flex g12" style="flex-wrap: wrap;">
            <md-outlined-card style="">
                <div class="flex col">
                    <img src="./images/img1.jpg">
                </div>
                <div class="flex col g12 p16" style="">
                    <div class="card-title">Card 1</div>
                    <div>Card content goes here</div>
                    <div class="flex g8 jcr mt12">
                        <md-outlined-button>Read More</md-outlined-button>
                        <md-filled-button>Buy Now</md-filled-button>
                    </div>
                </div>
            </md-outlined-card>
            <md-outlined-card style="">
                <div class="flex col">
                    <img src="./images/img2.jpg">
                </div>
                <div class="flex col g12 p16" style="">
                    <div class="card-title">Card 2</div>
                    <div>Card content goes here</div>
                    <div class="flex g8 jcr mt12">
                        <md-outlined-button>Read More</md-outlined-button>
                        <md-filled-button>Buy Now</md-filled-button>
                    </div>
                </div>
            </md-outlined-card>
        </div>
    </div>`
    }
    save() {
        console.log("Save button clicked")
    }
}

customElements.define('demo-component', DemoComponent)