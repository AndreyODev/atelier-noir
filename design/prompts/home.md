# Home — briefing técnico de reprodução

**Status:** direção aprovada pelo proprietário a partir da imagem anexada na conversa. Briefing documental; não autoriza iniciar implementação sem nova autorização.

**Referência oficial esperada:** `design/references/home/home-approved.png`. A imagem foi exibida na conversa, mas não chegou como arquivo exportável no ambiente de trabalho. Não reconstruir, redesenhar, recortar, recomprimir nem substituir a imagem. Antes da implementação, o proprietário ou o agente deve disponibilizar o arquivo original nesse caminho e confirmar que ele pode ser aberto.

**Linguagem da interface:** português do Brasil em todo texto visível, inclusive navegação, mensagens, preços, acessibilidade, newsletter e rodapé.

## Direção visual aprovada

Reproduzir a composição da referência: e-commerce editorial escuro, fotografia de moda em tons quentes, serifada de alto contraste para títulos e sans-serif pequena para navegação e informação funcional. O impacto está na fotografia, na alternância entre preto e pele/tecido em tons quentes, na escala tipográfica e na sequência compacta de seções. Não converter isso em um tema genérico de luxo com dourado, molduras ornamentais, cards arredondados, gradientes ou efeitos de brilho.

A imagem anexada é a autoridade de composição, imagem, cor e hierarquia. As descrições abaixo complementam o que pode ser lido na prévia, não substituem a referência em arquivo. Quando uma medida exata ou um detalhe fino não puder ser aferido, comparar visualmente com o PNG original, sem inventar ornamentação.

## Estrutura da página

Ordem vertical observada:

1. Faixa estreita de anúncio com controles laterais e as mensagens “FRETE GRÁTIS EM COMPRAS ACIMA DE R$ 299” e “TROCA FACILITADA”.
2. Cabeçalho transparente/sobreposto ao início do banner: navegação principal à esquerda, marca centralizada e busca, conta e sacola à direita.
3. Banner principal horizontal, com texto editorial à esquerda sobre campo escuro e fotografia de modelo ocupando o centro/direita. Abaixo do texto aparecem chamada, botão e controle de slides “01 / 06”, progresso e setas.
4. Seção “DESCUBRA O UNIVERSO / Atelier Noir”, centralizada entre filetes horizontais. Em seguida, três imagens lado a lado: “Nova Coleção / Essence”, “Coleções / Noir” e “Inspiração / Feminina”.
5. Seção “NOVIDADES / Peças selecionadas”, também centralizada entre filetes. Grade de quatro produtos por linha, com imagem, botão de favorito no canto superior, nome e preço. CTA contornado centralizado após a grade.
6. Faixa institucional em duas colunas: fotografia monocromática de modelo à esquerda; rótulo, título, texto curto e CTA à direita. Há folhagem escura decorativa no canto inferior direito, integrada ao fundo.
7. Rodapé: marca e assinatura à esquerda; newsletter e redes sociais à direita; links de navegação/serviço em uma faixa inferior, copyright e controle “voltar ao topo”.

## Cabeçalho e navegação

- Manter a barra de anúncio muito baixa, escura, com texto pequeno centralizado e setas discretas nos extremos. O conteúdo é promocional; setas só são exibidas quando houver mais de uma mensagem funcional.
- Sobrepor o cabeçalho ao hero sem faixa opaca que esconda a fotografia. Na referência, “COLEÇÕES”, “LOJA” e “SOBRE” ficam à esquerda; “ATELIER NOIR” centralizado; busca, conta e sacola à direita.
- Preservar alinhamento central real da marca, independente da largura ocupada pelas áreas de ícones.
- Ícones de busca, conta e sacola devem ser consistentes, reconhecíveis, acessíveis e acompanhados de nome acessível em português. O indicador de quantidade na sacola permanece pequeno e não pode competir com o logotipo.
- Em scroll, qualquer comportamento de fixação precisa conservar contraste e posição sem introduzir uma nova faixa visual que não esteja na referência. Confirmar o comportamento quando a referência final/orientação do proprietário esclarecer.
- Links navegam para coleções, loja e sobre; marca retorna à Home. Busca, conta e sacola são destinos/ações, não elementos meramente decorativos.

## Banner principal

