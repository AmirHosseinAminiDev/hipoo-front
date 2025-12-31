import React from 'react';
import { X } from 'lucide-react';

function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur">
      <div className="w-full max-w-2xl card-surface relative">
        <button
          onClick={onClose}
          aria-label="بستن"
          className="absolute left-4 top-4 rounded-full bg-white/5 p-2 text-white hover:text-primary"
        >
          <X size={20} />
        </button>
        <div className="p-6">
          {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
          <div className="text-gray-200 leading-7">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
