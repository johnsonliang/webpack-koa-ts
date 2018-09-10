import * as webpack from 'webpack';

import WebpackConfig from './webpack.base.conf';

const buildConfig = new WebpackConfig('production');

webpack(buildConfig).run((err: Error) => {
  console.log(err);
});
