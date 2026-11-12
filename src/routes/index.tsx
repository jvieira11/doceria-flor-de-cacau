import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { linkProduto, linkWhatsApp, site } from "@/data/site";

const titulo = `${site.nome} — Doces artesanais por encomenda`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: site.descricaoSeo },
      { property: "og:title", content: titulo },
      { property: "og:description", content: site.descricaoSeo },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Zap({ href, children, size = "lg", className = "" }: { href: string; children: React.ReactNode; size?: "lg" | "sm" | "default"; className?: string }) {
  return (
    <Button asChild variant="whatsapp" size={size} className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden /> {children}
      </a>
    </Button>
  );
}

function Index() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#inicio" className="font-serif text-xl font-semibold text-primary">{site.nome}</a>
          <Zap href={linkWhatsApp()} size="sm" className="px-4">Encomendar</Zap>
        </div>
      </header>

      <main id="inicio">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Doceria artesanal</p>
            <h1 className="text-4xl leading-tight text-primary md:text-6xl">{site.hero.titulo}</h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">{site.hero.subtitulo}</p>
            <Zap href={linkWhatsApp()} className="mt-8 h-14 px-8 text-base">{site.hero.botao}</Zap>
          </div>
          <img src={site.hero.imagem} alt={site.hero.imagemAlt} width={1200} height={900} fetchPriority="high" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" />
        </section>

        <section id="produtos" className="bg-secondary/50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center text-3xl text-primary md:text-4xl">Nossa vitrine</h2>
            <p className="mt-3 text-center text-muted-foreground">Tudo feito por encomenda, fresquinho.</p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {site.produtos.map((p) => (
                <li key={p.nome} className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft">
                  <img src={p.imagem} alt={p.alt} loading="lazy" decoding="async" width={600} height={600} className="aspect-square w-full object-cover" />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl text-primary">{p.nome}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.descricao}</p>
                    <Zap href={linkProduto(p.nome)} size="default" className="mt-4 w-full">Encomendar</Zap>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="como" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="text-center text-3xl text-primary md:text-4xl">Como encomendar</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.passos.map((s, i) => (
              <li key={s.titulo} className="rounded-3xl border border-border bg-card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-serif text-lg font-semibold text-accent-foreground">{i + 1}</span>
                <h3 className="mt-4 text-lg text-primary">{s.titulo}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="sobre" className="bg-muted/60 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
            <img src={site.sobre.imagem} alt={site.sobre.imagemAlt} loading="lazy" decoding="async" width={900} height={1000} className="aspect-[9/10] w-full rounded-[2rem] object-cover" />
            <div>
              <h2 className="text-3xl text-primary md:text-4xl">{site.sobre.titulo}</h2>
              {site.sobre.paragrafos.map((t) => <p key={t} className="mt-5 text-lg leading-relaxed text-muted-foreground">{t}</p>)}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <h2 className="text-center text-3xl text-primary md:text-4xl">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-8 rounded-3xl bg-card px-6 shadow-soft">
            {site.faq.map((f, i) => (
              <AccordionItem key={f.pergunta} value={`f${i}`} className="last:border-b-0">
                <AccordionTrigger className="text-left text-base font-semibold">{f.pergunta}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.resposta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="contato" className="px-5 pb-16">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl">{site.contato.titulo}</h2>
            <p className="mt-3 opacity-90">{site.contato.texto}</p>
            <Zap href={linkWhatsApp()} className="mt-8 h-14 px-8 text-base">Falar no WhatsApp</Zap>
            <p className="mt-6 text-sm opacity-85">{site.contato.endereco} · {site.contato.horario}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p className="font-serif text-base text-primary">{site.nome}</p>
        <p className="mt-1">© {new Date().getFullYear()} · {site.avisoDemo}</p>
      </footer>

      <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" aria-label="Encomendar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-soft transition-transform hover:scale-105">
        <MessageCircle className="h-7 w-7" aria-hidden />
      </a>
    </>
  );
}
