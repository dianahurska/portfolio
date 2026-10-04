/*
 * ВЕСЬ КОНТЕНТ САЙТУ ТУТ.
 * Міняй тексти/посилання/шляхи до картинок у цьому файлі — HTML чіпати не треба.
 * Картинки завантажуй у папку assets/images/ (через GitHub UI: Add file → Upload files)
 * і вказуй шлях тут, наприклад: "assets/images/my-photo.jpg".
 * Поле, яке не потрібне, можна поставити в "" або [] — блок просто сховається.
 */
window.SITE = {
  name: "Your Name",
  tagline: "Product designer focused on beautiful aesthetics",
  location: "City, Country",
  email: "hello@yourname.com",
  address: "Street 1, City, Country",
  copyright: "© Your Name 2026. All rights reserved",
  // Опис для пошукових систем і прев'ю посилань
  description: "Portfolio of Your Name — product designer.",

  fields: ["User interface", "User experience", "Product design", "Video production", "3D"],
  previously: ["Company One", "Company Two", "Company Three"],

  socials: [
    { label: "Dribbble", handle: "yourhandle", url: "https://dribbble.com/" },
    { label: "Behance", handle: "Your Name", url: "https://www.behance.net/" },
    { label: "Layers.to", handle: "yourhandle", url: "https://layers.to/" },
    { label: "YouTube", handle: "yourchannel", url: "https://www.youtube.com/" },
    { label: "x.com", handle: "@yourhandle", url: "https://x.com/" }
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
    bio: "Short intro about yourself: who you are, what you do and what kind of work you love. Two or three sentences are enough — this text sits next to your portrait on the About page.",
    portrait: "assets/images/portrait.svg"
  },

  contact: {
    // Щоб форма реально надсилала листи — зареєструйся на https://formspree.io і встав сюди endpoint,
    // напр. "https://formspree.io/f/abcdwxyz". Якщо порожньо — форма відкриє поштовий клієнт (mailto).
    formEndpoint: "",
    studioName: "Your Studio",
    studioAddress: ["Street 1, Suite 2", "City, ZIP", "Country"],
    phone: "+1 (555) 000-0000"
  }
};
