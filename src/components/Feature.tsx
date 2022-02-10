import { Body, Box, Image } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

export interface FeatureProps {
  image: string;
  alt: string;
}

export const Feature: FunctionComponent<FeatureProps> = ({ image, alt, children }) => (
  <Box
    display="flex"
    backgroundColor="feature.background"
    sx={{ borderRadius: 'feature' }}
    paddingX="3"
    alignItems="center"
  >
    <Image
      src={image}
      alt={alt}
      width="55px"
      height="55px"
      marginRight="3"
      marginTop="-18px"
      marginBottom="2"
      flexShrink="0"
    />
    <Body paddingY={['3', null, '1']}>{children}</Body>
  </Box>
);
