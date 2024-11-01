import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 0,
      name: '启动广告',
      rules: {
        matches: '@TextView[text *= "跳过广告"]',
      },
    },
  ],
});
