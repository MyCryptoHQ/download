import { FunctionComponent } from 'react';
import {
  Banner,
  DownloadLinks,
  Features,
  Hero,
  Link,
  Page,
  Section,
  Slideshow
} from '../components';
import { Button, Container, Heading, InlineBody, SubHeading } from '@mycrypto/ui';
import { t, Trans } from '@lingui/macro';
import {
  DESKTOP_APP_URL,
  FEATURES_SLIDES,
  GETTING_STARTED_SLIDES,
  SECONDARY_FEATURES_SLIDES
} from '../constants';
import { Overview } from '../components/Overview';

const Index: FunctionComponent = () => (
  <Page>
    <Section marginBottom="5">
      <Container>
        <Hero />
        <DownloadLinks />
        <Heading marginTop="6" textAlign="center">
          <Trans>This quest can be dangerous. Take Quill with you.</Trans>
        </Heading>
        <Features />
        <Banner marginTop="3">
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
        <Slideshow title={t`Primary features of Quill`} slides={FEATURES_SLIDES} />
      </Container>
    </Section>
    <Section>
      <Container paddingY="6" textAlign="center">
        <Heading>
          <Trans>Get Quill Now!</Trans>
        </Heading>
        <SubHeading marginTop="3">
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
        <Slideshow
          title={t`Keep your wallets away from the browser`}
          slides={SECONDARY_FEATURES_SLIDES}
          imagePosition="right"
        />
      </Container>
    </Section>
    <Section>
      <Container
        marginY="6"
        padding="5"
        display="flex"
        justifyContent="center"
        sx={{
          border: '1px solid',
          borderColor: 'overview.border',
          borderRadius: 'badge'
        }}
      >
        <Overview />
      </Container>
    </Section>
    <Section>
      <Container paddingY="5">
        <Slideshow title={t`Getting started with Quill`} slides={GETTING_STARTED_SLIDES} />
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
