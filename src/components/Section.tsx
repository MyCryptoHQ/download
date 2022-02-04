import type { BoxProps } from '@mycrypto/ui';
import { Box } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

export const Section: FunctionComponent<BoxProps> = ({ children, ...props }) => (
  <Box
    {...props}
    sx={{
      ':nth-child(odd)': {
        backgroundColor: 'background.page'
      },
      ':nth-child(even)': {
        backgroundColor: 'background.muted'
      }
    }}
  >
    {children}
  </Box>
);
