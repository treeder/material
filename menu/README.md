# Menu

```html
<md-menu id="user-menu" anchor="profile-pic" ?open=${this.open}
    @closed=${() => { }}>
  <md-menu-item href="/profile">
      <div slot="headline">Profile</div>
      <md-icon class="startIcon" slot="start">person</md-icon>
  </md-menu-item>
  <md-menu-item id="goto-orgs" href="/orgs">
      <div slot="headline">My Organizations</div>
      <md-icon class="startIcon" slot="start">storefront</md-icon>
  </md-menu-item>
  <md-menu-item id="goto-signout" @click=${this.signOut}>
      <div slot="headline">Sign out</div>
      <md-icon class="startIcon" slot="start">logout</md-icon>
  </md-menu-item>
</md-menu>
```

```js
  toggleMenu() {
    let m = this.renderRoot.querySelector("#user-menu")
    m.open = !m.open
  }
```
