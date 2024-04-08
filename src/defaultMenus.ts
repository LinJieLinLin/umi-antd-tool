export const menu = [
  {
    name: '微信小程序',
    icon: 'wechat',
    // path: '/tool',
    children: [
      {
        name: 'token',
        path: '/wechat/token',
      },
      {
        name: 'microQrCode',
        path: '/wechat/microQrCode',
      },
    ],
  },
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
        name: 'tem',
        path: '/tool/tem',
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
