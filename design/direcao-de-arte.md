# ATELIER NOIR — estudo de direção de arte

**Status:** propostas em avaliação; nenhuma identidade foi aprovada.

**Pesquisa consultada em:** 20 nov. 2026.
**Escopo:** identidade visual e experiência do e-commerce. Não é especificação final da Home e não autoriza implementação.

## Intenção da marca

ATELIER NOIR é uma marca fictícia de moda feminina premium para um projeto de portfólio. A direção precisa sustentar desejo visual sem sacrificar descoberta, leitura de produto ou fluxo de compra. As três propostas abaixo são alternativas completas, não variações de um mesmo template. Paletas e famílias tipográficas são estudos de caráter, não tokens finais nem licenças/fontes selecionadas.

As observações das marcas citadas servem como referência de composição e experiência. Não reproduzir logotipos, textos, fotografias, layouts proprietários ou elementos distintivos de uma marca específica.

## Pesquisa de referências

As páginas foram abertas em navegador e consultadas pelo conteúdo público disponível. As campanhas e coleções são sazonais e podem mudar. O registro abaixo descreve apenas o que foi possível observar nessa consulta.

| Referência oficial | Observações verificáveis | Limites da consulta |
| --- | --- | --- |
| [TOTEME — início](https://toteme.com/en-int) e [Novidades](https://toteme.com/en-int/collections/new-in) | O início apresenta campanha com fotografia em escala dominante e marca/navegação discretas. Na coleção, aparecem controles de visualização e filtro, nomes e preços junto a imagens de produto e variações de cor em alguns itens. | Aviso de cookies ocupou parte da tela; experiência de rolagem e animação não foi avaliada. |
| [The Row — início](https://www.therow.com/) e [Novidades femininas](https://www.therow.com/collections/women-new-arrivals) | Navegação reduzida a menu, busca e sacola; título e filtro da coleção; grade com imagem, nome, preço e, quando aplicável, cores. A página também expõe paginação e informações de serviço no rodapé. | A página exibiu aviso de país e informou que não envia ao Brasil; modal e cookies encobriram parte da coleção. |
| [McQueen — início](https://www.alexandermcqueen.com/en-us) e [Ready-to-wear feminino](https://www.alexandermcqueen.com/en-us/ca/women/ready-to-wear) | A página de categoria articula texto de coleção, link de exploração, categorias, ordenação/filtros e uma grade com nome, preço e cores. Serviços como atendimento e agendamento aparecem como extensão da experiência. | Aviso de cookies/localidade surgiu na captura; não foi possível validar animações nem todos os estados dos filtros. |
| [LOEWE — início](https://www.loewe.com/usa/en/home), [cintos femininos](https://www.loewe.com/usa/en/women/accessories/belts) | O conteúdo observado intercala histórias de coleção, links por categoria e vitrines de produto; há serviços de marca, cuidado e agendamento. A fotografia de campanha usa apresentação cenográfica e atenção à materialidade do objeto. | A extração textual da página inicial funciona melhor que a captura de algumas categorias; movimento não foi medido. |
| [JACQUEMUS — Brasil](https://www.jacquemus.com/pt_br) | A captura disponível mostra identidade tipográfica em destaque, ícones de navegação compactos e uma imagem de campanha de grande formato. | Proteção automatizada impediu a extração confiável de conteúdo e a captura veio muito clara, com consentimento de cookies sobreposto. Não inferir detalhes de coleção ou interação. |

**Leitura transversal:** essas referências demonstram que a navegação de luxo pode ser discreta sem esconder busca, sacola e categorias; vitrines podem manter nome/preço próximos da imagem; e a campanha pode conviver com acesso funcional a produto e serviço. São possibilidades de mercado, não uma prescrição de identidade para ATELIER NOIR.

**Animação:** nenhuma conclusão sobre animação das marcas foi tratada como fato. As páginas foram observadas em snapshots e capturas estáticas, com consentimento/localidade interferindo em algumas. O movimento descrito em cada proposta a seguir é uma sugestão para ATELIER NOIR, não uma atribuição às referências.

## Proposta A — Quiet Luxury: Matéria em repouso

**Ideia:** a roupa, o corte e a textura são a assinatura. A interface recua com precisão; a sofisticação vem de proporção, fotografia e espaço, não de ornamentos de luxo previsíveis. Diferenciar o neutro com verde mineral e cinzas frios, evitando o conjunto automático de bege, serifada e dourado.

**Paleta exploratória**

| Papel | Cor |
| --- | --- |
| Fundo mineral | `#E9E8E2` |
| Branco de estúdio | `#F7F7F3` |
| Cinza pedra | `#B8BAB3` |
| Verde profundo | `#34463E` |
| Carvão | `#202321` |

**Tipografia:** grotesca contemporânea de desenho sóbrio para navegação e comércio, com uma serifada de contraste moderado reservada a títulos de campanha ou pequenos detalhes editoriais. Como referências de caráter para teste: Neue Montreal ou Suisse Intl com Canela; confirmar licença e disponibilidade antes de qualquer uso. A alternativa não depende de uma fonte específica.

**Fotografia:** luz natural difusa, fundos arquitetônicos simples, enquadramentos de corpo inteiro alternados com detalhes de costura, tecido e caimento. Cor fiel à peça; retoque contido; modelos em poses presentes, não excessivamente encenadas.

**Composição e e-commerce:** alinhamentos limpos, margens generosas e ritmo regular interrompido por uma imagem de campanha grande. Vitrine de coleção fácil de comparar, com imagens de proporção consistente; filtro abre em painel lateral ou drawer, sem retirar o contexto da lista. Na página de produto, galeria ampla ao lado de um painel de compra estável com nome, preço, cor, tamanho, disponibilidade e entrega.

```text
HOME — estudo de composição
┌─────────────────────────────────────────────┐
│ menu       ATELIER NOIR       busca  sacola  │
├───────────────────────────┬─────────────────┤
│                           │ coleção atual   │
│ campanha / look           │ título curto    │
│                           │ ver coleção     │
├───────────────────────────┴─────────────────┤
│ novidades — grade regular de produto        │
└─────────────────────────────────────────────┘
```

**Navegação e componentes:** menu textual direto; busca e sacola sempre encontráveis; swatches discretos, tamanhos em controles claros, foco de teclado visível e filtros com estados legíveis. Linhas finas e espaços organizam conteúdo, sem transformar cada módulo em cartão.

**Movimento proposto:** entrada estável, sem esconder conteúdo; crossfade breve ao trocar imagem/cor; drawer e menu com deslocamento curto e previsível; respeitar `prefers-reduced-motion`. Sem autoplay ou parallax obrigatório.

**Funciona melhor quando:** a marca quer comunicar permanência, qualidade de matéria e uso recorrente. **Risco:** cair na estética genérica de “quiet luxury” se a fotografia, os detalhes de produto e a cor não trouxerem uma assinatura própria; pode parecer frio se a escala e o texto não criarem proximidade.

## Proposta B — Dark Luxury: Noite de corte

**Ideia:** a roupa emerge de um ambiente noturno controlado. A marca comunica exclusividade e presença através de contraste, luz recortada e composição precisa, não de dourado, brilho ou efeitos decorativos em excesso.

**Paleta exploratória**

| Papel | Cor |
| --- | --- |
| Tinta noturna | `#17191B` |
| Ameixa mineral | `#433840` |
| Ardósia | `#777A7B` |
| Marfim frio | `#E8E6E0` |
| Vermelho laca | `#9A3733` |

**Tipografia:** sans serif de alta legibilidade para interface, combinada com uma display condensada ou serifada de alto contraste para títulos curtos e campanhas. Referências de caráter para teste: Graphik ou Neue Haas Grotesk com uma display editorial; validar licenças, acentos e renderização antes da seleção. Reservar a face expressiva para poucos pontos de hierarquia.

**Fotografia:** fundos escuros com separação suficiente entre roupa, pele e cenário; luz lateral ou pontual revela textura e forma. Alternar retratos próximos e silhuetas completas. A imagem de produto precisa continuar informativa, com fotos claras de detalhe e cor real, mesmo quando a campanha é dramática.

**Composição e e-commerce:** abertura imersiva com imagem em grande escala e texto curto; blocos posteriores mais funcionais, com vitrines e fundos claros localizados quando a leitura do produto exigir. Coleção com filtros de alto contraste e controles fáceis de reconhecer. PDP pode dividir a experiência: galeria escura para editorial e painel de compra em superfície clara, ou manter o tema escuro com contraste rigorosamente testado.

```text
HOME — estudo de composição
┌─────────────────────────────────────────────┐
│ menu       ATELIER NOIR       busca  sacola  │
│                                             │
│       campanha escura em tela ampla         │
│       título / chamada em bloco lateral     │
├──────────────────────────┬──────────────────┤
│ história da coleção      │ look / detalhe   │
├──────────────────────────┴──────────────────┤
│ seleção de produto em contraste controlado  │
└─────────────────────────────────────────────┘
```

**Navegação e componentes:** cabeçalho de baixa altura, menu em painel integral com grupos bem hierarquizados, foco e estados de seleção explícitos. Botões de compra sólidos; bordas, divisores e swatches com contraste suficiente. Evitar texto cinza pequeno em fundo escuro.

**Movimento proposto:** revelar o primeiro look em uma sequência curta e única; transições de imagem com corte ou dissolução lenta; menus entram como painéis, não como efeitos luminosos. Interações de compra permanecem imediatas; movimento reduzido mantém a mesma informação sem animação.

**Funciona melhor quando:** a marca precisa de presença de campanha e uma assinatura noturna reconhecível. **Risco:** reduzir contraste percebido do tecido, cansar em sessões longas, dificultar legibilidade e parecer excessivamente próximo de códigos de luxo dramático já comuns.

## Proposta C — Editorial Fashion: Caderno de coleção

**Ideia:** o e-commerce se comporta como uma edição visual de moda: a coleção tem ritmo, capítulos e mudanças de escala. A fotografia lidera; a tipografia e a diagramação criam uma narrativa própria, enquanto a navegação comercial permanece previsível.

**Paleta exploratória**

| Papel | Cor |
| --- | --- |
| Papel frio | `#F1F0EA` |
| Preto de impressão | `#17191B` |
| Azul cobalto | `#344E84` |
| Vermelho editorial | `#B84B3C` |
| Cinza de legenda | `#8D918E` |

**Tipografia:** combinação expressiva de grotesca condensada para títulos e legendas editoriais com sans neutra para comércio; uma serifada itálica pode entrar apenas em citações ou notas de coleção. Referências de caráter para teste: Druk Condensed ou Archivo Narrow com uma grotesca de interface; validar licença, legibilidade em português e disponibilidade local antes da escolha.

**Fotografia:** direção de casting, gesto e cenário com variedade real de escala: look completo, detalhe, movimento e still life. Cortes assimétricos e formatos alternados reforçam a sequência de revista, sem comprometer imagem frontal e detalhes necessários à avaliação da peça.

**Composição e e-commerce:** abertura com imagem protagonista e tipografia integrada como elemento de página, seguida por blocos de tamanhos alternados, chamadas de coleção e uma grade mais regular. A coleção pode intercalar uma imagem editorial ampla com grupos de produto; filtros e ordenação continuam em posição familiar. PDP organiza imagens como sequência de leitura, mantendo o painel de compra fixo e os dados essenciais visíveis.

```text
HOME — estudo de composição
┌─────────────────────────────────────────────┐
│ ATELIER NOIR     menu                     bag│
├───────────────────┬─────────────────────────┤
│ título / edição   │                         │
│ pequeno           │ fotografia dominante    │
│                   │                         │
├───────────────┬───┴───────────────┬─────────┤
│ detalhe/look  │ chamada da coleção│ legenda │
├───────────────┴───────────────────┴─────────┤
│ seleção de produto em grade de leitura clara│
└─────────────────────────────────────────────┘
```

**Navegação e componentes:** cabeçalho conciso; índice de coleção ou categorias com termos de compra usuais; paginação/“carregar mais” sem substituir navegação acessível. Legendas e títulos podem variar, mas preço, cor, tamanho e ações usam padrões consistentes.

**Movimento proposto:** transições de capítulo acionadas por navegação ou rolagem, com uma única mudança de ritmo por trecho; troca de imagem ligada a uma ação explícita. Evitar scroll hijacking, texto que se move continuamente e animação que atrase acesso aos produtos.

**Funciona melhor quando:** o diferencial do portfólio é direção criativa, conteúdo de campanha e experiência memorável. **Risco:** a composição competir com escolha, comparação e conversão; exige fotografia própria consistente e cuidado responsivo maior.

## Comparação para decisão

| Critério | A — Quiet Luxury | B — Dark Luxury | C — Editorial Fashion |
| --- | --- | --- | --- |
| Primeira impressão | Calma, precisão, matéria | Presença, contraste, exclusividade | Narrativa, imagem, ritmo |
| Papel da fotografia | Provar corte e textura | Criar atmosfera e revelar forma | Construir capítulos e surpresa |
| Vitrine comercial | Mais regular e comparável | Contraste controlado, fundos escuros/claro local | Grade interrompida por imagens editoriais |
| Tipografia | Sóbria, expressiva em baixa dose | Tensa e dramática, mas legível | Hierarquia de revista e escala variável |
| Principal ganho | Longevidade e clareza | Memória visual e impacto | Distinção de portfólio e storytelling |
| Principal risco | Parecer familiar/genérica | Legibilidade e peso visual | Navegação e compra perderem prioridade |

**Decisão pendente:** nenhuma proposta foi escolhida ou combinada. A aprovação deve indicar A, B ou C, ou especificar quais princípios deseja combinar. Após essa decisão, a direção aprovada poderá orientar a referência da Home; esta etapa não inicia a página.
