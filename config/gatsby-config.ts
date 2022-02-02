import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    // Used to get the latest version from GitHub
    // TODO: Change to `quill`
    repository: 'MyCryptoHQ/MyCrypto'
  },
  plugins: ['gatsby-plugin-styled-components']
};

export default config;
