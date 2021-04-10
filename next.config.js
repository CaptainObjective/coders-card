module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    imageSizes: [16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200, 256, 280, 320, 360, 400, 600],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });

    return config;
  },
};
