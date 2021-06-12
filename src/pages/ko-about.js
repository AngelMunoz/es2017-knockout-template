import * as ko from 'knockout';
const template = //html
  `
  <article>
    <header>
      Hello Modern'ish knockout
    </header>
    <p>
      This is a simple knockout excercise in 2021, It is likely that I'll need to maintain or at least take a look at a knockout application and I wanted to check out how it works.
    </p>
    <p>
      I'm pleased to see that it works incredibly well, it even has support for custom elements which make the API somewhat modern, the fact that knockout has always worked with plain functions makes it very very long standing, these days we may use ES2015 classes for a view model since they seem to be simple drop in replacements to functions (remember ES2016 classes are just sugar syntax over protptypes anyways)
    </p>
  </article>
  `;

class KoAbout { }

ko.components.register('ko-about', {
  viewModel: KoAbout,
  template
});
