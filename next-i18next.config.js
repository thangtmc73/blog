const path = require('path');

module.exports = {
  i18n: {
    locales: ["vi"],
    defaultLocale: "vi",
    localeDetection: true,
  },
  localePath: path.resolve("./locales"),
};