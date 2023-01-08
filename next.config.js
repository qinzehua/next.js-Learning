module.exports = {};
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  return {
    basePath: "/nelo",
    i18n: {
      locales: ["en", "fr", "nl-NL"],
      defaultLocale: "en",
    },
    async rewrites() {
      return [
        {
          source: "/team",
          destination: "/about",
        },
        {
          source: "/about-us",
          destination: "/about",
        },
      ];
    },
    env: {
      customKey: "my-value",
    },
    serverRuntimeConfig: {
      mySecret: "secret",
      secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
      staticFolder: process.env.SECOND_SECRET,
    },
    poweredByHeader: false,
    devIndicators: {
      buildActivityPosition: "top-letf",
    },
  };
};
