# Navigation Drawer

See Demo for full working example. 

```html
<md-navigation-drawer id="nav-drawer">
  <md-list-item href="/">
    <md-icon slot="start">home</md-icon>
    <div slot="headline">Home</div>
  </md-list-item>
</md-navigation-drawer>
```

To have it opened, set the `opened` attribute. 

To have it opened on `expanded` sizes or greater automatically, add this:

```html
<script>
if (window.matchMedia("(width >= 840px)").matches) {
  document.getElementById('nav-drawer').opened = true
}
</script>
```
