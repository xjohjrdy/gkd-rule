import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    {
      key: 0,
      name: '拒绝存储权限',
      rules: {
        matches: [
            'ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView[childCount=0]',
          ],
        // matches:['[id="com.chinamworld.main:id/tv_dlg_content" && text*="存储"]', [id="com.chinamworld.main:id/dlg_left_tv"]],
      },
    },
  ],
});
