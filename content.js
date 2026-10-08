/*
 * ВЕСЬ КОНТЕНТ САЙТУ ТУТ.
 * Міняй тексти/посилання/шляхи до картинок у цьому файлі — HTML чіпати не треба.
 * Картинки завантажуй у папку assets/images/ (через GitHub UI: Add file → Upload files)
 * і вказуй шлях тут, наприклад: "assets/images/my-photo.jpg".
 * Поле, яке не потрібне, можна поставити в "" або [] — блок просто сховається.
 */
window.SITE = {
  name: "Diana Hurska",
  tagline: "Senior Product Designer",
  location: "Warsaw, Poland",
  email: "dianagurscka3@gmail.com",
  address: "Warsaw, Poland",
  copyright: "© Diana Hurska 2026. All rights reserved",
  // Опис для пошукових систем і прев'ю посилань
  description: "Portfolio of Diana Hurska — Senior Product Designer.",

  fields: ["User interface", "User experience", "Product design", "Video production", "3D"],
  coreSkills: {
    title: "CORE SKILLS",
    groups: [
      {
        title: "Product & UX",
        items: [
          "Product Discovery",
          "UX Strategy",
          "Information Architecture",
          "Cross-platform UX",
          "Product Analytics",
          "A/B Testing",
          "Cross-functional Collaboration"
        ]
      },
      {
        title: "Design & AI Tools",
        items: [
          "AI-assisted Research",
          "Prototyping",
          "Figma",
          "Design Systems",
          "Google Analytics",
          "Hotjar",
          "Maze",
          "Adobe Creative Suite"
        ]
      }
    ]
  },

  footerSocials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/diana-hurska-design/" },
    { label: "Behance", url: "https://www.behance.net/d8db8e80" },
    { label: "Telegram", url: "https://t.me/dianagurska" }
  ],

  socials: [
    { label: "LinkedIn", handle: "Diana Hurska", url: "https://www.linkedin.com/in/diana-hurska-design/" },
    { label: "Behance", handle: "Diana Hurska", url: "https://www.behance.net/d8db8e80" },
    { label: "Telegram", handle: "@dianagurska", url: "https://t.me/dianagurska" }
  ],
  showElsewhere: false,

  // Проєкти: показуються на головній (картки справа) і мають власну сторінку project.html?p=<slug>
  projects: [
    {
      slug: "project-one",
      title: "PROJECT ONE",
      services: "3D Industrial design",
      cover: "assets/images/project-1-cover.svg",
      url: "https://example.com",
      client: "Client name",
      deliverables: "3D Industrial design",
      year: "2024",
      about: "<b>Project One</b> is a short description of the product. Explain what it is, who it is for and what problem it solves in two or three sentences.",
      // Блоки сторінки проєкту йдуть по порядку. Типи:
      //  { type: "image", src }                      — картинка на всю ширину
      //  { type: "pair", srcs: [a, b] }              — дві картинки поруч
      //  { type: "text", title, text }               — заголовок + абзац
      //  { type: "quote", text, author }             — цитата клієнта
      //  { type: "split", src, title, text }         — картинка зліва, текст справа
      //  { type: "video", src, poster }              — відео (mp4)
      blocks: [
        { type: "image", src: "assets/images/gallery-1.svg" },
        { type: "text", title: "Scope:", text: "Describe the brief: what the client wanted, the constraints and what you were asked to deliver." },
        { type: "pair", srcs: ["assets/images/gallery-2.svg", "assets/images/gallery-3.svg"] },
        { type: "quote", text: "\"A short testimonial from the client about the result of the collaboration and how it was received.\"", author: "Client Name, CEO, Company" },
        { type: "split", src: "assets/images/gallery-1.svg", title: "Wrap up", text: "Summarise the outcome: what was delivered and what impact it had." }
      ]
    },
    {
      slug: "project-two",
      title: "PROJECT TWO",
      services: "Web design, 3D",
      cover: "assets/images/project-2-cover.svg",
      url: "https://example.com",
      client: "Client name",
      deliverables: "Web design, 3D",
      year: "2023",
      about: "<b>Project Two</b> is a short description of the product.",
      blocks: [
        { type: "image", src: "assets/images/gallery-2.svg" },
        { type: "text", title: "Scope:", text: "Describe the brief." },
        { type: "pair", srcs: ["assets/images/gallery-3.svg", "assets/images/gallery-1.svg"] }
      ]
    },
    {
      slug: "project-three",
      title: "PROJECT THREE",
      services: "Web design, 3D",
      cover: "assets/images/project-3-cover.svg",
      url: "https://example.com",
      client: "Client name",
      deliverables: "Web design, 3D",
      year: "2023",
      about: "<b>Project Three</b> is a short description of the product.",
      blocks: [
        { type: "image", src: "assets/images/gallery-3.svg" },
        { type: "text", title: "Scope:", text: "Describe the brief." }
      ]
    },
    {
      slug: "project-four",
      title: "PROJECT FOUR",
      services: "Web design & dev, 3D",
      cover: "assets/images/project-4-cover.svg",
      url: "https://example.com",
      client: "Client name",
      deliverables: "Web design & development, 3D",
      year: "2022",
      about: "<b>Project Four</b> is a short description of the product.",
      blocks: [
        { type: "image", src: "assets/images/gallery-1.svg" },
        { type: "text", title: "Scope:", text: "Describe the brief." }
      ]
    }
  ],

  // Блок "Recent" з відео. video — шлях до .mp4 (або "" щоб показати тільки картинку poster)
  recent: null,

  // logo — шлях до маленької іконки (svg/png), або "" — тоді буде кружечок з першою літерою
  timeline: [],

  numbers: [],

  // wide: true — картка на дві колонки. icon — шлях до іконки або "" (буде літера)
  stack: [],

  about: {
    label: "I am",
    skills: ["Product Discovery", "UX Strategy", "Interaction Design", "Information Architecture", "Design Systems", "Product Analytics", "A/B Testing", "Figma", "Design Systems", "Google Analytics", "Hotjar", "Maze"],
    bio: "Senior Product Designer with end-to-end experience across web and mobile, specializing in complex workflows, information architecture, interaction design, design systems, and AI-powered product experiences. Strong in translating business and technical constraints into scalable UX, validating decisions through research, prototypes, and behavioral data, and partnering with Product and Engineering from discovery through delivery.",
    portrait: "assets/images/portrait.svg"
  },

  contact: {
    // Щоб форма реально надсилала листи — зареєструйся на https://formspree.io і встав сюди endpoint,
    // напр. "https://formspree.io/f/abcdwxyz". Якщо порожньо — форма відкриє поштовий клієнт (mailto).
    formEndpoint: ""
  }
};

