import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/eleanor_headshot.JPG',
    bio: 'Marketing professional + AI enthusiast',
    name: 'Eleanor Truong',
    status: '🌸',
    metadata: [
      {
        icon: 'lucide:linkedin',
        link: 'https://www.linkedin.com/in/eleanor-truong-956b26190/',
        text: 'LinkedIn',
        rel: 'me'
      },
      {
        icon: 'lucide:mail',
        link: 'mailto:nguyethatrg@gmail.com',
        text: 'Email'
      },
      {
        icon: 'lucide:file-text',
        link: 'https://eleanortruong.substack.com/',
        text: 'Substack'
      }
    ]
  },
  description: 'Powered by SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  themeColor: '#3D4451',
  title: 'Eleanor Truong',
}
