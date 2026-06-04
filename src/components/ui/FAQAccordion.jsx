import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQAccordion({ items }) {
  const [open, setOpen] = useState(items[0]?.question)

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const active = open === item.question
        return (
          <div key={item.question} className="hover-lift rounded-lg border border-[#e5dac8] bg-white/95 shadow-[0_12px_34px_rgba(21,59,52,0.06)]">
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg px-5 py-5 text-left text-lg font-semibold text-[#153b34]"
              onClick={() => setOpen(active ? null : item.question)}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#a9844c] transition duration-300 ${active ? 'rotate-180' : ''}`}
              />
            </button>
            {active ? <p className="animate-soft-rise px-5 pb-5 text-base leading-7 text-[#63736d]">{item.answer}</p> : null}
          </div>
        )
      })}
    </div>
  )
}
