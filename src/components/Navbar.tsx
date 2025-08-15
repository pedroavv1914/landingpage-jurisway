"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const NAV_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

function LogoMark({ className = "" }: { className?: string }) {
  // Shield + balanced scales built with strokes that inherit currentColor
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [light, setLight] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fallback scroll spy based on viewport center to improve reliability
  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.href.replace("#", ""));
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const mid = window.innerHeight / 2;
        let current = active;
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const r = el.getBoundingClientRect();
          if (r.top <= mid && r.bottom >= mid) {
            current = id;
            break;
          }
        }
        if (current && current !== active) setActive(current);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [active]);

  // Detect if a light surface is under the navbar (sections tagged with data-surface="light")
  useEffect(() => {
    const compute = () => {
      const header = headerRef.current;
      const lights = Array.from(document.querySelectorAll<HTMLElement>('[data-surface="light"]'));
      if (!header || !lights.length) return setLight(false);
      const hb = header.getBoundingClientRect();
      const probeY = hb.bottom + 8; // a bit further to avoid flicker
      const probeX = window.innerWidth / 2;
      const visibleLight = lights.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= probeY && r.bottom >= probeY && r.left <= probeX && r.right >= probeX;
      });
      setLight(visibleLight);
    };
    compute();
    const onScroll = () => compute();
    const onResize = () => compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Active section highlight
  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.href.replace("#", ""));
    const els = ids
      .map((id) => ({ id, el: document.getElementById(id) as HTMLElement | null }))
      .filter((x): x is { id: string; el: HTMLElement } => x.el !== null);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach(({ el }) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const linkBase = useMemo(
    () => "text-[color:var(--foreground)]/80 hover:text-[color:var(--foreground)]",
    []
  );

  useEffect(() => {
    // lock scroll when mobile menu is open
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onDark = !light; // when not over a light surface, assume dark backdrop

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-4 sm:top-5 md:top-6 z-50 pointer-events-none" role="banner">
      <div className="mx-auto max-w-7xl px-6">
        {/* Floating pill */}
        <div className={`pointer-events-auto mx-auto flex w-full max-w-4xl items-center justify-between rounded-full px-3 py-2 backdrop-blur-md transition-colors ${
          onDark
            ? "border border-white/15 bg-white/10 shadow-lg shadow-black/10"
            : "border border-black/15 bg-white shadow-xl shadow-black/15 ring-1 ring-black/5"
        }`}>
          {/* Brand */}
          <a href="#" className="flex items-center gap-3" aria-label="JurisWay - Início">
            <span className={`grid h-9 w-9 place-items-center rounded-xl transition-transform duration-300 will-change-transform hover:scale-[1.03] ${
              onDark ? "border border-white/20 bg-white/10 text-white/95" : "border border-black/10 bg-white text-black"
            }`}>
              <LogoMark className={onDark ? "text-white" : "text-black"} />
            </span>
            <span className={`hidden sm:inline font-semibold tracking-tight ${onDark ? "text-white/95" : "text-black/90"}`}>JurisWay</span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Navegação principal" className="hidden md:block">
            <ul className="flex items-center gap-1 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    className={`group ${onDark ? "text-white/85 hover:text-white" : "text-black/80 hover:text-black"} relative mx-2 inline-flex items-center px-2 py-1 transition-colors`}
                    href={item.href}
                  >
                    {item.label}
                    <span
                      className={`pointer-events-none absolute -bottom-0.5 left-2 right-2 h-px origin-left scale-x-0 ${onDark ? "bg-[var(--brand)]" : "bg-[var(--brand)]"} transition-transform duration-300 ${
                        active === item.href.replace("#", "") ? "scale-x-100" : "group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contato"
              className="hidden sm:inline-flex items-center rounded-full bg-[var(--brand)] text-white px-4 py-2 text-xs md:text-sm font-medium hover:bg-[var(--brand-600)] shadow-sm"
            >
              Agendar consulta
            </a>
            <button
              className={`md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border ${
                onDark ? "border-white/20 bg-white/10 text-white/90" : "border-black/15 bg-white text-black/80 shadow-sm"
              }`}
              aria-label="Abrir menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition">
                {open ? (
                  <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 z-50 origin-top rounded-b-2xl border-b border-black/10 bg-background/95 backdrop-blur p-6 transition-transform ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[var(--brand)] text-white grid place-items-center font-semibold">JW</div>
              <span className="font-semibold tracking-tight text-[color:var(--foreground)]">JurisWay</span>
            </div>
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-black/5 text-[color:var(--foreground)]/80"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="mt-6" aria-label="Menu móvel">
            <ul className="grid gap-3 text-base">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white/90 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contato"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--brand-600)]"
            onClick={() => setOpen(false)}
          >
            Agendar consulta
          </a>
        </div>
      </div>
    </header>
  );
}
