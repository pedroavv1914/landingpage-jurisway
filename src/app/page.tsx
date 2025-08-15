import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Areas from "../components/Areas";
import Separator from "../components/Separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Sobre */}
        <About />
        <Separator />

        {/* Áreas de Atuação */}
        <Areas />
        <Separator />

        {/* Diferenciais */}
        <section id="diferenciais" data-surface="light" className="border-t border-black/5 bg-white">
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
        <Separator />

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
        <Separator />

        {/* Contato */}
        <section id="contato" data-surface="light" className="border-t border-black/5 bg-white">
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
        <Separator />
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

