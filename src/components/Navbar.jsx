import {FaGithub } from "react-icons/fa"
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Sol Taraf: Logo & Başlık */}
        <div className="flex items-center gap-3">
           
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-slate-900">
              BibTeX <span className="text-blue-600">to</span> IEEE
            </span>
            <span className="hidden rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 sm:inline-block">
              Converter
            </span>
          </div>
        </div>

        {/* Sağ Taraf: Gizlilik Rozeti & GitHub Linki */}
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 md:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            100% Client-Side
          </span>

          <a
            href="https://github.com/busraydinn/bibtex-to-ieee-converter"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <FaGithub className="w-10 h-10"/>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
