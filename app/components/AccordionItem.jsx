import React from 'react'

export default function AccordionItem() {
  return (
    <div style={{ borderBottom: '1px solid #e5e5e5', padding: '16px 0' }}>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
      >
        <h3 style={{ margin: 0 }}>{question}</h3>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div style={{ marginTop: '12px' }}>{children}</div>}
    </div>
  )
}
