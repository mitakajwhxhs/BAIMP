import { motion, useReducedMotion } from 'framer-motion'

export function PageHero({ eyebrow, title, text, children }) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="page-hero relative overflow-hidden">
      <div className="container-page relative py-14 sm:py-20">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0 max-w-4xl"
        >
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase text-[#a9844c]">{eyebrow}</p>
          ) : null}
          <h1 className="break-words text-4xl font-semibold leading-tight text-[#153b34] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {text ? <p className="mt-5 max-w-3xl text-lg leading-8 text-[#526760]">{text}</p> : null}
          {children ? <div className="mt-8 min-w-0 max-w-full">{children}</div> : null}
        </motion.div>
      </div>
    </section>
  )
}
