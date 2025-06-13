module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Remove source-map-loader from rules
      webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
        if (rule.oneOf) {
          rule.oneOf = rule.oneOf.filter(
            (r) => !(r.loader && r.loader.includes("source-map-loader"))
          );
        }
        return rule;
      });
      return webpackConfig;
    },
  },
};
