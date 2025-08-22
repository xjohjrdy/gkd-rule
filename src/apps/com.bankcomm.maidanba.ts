import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bankcomm.maidanba',
  name: '买单吧',
  groups: [
    {
      key: 0,
      name: '首屏广告',
      rules: {
        // matches: [
        //   '[id="com.chinamworld.main:id/tv_dlg_content" && text*="存储"]',
        //   '[id="com.chinamworld.main:id/dlg_left_tv"]',
        // ],
        matches:
          '@RelativeLayout[id="com.bankcomm.maidanba:id/ll_ad_skip"]',
      },
    },
  ],
});
