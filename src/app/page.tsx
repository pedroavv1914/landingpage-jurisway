import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Areas from "../components/Areas";
import Diferenciais from "../components/Diferenciais";
import Depoimentos from "../components/Depoimentos";
import Contato from "../components/Contato";
import Footer from "../components/Footer";
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
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