- Usar imagem de campanha em formato panorâmico, ocupando a largura útil da página. A modelo fica no lado direito, em close de moda, com blazer preto e luz quente lateral; o texto permanece à esquerda em área suficientemente escura para leitura.
- Conteúdo observado: pequeno identificador “ATELIER NOIR”; título em duas linhas “Elegância / em cada detalhe.”; apoio “Moda feminina premium para mulheres / que inspiram.”; botão claro “EXPLORAR COLEÇÃO”. Preservar a quebra e hierarquia visual aproximadas, ajustando apenas quando o viewport exigir.
- Botão é retangular, claro, compacto, com texto escuro e seta fina; não aplicar pílula, sombra difusa ou gradiente.
- Na base à esquerda: posição “01 / 06”, linha de progresso e setas anterior/próximo. O “06” sugere seis slides na referência. Só implementar a quantidade e navegação se as seis imagens/cópias aprovadas existirem; não duplicar o primeiro slide nem inventar campanhas para completar a contagem.
- O banner deve manter a pessoa inteira dentro do enquadramento aprovado e texto longe do rosto e do ponto focal. Em viewport menor, ajustar `object-position` ou composição responsiva sem cortar rosto, título ou controle.

## Coleções

- Fundo preto quase absoluto, com respiro vertical enxuto em relação ao hero e à vitrine.
- Título central com rótulo pequeno em caixa alta e espaçamento amplo (“DESCUBRA O UNIVERSO”), seguido de “Atelier Noir” em serifada editorial. Filetes horizontais finos equilibram o título.
- Três tiles retangulares, sem cantos arredondados, com imagens em proporções próximas e intervalos estreitos. Sobrepor rótulo, título e link na região inferior esquerda de cada imagem.
- A primeira imagem apresenta look claro em ambiente de pedra; a central é detalhe de tecido preto; a terceira apresenta modelo de costas/vestido preto em cenário quente. Estas imagens distinguem as funções de coleção, seleção Noir e inspiração; não substituir por ícones ou cores chapadas.
- Cada tile é um link inteiro ou contém uma ação com área clicável adequada. Contraste dos textos deve funcionar sobre as imagens com tratamento discreto, sem painel genérico opaco.
- Em tablet, adaptar a largura dos tiles preservando os três assuntos. Em celular, usar composição aprovada em coluna ou trilho horizontal utilizável; não reduzir três cards a miniaturas ilegíveis.

## Vitrine de novidades

- Rótulo “NOVIDADES” pequeno e espaçado; título “Peças selecionadas” centralizado com filetes finos nos lados.
- Desktop mostra quatro produtos em uma linha, com imagens de moda de recorte uniforme, quase quadradas no screenshot. As quatro fotos usam fundo/set de tons quentes semelhante e modelos em looks preto e marfim.
- Coração de favorito em contorno aparece no canto superior direito de cada imagem. Implementar como botão acessível, com estado pressionado e nome em português; não inventar estado visual cheio de cor sem validação do sistema final.
- Nome e preço ficam imediatamente abaixo, alinhados à esquerda, em texto pequeno de alto contraste. Conteúdo visto: “Vestido Assimétrico Noir — R$ 1.299,00”, “Blazer Alfaiataria Premium — R$ 1.899,00”, “Blusa Gola Alta Elegance — R$ 799,00” e “Vestido Midi Essencial — R$ 1.499,00”. Tratar como texto literal da imagem aprovada para fins de referência visual; confirmar catálogo e valores reais antes de conectá-los a dados do produto.
- CTA central “VER TODAS AS NOVIDADES” em botão retangular de contorno fino e dimensão pequena. Deve levar à coleção de novidades.
- Em tablet reduzir a quantidade de colunas conforme o espaço; em celular usar duas colunas para manter produto legível. Preservar relação de aspecto, alinhamento de títulos/preços e espaçamento constante entre itens.

## Apresentação institucional

- Faixa de largura total em duas colunas de dimensões próximas: fotografia preto e branco da modelo à esquerda, texto em fundo preto à direita. Na imagem, enquadramento de rosto/perfil e ombro com brinco dourado; não substituir o tratamento monocromático.
- Texto observado: identificador “ATELIER NOIR”; título “Mais que moda, / um estilo de vida.”; parágrafo “Somos a expressão da mulher moderna: forte, elegante, autêntica. Criamos peças que atravessam o tempo, valorizando sua essência em todas as ocasiões.”; botão “CONHEÇA NOSSA HISTÓRIA”.
- O título usa a mesma voz serifada da Home, em escala inferior ao headline do hero. Texto e botão ficam alinhados à esquerda e com largura controlada.
- Folhagem decorativa escura ocupa parte do canto inferior direito e continua visualmente no rodapé. Manter como detalhe secundário e sem cobrir texto, links ou controles.
- No celular, empilhar fotografia e texto com leitura clara, mantendo a fotografia como primeiro sinal visual dessa seção; não sobrepor parágrafo à imagem.

