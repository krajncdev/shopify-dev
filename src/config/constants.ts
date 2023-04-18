import MattelIcon from '../assets/mattel.svg';
import AllbirdsIcon from '../assets/allbirds.svg';
import GlossierIcon from '../assets/glossier.svg';
import SpanxIcon from '../assets/spanx.svg';
import StaplesIcon from '../assets/staples.svg';
import CotyIcon from '../assets/coty.svg';
import KlaviyoIcon from '../assets/klaviyo.svg';

interface TextContentI {
  id: number;
  heading: string;
  paragraphs?: string[];
}

export const textContent: TextContentI[] = [
  {
    id: 1,
    heading: 'Build any commerce experience',
    paragraphs: [
      'Compose, customize, and extend every part of the commerce stack—from storefront to checkout to backend integrations—and create unique experiences for your brand or millions of merchants around the world.',
    ],
  },

  {
    id: 2,
    heading:
      'A complete set of APIs, primitives, and tools designed for commerce',
    paragraphs: [
      'Get full flexibility to assemble, customize, and extend the entire commerce experience, all with the backing of our global infrastructure, scalability, and reliability.',
    ],
  },

  {
    id: 3,
    heading: 'Best-in-class developer experience',
    paragraphs: [
      'Accelerate development, testing, and deployment with our suite of tools, including the Hydrogen framework, Shopify CLI, example apps, and development stores. Build quickly with official libraries for popular frameworks and languages from JavaScript and React to Node, Ruby, and PHP.',
      'Build quickly with official libraries for popular frameworks and languages from JavaScript and React to Node, Ruby, and PHP.',
    ],
  },

  {
    id: 4,
    heading: 'Flexibility & extensibility without compromise',
  },

  {
    id: 5,
    heading: 'A built-in, global audience',
    paragraphs: [
      'Build and sell apps and themes that customize and extend Shopify’s capabilities for millions of merchants around the world.',
      'The Shopify App Store and Theme Store make it easy to build great experiences that attract merchants and open up new revenue streams.',
    ],
  },
];

interface CompaniesI {
  id: number;
  icon: string;
  alt: string;
}

export const companies: CompaniesI[] = [
  {
    id: 1,
    icon: MattelIcon,
    alt: 'mattel-icon',
  },

  {
    id: 2,
    icon: AllbirdsIcon,
    alt: 'allbirds-icon',
  },

  {
    id: 3,
    icon: GlossierIcon,
    alt: 'glossier-icon',
  },

  {
    id: 4,
    icon: SpanxIcon,
    alt: 'spanx-icon',
  },

  {
    id: 5,
    icon: StaplesIcon,
    alt: 'staples-icon',
  },

  {
    id: 6,
    icon: CotyIcon,
    alt: 'coty-icon',
  },

  {
    id: 7,
    icon: KlaviyoIcon,
    alt: 'klaviyo-icon',
  },
];

export interface PerkI {
  id: number;
  content: string;
}

export const perks: PerkI[] = [
  {
    id: 1,
    content: 'APIs in GraphQL and REST',
  },

  {
    id: 2,
    content:
      'React-based framework and component library for accelerating storefront development',
  },

  {
    id: 3,
    content:
      'Commerce primitives for building subscription plans, selling B2B, expanding internationally, and more',
  },

  {
    id: 4,
    content: 'Shopify CLI for building, testing, and managing your integration',
  },

  {
    id: 5,
    content: 'Ready-to-use UI components for getting started quickly',
  },

  {
    id: 6,
    content:
      'Ecosystem of prebuilt and reference implementations for integrations with systems like Netsuite and Sanity',
  },
];

export interface FlexibilityInfoI {
  id: number;
  heading: string;
  paragraph: string;
  icon: string;
}

export const flexibilityInfos: FlexibilityInfoI[] = [
  {
    id: 1,
    heading: 'Designed for scale',
    paragraph:
      'Build custom solutions using the same components and infrastructure from Shopify that powers 10% of all US commerce. ',
    icon: 'https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/64/speedometer-4e88acbd27c466b7d9b8e74ae3db866b06e0b3f59918c026a4049e9fb46bceae.png',
  },

  {
    id: 2,
    heading: 'Global infrastructure',
    paragraph:
      'Our global footprint spans 275+ points of presence to deliver 100ms average Storefront API response times. ',
    icon: 'https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/64/lightning-3302be8493157ac058ea60c18de358ef80d4e21fb9fa93a598c455140617e3b1.png',
  },

  {
    id: 3,
    heading: 'Battle-tested reliability',
    paragraph:
      'Shopify’s platform powers the largest brands and sales events in the world, offering peace of mind with 99.99% uptime. ',
    icon: 'https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/64/shield-c2e1eb9fe41c5ca0818999c8c290f920a55f260d962614c8bc094f8a0d1852f3.png',
  },

  {
    id: 4,
    heading: 'Continued innovation',
    paragraph:
      'We’re always improving our platform, and investing in open source tools like Hydrogen and Remix for building storefronts. ',
    icon: 'https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/64/lab-tube-f47f9fb3fa0b9bd06bfce311dd5ddba39ea3f6d648a184b302b22e449d567041.png',
  },
];

