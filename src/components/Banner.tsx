import type { BoxProps } from '@mycrypto/ui';
import { Body, Box, Icon } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

export const Banner: FunctionComponent<BoxProps> = ({ children, ...props }) => (
  <Box
    display="flex"
    paddingX="6"
    paddingY="1"
    backgroundColor="banner.background"
    sx={{ borderRadius: 'badge' }}
    {...props}
  >
    <Icon type="info" fill="text.primary" marginRight="2" />
    <Body>{children}</Body>
  </Box>
);
