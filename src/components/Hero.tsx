"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
      const head = headRef.current;
      const panel = panelRef.current;
      const headY = (1 - progress) * 12; // 0→12px
      const panelY = (1 - progress) * 18; // 0→18px
      if (head) head.style.transform = `translateY(${headY}px)`;
      if (panel) panel.style.transform = `translateY(${panelY}px)`;
    };
    const handler: () => void = () => {
      requestAnimationFrame(onScroll);
    };
    window.addEventListener("scroll", handler, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden text-white min-h-screen"
    >
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-x-32 -top-48 h-80 bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] opacity-30 blur-3xl animate-gradient-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_-40%,rgba(255,255,255,0.08)_0%,transparent_60%),radial-gradient(600px_200px_at_80%_-40%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-grid" />
        {/* vignette to improve legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_20%_40%,rgba(0,0,0,0.6)_0%,transparent_60%)]" />
        {/* subtle particles */}
        <div className="particles" />
        {/* autonomous aurora background */}
        <div className="aurora" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-28 pb-24 min-h-screen flex items-center">
        <div className="w-full space-y-12">
          {/* Headline centralizada */}
          <div ref={headRef} className="mx-auto max-w-3xl text-center relative z-10 fade-up" style={{ animationDelay: "60ms" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" /> Atendimento em até 24h
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
              <span className="block bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">JurisWay</span>
              <span className="block mt-2 text-white">Estratégia jurídica para negócios</span>
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Jurídico moderno e orientado a dados para escalar contratos, adequar LGPD e reduzir riscos com previsibilidade.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#contato" className="btn-shine inline-flex items-center rounded-full bg-[var(--brand)] text-white px-6 py-3 text-sm font-medium shadow-lg shadow-[color:color-mix(in_oklab,var(--brand)_25%,transparent)] transition-transform hover:scale-[1.04]">
                Agendar avaliação gratuita
              </a>
              <a href="#depoimentos" className="inline-flex items-center rounded-full border border-white/20 text-white/90 px-6 py-3 text-sm font-medium hover:bg-white/10">
                Ver casos de sucesso
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/85">
              <li className="inline-flex items-center gap-2"><CheckIcon /> Contratos em escala</li>
              <li className="inline-flex items-center gap-2"><CheckIcon /> LGPD completa</li>
              <li className="inline-flex items-center gap-2"><CheckIcon /> Contencioso estratégico</li>
            </ul>
          </div>

          {/* Painel ilustrativo único */}
          <div className="mx-auto w-full max-w-6xl">
            <div ref={panelRef} className="relative rounded-3xl border border-white/10 bg-white/5 px-6 py-6 sm:px-10 sm:py-8 backdrop-blur scale-in animate-float-slow shimmer-border" style={{ animationDelay: "120ms" }}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/60">Painel</p>
                  <p className="text-lg font-medium text-white">Seu jurídico, organizado e previsível</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[color:color-mix(in_oklab,var(--accent)_20%,transparent)] px-2.5 py-1 text-[11px] text-white/90">• Status saudável</span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white/60 text-sm">Contratos ativos</p>
                  <p className="mt-1 text-2xl font-semibold text-white">128</p>
                  <p className="text-xs text-emerald-400 mt-1">+12 este mês</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white/60 text-sm">Conformidade LGPD</p>
                  <p className="mt-1 text-2xl font-semibold text-white">96%</p>
                  <p className="text-xs text-white/70 mt-1">5 bases legais mapeadas</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white/60 text-sm">Casos em andamento</p>
                  <p className="mt-1 text-2xl font-semibold text-white">14</p>
                  <p className="text-xs text-amber-300 mt-1">2 com prioridade</p>
                </div>
              </div>
            </div>

            {/* KPIs espaçados */}
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 fade-up" style={{ animationDelay: "180ms" }}>
              <Metric value="< 24h" label="Tempo de resposta" animate={false} />
              <Metric value={92} suffix="%" label="Casos resolvidos" accent="emerald" />
              <Metric value={74} suffix=" NPS" label="Satisfação dos clientes" accent="brand" />
              <Metric valueString="Brasil" label="Cobertura nacional" accent="accent" animate={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 h-4 w-4 text-emerald-400">
      <path fill="currentColor" d="M7.629 13.962 3.4 9.733l1.414-1.414 2.815 2.815 7.558-7.558 1.414 1.414z" />
    </svg>
  );
}

type MetricProps = {
  value?: number | string;
  valueString?: string;
  label: string;
  suffix?: string;
  accent?: "brand" | "accent" | "emerald";
  animate?: boolean;
};

function Metric({ value, valueString, label, suffix = "", accent, animate = true }: MetricProps) {
  const dotClass =
    accent === "brand"
      ? "bg-[var(--brand)]"
      : accent === "accent"
      ? "bg-[var(--accent)]"
      : accent === "emerald"
      ? "bg-emerald-400"
      : "bg-white/70";

  // Animated counter
  const [display, setDisplay] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetNumber = typeof value === "number" ? value : undefined;

  useEffect(() => {
    if (!animate || targetNumber === undefined) return; // no animation needed
    const el = containerRef.current;
    if (!el) return;

    let started = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const duration = 1200; // ms
          const start = performance.now();
          const from = 0;
          const to = targetNumber;
          const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = easeOutCubic(t);
            const val = Math.round(from + (to - from) * eased);
            setDisplay(val);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });

    obs.observe(el);
    return () => obs.disconnect();
  }, [animate, targetNumber]);

  const renderValue = () => {
    if (targetNumber !== undefined) return display.toString();
    if (typeof value === "string") return value;
    if (valueString) return valueString;
    return "";
  };

  return (
    <div ref={containerRef} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <div className="flex items-center gap-2 text-sm text-white/70">
        <span className={`h-2 w-2 rounded-full ${dotClass}`} />
        <span>{label}</span>
      </div>
      <div className="mt-1 text-2xl font-semibold tracking-tight text-white">
        {renderValue()}
        <span className="text-base font-normal text-white/70">{suffix}</span>
      </div>
    </div>
  );
}
