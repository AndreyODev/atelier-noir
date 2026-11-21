import Image from "next/image";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 20 20" focusable="false">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" />
    </svg>
  );
}

const collections = [
  {
    name: "ESSENCE",
    title: "Essence",
    concept: "Minimalismo que permanece.",
    image: "/images/product-midi.jpg",
    alt: "Modelo com look claro em composição minimalista",
  },
  {
    name: "NOIR",
    title: "Noir",
    concept: "Força em cada escolha.",
    image: "/images/brand-story-editorial.jpg",
    alt: "Modelo em look escuro com composição cinematográfica",
  },
  {
    name: "ÉTÉ",
    title: "Été",
    concept: "Leveza para todos os dias.",
    image: "/images/collection-essence.jpg",
    alt: "Modelo com vestido leve em ambiente natural",
  },
] as const;

export default function CollectionsPage() {
  return (
    <>
      <div className="collection-site-chrome" id="top">
        <SiteHeader />
      </div>
      <main id="conteudo">
        <section className="collections-hero" aria-labelledby="collections-hero-title">
          <div className="collections-hero-image">
            <Image
              src="/images/hero-main.jpg"
              alt="Modelo em campanha da coleção Atelier Noir"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 72vw"
              className="collections-hero-photo"
            />
          </div>
          <div className="collections-hero-shade" aria-hidden="true" />
          <div className="collections-hero-copy">
            <p className="collections-kicker">COLEÇÕES</p>
            <h1 id="collections-hero-title">
              Moda que
              <br />
              transcende.
            </h1>
            <p className="collections-intro">
              Três coleções, uma essência:
              <br />
              elegância em cada detalhe.
            </p>
            <a className="collections-button" href="#colecoes">
              CONHEÇA AS COLEÇÕES
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="collection-showcase" id="colecoes" aria-label="Coleções em destaque">
          {collections.map((collection) => (
            <a className="collection-poster" href="#novidades" key={collection.name}>
              <Image
                src={collection.image}
                alt={collection.alt}
                fill
                sizes="(max-width: 820px) 100vw, 33vw"
                className="collection-poster-image"
              />
              <div className="collection-poster-shade" aria-hidden="true" />
              <div className="collection-poster-copy">
                <p>{collection.name}</p>
                <h2>{collection.title}</h2>
                <span className="collection-poster-concept">{collection.concept}</span>
                <span className="collection-poster-link">
                  EXPLORAR COLEÇÃO
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </section>

        <section className="collections-manifesto" id="sobre" aria-labelledby="manifesto-title">
          <div className="collections-manifesto-image">
            <Image
              src="/images/hero-main.jpg"
              alt="Modelo em editorial escuro da Atelier Noir"
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              className="collections-manifesto-photo"
            />
          </div>
          <div className="collections-manifesto-copy">
            <p className="collections-manifesto-kicker">ESSENCIAIS PERMANENTES</p>
            <h2 id="manifesto-title">
              Mais que moda,
              <br />
              uma forma de ser.
            </h2>
            <p>
              No Atelier Noir, acreditamos na moda como expressão,
              liberdade e arte. Cada peça é um convite para revelar o que
              há de mais autêntico em você.
            </p>
            <a className="collections-button collections-button-dark" href="#sobre">
              SOBRE A MARCA
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
