import { FunctionComponent } from 'react';
import { Box, Image } from '@mycrypto/ui';

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
    <Image src={image} alt={alt} marginRight="3" marginTop="-18px" marginBottom="2" />
    {children}
  </Box>
);
