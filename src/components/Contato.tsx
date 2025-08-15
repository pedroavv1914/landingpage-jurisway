"use client";

import { useId, useState } from "react";

export default function Contato() {
  const formId = useId();
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" data-surface="light" className="relative border-t border-black/5 bg-white">
      {/* BG decor */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(700px_240px_at_80%_-10%,#000_10%,transparent_60%)]" />
        <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[color:color-mix(in_oklab,var(--brand)_16%,transparent)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] text-black/60">
              Fale com a gente
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">
              Entre em contato
            </h2>
            <p className="mt-2 max-w-2xl text-black/70">Conte brevemente seu caso. Respondemos em até 24h úteis com os próximos passos.</p>
          </div>
          {/* Canais rápidos */}
          <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
            <a href="mailto:contato@jurisway.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-2 text-[color:var(--brand-600)] hover:underline">
              <MailIcon /> contato@jurisway.com
            </a>
            <a href="https://wa.me/55999990000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-2 text-[color:var(--brand-600)] hover:underline">
              <WhatsIcon /> WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Card informativo */}
          <aside className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black">Como funciona</h3>
            <ul className="mt-4 grid gap-3 text-sm text-black/75">
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />Você envia seu contato e uma descrição breve.</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />Retornamos em até 24h úteis com a melhor forma de avançar.</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />Se necessário, agendamos uma conversa por vídeo.</li>
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-black/10 bg-white px-3 py-3 shadow-sm">
                <div className="text-[10px] uppercase tracking-wide text-black/50">Prazo médio</div>
                <div className="text-lg font-semibold text-black">24h</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-white px-3 py-3 shadow-sm">
                <div className="text-[10px] uppercase tracking-wide text-black/50">Canais</div>
                <div className="text-lg font-semibold text-black">E-mail/WA</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-white px-3 py-3 shadow-sm">
                <div className="text-[10px] uppercase tracking-wide text-black/50">Prioridade</div>
                <div className="text-lg font-semibold text-black">Alta</div>
              </div>
            </div>

            <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[color:color-mix(in_oklab,var(--brand)_28%,transparent)] blur-2xl opacity-40" />
          </aside>

          {/* Formulário */}
          <form
            aria-labelledby={`${formId}-title`}
            className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h3 id={`${formId}-title`} className="sr-only">Formulário de contato</h3>

            {!sent ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nome" required>
                    <input required name="nome" type="text" className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]" />
                  </Field>
                  <Field label="E-mail" required>
                    <input required name="email" type="email" className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]" />
                  </Field>
                  <Field label="Telefone">
                    <input name="telefone" type="tel" className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]" />
                  </Field>
                  <Field label="Assunto" required>
                    <select required name="assunto" className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]">
                      <option value="">Selecione…</option>
                      <option>Consulta</option>
                      <option>Proposta</option>
                      <option>Parceria</option>
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Mensagem" required>
                      <textarea required name="mensagem" rows={4} className="mt-1 w-full rounded-md border border-black/15 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand)]" />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="inline-flex items-start gap-2 text-xs text-black/70">
                      <input required type="checkbox" className="mt-0.5" />
                      <span>
                        Concordo com o tratamento dos meus dados conforme a <a className="text-[color:var(--brand-600)] hover:underline" href="#">Política de Privacidade</a>.
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button type="submit" className="inline-flex items-center rounded-full bg-[var(--brand)] text-white px-5 py-2.5 text-sm font-medium hover:bg-[var(--brand-600)]">
                    Enviar mensagem
                  </button>
                  <a href="mailto:contato@jurisway.com" className="text-sm hover:underline underline-offset-4 text-[color:var(--brand-600)]">Enviar por e-mail</a>
                </div>
              </>
            ) : (
              <div className="grid place-items-center gap-3 py-8 text-center">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--brand)]/15 text-[var(--brand)]">
                  ✓
                </div>
                <p className="text-sm text-black/80">Recebemos sua mensagem. Retornaremos em breve!</p>
                <button type="button" className="text-xs text-[color:var(--brand-600)] hover:underline" onClick={() => setSent(false)}>
                  Enviar outra mensagem
                </button>
              </div>
            )}

            <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[color:color-mix(in_oklab,var(--brand)_28%,transparent)] blur-2xl opacity-40" />
          </form>
        </div>

        {/* CTA final */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:flex-row">
          <p className="text-sm text-black/80">Preferiu falar agora? Estamos online no horário comercial.</p>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/55999990000" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-[var(--brand)] text-white px-4 py-2 text-xs font-medium hover:bg-[var(--brand-600)]">
              Falar no WhatsApp
            </a>
            <a href="mailto:contato@jurisway.com" className="text-xs font-medium text-[color:var(--brand-600)] hover:underline underline-offset-4">Enviar um e-mail</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium text-black/80">
      {label} {required && <span className="text-[var(--brand)]">*</span>}
      {children}
    </label>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}
function WhatsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 12a8 8 0 1 1-3.5-6.5L21 4l-1.5 4.5A7.9 7.9 0 0 1 20 12z" />
      <path d="M8 9c1 2 3 4 5 5l2-2" />
    </svg>
  );
}
