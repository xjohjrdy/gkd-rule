import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.galaxy.stock',
  name: '银河证券',
  groups: [
    {
      key: 0,
      name: '关闭按钮',
      rules: { matches: '[id="com.galaxy.stock:id/closeBtn"]' },
    },
  ],
});
