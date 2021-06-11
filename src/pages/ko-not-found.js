import * as ko from 'knockout';
const template = //html
  `
  <article>
   Not found
   <sl-button type="text" href="#/">Home</sl-button>
  </article>
`;

class KoNotFound { }

ko.components.register('ko-not-found', {
  viewModel: KoNotFound,
  template
});
