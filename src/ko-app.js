import './imports.js';
import * as ko from 'knockout';
import { pages } from './pages.js';
import { router, addRoutes } from './router.js';

const template = //html
  `
  <ko-app-navbar params="navItems: navItems()"></ko-app-navbar>
  <main class="main-content" data-bind="component: pageContent"></main>
  <footer>Footer content</footer>
`;

class KoApp {
  pageContent = ko.observable({
    name: pages[0].component,
    params: {}
  });

  constructor() {
    this.configureRouter();
    this.configureTheme();
    this.navItems = ko.observableArray([
      { url: '#/about', displayName: 'About', icon: 'info-circle' }
    ]);
  }

  configureRouter() {
    const routes = pages.map(page => ({
      route: page.url,
      handler: this.routeHandler(page.component)
    }));
    addRoutes(routes);
    router.notFound(this.routeHandler('ko-not-found'));
    const location = router.getCurrentLocation();
    router.navigate(location.hashString);
  }

  /**
   * @param {string} componentTag
   */
  routeHandler(componentTag) {
    return (/** @type {import('navigo').Match} */ match) => {
      this.pageContent({
        name: componentTag,
        params: {
          data: { ...(match?.data && match?.data) },
          queryParams: { ...(match?.params && match?.params) }
        }
      });
    };
  }

  configureTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('sl-theme-dark');
    }
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        console.log(e);
        if (e.matches) {
          document.body.classList.add('sl-theme-dark');
        } else {
          document.body.classList.remove('sl-theme-dark');
        }
      });
  }
}

ko.components.register('ko-app', {
  viewModel: KoApp,
  template
});

//@ts-expect-error
ko.applyBindings();
