'use client'
import { useState } from 'react'

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border-b'>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-2">
        {question}
      </button>
      {isOpen && <div className="pb-2">{answer}</div>}
    </div>
  )
}


