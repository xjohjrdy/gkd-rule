import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.icbc.',
  name: '中国工商银行',
  groups: [
    {
      key: 0,
      name: '关闭广告',
      rules: { matches: '[id="com.icbc:id/tv_time"]' },
    },
  ],
});