## Rodapé e newsletter

- Fundo preto contínuo com o restante da página; divisor superior fino.
- Primeira faixa: marca e assinatura “Moda. Estilo. Você.” à esquerda; bloco de newsletter ao centro/direita com título “Receba novidades em primeira mão”, apoio para cadastro, campo de e-mail e botão “INSCREVER-SE”; redes sociais no extremo direito.
- Campo de e-mail e botão ficam em linha no desktop, com contorno simples e superfície escura. Em celular, empilhar os controles e manter botão totalmente visível. Incluir rótulo, validação, foco e confirmação acessíveis, sempre em português.
- Segunda faixa: links compactos “Coleções”, “Loja”, “Sobre”, “Contato”, “Perguntas Frequentes”, “Trocas e Devoluções” e “Política de Privacidade”, seguidos de copyright. Preservar separação por espaço/filetes, sem chips ou caixas.
- Controle de voltar ao topo discreto, no canto inferior direito, com nome acessível e alvo de toque adequado.
- Validar que as folhas decorativas não diminuam contraste nem tapem conteúdo do rodapé.

## Tipografia, cor e hierarquia

- Títulos: serifada editorial de contraste visível, elegante e legível em português; headline do hero é grande e leve, títulos de seção menores e centralizados. Não definir um nome de fonte antes de conferir arquivos/licenças e proximidade visual ao original.
- Interface: sans-serif limpa para navegação, preços, botões e corpo pequeno. Rótulos editoriais usam caixa alta e tracking aberto apenas nos casos que aparecem na referência, não em todo texto.
- Paleta visual observada: preto/café muito escuro nos fundos; marfim quente nos títulos e botões; texto secundário branco suave; imagens em tons de bronze, pele, pedra e marrom; preto nos looks; um toque dourado fica nas joias/fotografia, não como cor de interface dominante.
- Contraste e escala seguem a hierarquia: headline > títulos de seção > título de tile/produto > corpo > micro-rótulo. Micro-rótulos nunca podem ficar tão pequenos que percam leitura em dispositivos móveis.
- Espaçamento é generoso nos títulos e mais compacto na grade de produto. Alinhamento do hero e textos de tile é à esquerda; cabeçalhos de seção são centralizados; conteúdo de produto e links do rodapé ficam alinhados à esquerda/centro como mostrado.

## Imagem e composição

- A fotografia é o principal ativo visual. Usar arquivos aprovados com alta resolução, cor e proporção adequadas; não aplicar filtros globais que alterem a pele, o tecido ou o tratamento preto e branco da seção institucional.
- Hero: panorâmico e assimétrico, texto à esquerda e modelo ocupando centro/direita.
- Tiles de coleção: três recortes lado a lado com conteúdo sobreposto em baixo.
- Produtos: quatro imagens com recorte consistente e dimensão visual equivalente.
- Marca: díptico horizontal de retrato monocromático e bloco de texto.
- Não usar placeholders, bancos de imagem ou imagem gerada como substituição silenciosa da referência. Se um arquivo não existir, sinalizar dependência e aguardar o ativo aprovado.

## Responsividade a planejar

A referência recebida é uma composição vertical do desktop; não há captura mobile/tablet aprovada. Os itens abaixo são regras de adaptação a validar com o proprietário antes de fechar esses layouts, não detalhes mobile já presentes na referência.

- **Desktop:** manter as proporções e a composição completas da referência: hero panorâmico, três tiles, quatro produtos, díptico institucional e rodapé em faixas.
- **Tablet:** preservar a hierarquia e dimensões de leitura; reduzir colunas de produtos quando necessário; os três tiles continuam distinguíveis; manter cabeçalho com links enquanto houver espaço real.
- **Celular:** trocar links principais por menu acessível, mantendo marca e ações de busca/sacola; manter anúncio legível; reposicionar hero para preservar modelo e texto, sem sobreposição ilegível; tiles podem virar coluna ou carrossel manual com indicador; produtos em duas colunas; seção institucional empilhada; newsletter e rodapé em coluna.
- Breakpoints devem decorrer do conteúdo, não de dispositivos específicos. Garantir ausência de rolagem horizontal, conteúdo essencial visível, alvos de toque adequados e textos sem corte.
- Não usar tamanho de fonte baseado apenas em `vw`; definir limites responsivos e verificar palavras longas e acentos em português.
- Testar pelo menos 1440 px, 1024 px, 768 px e 390 px de largura, incluindo navegação por teclado e zoom.

