export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.2 8.2V6.7c0-.7.5-1.2 1.2-1.2h1.4V2.8c-.7-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.1v1.5H7.4v3h2.7v10.2h3.4V11.2h2.7l.5-3h-3.2Z" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect width="16" height="16" x="4" y="4" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function BrandFacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        fill="#fff"
        d="M13.4 21.8v-7.7h2.6l.4-3h-3V9.2c0-.9.3-1.5 1.5-1.5h1.6V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.7v3h2.6v7.7h3.1Z"
      />
    </svg>
  )
}

export function BrandInstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <defs>
        <radialGradient id="instagram-brand-gradient" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="28%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="65%" stopColor="#d6249f" />
          <stop offset="100%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="22" height="22" x="1" y="1" rx="6" fill="url(#instagram-brand-gradient)" />
      <rect width="12.4" height="12.4" x="5.8" y="5.8" rx="3.8" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="16.7" cy="7.4" r="1.1" fill="#fff" />
    </svg>
  )
}
