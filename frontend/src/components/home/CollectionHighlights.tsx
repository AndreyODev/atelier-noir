import Image from "next/image";
import { collections } from "./home-data";
import SectionHeading from "./SectionHeading";

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

export default function CollectionHighlights() {
  return (
    <section
      className="content-section collections-section"
      aria-labelledby="collections-title"
      id="colecoes"
    >
      <SectionHeading
        eyebrow="DESCUBRA O UNIVERSO"
        title="Atelier Noir"
        id="collections-title"
      />
      <div className="collection-grid">
        {collections.map((collection) => (
          <a
            className="collection-tile"
            href="#novidades"
            key={collection.title}
          >
            <Image
              src={collection.image}
              alt={collection.imageAlt}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 820px) 33vw, 31vw"
              className="collection-image"
            />
            <div className="collection-copy">
              <p>{collection.eyebrow}</p>
              <h3>{collection.title}</h3>
              <span className="collection-link">
                VER COLEÇÃO
                <ArrowIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
