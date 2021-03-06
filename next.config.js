require("./env");
require("./database");
require("./models/all");
const openBrowser = require("react-dev-utils/openBrowser");
const { optimizations, plugins, rules } = require("./config");

const { NODE_ENV, LOCALHOST } = process.env;

/* opens a browser window */
if (NODE_ENV === "development") openBrowser(LOCALHOST);

module.exports = {
  webpack(config, { isServer }) {
    /* adds custom aliased extensions */
    config.resolve.extensions.push(".css", ".sass", ".scss");

    /* adds custom rules to client and server */
    config.module.rules.push(...rules(isServer));

    /* adds custom plugins to client and server */
    config.plugins.push(...plugins(isServer));

    /* adds custom split chunk optimizations to client and server */
    config.optimization.splitChunks.cacheGroups = optimizations(
      isServer,
      config,
    );

    /* return new config to next */
    return config;
  },
};
