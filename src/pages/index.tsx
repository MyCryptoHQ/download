import { t, Trans } from '@lingui/macro';
import { Button, Carousel, Container, Heading, InlineBody, SubHeading } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';

import {
  Banner,
  Download,
  DownloadLinks,
  Features,
  Hero,
  Link,
  Page,
  Section
} from '../components';
import { Overview } from '../components/Overview';
import {
  DESKTOP_APP_URL,
  FEATURES_SLIDES,
  GETTING_STARTED_SLIDES,
  SECONDARY_FEATURES_SLIDES
} from '../constants';

const Index: FunctionComponent = () => (
  <Page>
    <Section marginBottom="5">
      <Container>
        <Hero />
        <Download display={['block', null, 'none']} />
        <DownloadLinks />
        <Heading
          fontSize={['25px', null, '5']}
          fontWeight={['900', null, '700']}
          marginTop={['5', null, '6']}
          textAlign="center"
        >
          <Trans>This quest can be dangerous. Take Quill with you.</Trans>
        </Heading>
        <Features />
        <Banner marginTop={['24px', null, '3']}>
          <Trans>
            <InlineBody fontWeight="bold">Looking for the Desktop App?</InlineBody> It's still{' '}
            <Link to={DESKTOP_APP_URL} isExternal={true}>
              available
            </Link>
            , but is no longer being actively maintained.
          </Trans>
        </Banner>
      </Container>
    </Section>
    <Section>
      <Container paddingY="5">
        <Carousel title={t`Primary features of Quill`} elements={FEATURES_SLIDES} />
      </Container>
    </Section>
    <Section>
      <Container paddingY={['5', null, '6']} textAlign="center">
        <Heading>
          <Trans>Get Quill Now!</Trans>
        </Heading>
        <SubHeading fontWeight="normal" marginTop="3">
          <Trans>
            It’s time to start treating your security seriously. Level up your game by downloading
            Quill now.
          </Trans>
        </SubHeading>
        {/* TODO: Actually link the buttons to the download */}
        <Button marginTop="4">
          <Trans>Download Now</Trans>
        </Button>
      </Container>
    </Section>
    <Section>
      <Container paddingY="5">
        <Carousel
          title={t`Keep your wallets away from the browser`}
          elements={SECONDARY_FEATURES_SLIDES}
          inverted={true}
        />
      </Container>
    </Section>
    <Section overflowX="auto">
      <Container
        marginY="6"
        paddingY="5"
        paddingX={['0', null, '5']}
        display={['block', null, 'flex']}
        justifyContent="center"
        sx={{
          border: ['none', null, '1px solid'],
          borderColor: ['none', null, 'overview.border'],
          borderRadius: 'badge'
        }}
      >
        <Overview />
      </Container>
    </Section>
    <Section>
      <Container paddingY="5">
        <Carousel title={t`Getting started with Quill`} elements={GETTING_STARTED_SLIDES} />
      </Container>
    </Section>
    <Section>
      <Container paddingY="6" textAlign="center">
        <Heading>
          <Trans>Safeguard your self-sovereignty by downloading Quill now.</Trans>
        </Heading>
        {/* TODO: Actually link the buttons to the download */}
        <Button marginTop="4">
          <Trans>Download Now</Trans>
        </Button>
      </Container>
    </Section>
  </Page>
);

export default Index;
