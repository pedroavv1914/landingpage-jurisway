export default function Diferenciais() {
  return (
    <section id="diferenciais" data-surface="light" className="relative border-t border-black/5 bg-white">
      {/* BG decor */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(700px_240px_at_20%_-10%,#000_10%,transparent_60%)]" />
        <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[color:color-mix(in_oklab,var(--accent)_16%,transparent)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] text-black/60">
              Nosso compromisso
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">
              Por que escolher a JurisWay
            </h2>
            <p className="mt-2 max-w-2xl text-black/70">
              Atendimento proativo, comunicação clara e estratégia orientada a resultados em cada etapa do seu caso.
            </p>
          </div>
          {/* KPIs */}
          <dl className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl border border-black/10 bg-white px-4 py-3 shadow-sm">
              <dt className="text-[10px] uppercase tracking-wide text-black/50">Satisfação</dt>
              <dd className="text-lg font-semibold text-black">98%</dd>
            </div>
            <div className="rounded-xl border border-black/10 bg-white px-4 py-3 shadow-sm">
              <dt className="text-[10px] uppercase tracking-wide text-black/50">Prazo médio</dt>
              <dd className="text-lg font-semibold text-black">24h</dd>
            </div>
            <div className="rounded-xl border border-black/10 bg-white px-4 py-3 shadow-sm">
              <dt className="text-[10px] uppercase tracking-wide text-black/50">Casos/ano</dt>
              <dd className="text-lg font-semibold text-black">+300</dd>
            </div>
          </dl>
        </div>

        {/* Feature grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.t}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md hover:ring-2 hover:ring-[var(--brand)]"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-[var(--brand)]/10 text-[var(--brand)]">
                  <span aria-hidden>{f.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">{f.t}</h3>
                  <p className="mt-1 text-sm text-black/70">{f.d}</p>
                </div>
              </div>

              {f.items?.length > 0 && (
                <ul className="mt-4 grid gap-2 text-sm text-black/75">
                  {f.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[color:color-mix(in_oklab,var(--brand)_28%,transparent)] blur-2xl opacity-40" />
            </article>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-black/60">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-2.5 py-1">ISO 27001-ready</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-2.5 py-1">LGPD-first</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-2.5 py-1">SLA de resposta: 24h</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-2.5 py-1">Relatórios mensais</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:flex-row">
          <p className="text-sm text-black/80">Pronto para avançar? Vamos entender seu caso e sugerir o melhor caminho.</p>
          <div className="flex items-center gap-3">
            <a href="#contato" className="inline-flex items-center rounded-full bg-[var(--brand)] text-white px-4 py-2 text-xs font-medium hover:bg-[var(--brand-600)]">
              Agendar consulta
            </a>
            <a href="#sobre" className="text-xs font-medium text-[color:var(--brand-600)] hover:underline underline-offset-4">Saiba mais sobre o nosso método</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: "💬",
    t: "Comunicação clara",
    d: "Sem juridiquês: posicionamentos práticos, prazos e próximos passos.",
    items: ["Pontos de decisão explícitos", "Memórias de reunião", "Resumo executivo por e-mail"],
  },
  {
    icon: "🎯",
    t: "Foco em resultado",
    d: "Estratégia orientada a metas e indicadores mensuráveis.",
    items: ["Definição de KPIs no início", "Roadmap com marcos", "Revisões quinzenais"],
  },
  {
    icon: "🧑‍⚖️",
    t: "Time dedicado",
    d: "Profissionais experientes com visão de negócio.",
    items: ["Especialistas por frente", "Canal direto no WhatsApp", "Plantão em casos críticos"],
  },
  {
    icon: "🛡️",
    t: "Conformidade e segurança",
    d: "Processos alinhados à LGPD e boas práticas de segurança da informação.",
    items: ["Acordos de confidencialidade", "Gestão de acessos", "Revisões periódicas"],
  },
  {
    icon: "⚡",
    t: "Agilidade com qualidade",
    d: "Respostas rápidas sem abrir mão da precisão técnica.",
    items: ["SLA de 24h", "Templates validados", "Dupla revisão em entregas críticas"],
  },
  {
    icon: "🤝",
    t: "Parceria de longo prazo",
    d: "Atuação próxima e previsível para crescimento sustentável.",
    items: ["Planos mensais", "Relatórios executivos", "Workshops trimestrais"],
  },
] as const;
