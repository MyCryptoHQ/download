import { t, Trans } from '@lingui/macro';
import { Body, Box, Button, Heading, Image, SubHeading } from '@mycrypto/ui';
import { FunctionComponent } from 'react';
import { useVersion } from '../hooks';
import hero from '../assets/images/hero.png';

export const Hero: FunctionComponent = () => {
  const version = useVersion();

  return (
    <Box display="flex">
      <Box marginTop="158px">
        <Heading>
          <Trans>Send your Ethereum transactions securely</Trans>
        </Heading>
        <SubHeading marginTop="3">
          Quill is the new way to safely send Ethereum transactions from the comfort of your
          desktop.
        </SubHeading>
        {/* TODO: Actually link the buttons to the download */}
        <Button marginTop="5">
          <Trans>Download Now</Trans>
        </Button>
        <Body fontWeight="bold" variant="muted" marginTop="3">
          Version {version}
        </Body>
      </Box>
      <Box flexShrink="0" paddingTop="4">
        <Image src={hero} alt={t`Quill overview`} sx={{ userSelect: 'none' }} />
      </Box>
    </Box>
  );
};
