// Small drawings (icons) used around the website.
// Use it like: <Icon name="github" />

const paths = {
  github: (
    <path
      fill="currentColor"
      d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
    />
  ),
  x: (
    <path
      fill="currentColor"
      d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.2l7.3-8.3L1 2h6.3l4.4 5.9L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4V9.75Z"
    />
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </g>
  ),
  discord: (
    <path
      fill="currentColor"
      d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.44.87-.61 1.25a18.27 18.27 0 0 0-5.49 0 12.64 12.64 0 0 0-.62-1.25.08.08 0 0 0-.08-.04 19.74 19.74 0 0 0-4.88 1.52.07.07 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-1.99a.08.08 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.89.08.08 0 0 1-.01-.13l.37-.29a.07.07 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.07.07 0 0 1 .08.01l.37.29a.08.08 0 0 1-.01.13c-.6.35-1.22.65-1.87.89a.08.08 0 0 0-.04.1c.36.7.78 1.36 1.22 1.99a.08.08 0 0 0 .08.03 19.84 19.84 0 0 0 6-3.03.08.08 0 0 0 .03-.05c.5-5.18-.84-9.67-3.55-13.66a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42Z"
    />
  ),
  mail: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </g>
  ),
  copy: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </g>
  ),
  check: <path fill="none" stroke="currentColor" strokeWidth="2.4" d="m5 12 5 5 9-10" />,
  arrowRight: <path fill="none" stroke="currentColor" strokeWidth="2" d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path fill="none" stroke="currentColor" strokeWidth="2" d="M7 17 17 7M8 7h9v9" />,
  arrowUp: <path fill="none" stroke="currentColor" strokeWidth="2" d="M12 19V5M6 11l6-6 6 6" />,
  menu: <path fill="none" stroke="currentColor" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />,
  close: <path fill="none" stroke="currentColor" strokeWidth="2" d="M6 6l12 12M18 6 6 18" />,
  plus: <path fill="none" stroke="currentColor" strokeWidth="2" d="M12 5v14M5 12h14" />,
  code: <path fill="none" stroke="currentColor" strokeWidth="1.8" d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  star: <path fill="currentColor" d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5Z" />,
  quote: <path fill="currentColor" d="M3 18v-5.5C3 8.4 5.2 5.6 9.3 4.5l.9 1.8C8 7.1 6.8 8.6 6.6 11H10v7H3Zm11 0v-5.5c0-4.1 2.2-6.9 6.3-8l.9 1.8c-2.2.8-3.4 2.3-3.6 4.7H21v7h-7Z" />,
  // 🎃 Halloween icons. Remove after Halloween.
  pumpkin: (
    <g fill="currentColor">
      <path d="M12 7c-1.2-.8-3-1-4.6-.4C4.5 7.6 3 10.3 3 13.5S5 20 8.5 20c1.4 0 2.6-.4 3.5-1 .9.6 2.1 1 3.5 1 3.5 0 5.5-3.3 5.5-6.5s-1.5-5.9-4.4-6.9C14.9 6 13.2 6.2 12 7Z" />
      <path d="M11.3 7.2c0-1.8.5-3.3 1.9-4.2l.9 1c-.9.7-1.3 1.8-1.3 3.2h-1.5Z" />
    </g>
  ),
  bat: <path fill="currentColor" d="M12 8.5c.6-1 1.1-1.6 1.6-2l.4 1.8c2.3-.3 4.6-1.4 6.5-3.3 0 2.7.8 4.6 3.5 5.6-1.9.4-3.2 1.4-3.6 3.4-1.4-1.2-3.1-1.4-4.6-.4-.6 1.3-1.5 2.4-3.8 3.4-2.3-1-3.2-2.1-3.8-3.4-1.5-1-3.2-.8-4.6.4C3.2 12 1.9 11 0 10.6c2.7-1 3.5-2.9 3.5-5.6 1.9 1.9 4.2 3 6.5 3.3l.4-1.8c.5.4 1 1 1.6 2Z" />,
  spark:<path fill="currentColor" d="M12 2c.6 4.6 2.4 7.4 10 10-7.6 2.6-9.4 5.4-10 10-.6-4.6-2.4-7.4-10-10 7.6-2.6 9.4-5.4 10-10Z" />,
  chat: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 10h8M8 13h5" />
    </g>
  ),
  sun: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </g>
  ),
  moon: <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />,
  bot: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 8V4H8" />
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M2 14h2M20 14h2M9 13v2M15 13v2" />
    </g>
  ),
  bolt: <path fill="none" stroke="currentColor" strokeWidth="1.7" d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  screen: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="2" y="4" width="20" height="14" rx="2.5" />
      <path d="M8 22h8M12 18v4M7 9l-2 2 2 2M17 9l2 2-2 2M13 8l-2 6" />
    </g>
  ),
};

export default function Icon({ name, size, className }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
