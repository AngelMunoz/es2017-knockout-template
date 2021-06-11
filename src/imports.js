
// Css
import '@shoelace-style/shoelace/dist/themes/base.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import './styles.css';

import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/form/form.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('shoelace');
// Components
import './components/ko-app-navbar.js';

// Pages
import './pages/ko-home.js';
import './pages/ko-about.js';
import './pages/ko-not-found.js';
