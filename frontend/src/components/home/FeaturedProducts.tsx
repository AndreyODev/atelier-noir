"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "./home-data";
import SectionHeading from "./SectionHeading";

function HeartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M20.2 8.7c0 4.3-8.2 10.1-8.2 10.1S3.8 13 3.8 8.7a4.2 4.2 0 0 1 8.2-1.3 4.2 4.2 0 0 1 8.2 1.3Z" />
    </svg>
  );
}

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

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<string[]>([]);

  function toggleFavorite(productId: string) {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(productId)
        ? currentFavorites.filter((favorite) => favorite !== productId)
        : [...currentFavorites, productId],
    );
  }

  return (
    <section
      className="content-section products-section"
      aria-labelledby="products-title"
      id="novidades"
    >
      <SectionHeading
        eyebrow="NOVIDADES"
        title="Peças selecionadas"
        id="products-title"
      />
      <div className="product-grid">
        {products.map((product) => {
          const isFavorite = favorites.includes(product.id);

          return (
            <article
              className="product-card"
              id={`produto-${product.id}`}
              key={product.id}
            >
              <div className="product-media">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 600px) 44vw, (max-width: 820px) 46vw, 23vw"
                  className="product-image"
                />
                <button
                  aria-label={
                    isFavorite
                      ? `Remover ${product.name} dos favoritos`
                      : `Adicionar ${product.name} aos favoritos`
                  }
                  aria-pressed={isFavorite}
                  className="favorite-button"
                  onClick={() => toggleFavorite(product.id)}
                  type="button"
                >
                  <HeartIcon />
                </button>
              </div>
              <div className="product-copy">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="products-action">
        <a className="button-outline" href="#novidades">
          VER TODAS AS NOVIDADES
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
