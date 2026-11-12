/**
 * ============================================================
 *  CONTEÚDO DO SITE — edite APENAS este arquivo.
 * ============================================================
 * - Textos: troque o conteúdo entre aspas.
 * - WhatsApp: use só números, com DDI 55 + DDD + número (ex.: 5582999999999).
 * - Imagens: substitua os arquivos em /public/images mantendo o MESMO nome
 *   (ex.: produto-1.jpg). Prefira JPG quadrado ~600x600 e < 150 KB.
 *   Se mudar o nome do arquivo, atualize o campo "imagem" aqui.
 * - Produtos/passos/FAQ: para adicionar, copie um bloco { ... }, cole e edite.
 *   Para remover, apague o bloco inteiro (incluindo a vírgula).
 */

export const site = {
  /** Nome exibido no topo, rodapé e título da página */
  nome: "Doceria Flor de Cacau",
  /** Frase curta usada no SEO (Google) */
  descricaoSeo:
    "Doces artesanais feitos com carinho: brigadeiros gourmet, brownies, bolos de pote, trufas e caixas para festas. Encomende pelo WhatsApp.",
  /** Número do WhatsApp (somente dígitos, com 55 + DDD) */
  whatsapp: "5582900000000",
  /** Mensagem usada nos botões gerais de WhatsApp */
  mensagemPadrao: "Olá! Vim pelo site e gostaria de fazer uma encomenda.",
  /** Mensagem dos botões de produto. {produto} é trocado pelo nome do produto */
  mensagemProduto: "Olá! Quero encomendar: {produto}",

  hero: {
    titulo: "Doces artesanais que abraçam",
    subtitulo:
      "Receitas feitas à mão, com chocolate de verdade e muito afeto — para adoçar o seu dia ou a sua festa.",
    botao: "Encomendar pelo WhatsApp",
    imagem: "/images/hero.jpg",
    imagemAlt: "Mesa com doces artesanais de chocolate sobre toalha rosa-clara",
  },

  /** Vitrine de produtos */
  produtos: [
    { nome: "Brigadeiro gourmet", descricao: "Chocolate belga, cremoso e finalizado com granulado nobre.", imagem: "/images/produto-1.jpg", alt: "Brigadeiros gourmet em forminhas de papel" },
    { nome: "Brownie", descricao: "Casquinha crocante por fora, úmido e intenso por dentro.", imagem: "/images/produto-2.jpg", alt: "Pedaços de brownie de chocolate empilhados" },
    { nome: "Bolo de pote", descricao: "Camadas de massa fofinha e recheio generoso, no potinho.", imagem: "/images/produto-3.jpg", alt: "Bolo de pote com camadas de chocolate e creme" },
    { nome: "Cone recheado", descricao: "Casquinha de chocolate cheia de brigadeiro cremoso.", imagem: "/images/produto-4.jpg", alt: "Cone de chocolate recheado com brigadeiro" },
    { nome: "Caixa de docinhos para festa", descricao: "Seleção sortida para aniversários e celebrações.", imagem: "/images/produto-5.jpg", alt: "Caixa com docinhos sortidos para festa" },
    { nome: "Trufas", descricao: "Recheios variados envoltos em chocolate ao leite ou meio amargo.", imagem: "/images/produto-6.jpg", alt: "Trufas de chocolate embrulhadas" },
    { nome: "Bem-casado", descricao: "Pão de ló delicado com doce de leite, embalado à mão.", imagem: "/images/produto-7.jpg", alt: "Bem-casados embalados em papel crepom" },
    { nome: "Pudim", descricao: "Lisinho, sem furinhos, com calda de caramelo dourada.", imagem: "/images/produto-8.jpg", alt: "Pudim de leite com calda de caramelo" },
  ],

  /** Passos da seção "Como encomendar" */
  passos: [
    { titulo: "Escolha", texto: "Navegue pela vitrine e escolha seus doces favoritos." },
    { titulo: "Chame no WhatsApp", texto: "Toque em “Encomendar” e envie sua mensagem." },
    { titulo: "Confirme data e pagamento", texto: "Combinamos a data, quantidades e a forma de pagamento." },
    { titulo: "Retire ou receba", texto: "Busque na doceria ou receba no conforto da sua casa." },
  ],

  sobre: {
    titulo: "Feito com carinho, desde a primeira colherada",
    paragrafos: [
      "A Flor de Cacau nasceu numa cozinha de família, entre receitas de vó e panelas de brigadeiro mexidas sem pressa.",
      "Hoje seguimos do mesmo jeito: ingredientes selecionados, produção pequena e atenção a cada detalhe — porque doce bom é aquele que vira lembrança.",
    ],
    imagem: "/images/sobre.jpg",
    imagemAlt: "Mãos preparando brigadeiros em uma bancada de cozinha",
  },

  /** Perguntas frequentes */
  faq: [
    { pergunta: "Com quanto tempo de antecedência devo encomendar?", resposta: "Pedimos no mínimo 3 dias de antecedência. Para festas e grandes quantidades, o ideal é 7 dias." },
    { pergunta: "Vocês fazem entrega ou só retirada?", resposta: "Os dois! Você pode retirar na doceria ou receber em casa. A taxa de entrega é combinada pelo WhatsApp conforme o bairro." },
    { pergunta: "Fazem encomendas para festas?", resposta: "Sim! Montamos caixas e mesas de docinhos para aniversários, casamentos e eventos. Chame no WhatsApp para um orçamento." },
    { pergunta: "Quais as formas de pagamento?", resposta: "Aceitamos Pix, cartão e dinheiro. Para confirmar a encomenda, pedimos um sinal de 50%." },
  ],

  contato: {
    titulo: "Bateu vontade de um docinho?",
    texto: "Chame a gente no WhatsApp e faça sua encomenda.",
    endereco: "Maceió – AL (endereço fictício)",
    horario: "Seg a sáb, das 9h às 18h",
  },

  avisoDemo: "Site de demonstração — dados fictícios",
};

/** Monta o link do WhatsApp com a mensagem codificada. Não precisa editar. */
export function linkWhatsApp(mensagem: string = site.mensagemPadrao) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
export function linkProduto(nome: string) {
  return linkWhatsApp(site.mensagemProduto.replace("{produto}", nome));
}
