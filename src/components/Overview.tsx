import { t, Trans } from '@lingui/macro';
import { Body, Box, Icon, Image } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

import exodus from '../assets/images/exodus.svg';
import metamask from '../assets/images/metamask.svg';
import mycrypto from '../assets/images/mycrypto.svg';
import quill from '../assets/images/quill.svg';

export const Overview: FunctionComponent = () => (
  <Box
    as="table"
    sx={{
      borderCollapse: 'collapse',
      'td, th': {
        ':nth-child(1)': {
          textAlign: 'left',
          width: '165px',
          padding: '2',
          paddingLeft: ['3', null, '0']
        },
        ':nth-child(5)': {
          borderLeft: ['none', null, '1px solid'],
          borderLeftColor: ['none', null, 'overview.border'],
          borderRight: ['none', null, '1px solid'],
          borderRightColor: ['none', null, 'overview.border']
        },
        textAlign: 'center',
        padding: ['0', null, '4'],
        paddingY: '4',
        borderBottom: ['none', null, '1px solid'],
        borderBottomColor: ['none', null, 'overview.border'],
        width: ['100px', null, '155px'],
        minWidth: '100px',
        boxSizing: 'border-box'
      },
      th: {
        padding: '2'
      },
      'tbody tr:nth-child(odd)': {
        backgroundColor: ['background.muted', null, 'transparent']
      }
    }}
  >
    <colgroup>
      <col />
      <Box
        as="col"
        sx={{ border: '2px solid', borderRadius: 'badge', borderColor: 'overview.highlight' }}
      />
      <col span={3} />
    </colgroup>
    <thead>
      <tr>
        <th />
        <th>
          <Image src={quill} alt={t`Quill`} />
          <Body>
            <Trans>Quill</Trans>
          </Body>
        </th>
        <th>
          <Image src={mycrypto} alt={t`Desktop App`} />
          <Body>
            <Trans>Desktop App</Trans>
          </Body>
        </th>
        <th>
          <Image src={metamask} alt={t`MetaMask`} />
          <Body>
            <Trans>MetaMask</Trans>
          </Body>
        </th>
        <th>
          <Image src={exodus} alt={t`Exodus`} />
          <Body>
            <Trans>Exodus</Trans>
          </Body>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <Body>
            <Trans>Create/import wallets</Trans>
          </Body>
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
      </tr>
      <tr>
        <td>
          <Body>
            <Trans>Compatible with EVM chains</Trans>
          </Body>
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
      </tr>
      <tr>
        <td>
          <Body>
            <Trans>Downloadable application</Trans>
          </Body>
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="delete" width="30px" fill="overview.uncheck" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
      </tr>
      <tr>
        <td>
          <Body>
            <Trans>Import private keys/keystore files</Trans>
          </Body>
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="delete" width="30px" fill="overview.uncheck" />
        </td>
      </tr>
      <tr>
        <td>
          <Body>
            <Trans>Open-source</Trans>
          </Body>
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="delete" width="30px" fill="overview.uncheck" />
        </td>
      </tr>
      <tr>
        <td>
          <Body>
            <Trans>Interact with MyCrypto.com</Trans>
          </Body>
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="delete" width="30px" fill="overview.uncheck" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="delete" width="30px" fill="overview.uncheck" />
        </td>
      </tr>
      <tr>
        <td>
          <Body>
            <Trans>Multiple accounts</Trans>
          </Body>
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="delete" width="30px" fill="overview.uncheck" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="delete" width="30px" fill="overview.uncheck" />
        </td>
      </tr>
      <tr>
        <td>
          <Body>
            <Trans>Useable offline/air-gapped</Trans>
          </Body>
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="delete" width="30px" fill="overview.uncheck" />
        </td>
        <td>
          <Icon type="delete" width="30px" fill="overview.uncheck" />
        </td>
      </tr>
      <tr>
        <td>
          <Body>
            <Trans>Security focused</Trans>
          </Body>
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="delete" width="30px" fill="overview.uncheck" />
        </td>
      </tr>
    </tbody>
  </Box>
);
