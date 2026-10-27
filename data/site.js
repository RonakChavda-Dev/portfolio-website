// All the words and links on the website live here.
// Change something in this file and the website updates. No need to touch the other files.
// Tip: words inside *stars* are shown in the fancy slanted font, like *this*.

export const person = {
  name: "Ronak Chavda",
  firstName: "Ronak",
  lastName: "Chavda",
  location: "Gujarat, India",
  email: "ronakchavda.dev@gmail.com",
};

export const socials = [
  { name: "X", handle: "@RonakChavda_Dev", url: "https://x.com/RonakChavda_Dev", icon: "x" },
  { name: "LinkedIn", handle: "Ronak Chavda", url: "https://www.linkedin.com/in/ronak-chavda-903056416/", icon: "linkedin" },
  { name: "Instagram", handle: "@ronak_chavda_dev", url: "https://www.instagram.com/ronak_chavda_dev/", icon: "instagram" },
  { name: "GitHub", handle: "RonakChavda-Dev", url: "https://github.com/RonakChavda-Dev", icon: "github" },
  { name: "Discord", handle: "ronak_chavda_dev", url: "https://discord.com/users/1491278430774366208", icon: "discord" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

/* ---------- Top dark card ---------- */
export const hero = {
  hello: "Hey, I'm Ronak",
  title: "Developer &\n*automation* builder",
  small: "I build AI agents, automation scripts and websites. Based in Gujarat, India.",
  buildsWith: ["Python", "JavaScript", "React", "Next.js", "Django", "Git"],
  floatTags: ["AI agents", "Automation"],
  // Words on the small spinning circle next to the photo
  // 🎃 Halloween version. Normal one: "AI AGENTS • AUTOMATION • WEBSITES • "
  badge: "• HAPPY HALLOWEEN • TRICK OR TREAT ",
  // 🎃 Halloween: an extra orange tag by the photo. Remove after Halloween.
  halloweenTag: "Happy Halloween 🎃",
};

// The grey moving strip under the dark card
export const toolStrip = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Django", "Flask", "Docker", "PostgreSQL", "Linux", "Git",
];

/* ---------- Big hello text ---------- */
export const intro = {
  hello: "Hello!",
  // The words go from grey to black as you scroll
  text: "I'm Ronak, a developer from Gujarat, India. I turn slow, repeated work into code that runs on its own: AI agents, automation scripts and websites for people who would rather spend their time on something else.",
  chips: [
    { label: "AI agents", color: "#9be22d" },
    { label: "Automation", color: "#ff8a3d" },
    { label: "Web scraping", color: "#3d9bff" },
    { label: "Browser bots", color: "#b07cff" },
    { label: "Websites", color: "#ff5c8a" },
    { label: "Dev tools", color: "#1fc7a0" },
  ],
};

/* ---------- What I do (the open/close list) ---------- */
export const services = [
  {
    icon: "bot",
    visual: "agent",
    title: "Agentic AI",
    subtitle: "AI that finishes the job",
    text: "AI agents that do more than chat. They plan the steps, use tools, check their own results and finish real tasks on their own. I also tell you honestly when plain code is the better choice.",
    tags: ["LLM agents", "Tool calling", "Workflows"],
  },
  {
    icon: "bolt",
    visual: "flow",
    title: "Automation",
    subtitle: "Scripts that take over the boring parts",
    text: "Scripts and bots for the work you repeat every day: moving files, collecting data from websites, filling forms, clicking through the same screens again and again.",
    tags: ["Python", "PyAutoGUI", "Scrapers"],
  },
  {
    icon: "screen",
    visual: "browser",
    title: "Websites & tools",
    subtitle: "Built for clients, built to last",
    text: "Fast, good-looking websites and custom tools for clients, from a simple landing page to a full web app with a backend and a database.",
    tags: ["React", "Next.js", "Django"],
  },
];

// The two crossing moving bands
export const ribbons = {
  one: ["Turning slow work into code", "Agentic AI", "Automation", "Websites"],
  two: ["Ronak Chavda", "Developer", "Gujarat, India", "Always building"],
};

/* ---------- How I work ---------- */
export const steps = [
  { title: "Understand", text: "We talk through the task, what slows you down, and what \"done\" looks like." },
  { title: "Plan", text: "I map the steps, pick the right tools, and decide where AI helps and where plain code is better." },
  { title: "Build & test", text: "I write the code and test it on real examples until it works every time, not just once." },
  { title: "Hand over", text: "You get working software, simple notes on how to use it, and help if anything changes." },
];

/* ---------- Projects ---------- */
const GITHUB = "https://github.com/RonakChavda-Dev";

export const featuredProject = {
  name: "wherewasi",
  url: `${GITHUB}/wherewasi`,
  type: "Developer tool",
  tags: ["Python", "Local-first"],
  text: "A local-first developer tool that rebuilds your coding context after a break and tells you where to pick up again. No cloud, no account, it works on your own machine.",
};

// "status" is shown on the right side of each row
export const projects = [
  {
    name: "wherewasi",
    url: `${GITHUB}/wherewasi`,
    type: "Developer tool",
    status: "Featured",
    text: "Rebuilds your coding context after a break, right on your own machine.",
  },
  {
    name: "Amazon Price Tracker",
    url: GITHUB,
    type: "Web scraper",
    status: "Built",
    text: "Watches product prices on Amazon, so you can buy at the right time without checking by hand.",
  },
  {
    name: "I'm Not a Robot Beater",
    url: GITHUB,
    type: "Browser automation",
    status: "In progress",
    text: "A bot that plays and beats \"I'm Not a Robot\", the tricky browser game by Neal Agarwal (neal.fun), one level at a time.",
  },
];

/* ---------- What clients say ---------- */
// "stars" is out of 5. "note" is a small line under the name (optional).
export const testimonials = [
  {
    name: "Shadow",
    note: "Goes by his gamer tag, keeps his real name private",
    role: "Minecraft SMP server owner",
    project: "Server hub website",
    stars: 5,
    quote: "Ronak is an excellent developer! He built a custom website for my Minecraft SMP server and went far beyond what I expected. He took a rough idea and turned it into a *real hub*: easy to get around, with live server tracking built right in. If you need a reliable frontend or web app developer who actually delivers on quality, Ronak is your guy.",
  },
  {
    name: "Kaushal Devarasetty",
    role: "Portfolio website client",
    project: "Personal portfolio",
    stars: 5,
    quote: "Ronak did an absolutely fantastic job on my portfolio website. The whole process was quick and impressive: he understood my vision straight away and turned it into a beautiful, professional site in *no time.* The design, the attention to detail and the overall polish all went beyond what I hoped for. I really appreciate his dedication and technical skill. If you want a developer who delivers outstanding results without cutting corners, I highly recommend Ronak.",
  },
];

/* ---------- About me ---------- */
export const about = {
  title: "Just a programmer who hates doing things *twice.*",
  paragraphs: [
    "My work sits where code meets everyday tasks: if something is done by hand again and again, I want to write the program that does it instead.",
    "Most of my time goes into automation and agentic AI. I also build websites and custom tools for other people. Every project on my GitHub started as a problem I had myself.",
  ],
};

export const stack = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "PHP", "HTML", "CSS"] },
  { group: "Frameworks", items: ["React", "Next.js", "Node.js", "Django", "Flask"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Linux", "PostgreSQL", "VS Code"] },
];

/* ---------- Questions & answers ---------- */
export const faq = [
  {
    q: "What do you build?",
    a: "Mostly AI agents, automation scripts and bots, web scrapers, and websites or small custom tools.",
  },
  {
    q: "Do you use AI for everything?",
    a: "No. Sometimes plain code is the better fit, and I use whichever one does the job best.",
  },
  {
    q: "What tools do you use?",
    a: "Mostly Python and JavaScript, with React, Next.js and Django. The full list is in the \"Who am I\" part above.",
  },
  {
    q: "Where can I see your work?",
    a: "On my GitHub. Every project there started as a problem I had myself.",
  },
  {
    q: "How can I reach you?",
    a: "Send me an email or a message on X, LinkedIn, Instagram or Discord. The links are just below.",
  },
];
