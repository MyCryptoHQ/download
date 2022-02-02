import { FunctionComponent } from 'react';
import { Body, Box } from '@mycrypto/ui';
import { Feature } from './Feature';
import { t, Trans } from '@lingui/macro';
import secure from '../assets/images/secure.svg';
import offline from '../assets/images/offline.svg';
import desktop from '../assets/images/desktop.svg';

export const Features: FunctionComponent = () => (
  <Box
    display="grid"
    marginTop="5"
    sx={{
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '45px'
    }}
  >
    <Feature image={secure} alt={t`Store your funds securely`}>
      <Body>
        <Trans>Store your funds securely</Trans>
      </Body>
    </Feature>
    <Feature image={offline} alt={t`Manage your wallets offline`}>
      <Body>
        <Trans>Manage your wallets offline</Trans>
      </Body>
    </Feature>
    <Feature image={desktop} alt={t`Access MyCrypto from your desktop`}>
      <Body>
        <Trans>Access MyCrypto from your desktop</Trans>
      </Body>
    </Feature>
  </Box>
);
