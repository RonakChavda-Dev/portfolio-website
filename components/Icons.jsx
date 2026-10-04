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
