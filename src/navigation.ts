import { link } from 'node:fs';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { text } from 'node:stream/consumers';

export const headerData = {
  links: [
    {
      text: 'Homes',
      href: getPermalink('/'),
    },
    {
      text: 'Insights',
      href: getPermalink('/insights/'),
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Dev Hub',
          href: getPermalink('/dev-hub/'),
        },
        {
          text: 'Playbook',
          href: getPermalink('/playbook/'),
        },
      ],
    },
    {
      text: 'Services',
      href: getPermalink('/services/'),
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
    {
      text: 'About us',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Free 30-Min Consult', href: getPermalink('/contact'), target: '_self' }],
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
        { text: 'AI Solutions', href: getPermalink('/services/#ai') },
        { text: 'Custom Software', href: getPermalink('/services/#software') },
        { text: 'Cloud Solutions', href: getPermalink('/services/#cloud') },
        { text: 'Mobile Development', href: getPermalink('/services/#mobile') },
        { text: 'DevOps', href: getPermalink('/services/#devops') },
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
      title: 'Resources',
      links: [
        {
          text: 'Insights',
          href: getPermalink('/insights/'),
        },
        {
          text: 'Dev Hub',
          href: getPermalink('/dev-hub/'),
        },
        {
          text: 'Playbook',
          href: getPermalink('/playbook/'),
        },
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
