import { FunctionComponent } from 'react';
import Root from '../Root';
import { Footer } from './Footer';

export const Page: FunctionComponent = ({ children }) => (
  <Root>
    {children}
    <Footer />
  </Root>
);