// Imported portfolio pages. Original project definitions above remain available.
window.SITE.homeProjects = ["aura", "car-rental", "pet-shop"];
window.SITE.workTitle = "Selected Work";
window.SITE.workLabels = { client: "Client", services: "Services", year: "Year" };
window.SITE.workProjects = [
  {
    slug: "aura",
    title: "AURA — AI Financial Agent",
    details: [
      { label: "Goal", value: "Build trust in AI-driven financial actions" },
      { label: "Experience", value: "Explainable decisions, approvals & progressive automation" },
      { label: "Platform", value: "Mobile app + Web dashboard" }
    ],
    cover: "assets/images/aura/hero-laptop.webp",
    href: "project.html?p=aura"
  },
  {
    "title": "Rental Car App",
    details: [
      { label: "Goal", value: "Reduce friction from car discovery to active rental" },
      { label: "Experience", value: "Search, booking, navigation & trip management" },
      { label: "Platform", value: "Mobile app" }
    ],
    "cover": "assets/images/car-rental/01.png",
    "href": "project.html?p=car-rental",
    "sourceImage": "https://framerusercontent.com/images/DXnQiDPloW0iKJVWZNr0q7FTm0.png",
    "slug": "car-rental"
  },
  {
    "title": "Happy Tails — Pet E-commerce",
    details: [
      { label: "Goal", value: "Simplify the path from browsing to purchase" },
      { label: "Experience", value: "Product discovery, navigation & checkout" },
      { label: "Platform", value: "Responsive e-commerce · Desktop + Mobile" }
    ],
    "cover": "assets/images/work/pet-shop.png",
    "href": "project.html?p=pet-shop",
    "sourceImage": "https://framerusercontent.com/images/CgSVXkZqAJ38SqLaSxiqCxCu1M.png",
    "slug": "pet-shop"
  }
];
window.SITE.projects.push(...[
  {
    "slug": "car-rental",
    "title": "Rental Car App",
    "services": "End-to-end car rental experience",
    "cover": "assets/images/car-rental/01.png",
    "layout": "case-study",
    "source": "https://dianahurska.framer.website/work/car-rental/car-rental",
    "panels": [
      {
        "src": "assets/images/car-rental/01.png",
        "width": 7680,
        "height": 4928
      },
      {
        "src": "assets/images/car-rental/02.png",
        "width": 5760,
        "height": 3660
      },
      {
        "src": "assets/images/car-rental/03.png",
        "width": 5760,
        "height": 2958
      },
      {
        "src": "assets/images/car-rental/04.png",
        "width": 5760,
        "height": 6144
      },
      {
        "src": "assets/images/car-rental/05.png",
        "width": 5760,
        "height": 5988
      },
      {
        "src": "assets/images/car-rental/06.png",
        "width": 5760,
        "height": 8406
      },
      {
        "src": "assets/images/car-rental/07.png",
        "width": 5760,
        "height": 4674
      },
      {
        "src": "assets/images/car-rental/08.png",
        "width": 5760,
        "height": 3861
      },
      {
        "src": "assets/images/car-rental/09.png",
        "width": 5760,
        "height": 3786
      },
      {
        "src": "assets/images/car-rental/10.png",
        "width": 5760,
        "height": 9963
      },
      {
        "src": "assets/images/car-rental/11.png",
        "width": 5760,
        "height": 3906
      },
      {
        "src": "assets/images/car-rental/12.png",
        "width": 5760,
        "height": 3240
      }
    ]
  },
  {
    "slug": "pet-shop",
    "title": "Happy Tails — Pet E-commerce",
    "services": "Simplify product discovery & checkout",
    "cover": "assets/images/work/pet-shop.png",
    "layout": "case-study",
    "source": "https://dianahurska.framer.website/work/pet-shop",
    "panels": [
      {
        "src": "assets/images/pet-shop/01.png",
        "width": 5760,
        "height": 3972
      },
      {
        "src": "assets/images/pet-shop/02.png",
        "width": 5754,
        "height": 2319
      },
      {
        "src": "assets/images/pet-shop/03.png",
        "width": 5757,
        "height": 3380
      },
      {
        "src": "assets/images/pet-shop/04.png",
        "width": 5760,
        "height": 2898
      },
      {
        "src": "assets/images/pet-shop/05.png",
        "width": 5760,
        "height": 4692
      },
      {
        "src": "assets/images/pet-shop/06.png",
        "width": 5760,
        "height": 5836
      },
      {
        "src": "assets/images/pet-shop/07.png",
        "width": 5760,
        "height": 6741
      },
      {
        "src": "assets/images/pet-shop/08.png",
        "width": 5757,
        "height": 3819
      },
      {
        "src": "assets/images/pet-shop/09.png",
        "width": 5757,
        "height": 9366
      },
      {
        "src": "assets/images/pet-shop/10.png",
        "width": 5760,
        "height": 4440
      },
      {
        "src": "assets/images/pet-shop/11.png",
        "width": 5760,
        "height": 6957
      },
      {
        "src": "assets/images/pet-shop/12.png",
        "width": 5760,
        "height": 7582
      },
      {
        "src": "assets/images/pet-shop/13.png",
        "width": 5760,
        "height": 9579
      },
      {
        "src": "assets/images/pet-shop/14.png",
        "width": 5760,
        "height": 7775
      },
      {
        "src": "assets/images/pet-shop/15.png",
        "width": 5760,
        "height": 4367
      },
      {
        "src": "assets/images/pet-shop/16.png",
        "width": 5761,
        "height": 3076
      }
    ]
  }
]);

// AURA keeps its approved HTML layout instead of flattening it into image panels.
window.SITE.projects.push({
  slug: "aura",
  title: "AURA — AI Financial Agent",
  servicesLabel: "Challenge",
  services: "Designing trust, control & progressive autonomy in fintech",
  cover: "assets/images/aura/hero-laptop.webp",
  layout: "aura",
  body: "assets/cases/aura.html"
});
