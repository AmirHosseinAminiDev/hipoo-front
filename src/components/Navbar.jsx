import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { navLinks } from '../data/navigation';

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
      isActive ? 'text-primary bg-white/5' : 'text-gray-200 hover:text-primary'
    }`;

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-dark/70 border-b border-white/5">
      <div className="section-container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-white">
          <span className="h-3 w-3 rounded-full bg-primary"></span>
          <span>باشگاه آرتمیس</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass} end={link.path === '/'}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button as="a" href="/contact" variant="primary">
            ثبت‌نام / عضویت
          </Button>
        </div>

        <button
          className="md:hidden rounded-lg bg-white/5 p-2 text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="باز کردن منو"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0f172a]">
          <div className="section-container flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
                onClick={() => setOpen(false)}
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
            <Button variant="primary" className="w-full" as="a" href="/contact">
              ثبت‌نام / عضویت
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
