# Direção visual do ATELIER NOIR

Esta pasta reúne referências, especificações e ativos usados para implementar o site página por página.

## Estrutura

- `references/home/`: referência visual da página inicial.
- `references/collections/`: referência das coleções e listagem de produtos.
- `references/products/`: referência da página de produto.
- `references/cart/`: referência do carrinho.
- `references/checkout/`: referência do checkout.
- `references/account/`: referência da área da conta.
- `references/about/`: referência da página institucional.
- `prompts/`: documentos Markdown com instruções detalhadas de reprodução.
- `assets/`: imagens, fontes e ativos aprovados.

## Fluxo obrigatório

1. O proprietário fornece ou aprova referências visuais para uma página.
2. A especificação da página é criada integralmente em `prompts/<página>.md`.
3. O agente consulta referências e documento antes da implementação.
4. A página é implementada no frontend sem elementos visuais genéricos ou não aprovados.
5. O proprietário aprova a página antes do avanço para a próxima.

Até existir uma referência aprovada, esta pasta não autoriza implementação visual.
