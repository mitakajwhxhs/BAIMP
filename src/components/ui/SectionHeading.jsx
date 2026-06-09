export function SectionHeading({ eyebrow, title, text, align = 'left', className = '' }) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase text-[#a9844c]">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold leading-tight text-[#153b34] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-[#63736d] sm:text-lg sm:leading-8">{text}</p> : null}
    </div>
  )
}
