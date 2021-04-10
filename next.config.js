module.exports = {
  future: {
    webpack5: true,
  },
  target: 'serverless',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });

    return config;
  },
};