## Movimento e interação

- Interações obedecem à referência sem transformar a página em demonstração de animações. Banner pode ter transição suave entre slides apenas quando existirem os seis ativos e conteúdo correspondentes; controles anterior/próximo funcionam por clique, teclado e toque, com anúncio de slide atual.
- Mudança de slide não pode causar layout shift, esconder o texto de forma intermitente ou iniciar som. Autoplay não é presumido; confirmar com o proprietário antes de adotá-lo.
- Menus, busca, conta e sacola precisam de estados acessíveis e navegação real. Favorito comunica seleção; newsletter informa sucesso/erro.
- Hover, quando aplicável, é sutil e não é o único meio de descoberta. Respeitar `prefers-reduced-motion`; conteúdo continua disponível sem animação.
- Evitar parallax, scroll hijacking, entradas em cascata genéricas, zoom de imagem exagerado e elementos que flutuem sem base na referência.

## Componentização prevista (sem implementar nesta etapa)

Implementar depois em Next.js, React e TypeScript, com CSS próprio e componentes tipados. Separar responsabilidades sem fragmentar cada texto em componente:

- `HomePage`: composição e ordem das seções.
- `AnnouncementBar`: anúncio e controles de mensagem, se houver mensagens reais.
- `SiteHeader`: navegação, marca e ações de busca/conta/sacola; elemento compartilhado com outras páginas.
- `HeroCarousel` e `HeroSlide`: imagem, conteúdo e controles do banner, apenas com conteúdo aprovado.
- `SectionHeading`: padrão de rótulo, título e filetes, reutilizável onde a referência mostrar o mesmo tratamento.
- `CollectionHighlights` e `CollectionTile`: três entradas visuais da seção de coleções.
- `FeaturedProducts` e `ProductCard`: vitrine, imagem, favorito, nome e preço; card reutilizável em coleções, sem fixar dados da Home no componente.
- `BrandStory`: fotografia e apresentação institucional.
- `NewsletterForm`: campo, validação e estados de resposta.
- `SiteFooter`: assinatura, redes, navegação secundária, copyright e voltar ao topo; compartilhado com demais rotas.

Manter dados de apresentação separados do markup quando apropriado; manter regras comerciais e estado persistente fora dos componentes visuais. Usar HTML semântico, nomes e atributos acessíveis em português e CSS organizado por componente/seção. Não instalar bibliotecas de UI ou animação nesta etapa; só avaliar GSAP se a implementação aprovada realmente exigir uma sequência mais elaborada.

## Critérios de fidelidade e aceite visual

- Conferir a implementação lado a lado com o arquivo original `design/references/home/home-approved.png`, em dimensões equivalentes e também nos viewports responsivos.
- Preservar ordem, quantidade, proporções, alinhamento e hierarquia das sete áreas descritas. Não eliminar a barra de anúncio, controles do banner, seção de coleções, coração nos produtos, newsletter ou links do rodapé.
- Reproduzir o contraste escuro com fotografia quente, tipografia serifada + sans e os filetes finos sem acrescentar ornamentos não mostrados.
- Usar os textos e preços da imagem como referência visual; validar fatos, URLs, catálogo e valores antes de tornar a página transacional.
- Confirmar que imagem, texto, ícones e controles não se sobrepõem, que a modelo mantém o enquadramento correto, e que cards de produto apresentam alturas e imagens consistentes.
- Inspecionar desktop, tablet e celular; testar navegação, controle de slides, favoritos, newsletter, links e foco por teclado; conferir console e carregamento das fontes/imagens.
- Verificar contraste, nomes acessíveis e `prefers-reduced-motion`. Se houver divergência entre este briefing e o PNG original, o PNG aprovado prevalece; esclarecer ambiguidade com o proprietário antes de alterar a direção.

## Dependências antes da implementação

1. Colocar o arquivo original anexado em `design/references/home/home-approved.png`, sem alteração ou recompressão, e confirmar que é o mesmo aprovado.
2. Disponibilizar os demais slides e imagens individuais citados na referência, se a Home for usar carrossel de seis posições e todas as fotografias finais. Não completar lacunas inventando mídia.
3. Confirmar catálogo, preços, destinos dos links, comportamento de autoplay e composição mobile/tablet.
4. Obter autorização explícita para iniciar a implementação da Home.
