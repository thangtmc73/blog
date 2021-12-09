const path = require('path');

module.exports = {
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
    localeDetection: true,
  },
  localePath: path.resolve("./locales"),
};