import { Trans } from '@lingui/macro';
import type { ButtonProps } from '@mycrypto/ui';
import { Box, Button, Icon } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

export const DownloadButton: FunctionComponent<ButtonProps> = ({ children, ...props }) => (
  <Button
    variant="inverted"
    fontWeight="bold"
    height="56px"
    lineHeight="1"
    sx={{
      svg: {
        transition: 'fill 0.12s ease 0s'
      },
      ':hover svg': {
        fill: 'white'
      }
    }}
    {...props}
  >
    {children}
  </Button>
);

// TODO: Actually link the buttons to the download
export const DownloadLinks: FunctionComponent = () => (
  <Box
    display="flex"
    flexWrap="wrap"
    justifyContent={['center', null, 'left']}
    marginTop="3"
    sx={{ gap: '3' }}
  >
    <DownloadButton>
      <Icon type="apple" fill="primary" width="20px" height="20px" marginRight="3" flexShrink="0" />
      <Trans>MacOS</Trans>
    </DownloadButton>
    <DownloadButton>
      <Icon
        type="windows"
        fill="primary"
        width="20px"
        height="20px"
        marginRight="3"
        flexShrink="0"
      />
      <Trans>Windows</Trans>
    </DownloadButton>
    <DownloadButton>
      <Icon type="linux" fill="primary" width="20px" height="20px" marginRight="3" flexShrink="0" />
      <Trans>Linux</Trans>
    </DownloadButton>
  </Box>
);
