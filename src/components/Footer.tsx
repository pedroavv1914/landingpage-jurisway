function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Shield */}
      <path
        d="M14 3.5l7 2.6v6.1c0 5.1-3.5 9.8-7 11.3-3.5-1.5-7-6.2-7-11.3V6.1l7-2.6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="transparent"
      />
      {/* Pillar */}
      <path d="M14 7.5v7.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* Beam */}
      <path d="M9 10.5h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* Left scale */}
      <path d="M11 10.5l-2 3.6a3 3 0 005.8 0l-2-3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right scale */}
      <path d="M17 10.5l-2 3.6a3 3 0 005.8 0l-2-3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Accent dot */}
      <circle cx="14" cy="7.5" r="1.3" fill="currentColor" />
    </svg>
  );
}
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-surface="light" className="relative border-t border-black/5 bg-white">
      {/* BG decor */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(680px_200px_at_15%_-10%,#000_10%,transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-black/10 bg-white text-black">
              <LogoMark className="text-black" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm text-black/80">© {year} JurisWay. Todos os direitos reservados.</span>
              <span className="text-[11px] text-black/50">Atendimento de segunda a sexta, 9h–18h (BRT).</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-3 text-sm">
            <a href="#sobre" className="text-[color:var(--brand-600)] hover:underline underline-offset-4">Sobre</a>
            <a href="#areas" className="text-[color:var(--brand-600)] hover:underline underline-offset-4">Áreas</a>
            <a href="#diferenciais" className="text-[color:var(--brand-600)] hover:underline underline-offset-4">Diferenciais</a>
            <a href="#depoimentos" className="text-[color:var(--brand-600)] hover:underline underline-offset-4">Depoimentos</a>
            <a href="#contato" className="text-[color:var(--brand-600)] hover:underline underline-offset-4">Contato</a>
          </nav>
        </div>

        {/* Legal strip */}
        <div className="mt-6 flex flex-col-reverse items-start justify-between gap-3 border-t border-black/5 pt-4 text-xs text-black/60 sm:flex-row sm:items-center">
          <p>Feito com atenção à privacidade. Não vendemos seus dados.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:underline underline-offset-4 text-[color:var(--brand-600)]">Política de Privacidade</a>
            <span aria-hidden>•</span>
            <a href="#" className="hover:underline underline-offset-4 text-[color:var(--brand-600)]">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
