import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { en as plurals } from 'make-plural/plurals';
import type { FunctionComponent } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { messages as en } from './locales/en/messages';
import { theme } from './theme';

import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';

i18n.loadLocaleData('en', { plurals });
i18n.load({ en });
i18n.activate('en');

const Global = createGlobalStyle`
  html, body {
    margin: 0;
  }
`;

const Root: FunctionComponent = ({ children }) => (
  <I18nProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <Global />
      {children}
    </ThemeProvider>
  </I18nProvider>
);

export default Root;
