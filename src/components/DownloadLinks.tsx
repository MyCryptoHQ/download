import { t, Trans } from '@lingui/macro';
import { Box, Button, Image } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

import apple from '../assets/images/apple.svg';
import linux from '../assets/images/linux.svg';
import windows from '../assets/images/windows.svg';

// TODO: Actually link the buttons to the download
export const DownloadLinks: FunctionComponent = () => (
  <Box>
    <Button variant="inverted" fontWeight="bold" height="56px" marginRight="3">
      <Image src={apple} alt={t`Apple`} height="20px" marginRight="3" />
      <Trans>MacOS</Trans>
    </Button>
    <Button variant="inverted" height="56px" marginRight="3">
      <Image src={windows} alt={t`Windows`} height="20px" marginRight="3" />
      <Trans>Windows</Trans>
    </Button>
    <Button variant="inverted" height="56px">
      <Image src={linux} alt={t`Linux`} height="20px" marginRight="3" />
      <Trans>Linux</Trans>
    </Button>
  </Box>
);
