
import { useState } from "react";
import logo from "../public/logo.png";
export default function Converter() {
  const [bibtex, setBibtex] = useState("");
  const [ieee, setIeee] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const example = `@article{smith2024,
  author = {John Smith and Jane Doe},
  title = {Artificial Intelligence in Modern Systems},
  journal = {IEEE Access},
  year = {2024},
  volume = {12},
  number = {3},
  pages = {100-110}
}`;

  // Convert BibTeX to IEEE
  const convertToIEEE = () => {
    setError("");
    setIeee("");
    setCopied(false);

    try {
      if (!bibtex.trim()) {
        throw new Error("Please enter your BibTeX reference.");
      }

      const entries = bibtex.match(/@\w+\s*\{[\s\S]*?(?=\n@\w+\s*\{|$)/gi);

      if (!entries) {
        throw new Error("Invalid BibTeX format.");
      }

      const getField = (entry, field) => {
        const regex = new RegExp(
          `${field}\\s*=\\s*(?:\\{([^}]*(?:\\{[^}]*\\}[^}]*)*)\\}|"([^"]*)")`,
          "i"
        );

        const match = entry.match(regex);
        return (match?.[1] || match?.[2] || "").trim();
      };

      const formatAuthors = (authorString) => {
        return authorString
          .split(/\s+and\s+/i)
          .map((author) => {
            const parts = author.split(",");
            let firstName, lastName;

            if (parts.length > 1) {
              lastName = parts[0].trim();
              firstName = parts.slice(1).join(" ").trim();
            } else {
              const words = author.trim().split(/\s+/);
              lastName = words.pop();
              firstName = words.join(" ");
            }

            const initials = firstName
              .split(/\s+/)
              .filter(Boolean)
              .map((name) => name[0].toUpperCase() + ".")
              .join(" ");

            return `${initials} ${lastName}`.trim();
          });
      };

      const results = entries.map((entry, index) => {
        const type = entry.match(/@(\w+)/)?.[1]?.toLowerCase();

        const author = getField(entry, "author");
        const title = getField(entry, "title");
        const journal = getField(entry, "journal") || getField(entry, "booktitle");
        const year = getField(entry, "year");
        const volume = getField(entry, "volume");
        const number = getField(entry, "number");
        const pages = getField(entry, "pages");
        const publisher = getField(entry, "publisher");

        if (!author || !title) {
          throw new Error(`Entry ${index + 1}: Missing author or title.`);
        }

        const authors = formatAuthors(author);

        const authorText =
          authors.length > 6
            ? `${authors.slice(0, 1).join("")} et al.`
            : authors.join(", ");

        let output = `[${index + 1}] ${authorText}, "${title},"`;

        if (type === "article") {
          if (journal) output += ` ${journal},`;
          if (volume) output += ` vol. ${volume},`;
          if (number) output += ` no. ${number},`;
          if (pages) output += ` pp. ${pages},`;
          if (year) output += ` ${year}.`;
        } else if (type === "inproceedings" || type === "conference") {
          if (journal) output += ` in ${journal},`;
          if (pages) output += ` pp. ${pages},`;
          if (year) output += ` ${year}.`;
        } else {
          if (publisher) output += ` ${publisher},`;
          if (year) output += ` ${year}.`;
        }

        return output;
      });

      setIeee(results.join("\n\n"));
    } catch (err) {
      setError(err.message || "Conversion failed.");
    }
  };

  const copyIEEE = async () => {
    if (!ieee) return;

    try {
      await navigator.clipboard.writeText(ieee);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Unable to copy. Please copy the text manually.");
    }
  };

  const clearAll = () => {
    setBibtex("");
    setIeee("");
    setError("");
    setCopied(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">

      
     {/* Hero */}
<section className="bg-slate-900 relative overflow-hidden">
  <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-40 -right-20"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          REFERENCE FORMATTING TOOL
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          BibTeX to IEEE
          <span className="block text-blue-400 mt-2">
            Citation Converter
          </span>
        </h2>

        <p className="text-slate-400 text-base md:text-lg mt-6 leading-relaxed max-w-2xl">
          Transform your BibTeX references into IEEE-style
          citations. Simple, fast and designed for researchers.
        </p>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end items-center">
        <img
          src={logo}
          alt="logo"
          className="w-full max-w-md object-contain drop-shadow-2xl"
        />
      </div>

    </div>
  </div>
</section>
      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Section title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Reference Converter
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Paste your BibTeX and generate IEEE references.
            </p>
          </div>

          <button
            onClick={clearAll}
            className="text-sm text-slate-500 hover:text-red-500 transition flex items-center gap-2"
          >
            Clear all
          </button>

        </div>

        {/* Converter cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Input Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold">
                  {"</>"}
                </div>

                <div>
                  <h4 className="font-bold text-slate-800">
                    BibTeX Input
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Source reference
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">
                INPUT
              </span>

            </div>

            <div className="p-6">

              <textarea
                value={bibtex}
                onChange={(e) => setBibtex(e.target.value)}
                placeholder={`Paste your BibTeX code here...

@article{smith2024,
  author = {John Smith},
  title = {Artificial Intelligence},
  journal = {IEEE Access},
  year = {2024}
}`}
                spellCheck="false"
                className="w-full h-80 bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm font-mono leading-7 text-slate-700 resize-none outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition placeholder:text-slate-400"
              />

              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-slate-400">
                  {bibtex.length} characters
                </span>

                <button
                  onClick={() => {
                    setBibtex(example);
                    setIeee("");
                    setError("");
                  }}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  Load example
                </button>
              </div>

              <button
                onClick={convertToIEEE}
                className="w-full mt-6 py-4 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-100 transition-all flex items-center justify-center gap-2"
              >
                Convert to IEEE
                <span>→</span>
              </button>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600">
                  {error}
                </div>
              )}

            </div>
          </div>

          {/* Output Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 font-bold">
                  [1]
                </div>

                <div>
                  <h4 className="font-bold text-slate-800">
                    IEEE Output
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Formatted reference
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
                OUTPUT
              </span>

            </div>

            <div className="p-6">

              <div className="w-full h-80 bg-slate-50 border border-slate-200 rounded-xl p-5 overflow-auto">

                {ieee ? (
                  <pre className="whitespace-pre-wrap break-words font-serif text-sm leading-8 text-slate-700">
                    {ieee}
                  </pre>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round"/>
                      </svg>
                    </div>

                    <p className="text-sm font-semibold text-slate-500">
                      No references generated yet
                    </p>

                    <p className="text-xs text-slate-400 mt-2 max-w-52 leading-5">
                      Your IEEE formatted references will appear here after conversion.
                    </p>
                  </div>
                )}

              </div>

              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-slate-400">
                  {ieee ? ieee.length + " characters" : "Waiting for conversion"}
                </span>

                {ieee && (
                  <span className="text-xs text-emerald-600 font-medium">
                    Conversion complete
                  </span>
                )}
              </div>

              <button
                onClick={copyIEEE}
                disabled={!ieee}
                className="w-full mt-6 py-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                {copied ? "✓ Copied successfully" : "Copy IEEE References"}
              </button>

            </div>
          </div>

        </div>
 
      </main>

    
    </div>
  );
}
