import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'alook.browser',
  name: 'Alook',
  groups: [
    {
      key: 0,
      name: '允许',
      rules: {
        matches: ['[id="android:id/button1"]', '[text="允许"]'],
      },
    },
  ],
});
