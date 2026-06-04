export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-[#dfd0b9] bg-[#fbf8f1] px-3 py-1 text-xs font-semibold text-[#2f5f55] shadow-[0_6px_18px_rgba(21,59,52,0.06)] ${className}`}
    >
      {children}
    </span>
  )
}
