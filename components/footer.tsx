export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-gray-200 text-foreground/70   overflow-hidden relative">
      {/* Footer Decor */}
      <div className="absolute bottom-0 right-0 -z-10  h-40  blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto py-10 px-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-5">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10">
                <img src="/logo.png" alt="MARZSTACK Logo" className="w-full h-full object-contain" />
              </div>
              <span className=" font-black text-md tracking-wider">MARZSTACK</span>
            </div>
            <p className="text-foreground/85 text-md leading-relaxed max-w-md">
              Bridging the gap between creativity excellence and user-centric design. Building the future, one stack at a time.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-black uppercase tracking-widest text-foreground/70 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-foreground/80 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-black uppercase tracking-widest text-foreground/70 mb-6">Connect with me</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/musa-abdulrazak-a518568a', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { name: 'GitHub', href: '#', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
                { name: 'X', href: 'https://x.com/mucerabdool', icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153z' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-15 mx-auto z-10 w-[98%] h-[1px] bg-foreground/10" />

      <div className="bg-foreground/20 py-10 w-full">
        <div className="max-w-7xl mx-auto px-[40px] flex flex-col md:flex-row justify-between items-center gap-4 text-foreground/70 text-sm font-medium">
          <p>© {currentYear} MARZSTACK. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed & Developed</span>
            <span className="text-black uppercase tracking-tighter">By MARZSTACK</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
