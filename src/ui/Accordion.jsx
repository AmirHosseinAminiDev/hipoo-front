import React, { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const open = idx === openIndex;
        return (
          <div key={item.question} className="card-surface">
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-lg font-semibold text-white"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              aria-expanded={open}
              aria-controls={`accordion-panel-${idx}`}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${open ? 'rotate-180 text-primary' : 'text-white'}`}
              />
            </button>
            <div
              id={`accordion-panel-${idx}`}
              ref={(el) => (contentRefs.current[idx] = el)}
              className={`px-4 text-gray-200 leading-7 overflow-hidden transition-all duration-500 ease-in-out ${
                open ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
              style={{ maxHeight: open ? `${contentRefs.current[idx]?.scrollHeight || 0}px` : '0px' }}
            >
              <div className="pb-4 pt-1">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
