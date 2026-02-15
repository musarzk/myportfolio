'use client';

import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (href: string) => {
    const id = href.replace('#', '');
    setActiveLink(id);
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    const id = href.replace('#', '');
    return activeLink === id;
  };

  return (
    <header className="sticky top-0 z-50 px-6 md:px-[40px] bg-background/80 backdrop-blur-xl border-b border-border/50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 transform group-hover:rotate-12 transition-transform">
            <img src="/logo.png" alt="MARZSTACK Logo" className="w-full h-full object-contain" />
          </div>
          <span className=" md:text-xl tracking-tight text-xl text-foreground">MARZSTACK</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-foreground/80 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative py-1 transition-colors hover:text-primary ${isActive(link.href) ? 'text-primary' : ''
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                </a>
              </li>
            ))}
          </ul>

          {/* CV Download Button */}
          <a
            href="/MARZSTACK-CV.pdf"
            download="MARZSTACK-CV.pdf"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v4a2 2 0 002 2h12a2 2 0 002-2v-4m-4-4l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
        >
          {isOpen ? (
            <HiX className="w-9 h-9 text-primary transition-all duration-300" />
          ) : (
            <HiMenuAlt3 className="w-9 h-9 text-foreground transition-all duration-300 transform scale-x-[-1]" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-6 border-t border-border/50' : 'max-h-0 opacity-0'
        }`}>
        <ul className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block py-3 px-5 rounded-2xl transition-all ${isActive(link.href)
                  ? 'bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20'
                  : 'text-foreground/80 hover:bg-secondary/50 font-medium'
                  }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="/MY-CV.pdf"
              download="MY-CV.pdf"
              className="flex items-center justify-center gap-2 py-4 px-5 rounded-2xl bg-primary text-primary-foreground font-black hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v4a2 2 0 002 2h12a2 2 0 002-2v-4m-4-4l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
