import partial from 'webpack-partial';

export default () => (config) => partial(config, {
  module: {
    loaders: [{
      name: 'json5',
      test: /\.json5?$/,
      loader: require.resolve('json5-loader'),
    }],
  },
});
