import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    {
      key: 0,
      name: '拒绝存储权限',
      rules: { matches: '[id="com.chinamworld.main:id/tv_dlg_content" && text*="存储"], [id="com.chinamworld.main:id/dlg_left_tv"]' },
    },
  ],
});
