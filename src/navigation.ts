import { link } from 'node:fs';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Technologies',
      links: [
        {
          text: 'AI Agent',
          href: getPermalink('/technologies/ai-agent'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/technologies/mobile-app'),
        },
        {
          text: 'Frontend',
          href: getPermalink('/technologies/frontend'),
        },
        {
          text: 'Backend',
          href: getPermalink('/technologies/backend'),
        },
        {
          text: 'Infrastructure',
          href: getPermalink('/technologies/infrastructure'),
        },
      ],
    },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },

    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    {
      text: 'Blog',
      href: getBlogPermalink(),
      // links: [
      //   {
      //     text: 'Blog List',
      //     href: getBlogPermalink(),
      //   },
      //   {
      //     text: 'Article',
      //     href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
      //   },
      //   {
      //     text: 'Article (with MDX)',
      //     href: getPermalink('markdown-elements-demo-post', 'post'),
      //   },
      //   {
      //     text: 'Category Page',
      //     href: getPermalink('tutorials', 'category'),
      //   },
      //   {
      //     text: 'Tag Page',
      //     href: getPermalink('astro', 'tag'),
      //   },
      // ],
    },
    {
      text: 'About us',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Contact', href: getPermalink('/contact'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Technologies',
      links: [
        { text: 'AI Agent', href: getPermalink('/technologies/ai-agent') },
        { text: 'Mobile App', href: getPermalink('/technologies/mobile-app') },
        { text: 'Frontend', href: getPermalink('/technologies/frontend') },
        { text: 'Backend', href: getPermalink('/technologies/backend') },
        { text: 'Infrastructure', href: getPermalink('/technologies/infrastructure') },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'AI Solutions', href: getPermalink('/services#ai') },
        { text: 'Custom Software', href: getPermalink('/services#software') },
        { text: 'Cloud Solutions', href: getPermalink('/services#cloud') },
        { text: 'Mobile Development', href: getPermalink('/services#mobile') },
        { text: 'DevOps', href: getPermalink('/services#devops') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/onrise-software' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onrise-software' },
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  ],
  footNote: `
    © ${new Date().getFullYear()} ONRISE.software
  `,
};
