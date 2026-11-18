import {FaGithub,FaLinkedin } from "react-icons/fa"
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        {/* Sol Taraf: Açıklama & Telif */}
        <div className="text-center text-sm text-slate-600 sm:text-left">
          <p className="font-medium text-slate-800">
            Built for researchers &amp; engineers writing IEEE papers.
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            © {currentYear} BibTeX to IEEE Converter. No data leaves your browser.
          </p>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
