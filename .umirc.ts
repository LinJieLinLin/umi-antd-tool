import { defineConfig } from '@umijs/max';
import devConfig from './devConfig';
import openapiConfig from './openapiConfig';

let extraConfig = {};
switch (process.env.NODE_ENV) {
  case 'production':
    extraConfig = {};
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
  // 二级目录+hash
  history: {
    type: 'hash',
  },
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/umi-antd-tool/'
      : '/umi-antd-tool/',
  // 二级目录+hash end
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '',
  },
  mfsu: {
    esbuild: true,
  },
  npmClient: 'pnpm',
});
export default {
  ...config,
  ...extraConfig,
};
