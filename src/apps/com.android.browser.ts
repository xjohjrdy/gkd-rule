import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.android.browser',
  name: '浏览器',
  groups: [
    {
      key: 0,
      name: '浏览器跳转弹窗',
      activityIds: [
        'com.android.browser.BrowserActivity'
      ],
      rules: {
        matches: ['[id="android:id/button1"]', '[text="跳过"]'],
      },
    },
  ],
});
