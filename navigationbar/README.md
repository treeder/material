# Navigation Bar

This is a material 3 navigation bar, the button bar on the bottom for mobile screens. See demo for what it looks like. 

Import:

```html
<script type="module">
  import 'material/navigationbar/navigation-bar.js'
  import 'material/navigationtab/navigation-tab.js'
</script>
```

Usage:

```html
<div class="ltMedium" style="position: fixed; bottom: 0; width: 100%;">
  <md-navigation-bar active-index="1">
    <md-navigation-tab label="Home">
      <md-icon slot="active-icon">home</md-icon>
      <md-icon slot="inactive-icon">home</md-icon>
    </md-navigation-tab>
    <md-navigation-tab label="Stuff">
      <md-icon slot="active-icon">home</md-icon>
      <md-icon slot="inactive-icon">home</md-icon>
    </md-navigation-tab>
    <md-navigation-tab label="Cart" badge-value="3" show-badge>
      <md-icon slot="active-icon">shopping_cart</md-icon>
      <md-icon slot="inactive-icon">shopping_cart</md-icon>
      <md-badge value="3"></md-badge>
    </md-navigation-tab>
  </md-navigation-bar>
</div>
```
