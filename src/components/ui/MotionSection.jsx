import { motion, useReducedMotion } from 'framer-motion'

export function MotionSection({ children, className = '', ...props }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 34, filter: 'blur(10px)' }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
}
