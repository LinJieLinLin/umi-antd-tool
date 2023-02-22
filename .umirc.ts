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

const config = defineConfig({
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
