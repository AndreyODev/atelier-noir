"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Demonstração: e-mail validado, mas ainda não enviado à newsletter.",
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email">Seu e-mail</label>
      <div className="newsletter-controls">
        <input
          autoComplete="email"
          className="newsletter-input"
          id="newsletter-email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Seu e-mail"
          required
          type="email"
          value={email}
        />
        <button className="button-light" type="submit">
          INSCREVER-SE
        </button>
      </div>
      <p className="newsletter-status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
