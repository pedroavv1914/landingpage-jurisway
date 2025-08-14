import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[var(--brand)] text-white grid place-items-center font-semibold">JW</div>
            <span className="font-semibold tracking-tight">JurisWay</span>
          </div>
          <nav aria-label="Navegação principal" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li><a className="hover:underline underline-offset-4" href="#sobre">Sobre</a></li>
              <li><a className="hover:underline underline-offset-4" href="#areas">Áreas</a></li>
              <li><a className="hover:underline underline-offset-4" href="#diferenciais">Diferenciais</a></li>
              <li><a className="hover:underline underline-offset-4" href="#depoimentos">Depoimentos</a></li>
              <li><a className="hover:underline underline-offset-4" href="#contato">Contato</a></li>
            </ul>
          </nav>
          <a href="#contato" className="hidden md:inline-flex items-center rounded-full bg-[var(--brand)] text-white px-5 py-2 text-sm font-medium hover:bg-[var(--brand-600)]">Agendar consulta</a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_-40%,rgba(0,0,0,0.06)_0%,transparent_60%),radial-gradient(600px_200px_at_80%_-40%,rgba(0,0,0,0.06)_0%,transparent_60%)]" />
            <div className="absolute -inset-x-20 -top-32 h-64 bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] opacity-20 blur-3xl" />
          </div>
          <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-black/60">Advocacia & Consultoria</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">Soluções jurídicas estratégicas para impulsionar seus resultados</h1>
                <p className="mt-4 text-black/70 leading-relaxed">Na JurisWay, unimos técnica, experiência e atendimento humano para proteger seus interesses e destravar oportunidades. Conte com um time ágil e comprometido.</p>
                <div className="mt-6 flex items-center gap-3">
                  <a href="#contato" className="inline-flex items-center rounded-full bg-[var(--brand)] text-white px-5 py-2.5 text-sm font-medium hover:bg-[var(--brand-600)]">Fale com um especialista</a>
                  <a href="#areas" className="inline-flex items-center rounded-full border border-[color:var(--brand)] text-[color:var(--brand)] px-5 py-2.5 text-sm font-medium hover:bg-[color:color-mix(in_oklab,white_85%,var(--brand))] hover:text-[color:var(--foreground)]">Conheça nossas áreas</a>
                </div>
                <div className="mt-8 flex items-center gap-6 text-xs text-black/60">
                  <div className="flex -space-x-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/10 text-[10px]">A+</span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/10 text-[10px]">OAB</span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/10 text-[10px]">LGPD</span>
                  </div>
                  <span>Atendimento em todo o Brasil</span>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[color:color-mix(in_oklab,var(--brand)_30%,black)] bg-white shadow-sm">
                <Image src="/globe.svg" alt="Ilustração jurídica" fill className="object-contain p-10 opacity-80" />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">Compromisso com excelência e clareza</h2>
              <p className="mt-4 text-black/70 leading-relaxed">Atuamos com foco em resultado, linguagem direta e previsibilidade. Nossas orientações são objetivas, com análise de risco e plano de ação claros em cada etapa.</p>
              <ul className="mt-6 grid gap-3 text-sm text-black/80">
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/80" /> Atendimento consultivo e contencioso</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/80" /> Relatórios executivos e indicadores</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/80" /> Suporte remoto e presencial</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { kpi: "+250", label: "casos conduzidos" },
                { kpi: "98%", label: "SLA de respostas" },
                { kpi: "24h", label: "prioridade crítica" },
              ].map((item) => (
                <div key={item.kpi} className="rounded-xl border border-[color:color-mix(in_oklab,var(--brand)_25%,black)] bg-[var(--muted)] p-6 text-center">
                  <div className="text-2xl font-semibold">{item.kpi}</div>
                  <div className="mt-1 text-xs text-black/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section id="areas" className="border-t border-black/5">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">Áreas de atuação</h2>
            <p className="mt-2 text-black/70">Cobertura completa para as principais demandas empresariais e pessoais.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Direito Empresarial", desc: "Contratos, societário, M&A e governança." },
                { title: "Trabalhista", desc: "Consultivo preventivo e contencioso estratégico." },
                { title: "Cível e Contratos", desc: "Gestão de contratos e litígios complexos." },
                { title: "Consumidor", desc: "Adequação de processos e defesa técnica." },
                { title: "Tributário", desc: "Planejamento e contencioso administrativo/judicial." },
                { title: "LGPD & Compliance", desc: "Privacidade, segurança e programas de integridade." },
              ].map((card) => (
                <div key={card.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md hover:ring-2 hover:ring-[var(--brand)]">
                  <div className="h-10 w-10 rounded-md bg-[var(--brand)] text-white grid place-items-center text-xs font-semibold">JW</div>
                  <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-black/70">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">Por que escolher a JurisWay</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { t: "Comunicação clara", d: "Sem juridiquês: posicionamentos práticos, prazos e próximos passos." },
                { t: "Foco em resultado", d: "Estratégia orientada a metas e indicadores mensuráveis." },
                { t: "Time dedicado", d: "Profissionais experientes com visão de negócio." },
              ].map((f) => (
                <div key={f.t} className="rounded-2xl border border-[color:color-mix(in_oklab,var(--accent)_25%,black)] bg-[var(--muted)] p-6">
                  <h3 className="text-lg font-semibold">{f.t}</h3>
                  <p className="mt-2 text-sm text-black/70">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="border-t border-black/5">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">O que dizem nossos clientes</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  q: "A JurisWay nos apoiou em negociações complexas com agilidade e precisão.",
                  a: "Diretora Financeira",
                },
                {
                  q: "Comunicação impecável e estratégia muito bem definida.",
                  a: "CEO de Startup",
                },
                {
                  q: "Entregaram exatamente o que prometeram, com transparência em todo o processo.",
                  a: "Empresário do setor varejista",
                },
              ].map((t) => (
                <blockquote key={t.q} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <p className="text-sm leading-relaxed">“{t.q}”</p>
                  <footer className="mt-3 text-xs text-[color:var(--brand-600)]">{t.a}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">Entre em contato</h2>
                <p className="mt-2 text-black/70">Conte brevemente seu caso e retornaremos com os próximos passos.</p>
                <div className="mt-6 space-y-3 text-sm text-black/80">
                  <p><strong>E-mail:</strong> contato@jurisway.com</p>
                  <p><strong>Telefone/WhatsApp:</strong> (11) 99999-0000</p>
                  <p><strong>Endereço:</strong> Av. Exemplo, 123 - Centro, São Paulo - SP</p>
                </div>
              </div>
              <form className="rounded-2xl border border-[color:color-mix(in_oklab,var(--brand)_25%,black)] bg-background p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium">Nome</label>
                    <input required type="text" className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">E-mail</label>
                    <input required type="email" className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Telefone</label>
                    <input type="tel" className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium">Mensagem</label>
                    <textarea required rows={4} className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <button type="submit" className="inline-flex items-center rounded-full bg-[var(--brand)] text-white px-5 py-2.5 text-sm font-medium hover:bg-[var(--brand-600)]">Enviar mensagem</button>
                  <a href="mailto:contato@jurisway.com" className="text-sm hover:underline underline-offset-4">Enviar por e-mail</a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[var(--brand)] text-white grid place-items-center text-xs font-semibold">JW</div>
            <span className="text-sm">© {new Date().getFullYear()} JurisWay. Todos os direitos reservados.</span>
          </div>
          <nav className="text-sm">
            <a href="#" className="hover:underline underline-offset-4 mr-4 text-[color:var(--brand-600)]">Política de Privacidade</a>
            <a href="#" className="hover:underline underline-offset-4 text-[color:var(--brand-600)]">Termos de Uso</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

