export default {
  plugins: ['@umijs/max-plugin-openapi'],
  openAPI: {
    requestLibPath: "import { request } from '@umijs/max'",
    // 或者使用在线的版本
    schemaPath: 'https://rchy.lj4.top/swagger-json',
    mock: false,
  },
};
