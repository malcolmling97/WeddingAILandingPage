// Single source of truth for all on-page copy, from prd/prd.md §4.
// PRD rule: zero em dashes in on-page copy.

export const copy = {
  meta: {
    title: 'Help your brides see the yes | AI destination photoshoots for bridal boutiques',
    description:
      'Send us one photo from the fitting room. We send back her destination photoshoot, in your dress, before she decides.',
  },

  hero: {
    h1: 'Help your brides see the yes.',
    sub: 'Send us one photo from the fitting room. We send back her destination photoshoot, in your dress, before she decides.',
    cta: 'Get in touch',
    secondary: 'See how it works ↓',
    annotation: 'one phone snap',
  },

  problem: {
    line: 'The mirror shows her the dress. You can show her the wedding.',
  },

  howItWorks: {
    header: 'How it works',
    steps: [
      {
        title: 'Snap one photo.',
        body: 'All you need: your client, in your dress. Any phone, during her first fitting.',
      },
      {
        title: 'Pick the dress and the place.',
        body: 'Your collection, our destination library. Bali sunset, Sapa mountains, a private ballroom, or anywhere she dreams.',
      },
      {
        title: 'Send her the shoot.',
        // TODO: add turnaround SLA once confirmed (e.g. "within 24 hours")
        body: 'A curated set arrives before her next visit. She decides with the wedding in view.',
      },
    ],
  },

  dresses: {
    header: 'Your dresses, not stock gowns.',
    sub: 'Every render uses your exact piece. Neckline, lace, train, all of it.',
    details: [
      'Illusion neckline',
      'Chantilly lace',
      'Cathedral train',
      'Off-shoulder',
      'Beaded bodice',
      'Satin A-line',
    ],
  },

  destinations: {
    header: 'Places, reimagined.',
    cards: [
      { key: 'jiangsu', tag: 'Jiangsu water town', caption: 'Lantern light on still water.' },
      { key: 'sapa', tag: 'Sapa mountains', caption: 'Above the clouds, veil in the wind.' },
      { key: 'bali', tag: 'Bali sunset', caption: 'Golden hour, no flight required.' },
      { key: 'ballroom', tag: 'The grand ballroom', caption: 'Chandeliers, marble, and her.' },
    ],
    customCard: { tag: 'Her idea here', caption: 'Custom scenes, on request.' },
  },

  gallery: {
    header: 'Same bride. Same dress. New world.',
  },

  why: {
    header: 'Built to help you close.',
    cards: [
      {
        title: 'A faster yes.',
        body: 'Brides commit sooner when they can picture the day, not just the dress.',
      },
      {
        title: 'Sell the shoot, not just the rental.',
        body: 'The renders make your destination photoshoot packages the natural next question.',
      },
      {
        title: 'Marketing that makes itself.',
        body: 'With her permission, every set becomes shareable content for your boutique.',
      },
    ],
    pricing: 'Pricing scales with your boutique’s volume. Tell us about your shop and we will send a quote.',
  },

  contact: {
    header: 'Put your dresses everywhere.',
    fields: {
      name: 'Name',
      boutique: 'Boutique',
      email: 'Email',
      city: 'City',
      message: 'Message (optional)',
    },
    button: 'Send',
    success: 'Got it. We will reply within one business day.',
    errors: {
      name: 'Enter your name.',
      boutique: 'Enter your boutique’s name.',
      email: 'Enter a valid email address.',
      city: 'Enter your city.',
      submit: 'Something went wrong. Try again, or email us directly.',
    },
  },

  footer: {
    wordmark: '[Wordmark]', // TODO: replace with real wordmark once the product name is decided
    instagram: '#', // TODO: real Instagram URL
    trust: 'Client photos are used only with consent and deleted on request.',
  },
} as const;
