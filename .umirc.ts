import { defineConfig } from '@umijs/max';
import devConfig from './devConfig';
import openapiConfig from './openapiConfig';
import prodConfig from './prodConfig';

let extraConfig = {};
switch (process.env.NODE_ENV) {
  case 'production':
    extraConfig = prodConfig;
    break;
  case 'api':
    extraConfig = openapiConfig;
    break;
  default:
    extraConfig = devConfig;
    break;
}
console.log('env:', process.env.NODE_ENV);
const config = defineConfig({
  // unocss
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  unocss: {
    watch: ['src/**/*.{ts,tsx,js,jsx}'],
  },
  // unocss end
  // 二级目录+hash
  history: {
    type: 'hash',
  },
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/umi-antd-tool/'
      : '/umi-antd-tool/',
  // 二级目录+hash end
  // https://umijs.org/docs/max/antd
  antd: {},
  // https://umijs.org/docs/max/access
  access: {},
  // // https://umijs.org/docs/max/react-query
  // reactQuery: {
  //   devtool: true,
  //   queryClient: true,
  // },
  // // https://umijs.org/docs/max/dva#%E9%85%8D%E7%BD%AE-dva
  // dva: {
  // },
  // https://umijs.org/docs/max/data-flow
  model: {},
  // https://umijs.org/docs/max/data-flow
  initialState: {},
  // https://umijs.org/docs/max/request
  request: {},
  layout: {
    title: '',
    locale: false,
  },
  mfsu: {
    // strategy: 'normal',
    strategy: 'eager',
    esbuild: true,
    cacheDirectory: 'node_modules/.cache/mfsu',
  },
  npmClient: 'pnpm',
});
export default {
  ...config,
  ...extraConfig,
};
