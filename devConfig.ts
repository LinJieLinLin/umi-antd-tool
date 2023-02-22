export default {
  mock: false,
  proxy: {
    '/api': {
      target: 'https://rchy.lj4.top/',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' },
    },
  },
};
