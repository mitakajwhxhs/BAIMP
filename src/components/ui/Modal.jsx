import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useLanguage } from '../../i18n/useLanguage.js'

export function Modal({ open, onClose, title, children }) {
  const { select } = useLanguage()

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-end bg-[#14201c]/55 p-4 backdrop-blur-sm sm:items-center sm:justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            className="max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-lg border border-[#e2d5bf] bg-[#fbf8f1] p-5 shadow-[0_28px_80px_rgba(20,32,28,0.28)] sm:p-7"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <h2 className="text-2xl font-semibold text-[#153b34]">{title}</h2>
              <button
                type="button"
                aria-label={select('Close', 'Затвори')}
                className="focus-ring rounded-md border border-[#dfd0b9] bg-white p-2 text-[#2f5f55] transition duration-300 hover:bg-[#ede4d6]"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
