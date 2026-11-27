const worksImages = '/assets/projects/megamuii-works'
const shopImages = '/assets/projects/megamuii-ecommerce'

export const projects = [
  {
    id: 'megamuii-works',
    slug: 'megamuii-works',
    title: 'MegaMuii Works',
    type: 'Personal Project',
    stack: ['React.js', 'Supabase', 'Vercel'],
    summary: 'A platform for publishing and managing projects, downloadable files, and version information, featuring administration tools and analytics.',
    demo: 'https://megamuii-work.vercel.app/',
    cover: { src: `${worksImages}/megamuii-work-cover.png`, file: 'megamuii-work-cover.png', title: 'MegaMuii Works' },
    gallery: [
      { title: 'Project Gallery', description: 'Browse the published project gallery.', file: 'Project Gallery.png', src: `${worksImages}/${encodeURI('Project Gallery.png')}` },
      { title: 'Project Details & Downloads', description: 'View project information, versions, and downloadable files.', file: 'Project Details & Downloads.png', src: `${worksImages}/${encodeURI('Project Details & Downloads.png')}` },
      { title: 'Admin Dashboard', description: 'Manage projects through the administration dashboard.', file: 'Admin Dashboard.png', src: `${worksImages}/${encodeURI('Admin Dashboard.png')}` },
      { title: 'Analytics Dashboard', description: 'Review usage summaries and platform analytics.', file: 'Analytics Dashboard.png', src: `${worksImages}/${encodeURI('Analytics Dashboard.png')}` },
    ],
    features: [
      { title: 'Project Gallery', description: 'Browse published projects.' },
      { title: 'Project Details & Downloads', description: 'View project information and downloadable files.' },
      { title: 'Supabase Integration', description: 'Supabase integration for the project.' },
      { title: 'Admin Dashboard', description: 'Administration tools for managing the platform.' },
      { title: 'Version Management', description: 'Manage project version information.' },
      { title: 'Analytics Dashboard', description: 'View platform analytics.' },
    ],
    architecture: [
      { title: 'React.js', detail: 'Frontend application' },
      { title: 'Supabase', detail: 'Platform integration' },
      { title: 'Vercel', detail: 'Live deployment' },
    ],
    route: '/projects/megamuii-works',
  },
  {
    id: 'megamuii-ecommerce',
    slug: 'megamuii-ecommerce',
    title: 'MegaMuii E-Commerce',
    type: 'Training Final Project',
    stack: ['Vue 2', 'Node.js', 'MongoDB'],
    summary: 'A wedding favor e-commerce experience featuring curated keepsake collections, online shopping, and an interactive Style Your Favor preview.',
    demo: null,
    cover: { src: `${shopImages}/wedding-boutique-home.png`, file: 'wedding-boutique-home.png', title: 'Wedding Favor Boutique' },
    gallery: [
      { title: 'Wedding Favor Collection', description: 'Browse wedding favors with categories, prices, and stock labels.', file: 'Wedding Favor Collection.png', src: `${shopImages}/${encodeURI('Wedding Favor Collection.png')}` },
      { title: 'Individual Favor Details', description: 'Review a favor’s description, price, stock, and quantity options.', file: 'Individual Favor Details.png', src: `${shopImages}/${encodeURI('Individual Favor Details.png')}` },
      { title: 'Cart & Order Creation', description: 'Manage cart quantities and create an order.', file: 'Cart & Order Creation.png', src: `${shopImages}/${encodeURI('Cart & Order Creation.png')}` },
      { title: 'Authentication & Admin Dashboard', description: 'Sign in and manage users, orders, and products.', file: 'Authentication & Admin Dashboard.png', src: `${shopImages}/${encodeURI('Authentication & Admin Dashboard.png')}` },
      { title: 'Style Your Favor', description: 'Preview a selected keepsake in wedding scenes.', file: 'Style Your Favor.png', src: `${shopImages}/${encodeURI('Style Your Favor.png')}` },
    ],
    features: [
      { title: 'Wedding Favor Collection', description: 'Browse a defined catalog of 30 demo favors across Mini Candles, Scented Soaps, Favor Jars & Mini Bottles, Keepsake Gifts, and Sweet Favor Gifts, with category browsing, search, prices, and stock labels.' },
      { title: 'Individual Favor Details', description: 'Review each favor’s category, description, price, and stock, then choose a quantity.' },
      { title: 'Cart & Order Creation', description: 'Manage cart quantities and submit orders through the REST API after signing in.' },
      { title: 'Authentication & Admin Dashboard', description: 'Account registration and sign-in connect to admin views for users, orders, and product management.' },
      { title: 'Style Your Favor', description: '“Your Favor, Your Moment.” An interactive scene preview lets visitors explore the selected favor in Wedding Place Setting, Gift in Hand, and Wedding Favor Display scenes.' },
    ],
    caseStudy: {
      overview: 'MegaMuii E-Commerce is a web application built with Vue 2, Node.js, and MongoDB. Its storefront has been redesigned into an elegant wedding favor boutique, with product browsing, cart and order functionality, and a scene-based preview experience for exploring favors in wedding settings.',
      context: 'Originally a glassware storefront, the application was adapted into a wedding favor boutique. The redesign updates the visual identity, product catalog, and product presentation, and evolves the existing scene preview into Style Your Favor while preserving the Vue 2 frontend, Node.js REST API, and MongoDB architecture.',
      role: 'Frontend work centered on Vue 2 storefront components for product browsing, product details, cart and order flows, and the interactive Style Your Favor preview. The frontend requests product data and submits orders through the REST API.',
    },
    architecture: [
      { title: 'Vue 2 Frontend', detail: 'Frontend application' },
      { title: 'Node.js REST API', detail: 'Backend API' },
      { title: 'MongoDB', detail: 'Database' },
    ],
    architectureSummary: 'Vue 2 Frontend → Node.js REST API → MongoDB',
    route: '/projects/megamuii-ecommerce',
  },
]

export const earlierWorks = [
  {
    title: 'Fitness Management System',
    description: 'Designed and developed Trainer and Admin interfaces, including forms and CRUD features.',
    technologies: [
      { name: 'React', personallyUsed: true },
      { name: 'Figma', personallyUsed: true },
      { name: 'Spring Boot', personallyUsed: false },
      { name: 'Azure SQL', personallyUsed: false },
    ],
  },
  {
    title: 'Rice Farming Simulation Game',
    description: 'Contributed to game interfaces, scene design, animations, and the player tutorial.',
    technologies: [
      { name: 'Unity', personallyUsed: true },
      { name: 'C#', personallyUsed: true },
      { name: 'Blender', personallyUsed: true },
      { name: 'VRoid Studio', personallyUsed: true },
      { name: 'Mixamo', personallyUsed: true },
    ],
  },
  {
    title: 'Generative AI Code Quality Evaluation',
    description: 'Evaluated code generated by ChatGPT and Gemini using automated testing and code-quality analysis.',
    technologies: [
      { name: 'PyTest', personallyUsed: true },
      { name: 'JaCoCo', personallyUsed: true },
      { name: 'SonarQube', personallyUsed: true },
    ],
  },
  {
    title: 'Wimandin Spa Website',
    description: "Contributed to the website's frontend layout and styling using Bootstrap.",
    technologies: [
      { name: 'Bootstrap', personallyUsed: true },
      { name: 'Laravel', personallyUsed: false },
    ],
  },
]

export const projectBySlug = (slug) => projects.find((project) => project.slug === slug)
