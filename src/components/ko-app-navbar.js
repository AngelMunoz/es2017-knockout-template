import * as ko from 'knockout';
const template = //html
  `
  <nav>
    <section>
      <sl-button type="text" href="#/">
        <sl-icon slot="prefix" name="house"></sl-icon>
        Knockout Modern'ish
      </sl-button>
    </section>
    <section data-bind="foreach: navItems">
      <sl-button type="text" data-bind="
        attr: { href: url }
        ">
        <sl-icon data-bind="if: icon, attr: { name: icon }" slot="prefix"></sl-icon>
        <span data-bind="text: displayName"></span>
      </sl-button>
    </section>
  </nav>
`;

class KoAppNavbar {
  constructor({ navItems } = {}) {
    console.log(navItems);
    this.navItems = navItems || [];
  }
}

ko.components.register('ko-app-navbar', {
  viewModel: KoAppNavbar,
  template
});
