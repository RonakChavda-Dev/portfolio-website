// All the words and links on the website live here.
// Change something in this file and the website updates. No need to touch the other files.

export const person = {
  name: "Ronak Chavda",
  firstName: "Ronak",
  lastName: "Chavda",
  location: "Gujarat, India",
  email: "ronakchavda.dev@gmail.com",
  status: "Open to projects",
  roles: ["AI agents", "automations", "websites", "developer tools", "browser bots"],
  intro:
    "A programmer who turns slow, repeated work into code that runs on its own. I build automation scripts, agentic AI tools, and websites for people who would rather spend their time on something else.",
};

export const socials = [
  { name: "X", handle: "@RonakChavda_Dev", url: "https://x.com/RonakChavda_Dev", icon: "x" },
  { name: "LinkedIn", handle: "Ronak Chavda", url: "https://www.linkedin.com/in/ronak-chavda-903056416/", icon: "linkedin" },
  { name: "Instagram", handle: "@ronak_chavda_dev", url: "https://www.instagram.com/ronak_chavda_dev/", icon: "instagram" },
  { name: "GitHub", handle: "RonakChavda-Dev", url: "https://github.com/RonakChavda-Dev", icon: "github" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const marqueeWords = [
  "Agentic AI", "Automation", "Python", "Web Development",
  "Browser Bots", "Developer Tools", "Web Scraping", "Next.js",
];

export const aboutParagraphs = [
  "I'm <strong>Ronak Chavda</strong>, a developer from <strong>Gujarat, India</strong>. My work sits where code meets everyday tasks: if something is done by hand again and again, I want to write the program that does it instead.",
  "Most of my time goes into <strong>automation</strong> and <strong>agentic AI</strong>, meaning tools that can read a situation, decide the next step, and act on it. I also build <strong>websites and custom tools</strong> for other people, from small utilities to full web apps.",
  "I like local-first tools, clean code, and shipping things people actually use. Every project on my GitHub started as a problem I had myself.",
];

export const facts = [
  { value: 5, label: "public repos on GitHub" },
  { value: 17, label: "languages & tools in my stack" },
  { value: 3, label: "focus areas: AI, automation, web" },
];

// Lines shown in the little terminal in the About section.
// type "cmd" is typed out letter by letter, type "out" just appears.
export const terminalLines = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "Ronak Chavda, programmer" },
  { type: "cmd", text: "cat focus.txt" },
  { type: "out", text: "→ automation scripts & bots", accent: true },
  { type: "out", text: "→ agentic AI tools", accent: true },
  { type: "out", text: "→ websites & tools for clients", accent: true },
  { type: "cmd", text: "echo $LOCATION" },
  { type: "out", text: "Gujarat, India" },
  { type: "cmd", text: "./status --now" },
  { type: "out", text: "● open to new projects", green: true },
  { type: "out", text: "# say hi on X, LinkedIn or Instagram ↓", dim: true },
];

export const services = [
  {
    icon: "bot",
    title: "Agentic AI",
    text: "AI agents that do more than chat. They plan steps, call tools, check results and finish real tasks on their own.",
    tags: ["LLM agents", "Tool calling", "Workflows"],
  },
  {
    icon: "bolt",
    title: "Automation",
    text: "Scripts and bots that take over the boring parts: file handling, data scraping, browser tasks and desktop clicks.",
    tags: ["Python", "PyAutoGUI", "Scrapers"],
  },
  {
    icon: "screen",
    title: "Websites & tools",
    text: "Fast, good-looking websites and custom tools built for clients, from landing pages to full web apps with a backend.",
    tags: ["React", "Next.js", "Django"],
  },
];

export const steps = [
  { title: "Understand", text: "We talk through the task, what slows you down, and what \"done\" looks like." },
  { title: "Design", text: "I map the steps, pick the right tools, and plan where AI helps and where plain code is better." },
  { title: "Build & test", text: "I write the code and test it on real examples until it works every time, not just once." },
  { title: "Hand over", text: "You get working software, clear notes on how to use it, and help if anything changes." },
];

const GITHUB = "https://github.com/RonakChavda-Dev";

export const featuredProject = {
  name: "wherewasi",
  url: `${GITHUB}/wherewasi`,
  tags: ["Featured", "Python", "Developer tool"],
  text: "A local-first developer tool that rebuilds your coding context after an interruption and tells you where to pick up again. No cloud, no account, it works on your own machine.",
};

export const projects = [
  {
    name: "Amazon Price Tracker",
    url: GITHUB,
    tags: ["Python", "BeautifulSoup", "Requests"],
    text: "A web scraper that watches product prices on Amazon, so you can buy at the right time without checking by hand.",
  },
  {
    name: "I'm Not a Robot Beater",
    url: GITHUB,
    tags: ["In progress", "Browser automation"],
    wip: true,
    text: "A bot that plays and beats \"I'm Not a Robot\", the tricky browser game by Neal Agarwal (neal.fun), solving its checks one level at a time.",
  },
];

export const stack = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "PHP", "HTML", "CSS"] },
  { group: "Frameworks", items: ["React", "Next.js", "Node.js", "Django", "Flask"] },
  { group: "Tools & platforms", items: ["Git", "GitHub", "Docker", "Linux", "PostgreSQL", "VS Code"] },
];
