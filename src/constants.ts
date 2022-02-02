import type { Slide } from './components';
import { t } from '@lingui/macro';
import featuresSlide0 from './assets/images/features-slide-0.png';
import featuresSlide1 from './assets/images/features-slide-1.png';
import featuresSlide2 from './assets/images/features-slide-2.png';
import secondaryFeaturesSlide0 from './assets/images/secondary-features-slide-0.svg';
import secondaryFeaturesSlide1 from './assets/images/secondary-features-slide-1.svg';
import secondaryFeaturesSlide2 from './assets/images/secondary-features-slide-2.svg';
import gettingStartedSlide0 from './assets/images/getting-started-slide-0.svg';
import gettingStartedSlide1 from './assets/images/getting-started-slide-1.svg';
import gettingStartedSlide2 from './assets/images/getting-started-slide-2.svg';

/**
 * URL for the old desktop application.
 * TODO: Figure out where this should link to.
 */
export const DESKTOP_APP_URL = 'https://github.com/MyCryptoHQ/MyCrypto/releases/latest';

export const FEATURES_SLIDES: Slide[] = [
  {
    title: t`Sign transactions`,
    image: featuresSlide0,
    text: t`Connect Quill to MyCrypto.com and approve your transactions directly from the desktop.`
  },
  {
    title: t`Create wallets`,
    image: featuresSlide1,
    text: t`Create a 12-word secret recovery phrase to generate new wallets, and import all your other loose wallets.`
  },
  {
    title: t`Access any network`,
    image: featuresSlide2,
    text: t`Use Quill with any EVM-compatible blockchain, including Polygon, xDai, Binance Smart Chain, and more.`
  }
];

export const SECONDARY_FEATURES_SLIDES: Slide[] = [
  {
    title: t`Access securely`,
    image: secondaryFeaturesSlide0,
    text: t`All the features MyCrypto has to offer - accessible safely from your desktop.`
  },
  {
    title: t`Encrypt your keys`,
    image: secondaryFeaturesSlide1,
    text: t`Quill encrypts your keys for you so you can store your wallets confidently.`
  },
  {
    title: t`Thrive offline`,
    image: secondaryFeaturesSlide2,
    text: t`Quill is fully functional offline. Airgap your device for even more cold storage security!`
  }
];

export const GETTING_STARTED_SLIDES: Slide[] = [
  {
    title: t`Install Quill`,
    image: gettingStartedSlide0,
    text: t`Download and install Quill for for your operating system of choice.`
  },
  {
    title: t`Setup your accounts`,
    image: gettingStartedSlide1,
    text: t`Generate a new 12-word secret recovery phrase and/or import and existing wallet.`
  },
  {
    title: t`Connect to MyCrypto`,
    image: gettingStartedSlide2,
    text: t`Visit MyCrypto.com and connect to your new Quill wallet. Now you can send transaction requests from MyCrypto directly to Quill!`
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
