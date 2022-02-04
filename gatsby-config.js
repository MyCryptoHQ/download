const { useGatsbyConfig } = require('gatsby-plugin-ts-config');

module.exports = useGatsbyConfig(() => require('./config/gatsby-config'), {
  type: 'babel'
});
