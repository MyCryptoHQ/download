import { FunctionComponent } from 'react';
import { Body, Box, Icon, Image } from '@mycrypto/ui';
import { t, Trans } from '@lingui/macro';
import quill from '../assets/images/quill.svg';
import mycrypto from '../assets/images/mycrypto.svg';
import metamask from '../assets/images/metamask.svg';
import exodus from '../assets/images/exodus.svg';

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
          paddingLeft: '0'
        },
        ':nth-child(5)': {
          borderLeft: '1px solid',
          borderLeftColor: 'overview.border',
          borderRight: '1px solid',
          borderRightColor: 'overview.border'
        },
        textAlign: 'center',
        padding: '4',
        borderBottom: '1px solid',
        borderBottomColor: 'overview.border',
        width: '150px',
        boxSizing: 'border-box'
      },
      th: {
        padding: '2'
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
          <Icon type="warning" width="30px" fill="overview.uncheck" />
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
          <Icon type="warning" width="30px" fill="overview.uncheck" />
        </td>
      </tr>
      <tr>
        <td>
          <Body>
            <Trans>Fully open-source</Trans>
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
          <Icon type="warning" width="30px" fill="overview.uncheck" />
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
          <Icon type="warning" width="30px" fill="overview.uncheck" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="warning" width="30px" fill="overview.uncheck" />
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
          <Icon type="warning" width="30px" fill="overview.uncheck" />
        </td>
        <td>
          <Icon type="checkmark" width="30px" fill="overview.check" />
        </td>
        <td>
          <Icon type="warning" width="30px" fill="overview.uncheck" />
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
          <Icon type="warning" width="30px" fill="overview.uncheck" />
        </td>
        <td>
          <Icon type="warning" width="30px" fill="overview.uncheck" />
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
          <Icon type="warning" width="30px" fill="overview.uncheck" />
        </td>
        <td>
          <Icon type="warning" width="30px" fill="overview.uncheck" />
        </td>
      </tr>
    </tbody>
  </Box>
);
