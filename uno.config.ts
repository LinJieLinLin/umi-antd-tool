// uno.config.ts
import presetRemToPx from '@unocss/preset-rem-to-px';
import { defineConfig, presetUno } from 'unocss';
export default defineConfig({
  presets: [
    presetUno(),
    presetRemToPx({ baseFontSize: 4 }),
    // ...custom presets
  ],
  rules: [
    ['b', { 'font-weight': 'bold' }],
    [
      'flex-column',
      {
        display: 'flex',
        'flex-direction': 'column',
      },
    ],
    [
      'flex-column-between',
      {
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between',
      },
    ],
    [
      'flex-column-around',
      {
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-around',
      },
    ],
    [
      'flex-space-around',
      {
        display: 'flex',
        'flex-direction': 'row',
        'justify-content': 'space-around',
        'align-content': 'center',
        'align-items': 'center',
      },
    ],
    [
      'flex-space-between',
      {
        display: 'flex',
        'flex-direction': 'row',
        'justify-content': 'space-between',
        'align-content': 'center',
        'align-items': 'center',
      },
    ],
    ['bg-size-full', { 'background-size': '100% 100%' }],
    [
      /^text-line-([\d]+)$/,
      ([_a, num]) => ({
        'word-break': 'break-all',
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        /*! autoprefixer: off */
        '-webkit-line-clamp': `${num}`,
      }),
    ],
    [/^fs-([\d]+)$/, ([_, num]) => ({ 'font-size': `${num}px` })],
    [/^flex([\d]+)$/, ([_, num]) => ({ flex: `${num}` })],
  ],
  shortcuts: {
    'flex-center':
      'flex flex-justify-center flex-content-center flex-items-center',
    'flex-middle': 'flex flex-items-center',
    'flex-y-center': 'flex-items-center',
  },
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
      // exclude files
      // exclude: []
    },
  },
});
