import * as webpack from 'webpack';

import WebpackConfig from '../build/webpack.base.conf';

const devConfig = new WebpackConfig('development');

webpack(devConfig).watch(
  {
    aggregateTimeout: 300
  },
  (err: Error) => {
    console.log(err);
  }
);
