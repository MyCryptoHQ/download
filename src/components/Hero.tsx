import { t, Trans } from '@lingui/macro';
import { Box, Heading, Image, SubHeading } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

import heroMobile from '../assets/images/hero-mobile.png';
import hero from '../assets/images/hero.png';
import { Download } from './Download';

export const Hero: FunctionComponent = () => (
  <Box display="flex" flexDirection={['column', null, 'row']}>
    <Box marginTop={['82px', null, '158px']}>
      <Heading
        fontSize={['28px', null, '5']}
        fontWeight={['900', null, '700']}
        textAlign={['center', null, 'left']}
      >
        <Trans>Send your Ethereum transactions securely</Trans>
      </Heading>
      <SubHeading textAlign={['center', null, 'left']} fontWeight="normal" marginTop="3">
        Quill is the new way to safely send Ethereum transactions from the comfort of your desktop.
      </SubHeading>
      <Download display={['none', null, 'block']} />
    </Box>
    <Box flexShrink="0" paddingTop="4" display={['none', null, 'block']}>
      <Image src={hero} alt={t`Quill overview`} sx={{ userSelect: 'none' }} />
    </Box>
    <Box flexShrink="0" paddingTop="4" display={['block', null, 'none']}>
      <Image src={heroMobile} alt={t`Quill overview`} sx={{ userSelect: 'none' }} />
    </Box>
  </Box>
);
