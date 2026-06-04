import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-[linear-gradient(135deg,#2f5f55,#153b34)] text-white shadow-[0_16px_36px_rgba(21,59,52,0.22)] hover:shadow-[0_20px_46px_rgba(21,59,52,0.28)]',
  secondary:
    'border border-[#d8c7a9] bg-white/95 text-[#153b34] shadow-[0_10px_26px_rgba(21,59,52,0.07)] hover:border-[#2f5f55] hover:bg-[#fbf8f1]',
  ghost: 'bg-transparent text-[#153b34] hover:bg-[#ede4d6]',
  gold:
    'bg-[linear-gradient(135deg,#c4a467,#a9844c)] text-white shadow-[0_16px_36px_rgba(196,164,103,0.24)] hover:shadow-[0_20px_46px_rgba(196,164,103,0.3)]',
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  icon: Icon,
  className = '',
  ...props
}) {
  const classes = `focus-ring group inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 ${variants[variant]} ${className}`
  const content = (
    <>
      {Icon ? <Icon className="h-4 w-4 transition duration-300 group-hover:scale-110" aria-hidden="true" /> : null}
      <span>{children}</span>
    </>
  )

  if (to) {
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  )
}
