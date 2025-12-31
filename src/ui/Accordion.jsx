import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const open = idx === openIndex;
        return (
          <div key={item.question} className="card-surface">
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-lg font-semibold text-white"
              onClick={() => setOpenIndex(open ? -1 : idx)}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${open ? 'rotate-180 text-primary' : 'text-white'}`}
              />
            </button>
            {open && <div className="px-4 pb-4 text-gray-200 leading-7">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
