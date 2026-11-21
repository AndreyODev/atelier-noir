import Image from "next/image";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 20 20"
      focusable="false"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-portrait">
        <Image
          src="/images/hero-main.jpg"
          alt="Modelo em look preto em um retrato de luz suave"
          fill
          priority
          sizes="(max-width: 600px) 100vw, 75vw"
          className="hero-image"
        />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">ATELIER NOIR</p>
        <h1 className="hero-title" id="hero-title">
          <span>Elegância</span>
          <span>em cada detalhe.</span>
        </h1>
        <p className="hero-description">
          Moda feminina premium para mulheres que inspiram.
        </p>
        <a className="button-light" href="#colecoes">
          EXPLORAR COLEÇÃO
          <ArrowIcon />
        </a>
      </div>
      <div
        className="hero-status"
        role="group"
        aria-label="Campanha atual, única campanha disponível"
      >
        <span className="hero-status-numbers">
          <span>01</span>
          <span aria-hidden="true">/</span>
          <span>01</span>
        </span>
        <span className="hero-status-track" aria-hidden="true">
          <span />
        </span>
      </div>
    </section>
  );
}
