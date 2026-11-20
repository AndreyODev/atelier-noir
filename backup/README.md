# Backup

Este diretório deve conter documentação e scripts seguros de backup e restauração do PostgreSQL.

Regras:

- Nunca versionar backups reais.
- Nunca incluir credenciais dentro de scripts ou documentação.
- Usar variáveis de ambiente para conexão e destinos.
- Testar restauração em ambiente local não produtivo.
- Manter este diretório limpo de dados sensíveis.
