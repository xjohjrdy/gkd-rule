import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 0,
      name: '跳过广告',
      rules: {
        matches: ['[id="com.taobao.idlefish:id/splash_ad_close"]'],
      },
    },
  ],
});
