# Material 3 Web Components

<img src="./docs/images/material-web.gif"
  title="Material web components"
  alt="A collection of Material web components"
  style="border-radius: 32px">

[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/gh/hm/treeder/material)](https://www.jsdelivr.com/package/gh/treeder/material?tab=stats)

`material` is a library of
[web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
that helps build beautiful and accessible web applications. It uses
[Material 3](https://m3.material.io/), the latest version of Google's
open-source design system.

This is a fork of the original [material web](https://github.com/material-components/material-web) project that seems to be on hold. 
We didn't want to wait for them to start moving again and we didn't want to stop using these material components so we'll continue to
develop this at our own pace. And that pace is FAST. 

Please [consider sponsoring](https://github.com/sponsors/treeder) before creating issues for us. 

## Demo

Demo code is here: https://github.com/treeder/material/tree/main/demo

You can run it locally by checking out this repo and:

```js
make serve
```

## Quick start

Add this importmap to the `<head>` section of you app/site:

```js
<script type="importmap">
  {
    "imports": {
      "lit": "https://cdn.jsdelivr.net/npm/lit@3/index.js",
      "lit/": "https://cdn.jsdelivr.net/npm/lit@3/",
      "@lit/localize": "https://cdn.jsdelivr.net/npm/@lit/localize/lit-localize.js",
      "@lit/reactive-element": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@1/reactive-element.js",
      "@lit/reactive-element/": "https://cdn.jsdelivr.net/npm/@lit/reactive-element@1/",
      "lit-element/lit-element.js": "https://cdn.jsdelivr.net/npm/lit-element@4/lit-element.js",
      "lit-html": "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js",
      "lit-html/": "https://cdn.jsdelivr.net/npm/lit-html@3/",
      "tslib": "https://cdn.jsdelivr.net/npm/tslib@2/tslib.es6.mjs",
      
      "material/": "https://cdn.jsdelivr.net/gh/treeder/material@0/"
    }
  }
</script>
```

Then you can start using all the components like this:

```html
<script type="module">
    import 'material/textfield/outlined-text-field.js'
    import 'material/button/filled-button.js'
</script>

<div>
  <md-outlined-text-field label="Name" required minlength="4"></md-outlined-text-field>
  <md-filled-button @click=${this.save}>Save</md-filled-button>
</div>
```

Or you'll more likely use them within other components, you'd do that like this. 

Create a component with the material components in it:

```js
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
```

Then in your HTML:

```html
<script type="module">
    import './components/demo-component.js'
</script>

<demo-component></demo-component>        
```
