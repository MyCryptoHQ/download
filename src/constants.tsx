import { t, Trans } from '@lingui/macro';
import type { CarouselElement } from '@mycrypto/ui';
import { Body } from '@mycrypto/ui';

import featuresSlide0 from './assets/images/features-slide-0.png';
import featuresSlide1 from './assets/images/features-slide-1.png';
import featuresSlide2 from './assets/images/features-slide-2.png';
import gettingStartedSlide0 from './assets/images/getting-started-slide-0.svg';
import gettingStartedSlide1 from './assets/images/getting-started-slide-1.svg';
import gettingStartedSlide2 from './assets/images/getting-started-slide-2.svg';
import secondaryFeaturesSlide0 from './assets/images/secondary-features-slide-0.svg';
import secondaryFeaturesSlide1 from './assets/images/secondary-features-slide-1.svg';
import secondaryFeaturesSlide2 from './assets/images/secondary-features-slide-2.svg';

/**
 * URL for the old desktop application.
 * TODO: This won't work when we do releases for MyCrypto that aren't prereleases.
 */
export const DESKTOP_APP_URL = 'https://github.com/MyCryptoHQ/MyCrypto/releases/latest';

export const FEATURES_SLIDES: CarouselElement[] = [
  {
    title: t`Sign transactions`,
    icon: featuresSlide0,
    text: (
      <Body>
        <Trans>
          Connect Quill to MyCrypto.com and approve your transactions directly from the desktop.
        </Trans>
      </Body>
    )
  },
  {
    title: t`Create wallets`,
    icon: featuresSlide1,
    text: (
      <Body>
        <Trans>
          Create a 12-word secret recovery phrase to generate new wallets, and import all your other
          loose wallets.
        </Trans>
      </Body>
    )
  },
  {
    title: t`Access any network`,
    icon: featuresSlide2,
    text: (
      <Body>
        <Trans>
          Use Quill with any EVM-compatible blockchain, including Polygon, xDai, Binance Smart
          Chain, and more.
        </Trans>
      </Body>
    )
  }
];

export const SECONDARY_FEATURES_SLIDES: CarouselElement[] = [
  {
    title: t`Access securely`,
    icon: secondaryFeaturesSlide0,
    text: (
      <Body>
        <Trans>All the features MyCrypto has to offer - accessible safely from your desktop.</Trans>
      </Body>
    )
  },
  {
    title: t`Encrypt your keys`,
    icon: secondaryFeaturesSlide1,
    text: (
      <Body>
        <Trans>Quill encrypts your keys for you so you can store your wallets confidently.</Trans>
      </Body>
    )
  },
  {
    title: t`Thrive offline`,
    icon: secondaryFeaturesSlide2,
    text: (
      <Body>
        <Trans>
          Quill is fully functional offline. Airgap your device for even more cold storage security!
        </Trans>
      </Body>
    )
  }
];

export const GETTING_STARTED_SLIDES: CarouselElement[] = [
  {
    title: t`Install Quill`,
    icon: gettingStartedSlide0,
    text: (
      <Body>
        <Trans>Download and install Quill for for your operating system of choice.</Trans>
      </Body>
    )
  },
  {
    title: t`Setup your accounts`,
    icon: gettingStartedSlide1,
    text: (
      <Body>
        <Trans>
          Generate a new 12-word secret recovery phrase and/or import and existing wallet.
        </Trans>
      </Body>
    )
  },
  {
    title: t`Connect to MyCrypto`,
    icon: gettingStartedSlide2,
    text: (
      <Body>
        <Trans>
          Visit MyCrypto.com and connect to your new Quill wallet. Now you can send transaction
          requests from MyCrypto directly to Quill!
        </Trans>
      </Body>
    )
  }
];

export const FOOTER_LINK_COLUMNS = [
  {
    heading: 'Company',
    links: [
      {
        title: 'MyCrypto.com',
        url: 'https://www.mycrypto.com/'
      },
      {
        title: 'Help & Support',
        url: 'https://support.mycrypto.com/'
      },
      {
        title: 'Our Team',
        url: 'https://about.mycrypto.com/'
      },
      {
        title: 'Press',
        url: 'mailto://press@mycrypto.com'
      },
      {
        title: 'Privacy Policy',
        url: 'https://about.mycrypto.com/privacy/'
      }
    ]
  },
  {
    heading: 'Support Us',
    links: [
      {
        title: 'Get a Ledger',
        url: 'https://www.ledgerwallet.com/r/1985?path=/products/'
      },
      {
        title: 'Get a Trezor',
        url: 'https://shop.trezor.io/?offer_id=10&aff_id=1735'
      },
      {
        title: 'Get QuickNode',
        url: 'https://quiknode.io?tap_a=67226-09396e&tap_s=860550-6c3251'
      },
      {
        title: 'Buy ETH on Coinbase',
        url: 'https://coinbase-consumer.sjv.io/RVmkN'
      },
      {
        title: 'Unstoppable Domains',
        url: 'https://unstoppabledomains.com/r/mycrypto'
      }
    ]
  },
  {
    heading: 'Other Products',
    links: [
      {
        title: 'EtherAddressLookup',
        url: 'https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn'
      },
      {
        title: 'CryptoScamDB',
        url: 'https://cryptoscamdb.org/'
      },
      {
        title: 'FindETH',
        url: 'https://findeth.io/'
      },
      {
        title: 'MoneroVision',
        url: 'https://monerovision.com/'
      }
    ]
  }
];
