import { FunctionComponent } from 'react';
import { Box, BoxProps } from '@mycrypto/ui';

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
