import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Areas from "../components/Areas";
import Diferenciais from "../components/Diferenciais";
import Depoimentos from "../components/Depoimentos";
import Contato from "../components/Contato";
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
        <Diferenciais />
        <Separator />

        {/* Depoimentos */}
        <Depoimentos />
        <Separator />

        {/* Contato */}
        <Contato />
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

