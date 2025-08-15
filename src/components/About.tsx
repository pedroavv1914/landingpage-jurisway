export default function About() {
  return (
    <section id="sobre" className="relative border-t border-black/5 bg-white">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[color:color-mix(in_oklab,var(--brand)_18%,transparent)] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[color:color-mix(in_oklab,var(--accent)_18%,transparent)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(600px_200px_at_20%_-40%,#000_10%,transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: mission and values */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] text-black/60">Sobre a JurisWay</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">Clareza, estratégia e previsibilidade jurídica</h2>
            <p className="mt-4 text-black/70 leading-relaxed max-w-2xl">
              Unimos prática jurídica e visão de negócio para orientar decisões com objetividade. Nosso foco é construir caminhos
              com riscos mapeados, prazos definidos e indicadores que mostram o avanço de cada frente.
            </p>

            {/* Values */}
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Orientação por dados", d: "Métricas e relatórios executivos em cada etapa." },
                { t: "Comunicação direta", d: "Sem juridiquês: objetivos, prazos e próximos passos." },
                { t: "Antecipação de riscos", d: "Mapeamento preventivo e planos de contingência." },
                { t: "Parceria contínua", d: "Suporte consultivo e contencioso sob demanda." },
              ].map((v) => (
                <li key={v.t} className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-sm">
                  <span className="mt-1 inline-grid h-5 w-5 place-items-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 13.2 4.3 10l1.4-1.4 1.8 1.8 6-6L15 5.8z"/></svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-black/90">{v.t}</h3>
                    <p className="mt-1 text-sm text-black/70">{v.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Badges / stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { k: "+250", l: "casos conduzidos" },
                { k: "96%", l: "acordos bem-sucedidos" },
                { k: "< 24h", l: "tempo de resposta" },
                { k: "NPS 74", l: "satisfação de clientes" },
              ].map((s) => (
                <div key={s.k} className="rounded-lg border border-black/10 bg-white p-3 text-center">
                  <div className="text-lg font-semibold text-black">{s.k}</div>
                  <div className="text-[11px] text-black/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sticky approach card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 rounded-2xl border border-[color:color-mix(in_oklab,var(--brand)_25%,black)] bg-[var(--muted)] p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold">Nossa abordagem</h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-[color:color-mix(in_oklab,var(--accent)_20%,transparent)] px-2.5 py-1 text-[11px] text-black/70">• Transparente</span>
              </div>

              <ul className="mt-4 grid gap-3 text-sm">
                {[
                  "Diagnóstico rápido e plano de ação",
                  "Gestão de prazos e indicadores (SLA)",
                  "Materiais executivos para tomada de decisão",
                  "Trilhas consultivas e contenciosas integradas",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/70" />
                    <span className="text-black/80">{i}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "98%", l: "SLA cumprido" },
                  { k: "14", l: "casos em curso" },
                  { k: "5", l: "bases LGPD" },
                ].map((m) => (
                  <div key={m.k} className="rounded-lg border border-white/20 bg-white/50 p-3 text-center">
                    <div className="text-base font-semibold text-black">{m.k}</div>
                    <div className="text-[11px] text-black/60">{m.l}</div>
                  </div>
                ))}
              </div>

              <a href="#contato" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--brand-600)]">Fale com o time</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
