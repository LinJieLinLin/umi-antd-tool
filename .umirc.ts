import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'UMI',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: '我的CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: 'f oo 示例',
      path: '/foo',
      component: './foo',
    },
  ],
  npmClient: 'pnpm',
});
