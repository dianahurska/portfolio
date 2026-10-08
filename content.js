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
          "Product Discovery & UX Strategy",
          "Interaction Design & Information Architecture",
          "Design Systems & Cross-platform UX",
          "Product Analytics & A/B Testing",
          "Stakeholder Management & Cross-functional Collaboration"
        ]
      },
      {
        title: "Design & AI Tools",
        items: [
          "AI-assisted Research, Ideation & Prototyping",
          "Figma — Prototyping, Design Systems, Dev Mode",
          "Google Analytics, Hotjar, Maze",
          "Adobe Creative Suite"
        ]
      }
    ]
  },

  footerSocials: [
    { label: "Behance", url: "https://www.behance.net/d8db8e80" },
    { label: "Telegram", url: "https://t.me/dianagurska" },
    { label: "Linkedin", url: "https://www.linkedin.com/in/diana-hurska-design/" }
  ],

  socials: [
    { label: "Behance", handle: "Diana Hurska", url: "https://www.behance.net/d8db8e80" },
    { label: "Telegram", handle: "@dianagurska", url: "https://t.me/dianagurska" },
    { label: "Linkedin", handle: "Diana Hurska", url: "https://www.linkedin.com/in/diana-hurska-design/" }
  ],

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
  recent: {
    title: "Recent — Promo for Brand",
    tags: ["3D", "Branding", "Assets"],
    url: "https://example.com",
    video: "",
    poster: "assets/images/recent-poster.svg"
  },

  // logo — шлях до маленької іконки (svg/png), або "" — тоді буде кружечок з першою літерою
  timeline: [
    { year: "2016", company: "Company One", roles: "UX, product design", logo: "" },
    { year: "2020", company: "Company Two", roles: "3D, art direction", logo: "" },
    { year: "2022", company: "Company Three", roles: "UI, UX, 3D", logo: "" },
    { year: "2023", company: "Company Four", roles: "3D, video production", logo: "" },
    { year: "Current", company: "Company Five", roles: "UI, product design", logo: "", current: true }
  ],

  numbers: [
    { value: 98, suffix: "%", label: "Customer satisfaction" },
    { value: 120, suffix: "+", label: "Projects completed" },
    { value: 12, suffix: "", label: "Design awards" }
  ],

  // wide: true — картка на дві колонки. icon — шлях до іконки або "" (буде літера)
  stack: [
    { name: "Figma", desc: "UI, Brainstorming", url: "https://www.figma.com", icon: "", wide: true },
    { name: "Framer", desc: "Web development", url: "https://www.framer.com", icon: "" },
    { name: "Slack", desc: "Communication", url: "https://slack.com", icon: "" },
    { name: "Zoom", desc: "Client bookings", url: "https://zoom.us", icon: "" },
    { name: "Cinema 4D", desc: "3D work", url: "https://www.maxon.net/cinema-4d", icon: "", wide: true }
  ],

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
window.SITE.homeProjects = ["aura", "car-rental", "pet-shop", "project-four"];
window.SITE.workTitle = "Selected Work";
window.SITE.workLabels = { client: "Client", services: "Services", year: "Year" };
window.SITE.workProjects = [
  {
    slug: "aura",
    title: "AURA — AI Financial Agent",
    client: "Product Designer",
    services: "Trust, control & progressive automation",
    labels: { client: "Role", services: "Focus" },
    year: "2026",
    cover: "assets/images/aura/hero-laptop.webp",
    href: "project.html?p=aura"
  },
  {
    "title": "Rental Car App",
    "client": "UX/UI Designer",
    "services": "End-to-end car rental experience",
    "year": "",
    "cover": "assets/images/car-rental/01.png",
    "href": "project.html?p=car-rental",
    "sourceImage": "https://framerusercontent.com/images/DXnQiDPloW0iKJVWZNr0q7FTm0.png",
    "slug": "car-rental"
  },
  {
    "title": "Happy Tails — Pet E-commerce",
    "client": "UX/UI Designer",
    "services": "Simplify product discovery & checkout",
    "year": "End-to-end commerce experience",
    "cover": "assets/images/work/pet-shop.png",
    "href": "project.html?p=pet-shop",
    "sourceImage": "https://framerusercontent.com/images/CgSVXkZqAJ38SqLaSxiqCxCu1M.png",
    "slug": "pet-shop"
  },
  {
    "title": "RETALEYE",
    "client": "Retailvision",
    "services": "Web design, 3D",
    "year": "2024",
    "cover": "assets/images/work/retaileye.png",
    "href": "https://dianahurska.framer.website/work/retaileye",
    "sourceImage": "https://framerusercontent.com/images/sNEg3DXRC4D8UPWu2Yq9fb6QGsA.png",
    "slug": "retaileye"
  },
  {
    "title": "IKEA",
    "client": "IKEA",
    "services": "Web design & dev, 3D",
    "year": "2022",
    "cover": "assets/images/work/ikea.jpeg",
    "href": "https://dianahurska.framer.website/work/ikea",
    "sourceImage": "https://framerusercontent.com/images/Bew6IoasOdfyrsRFbURfpxQMVP0.jpeg",
    "slug": "ikea"
  },
  {
    "title": "RADIOWATCH",
    "client": "Spenter",
    "services": "UI, UX, Product design, 3D",
    "year": "2024",
    "cover": "assets/images/work/radiowatch.jpg",
    "href": "https://dianahurska.framer.website/work/radiowatch",
    "sourceImage": "https://framerusercontent.com/images/Flx46usgOBAfVNrwBmduA8J9e8.jpg",
    "slug": "radiowatch"
  },
  {
    "title": "VINYL",
    "client": "SpinVault",
    "services": "3D Renders",
    "year": "2021",
    "cover": "assets/images/work/vinyl.png",
    "href": "https://dianahurska.framer.website/work/vinyl",
    "sourceImage": "https://framerusercontent.com/images/qM7QTXMMetIqEY2FJ4HqsmKBhxE.png",
    "slug": "vinyl"
  },
  {
    "title": "UI Lens",
    "client": "Voicu Apostol",
    "services": "Web design, development",
    "year": "2023",
    "cover": "assets/images/work/ui-lens.jpg",
    "href": "https://dianahurska.framer.website/work/uilens",
    "sourceImage": "https://framerusercontent.com/images/MFzfvah4LW5T19EZz3LH8z6eHt4.jpg",
    "slug": "uilens"
  },
  {
    "title": "Eleveight Studio",
    "client": "Fabian Albert",
    "services": "Web design, development",
    "year": "2023",
    "cover": "assets/images/work/eleveight-studio.png",
    "href": "https://dianahurska.framer.website/work/eleveight-studio",
    "sourceImage": "https://framerusercontent.com/images/Uwt2wACVnO6AzuhCuj3JwPso.png",
    "slug": "eleveight-studio"
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
