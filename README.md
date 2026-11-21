# ATELIER NOIR

E-commerce fictício de moda feminina premium, com identidade visual sofisticada, elegante, minimalista e editorial.

## Arquitetura

O repositório está organizado em áreas independentes:

- `frontend/`: interface da loja construída com Next.js, React, TypeScript e CSS próprio.
- `backend/`: API REST construída com Node.js, Express, TypeScript e Prisma.
- `database/`: organização do PostgreSQL, migrations, seeds, relacionamentos e modelagem.
- `backup/`: documentação e scripts de backup e restauração.
- `design/`: referências visuais, prompts de página e ativos gráficos.
- `docs/`: documentação técnica do projeto.

O banco será acessado exclusivamente pelo backend.

## Estado do projeto

O frontend Next.js está inicializado com App Router, React, TypeScript e ESLint. A rota inicial é uma página técnica provisória para validar o ambiente; ela não é a Home da loja nem implementa a identidade visual aprovada.

Express e Prisma ainda não foram inicializados. A implementação visual da Home aguarda autorização do proprietário.

## Desenvolvimento

O trabalho avança por unidades independentes: planejar, implementar, testar, revisar, validar, commitar e fazer push. Interfaces são desenvolvidas página por página, somente após referência visual e prompt Markdown aprovados.

Consulte `AGENTS.md` antes de trabalhar no projeto.

## Git

O repositório remoto configurado é `https://github.com/AndreyODev/atelier-noir.git`.

Commits usam Conventional Commits no formato `type(scope): description`, em inglês e no imperativo.

## Próximas etapas

Não iniciar frontend, backend ou banco sem a validação desta configuração inicial pelo proprietário.
