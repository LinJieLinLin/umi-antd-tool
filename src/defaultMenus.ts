export const menu = [
  {
    name: '工具',
    icon: 'tool',
    // path: '/tool',
    children: [
      {
        name: 'qrcode',
        path: '/tool/qrcode',
      },
      {
        name: 'acc',
        path: '/tool/access',
      },
    ],
  },
  {
    name: 'blog',
    path: 'https://lj4.top',
    icon: 'share',
  },
  {
    name: 'lj-utils',
    path:
      'https://lj4.top/utils/lj-utils/index.html' ||
      'https://linjielinlin.github.io/utils/lj-utils/index.html',
    icon: 'share',
  },
  {
    name: 'unlock music',
    path: 'https://lj4.top/um/',
    icon: 'share',
  },
];
export default menu;
