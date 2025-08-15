"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-x-32 -top-48 h-80 bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] opacity-30 blur-3xl animate-gradient-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_-40%,rgba(255,255,255,0.08)_0%,transparent_60%),radial-gradient(600px_200px_at_80%_-40%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-grid" />
        {/* vignette to improve legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_20%_40%,rgba(0,0,0,0.6)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" /> Atendimento em até 24h
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="block bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">JurisWay</span>
              <span className="block mt-1">Estratégia jurídica para negócios.</span>
            </h1>
            <p className="mt-4 text-white/80 leading-relaxed">
              Atuamos como parceiro jurídico do seu crescimento: prevenção de riscos, contratos, LGPD e contencioso com previsibilidade.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contato" className="btn-shine inline-flex items-center rounded-full bg-[var(--brand)] text-white px-5 py-2.5 text-sm font-medium shadow-lg shadow-[color:color-mix(in_oklab,var(--brand)_25%,transparent)] transition-transform hover:scale-[1.04] hover:bg-[var(--brand-600)]">
                Agendar avaliação gratuita
              </a>
              <a href="#depoimentos" className="inline-flex items-center rounded-full border border-white/20 text-white/90 px-5 py-2.5 text-sm font-medium hover:bg-white/10">
                Ver casos de sucesso
              </a>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-white/85">
              <li className="flex items-start gap-2"><CheckIcon /> Contratos e societário com foco em escala</li>
              <li className="flex items-start gap-2"><CheckIcon /> Adequação LGPD e políticas internas</li>
              <li className="flex items-start gap-2"><CheckIcon /> Contencioso estratégico e recuperação</li>
            </ul>
          </div>

          {/* Visual cards */}
          <div className="relative h-[380px] w-full">
            {/* back glow */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[color:color-mix(in_oklab,var(--brand)_35%,transparent)] to-[color:color-mix(in_oklab,var(--accent)_35%,transparent)] opacity-40 blur-2xl" />

            {/* Card 1 */}
            <div className="absolute left-6 top-8 w-[75%] max-w-[420px] rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/60">Contrato</p>
                  <p className="text-sm font-medium text-white">Acordo de Confidencialidade</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[color:color-mix(in_oklab,var(--brand)_25%,transparent)] px-2 py-1 text-[11px] text-white">
                  • Em vigor
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-white/60">Partes</p>
                  <p className="font-medium text-white">Empresa A, B</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-white/60">Vigência</p>
                  <p className="font-medium text-white">24 meses</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-white/60">Risco</p>
                  <p className="font-medium text-emerald-400">Baixo</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="absolute right-0 top-32 w-[68%] max-w-[380px] rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/60">LGPD</p>
                  <p className="text-sm font-medium text-white">Mapa de Dados</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[color:color-mix(in_oklab,var(--accent)_25%,transparent)] px-2 py-1 text-[11px] text-white">
                  • Conformidade
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-white/60">Bases legais</p>
                  <p className="font-medium text-white">5 mapeadas</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-white/60">Gaps</p>
                  <p className="font-medium text-amber-300">2 pendências</p>
                </div>
              </div>
            </div>

            {/* Card 3 small badge */}
            <div className="absolute left-10 bottom-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] text-white shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> 92% casos resolvidos
            </div>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Metric value="< 24h" label="Tempo de resposta" />
          <Metric value="92%" label="Casos resolvidos" accent="emerald" />
          <Metric value="74" suffix=" NPS" label="Satisfação dos clientes" accent="brand" />
          <Metric value="Brasil" label="Cobertura nacional" accent="accent" />
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
  value: string;
  label: string;
  suffix?: string;
  accent?: "brand" | "accent" | "emerald";
};

function Metric({ value, label, suffix = "", accent }: MetricProps) {
  const dotClass =
    accent === "brand"
      ? "bg-[var(--brand)]"
      : accent === "accent"
      ? "bg-[var(--accent)]"
      : accent === "emerald"
      ? "bg-emerald-400"
      : "bg-white/70";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <div className="flex items-center gap-2 text-sm text-white/70">
        <span className={`h-2 w-2 rounded-full ${dotClass}`} />
        <span>{label}</span>
      </div>
      <div className="mt-1 text-2xl font-semibold tracking-tight text-white">
        {value}
        <span className="text-base font-normal text-white/70">{suffix}</span>
      </div>
    </div>
  );
}
