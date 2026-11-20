# AGENTS.md — ATELIER NOIR

## 1. Objetivo

Este documento define regras permanentes para o desenvolvimento do ATELIER NOIR, um e-commerce de moda feminina premium. Todas as mudanças devem seguir estas regras.

## 2. Arquitetura

O projeto usa quatro aplicações ou áreas independentes:

- `frontend/`: Next.js, React, TypeScript e CSS próprio. Responsável pela interface, navegação e experiência visual.
- `backend/`: Node.js, Express, TypeScript e Prisma. Responsável pela API REST, autenticação, regras de negócio, produtos, estoque, pedidos e integrações.
- `database/`: PostgreSQL, migrations, seeds, relacionamentos e documentação da modelagem.
- `backup/`: procedimentos, configurações e scripts de backup e restauração.

A camada de dados só pode ser acessada pelo backend. Frontend e backend são independentes e se comunicam por contratos HTTP documentados.

## 3. Estrutura

- `design/references/<página>/`: referências aprovadas da página.
- `design/prompts/<página>.md`: especificação visual detalhada da página.
- `design/assets/`: ativos compartilhados do projeto visual.
- `docs/`: documentação técnica e operacional.
- `AGENTS.md`: padrões permanentes.
- `README.md`: apresentação e visão geral.

## 4. Convenções de código

- TypeScript com tipagem explícita em APIs públicas e dados compartilhados.
- Componentes React pequenos, reutilizáveis e organizados por responsabilidade.
- Nomes de arquivos e componentes em inglês, salvo conteúdo destinado diretamente à interface.
- Preferir nomes claros a abreviações.
- Evitar dependências desnecessárias, especialmente em memória limitada.
- Não duplicar regras de negócio no frontend; validações locais não substituem validações do backend.
- Variáveis de ambiente nunca devem ser armazenadas no repositório.

## 5. Banco de dados

- PostgreSQL como banco oficial.
- Prisma deve ser configurado e executado no backend.
- Migrations versionadas representam mudanças estruturais; não modificar migrations já aplicadas.
- Seed não deve conter credenciais ou dados sensíveis reais.
- Dados sensíveis não podem aparecer em logs, fixtures ou documentação.

## 6. Segurança

- Nunca versionar `.env`, chaves privadas, tokens, senhas, cookies ou backups reais.
- Validar entradas no backend e aplicar autorização em toda operação protegida.
- Não registrar dados sensíveis em logs.
- Usar variáveis de ambiente para configuração local e de implantação.
- Não adicionar segredo a exemplos ou mensagens de commit.

## 7. Metodologia por unidade

Cada unidade lógica deve seguir:

1. Planejar.
2. Implementar apenas a unidade definida.
3. Testar a unidade.
4. Revisar o diff.
5. Validar o comportamento.
6. Fazer um commit Conventional Commit.
7. Fazer push quando validado e possível.
8. Aguardar orientação antes de iniciar outra unidade, exceto tarefas posteriores explicitamente aprovadas.

Não antecipar funcionalidades de etapas futuras.

## 8. Metodologia de design

Antes de implementar qualquer página:

1. Existir uma referência em `design/references/<página>/`.
2. Existir e ser consultado integralmente o Markdown correspondente em `design/prompts/`.
3. Preservar composição, tipografia, paleta, espaçamentos e interações documentados.
4. Não substituir referências por layouts genéricos.
5. Não avançar para outra página sem aprovação do proprietário.

## 9. Git e GitHub

- Nunca usar `git add .` indiscriminadamente.
- Adicionar somente os arquivos da unidade concluída.
- Verificar `git status --short --branch` antes de cada commit.
- Não incluir alterações preexistentes sem autorização.
- Commits seguem `type(scope): description`, em inglês e imperativo.
- Manter commits pequenos e independentes.
- Não alterar identidade global; configurar identidade local apenas com autorização quando necessário.
- Não fazer force push, reescrever histórico ou sobrescrever alterações remotas.
- Fazer push para `origin` após validação, interrompendo em caso de conflito ou erro de autenticação.
- Informar após cada commit: hash, mensagem e arquivos incluídos.

## 10. Testes e validação

- Frontend: executar lint, typecheck e build quando disponíveis.
- Backend: executar lint, typecheck e testes automatizados quando disponíveis.
- Banco: validar migrations e seeds em banco local não sensível.
- Interface: verificar servidor local em desktop e celular, além do console do navegador.
- Registrar no relatório final o que foi executado e o que ficou pendente.

## 11. Dependências

- Usar versões estáveis e compatíveis.
- Preferir soluções já disponíveis no projeto.
- No ambiente atual, considerar o limite de 8 GB de RAM e não manter serviços desnecessários simultaneamente.
