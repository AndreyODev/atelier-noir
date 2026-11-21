"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/components/home/home-data";

type ActivePanel = "search" | "account" | "bag" | null;

function Icon({
  name,
}: {
  name: "search" | "account" | "bag" | "menu" | "close";
}) {
  if (name === "search") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" />
        <path d="m16 16 4.5 4.5" stroke="currentColor" />
      </svg>
    );
  }

  if (name === "account") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="7.5" r="3.3" stroke="currentColor" />
        <path
          d="M5.2 20c.4-3.4 3.2-5.7 6.8-5.7s6.4 2.3 6.8 5.7"
          stroke="currentColor"
        />
      </svg>
    );
  }

  if (name === "bag") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path
          d="M5.2 8.5h13.6l1 12H4.2l1-12Z"
          stroke="currentColor"
        />
        <path
          d="M9 9V6.2a3 3 0 0 1 6 0V9"
          stroke="currentColor"
        />
      </svg>
    );
  }

  if (name === "close") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" />
    </svg>
  );
}

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("pt-BR");
}

export default function SiteHeader() {
  const [activePanel, setActivePanel] = useState<ActivePanel>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const matchingProducts = useMemo(() => {
    const query = normalizeText(searchQuery.trim());

    if (!query) {
      return [];
    }

    return products.filter((product) =>
      normalizeText(product.name).includes(query),
    );
  }, [searchQuery]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (activePanel && !dialog.open) {
      dialog.showModal();
      if (activePanel === "search") {
        searchInputRef.current?.focus();
      }
    } else if (!activePanel && dialog.open) {
      dialog.close();
    }
  }, [activePanel]);

  function openPanel(panel: Exclude<ActivePanel, null>) {
    setMobileMenuOpen(false);

    if (panel === "search") {
      setSearchQuery("");
    }

    setActivePanel(panel);
  }

  function closePanel() {
    setActivePanel(null);
  }

  function closeMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="site-header">
        <div className="header-inner">
          <nav className="desktop-navigation" aria-label="Navegação principal">
            <a href="/collections">COLEÇÕES</a>
            <a href="#novidades">LOJA</a>
            <a href="#sobre">SOBRE</a>
          </nav>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="menu-toggle"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <Icon name={mobileMenuOpen ? "close" : "menu"} />
          </button>
          <a className="wordmark" href="#top" aria-label="Atelier Noir, início">
            ATELIER NOIR
          </a>
          <div className="header-actions">
            <button
              aria-label="Buscar produtos"
              className="icon-button"
              onClick={() => openPanel("search")}
              type="button"
            >
              <Icon name="search" />
            </button>
            <button
              aria-label="Área da cliente"
              className="icon-button account-button"
              onClick={() => openPanel("account")}
              type="button"
            >
              <Icon name="account" />
            </button>
            <button
              aria-label="Sacola, 0 itens"
              className="icon-button bag-button"
              onClick={() => openPanel("bag")}
              type="button"
            >
              <Icon name="bag" />
              <span className="bag-count" aria-hidden="true">
                0
              </span>
            </button>
          </div>
        </div>
        <nav
          aria-label="Navegação móvel"
          className="mobile-navigation"
          hidden={!mobileMenuOpen}
          id="mobile-navigation"
        >
          <a href="/collections" onClick={closeMenu}>
            Coleções
          </a>
          <a href="#novidades" onClick={closeMenu}>
            Loja
          </a>
          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
        </nav>
      </header>

      <dialog
        aria-labelledby="dialog-title"
        className="site-dialog"
        onCancel={closePanel}
        onClose={closePanel}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closePanel();
          }
        }}
        ref={dialogRef}
      >
        <div className="dialog-content">
          <div className="dialog-heading">
            <h2 id="dialog-title">
              {activePanel === "search"
                ? "Buscar"
                : activePanel === "account"
                  ? "Área da cliente"
                  : "Sua sacola"}
            </h2>
            <button
              aria-label="Fechar janela"
              className="dialog-close"
              onClick={closePanel}
              type="button"
            >
              <Icon name="close" />
            </button>
          </div>
          {activePanel === "search" ? (
            <div className="search-form">
              <label htmlFor="product-search">O que você procura?</label>
              <input
                autoComplete="off"
                className="search-input"
                id="product-search"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Buscar por peça"
                ref={searchInputRef}
                type="search"
                value={searchQuery}
              />
              {searchQuery.trim() ? (
                matchingProducts.length ? (
                  <ul className="search-results">
                    {matchingProducts.map((product) => (
                      <li key={product.id}>
                        <a href={`#produto-${product.id}`} onClick={closePanel}>
                          <span>{product.name}</span>
                          <span>{product.price}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="search-hint" role="status">
                    Nenhuma peça encontrada. Tente outro termo.
                  </p>
                )
              ) : (
                <p className="search-hint">
                  Pesquise entre as novidades da Atelier Noir.
                </p>
              )}
            </div>
          ) : activePanel === "account" ? (
            <p className="dialog-copy">
              A área da cliente estará disponível quando a loja estiver
              conectada.
            </p>
          ) : (
            <>
              <p className="dialog-copy">
                Sua sacola está vazia. As peças desta vitrine são uma
                apresentação e ainda não podem ser compradas.
              </p>
              <a className="text-link" href="#novidades" onClick={closePanel}>
                VER NOVIDADES
              </a>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
