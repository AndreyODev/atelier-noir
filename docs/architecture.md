# Arquitetura inicial

## Visão geral

ATELIER NOIR é dividido em quatro áreas independentes:

```text
frontend  -> API REST -> backend -> PostgreSQL
                          |
                          -> serviços e integrações
```

## Frontend

O frontend será responsável pela experiência visual, estado de interface e consumo da API. Não terá acesso direto ao banco ou credenciais administrativas.

## Backend

O backend centraliza autenticação, autorização, validações, regras de negócio e integração com PostgreSQL via Prisma.

## Banco de dados

O PostgreSQL será executado separadamente. Migrations, seeds e documentação de modelagem serão mantidos no diretório `database/`, mas toda alteração por aplicação passará pelo backend.

## Backup

Procedimentos reais devem ser documentados em `backup/`. Dados sensíveis e arquivos de backup não serão versionados.

## Comunicação

O contrato entre frontend e backend será HTTP/REST e deverá ser documentado em `docs/` conforme os endpoints forem implementados.
