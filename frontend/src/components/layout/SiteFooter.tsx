import NewsletterForm from "./NewsletterForm";

function SocialIcon({ name }: { name: "instagram" | "pinterest" | "tiktok" | "youtube" }) {
  if (name === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17.7" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "pinterest") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 3.4c-4.7 0-7.2 3.4-7.2 6.4 0 2.4.9 4.6 2.9 5.4.3.1.6 0 .7-.4l.3-1.2c.1-.4.1-.5-.2-.9-.6-.7-1-1.6-1-2.9 0-3.7 2.8-7 7.3-7 4 0 6.2 2.5 6.2 5.9 0 4.4-2 8.1-5 8.1-1.7 0-2.9-1.4-2.5-3.1.5-2 1.4-4.2 1.4-5.6 0-1.3-.7-2.4-2.1-2.4-1.7 0-3 1.8-3 4.2 0 1.5.5 2.6.5 2.6l-2 8.3c-.6 2.5-.1 5.5 0 5.8.1.2.3.2.5.1.2-.3 2.3-2.8 3-5.3.2-.7 1.2-4.9 1.2-4.9.6 1.2 2.2 2.2 3.9 2.2 5.1 0 8.5-4.7 8.5-11.1C25.4 7.3 20.7 3.4 12 3.4Z" transform="translate(-1.5 -2)" />
      </svg>
    );
  }

  if (name === "tiktok") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M14 3v11.2a4.2 4.2 0 1 1-3.5-4.1v3.2a1.2 1.2 0 1 0 .5 1V3h3c.2 2.5 1.6 4.1 4 4.4v3.1A8.1 8.1 0 0 1 14 8.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BackToTopIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path d="M12 19V5m-6 6 6-6 6 6" stroke="currentColor" />
    </svg>
  );
}

const socialLinks = [
  { name: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
  { name: "pinterest", label: "Pinterest", href: "https://www.pinterest.com/" },
  { name: "tiktok", label: "TikTok", href: "https://www.tiktok.com/" },
  { name: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="rodape">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="footer-brand" href="#top">
            ATELIER NOIR
          </a>
          <p>Moda. Estilo. Você.</p>
        </div>
        <div className="newsletter-block" id="newsletter">
          <h2 className="newsletter-heading">
            Receba novidades em primeira mão
          </h2>
          <p className="newsletter-intro">
            Cadastre-se e fique por dentro das nossas coleções.
          </p>
          <NewsletterForm />
        </div>
        <nav className="social-links" aria-label="Redes sociais">
          {socialLinks.map((social) => (
            <a
              aria-label={social.label}
              href={social.href}
              key={social.name}
              rel="noreferrer"
              target="_blank"
            >
              <SocialIcon name={social.name} />
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <nav className="footer-navigation" aria-label="Links institucionais">
          <a href="#colecoes">Coleções</a>
          <a href="#novidades">Loja</a>
          <a href="#sobre">Sobre</a>
          <a href="mailto:contato@ateliernoir.com.br">Contato</a>
          <a href="mailto:contato@ateliernoir.com.br?subject=Perguntas%20frequentes">
            Perguntas Frequentes
          </a>
          <a href="mailto:contato@ateliernoir.com.br?subject=Trocas%20e%20devolu%C3%A7%C3%B5es">
            Trocas e Devoluções
          </a>
          <a href="mailto:privacidade@ateliernoir.com.br">
            Política de Privacidade
          </a>
        </nav>
        <p className="copyright">
          © 2025 Atelier Noir. Todos os direitos reservados.
        </p>
        <a className="back-to-top" href="#top" aria-label="Voltar ao topo">
          <BackToTopIcon />
        </a>
      </div>
    </footer>
  );
}
