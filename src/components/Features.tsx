import { Trans } from '@lingui/macro';
import { Body, Box, ProductFeature } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

import desktop from '../assets/images/desktop.svg';
import offline from '../assets/images/offline.svg';
import secure from '../assets/images/secure.svg';

export const Features: FunctionComponent = () => (
  <Box
    display="grid"
    marginTop={['4', null, '5']}
    sx={{
      gridTemplateColumns: ['repeat(1, 1fr)', null, 'repeat(3, 1fr)'],
      gap: ['24px', null, '45px']
    }}
  >
    <ProductFeature
      icon={secure}
      text={
        <Body>
          <Trans>Store your funds securely</Trans>
        </Body>
      }
      maxWidth={['100%', null, '315px']}
    />
    <ProductFeature
      icon={offline}
      text={
        <Body>
          <Trans>Manage your wallets offline</Trans>
        </Body>
      }
      maxWidth={['100%', null, '315px']}
    />
    <ProductFeature
      icon={desktop}
      text={
        <Body>
          <Trans>Access MyCrypto from your desktop</Trans>
        </Body>
      }
      maxWidth={['100%', null, '315px']}
    />
  </Box>
);
