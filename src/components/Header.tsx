'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>

      {/* Desktop Header */}
      <header className="hidden sm:flex items-center justify-center fixed top-10 z-50 px-4 py-3 w-full">
        <div className="flex items-center pl-4 p-2 rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-lg text-zinc-700 w-fit">
          <a 
            className="hover:opacity-80 transition-opacity mx-auto flex items-center justify-center pl-2" 
            aria-label="Home" 
            href="#"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="23" 
              height="23" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-house" 
              aria-hidden="true"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
          </a>
          <div className="w-px h-5 bg-zinc-200 mx-6"></div>
          <div className="space-x-8 flex items-center">
            <a 
              href="https://github.com/hassanxtech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity" 
              aria-label="GitHub"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-github flex-shrink-0" 
                aria-hidden="true" 
                style={{width: '23px', height: '23px'}}
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/hassantech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity" 
              aria-label="Instagram"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-instagram flex-shrink-0" 
                aria-hidden="true" 
                style={{width: '23px', height: '23px'}}
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@HassanTech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity" 
              aria-label="TikTok"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-music2 lucide-music-2 flex-shrink-0" 
                aria-hidden="true" 
                style={{width: '22px', height: '22px'}}
              >
                <circle cx="8" cy="18" r="4"></circle>
                <path d="M12 18V2l7 4"></path>
              </svg>
            </a>
            <a 
              href="https://hassanx.tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity" 
              aria-label="Blog"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-scroll-text flex-shrink-0" 
                aria-hidden="true" 
                style={{width: '23px', height: '23px'}}
              >
                <path d="M15 12h-5"></path>
                <path d="M15 8h-5"></path>
                <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
                <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/HassanTech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity" 
              aria-label="LinkedIn"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-linkedin flex-shrink-0" 
                aria-hidden="true" 
                style={{width: '23.5px', height: '23.5px'}}
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="https://www.fiverr.com/hasan0x" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity" 
              aria-label="Fiverr"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="flex-shrink-0"
                style={{width: '24px', height: '24px'}}
                aria-hidden="true"
              >
                <path d="M9 6v12"></path>
                <path d="M9 8h10"></path>
                <path d="M9 12h7"></path>
              </svg>
            </a>
          </div>
          <div className="w-px h-5 bg-zinc-200 mx-6"></div>
          <button 
            className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-500 px-6 py-3.5 text-sm rounded-xl lg:text-base w-full md:w-[155px]"
            type="button"
            onClick={() => window.open('https://instagram.com/hassantech', '_blank')}
          >
            Reach Me
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sm:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-zinc-200 w-full">
        <div className="flex items-center justify-between px-6 py-4 max-w-full">
          <div className="flex items-center justify-between w-full text-zinc-700">
            <a 
              className="hover:opacity-80 transition-opacity" 
              aria-label="Home" 
              href="#"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-house size-6" 
                aria-hidden="true"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
            </a>
            <button
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="Toggle menu"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <div style={{transform: 'none'}}>
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x size-6"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu size-6"
                    aria-hidden="true"
                  >
                    <path d="M4 12h16"></path>
                    <path d="M4 18h16"></path>
                    <path d="M4 6h16"></path>
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay with backdrop */}
        {isMenuOpen && (
          <>
            {/* Black backdrop */}
            <div className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"></div>
            
            {/* Menu content */}
            <div className="fixed top-0 left-0 right-0 bg-white z-50 flex flex-col transform transition-transform duration-300 ease-out animate-slide-down shadow-lg">
              {/* Header with home icon and close button */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
                <a 
                  className="hover:opacity-80 transition-opacity" 
                  aria-label="Home" 
                  href="#"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-house size-6 text-zinc-700" 
                    aria-hidden="true"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </a>
                <button
                  className="p-2 hover:opacity-80 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-6 text-zinc-700"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-8">
                  <a
                    href="https://github.com/HassanXTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-zinc-900 hover:opacity-80 transition-opacity py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    <span className="text-lg font-medium">GitHub</span>
                  </a>

                  <a
                    href="https://instagram.com/hassantech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-zinc-900 hover:opacity-80 transition-opacity py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    <span className="text-lg font-medium">Instagram</span>
                  </a>

                  

                  <a
                    href="https://tiktok.com/@HassanTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-zinc-900 hover:opacity-80 transition-opacity py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6"
                    >
                      <circle cx="8" cy="18" r="4"></circle>
                      <path d="M12 18V2l7 4"></path>
                    </svg>
                    <span className="text-lg font-medium">TikTok</span>
                  </a>

                  <a
                    href="/blog"
                    className="flex items-center space-x-4 text-zinc-900 hover:opacity-80 transition-opacity py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6"
                    >
                      <path d="M15 12h-5"></path>
                      <path d="M15 8h-5"></path>
                      <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
                      <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path>
                    </svg>
                    <span className="text-lg font-medium">Blog</span>
                  </a>

                  <a
                    href="https://www.fiverr.com/hasan0x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-zinc-900 hover:opacity-80 transition-opacity py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="26" 
                      height="26" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="size-6"
                      aria-hidden="true"
                    >
                      <path d="M9 6v12"></path>
                      <path d="M9 8h10"></path>
                      <path d="M9 12h7"></path>
                    </svg>
                    <span className="text-lg font-medium">Fiverr</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/HassanTech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-zinc-900 hover:opacity-80 transition-opacity py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="text-lg font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Bottom Section with buttons */}
              <div className="px-6 pb-8 space-y-4">
                <button 
                  className="w-full bg-zinc-900 text-white py-4 px-6 rounded-xl hover:bg-zinc-800 transition-colors font-medium"
                  onClick={() => window.open('https://instagram.com/hassantech', '_blank')}
                >
                  Reach Me
                </button>
          </div>
        </div>
      </>
    )}
    </header>
    </>
  );
}