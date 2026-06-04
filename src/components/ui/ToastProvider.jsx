import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import { ToastContext } from '../../lib/toastContext.js'

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const pushToast = useCallback((message, type = 'success') => {
    const id = crypto.randomUUID()
    setToasts((current) => [...current, { id, message, type }])
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id))
    }, 3600)
  }, [])

  return (
    <ToastContext.Provider value={{ pushToast }}>
      {children}
      <div className="fixed right-4 top-24 z-[80] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="flex items-start gap-3 rounded-lg border border-[#d8c7a9] bg-white/95 p-4 text-[#14201c] shadow-[0_18px_48px_rgba(21,59,52,0.16)] backdrop-blur"
            >
              <CheckCircle2
                className={`mt-0.5 h-5 w-5 shrink-0 ${
                  toast.type === 'error' ? 'text-red-700' : 'text-[#2f5f55]'
                }`}
              />
              <p className="flex-1 text-sm leading-6">{toast.message}</p>
              <button
                type="button"
                aria-label="Затвори"
                onClick={() =>
                  setToasts((current) => current.filter((item) => item.id !== toast.id))
                }
                className="rounded-md p-1 text-[#63736d] transition duration-300 hover:bg-[#ede4d6]"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
