import { Trans } from '@lingui/macro';
import type { BoxProps} from '@mycrypto/ui';
import { Body, Box, Button } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

import { useVersion } from '../hooks';


export const Download: FunctionComponent<BoxProps> = ({ ...props }) => {
  const version = useVersion();

  return (
    <Box marginTop="5" {...props}>
      {/* TODO: Actually link the buttons to the download */}
      <Button paddingY="3" width={['100%', null, 'auto']}>
        <Trans>Download Now</Trans>
      </Button>
      <Body fontWeight="bold" variant="muted" textAlign={['center', null, 'left']} marginTop="3">
        Version {version}
      </Body>
    </Box>
  );
};
