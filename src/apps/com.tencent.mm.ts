import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '小程序广告跳过',
      activityIds: [
        'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
        'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
      ],
      rules: {
        matches: ['[text="广告"]', '[text="跳过"]'],
      },
    },
  ],
});
