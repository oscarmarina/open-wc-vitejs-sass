module.exports = {
  stories: [
    '../demo/**/*.stories.mdx',
    '../demo/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
    },
    {
      name: '@storybook/addon-links',
    },
    {
      name: '@storybook/addon-a11y',
    },
  ],

  framework: '@storybook/web-components',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here - https://github.com/eirslett/storybook-builder-vite
    console.info('=======> ', configType);
    if (configType === 'PRODUCTION') {
      config.build.chunkSizeWarningLimit = 1200;
    }
    return config;
  },
};