export interface ShopifyDeveloperResourceContentI {
  id: number;
  heading: string;
  paragraph: string;
  icon: string;
}

export interface ShopifyDeveloperResourceI {
  id: number;
  name: string;
  icon?: string;
  content: ShopifyDeveloperResourceContentI[];
}

export const shopifyDeveloperResources: ShopifyDeveloperResourceI[] = [
  {
    id: 1,
    name: 'Get started',
    icon: 'https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/home-new/community/home-icon-community-large-9e17b9fe533e83136626194d59e994c3b62920e066764eb0aea6672220abe192.png',
    content: [
      {
        id: 1,
        heading: 'Build a custom storefront',
        paragraph:
          'Create custom storefronts and deliver unique shopping experiences',
        icon: 'https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/custom-storefronts-5c090b81b8207193ed06fde95c79015dd1eb0894d38341094927cd1b160f399f.png',
      },
      {
        id: 2,
        heading: 'Build an app',
        paragraph: 'Develop apps to customize and extend Shopify’s platform',
        icon: 'https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/app-934bb2b985270dd1a8a36a95c2b636ccf6cf7204c3d8a6f55ec9dd0ebcf91a3f.png',
      },
      {
        id: 3,
        heading: 'Build a theme',
        paragraph:
          'Design beautiful themes to shape the online store experience',
        icon: 'https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/themes-40950cab223c0b6819bd2b10f416dfba15494ff996a107ec7b4bd7c37ae18cf6.png',
      },
    ],
  },

  {
    id: 2,
    name: 'Join a community of builders',
    content: [
      {
        id: 1,
        heading: 'Developer forums',
        paragraph: 'Q&A and advice from Shopify community experts',
        icon: 'https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/forums-db522493101040e511e9dcdb36b0cd2f0ebf4ad7e542d4a4d90b875f7313737c.png',
      },
      {
        id: 2,
        heading: 'Developer changelog',
        paragraph: 'The latest Shopify ecosystem updates',
        icon: 'https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/changelog-a26639e90bf6a7d64d2225b8e4191fc7286c7c2641c63d00352f12becb3e41a4.png',
      },
      {
        id: 3,
        heading: 'Shopify Partner blog',
        paragraph: 'Educational resources and product previews',
        icon: 'https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/shopify-0796ea016c6facce5da82dccaf5cc4ab26cdf18bee17e4e26d88960cff4e5ac3.png',
      },
    ],
  },
];

interface FooterContentElementI {
  id: number;
  name: string;
}

interface FooterContentI {
  id: number;
  name: string;
  elements: FooterContentElementI[];
}

export const footerContent: FooterContentI[] = [
  {
    id: 1,
    name: 'Updates & News',
    elements: [
      {
        id: 1,
        name: 'Developer changelog',
      },
      {
        id: 2,
        name: 'Partner blog',
      },
      {
        id: 3,
        name: 'Engineering blog',
      },
      {
        id: 4,
        name: 'UX blog',
      },
    ],
  },

  {
    id: 2,
    name: 'Community',
    elements: [
      {
        id: 1,
        name: 'Developer forum',
      },
      {
        id: 2,
        name: 'Discord',
      },
      {
        id: 3,
        name: 'Twitter',
      },
      {
        id: 4,
        name: 'YouTube',
      },
    ],
  },

  {
    id: 3,
    name: 'Events',
    elements: [
      {
        id: 1,
        name: 'Unite',
      },
      {
        id: 2,
        name: 'Meetups',
      },
    ],
  },

  {
    id: 4,
    name: 'Legal',
    elements: [
      {
        id: 1,
        name: 'Terms of Service',
      },
      {
        id: 2,
        name: 'API Terms of Service',
      },
      {
        id: 3,
        name: 'Privacy Policy',
      },
    ],
  },
];

export interface FooterFinalElementI {
  id: number;
  name: string;
}

export const footerFinal: FooterFinalElementI[] = [
  {
    id: 1,
    name: 'About Shopify',
  },

  {
    id: 2,
    name: 'Shopify Plus',
  },

  {
    id: 3,
    name: 'Careers',
  },

  {
    id: 4,
    name: 'Investors',
  },

  {
    id: 5,
    name: 'Press and Media',
  },
];

interface NavbarInnerElementI {
  id: number;
  content: string;
}

export interface NavbarElementI {
  id: number;
  name: string;
  elements?: NavbarInnerElementI[];
}

export const navbarContent: NavbarElementI[] = [
  {
    id: 1,
    name: 'Solutions',
    elements: [
      { id: 1, content: 'Build and customize your store' },
      { id: 2, content: 'Develop for the Shopify App Store' },
      { id: 3, content: 'Design for the Shopify Theme Store' },
    ],
  },

  { id: 2, name: 'Blog' },

  {
    id: 3,
    name: 'Documentation',
    elements: [
      { id: 1, content: 'Apps' },
      { id: 2, content: 'Themes' },
      { id: 3, content: 'Custom storefronts' },
      { id: 4, content: 'Marketplaces' },
      { id: 5, content: 'APIs and references' },
    ],
  },
];
