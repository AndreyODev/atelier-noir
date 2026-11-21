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

export default function BrandStory() {
  return (
    <section
      className="brand-story"
      aria-labelledby="brand-story-title"
      id="sobre"
    >
      <div className="brand-image-wrap">
        <Image
          src="/images/brand-story-editorial.jpg"
          alt="Retrato de moda em preto e branco"
          fill
          sizes="(max-width: 600px) 100vw, 52vw"
          className="brand-image"
        />
      </div>
      <div className="brand-copy">
        <p className="eyebrow">ATELIER NOIR</p>
        <h2 id="brand-story-title">
          Mais que moda,
          <br />
          um estilo de vida.
        </h2>
        <p>
          Somos a expressão da mulher moderna: forte, elegante, autêntica.
          Criamos peças que atravessam o tempo, valorizando sua essência em
          todas as ocasiões.
        </p>
        <a className="button-light" href="#sobre">
          CONHEÇA NOSSA HISTÓRIA
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
