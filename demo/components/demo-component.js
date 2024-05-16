import { html, css, LitElement } from 'lit'
import 'material/textfield/outlined-text-field.js'
import 'material/button/filled-button.js'
import 'material/button/outlined-button.js'
import 'material/card/outlined-card.js'
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
        .cardTitle {
            font-size: 1.2rem;
            font-weight: 500;
        }
    `]

    render() {
        return html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
        <md-outlined-text-field label="Name" required minlength="4"></md-outlined-text-field>
        <md-filled-button @click=${this.save}>Save</md-filled-button>

        <div class="flex g12" style="flex-wrap: wrap;">
            <md-outlined-card style="">
                <div class="flex col">
                    <img src="./images/img1.jpg">
                </div>
                <div class="flex col g12 p16" style="">
                    <div class="cardTitle">Card 1</div>
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
                    <div class="cardTitle">Card 2</div>
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