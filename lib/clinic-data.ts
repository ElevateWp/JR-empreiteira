export interface DentistProfile {
  id: string;
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  specialization: string;
  experienceYears: number;
  bio: string;
  philosophy: string;
  education: string[];
  memberships: string[];
  specialties: string[];
  image: string;
  warmImage: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  navLabel: string;
  tagline: string;
  shortDescription: string;
  clinicalExplanation: string;
  whoNeeds: string[];
  benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string;
  faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear?: number;
  primaryLocation: {
    street: string;
    suite: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    directions: string;
    landmarks: string;
    coordinates?: { lat: number; lng: number };
  };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string };
  schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[];
  accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: "JR Empreiteira",
  legalName: "JR Empreiteira, Construções e Reformas LTDA",
  tagline: "Construções e reformas com cuidado e qualidade.",
  primaryLocation: {
    street: "R. Tumucumaque, 144",
    suite: "sala 02",
    city: "São Paulo",
    state: "SP",
    postalCode: "03444-060",
    country: "BR",
    directions: "Vila Nova Manchester, São Paulo - SP, 03444-060, Brazil",
    landmarks: "R. Tumucumaque, 144 - sala 02 - Vila Nova Manchester, São Paulo - SP, 03444-060, Brazil",
  },
  contact: {
    phone: "+55 11 94194-3696",
    emergencyPhone: "+55 11 94194-3696",
    whatsapp: "+55 11 94194-3696",
    email: "",
  },
  schedule: [
    { day: "Segunda-feira", hours: "8h–17h" },
    { day: "Terça-feira", hours: "8h–17h" },
    { day: "Quarta-feira", hours: "8h–17h" },
    { day: "Quinta-feira", hours: "8h–17h" },
    { day: "Sexta-feira", hours: "8h–17h" },
    { day: "Sábado", hours: "Fechado" },
    { day: "Domingo", hours: "Fechado" },
  ],
  verifiedStats: [
    { value: 4.5, suffix: "/5", label: "Avaliação no Google", description: "Com base em 63 avaliações informadas no Google." },
    { value: 63, suffix: "", label: "Avaliações", description: "Avaliações de clientes no perfil do Google." },
  ],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [
  {
    id: "roofing-team",
    slug: "our-doctor",
    name: "JR Empreiteira",
    title: "Equipe de serviços residenciais",
    qualifications: "Construção e reforma",
    specialization: "Soluções residenciais e consertos em geral",
    experienceYears: 0,
    bio: "JR Empreiteira oferece serviços de construção e reforma. Entre em contato para confirmar o atendimento de que você precisa.",
    philosophy: "Explicar o problema com clareza, apresentar as opções de reparo e combinar cada etapa antes do início do serviço.",
    education: [],
    memberships: [],
    specialties: ["Serviços residenciais", "Consertos em geral"],
    image: "/images/logo.png",
    warmImage: "/images/logo.png",
  },
];

const roofPhoto = "https://images.unsplash.com/photo-1778798387913-2e6ce56cda73?auto=format&fit=crop&w=1200&q=85";
const homePhoto = "https://images.unsplash.com/photo-1781856486462-63608f91563a?auto=format&fit=crop&w=1200&q=85";
const servicePhotoPairs: Record<string, [string, string]> = {
  "dental-implants": ["https://images.unsplash.com/photo-1778178933409-705e5a5c6a48?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1760544137552-b225c3379c76?auto=format&fit=crop&w=1200&q=85"],
  "teeth-whitening": ["/images/roof-without-tiles.png", "/images/roof-with-tiles.png"],
  "braces": ["https://images.unsplash.com/photo-1710139323182-69622cad5c3b?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?auto=format&fit=crop&w=1200&q=85"],
  "cosmetic-dentistry": ["https://images.unsplash.com/photo-1690719095815-549c60090c9f?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1472342139520-1aa49517fed8?auto=format&fit=crop&w=1200&q=85"],
};

const makeService = (
  slug: string,
  name: string,
  navLabel: string,
  tagline: string,
  description: string,
  problems: string[],
  benefits: string[],
  faqs: { question: string; answer: string }[],
): ServiceDetail => ({
  slug,
  name,
  navLabel,
  tagline,
  shortDescription: description,
  clinicalExplanation: description,
  whoNeeds: problems,
  benefits,
  indications: problems.map((condition) => ({ condition, explanation: `O local deve ser avaliado para identificar a origem do problema e a forma adequada de reparo: ${condition.toLowerCase()}.` })),
  procedureSteps: [
    { stepNumber: 1, title: "Inspeção do telhado", duration: "A combinar", description: "A equipe verifica a cobertura e registra os pontos visíveis de atenção.", clinicalDetails: "A inspeção define o escopo indicado para o imóvel." },
    { stepNumber: 2, title: "Proposta de reparo", duration: "Após a avaliação", description: "Você recebe uma explicação do serviço recomendado e dos materiais previstos.", clinicalDetails: "Prazo e valores são definidos após conhecer as condições do local." },
    { stepNumber: 3, title: "Execução do serviço", duration: "A combinar", description: "O reparo aprovado é realizado na área identificada.", clinicalDetails: "O acesso e as medidas de segurança são combinados antes do início." },
    { stepNumber: 4, title: "Revisão e orientação", duration: "Ao concluir", description: "A equipe revisa o serviço e orienta sobre a manutenção da cobertura.", clinicalDetails: "O escopo final depende da avaliação e do serviço contratado." },
  ],
  recoveryTimeline: [
    { period: "Antes do serviço", expectedSensations: "A necessidade e o escopo são avaliados no local.", careProtocol: "Compartilhe fotos e descreva quando o problema aparece, se souber." },
    { period: "Durante o reparo", expectedSensations: "A duração varia conforme o acesso, o material e a extensão do dano.", careProtocol: "Mantenha pessoas e animais fora da área de trabalho." },
    { period: "Após a conclusão", expectedSensations: "A equipe apresenta o que foi realizado.", careProtocol: "Siga as orientações de manutenção indicadas para o telhado." },
  ],
  costTransparency: {
    baseRange: "Orçamento sob consulta após avaliação do telhado.",
    factors: ["Tipo e estado da cobertura", "Acesso e altura do telhado", "Materiais e extensão do reparo"],
    whatIsIncluded: ["Escopo acordado antes do início", "Descrição dos materiais previstos", "Orientação sobre o serviço executado"],
    note: "Valores, prazos e disponibilidade são demonstrativos e devem ser confirmados pela empresa.",
  },
  beforeAfterCase: {
    category: name,
    clinicalContext: "Imagens ilustrativas de telhados e reparos; não representam um projeto específico da empresa.",
    beforeLabel: slug === "teeth-whitening" ? "Telhado sem telhas" : "Exemplo de reparo em telhado",
    afterLabel: slug === "teeth-whitening" ? "Telhado com telhas" : "Exemplo de cobertura residencial",
    beforeImage: servicePhotoPairs[slug]?.[0] ?? roofPhoto,
    afterImage: servicePhotoPairs[slug]?.[1] ?? homePhoto,
    timeframe: "Imagens ilustrativas",
  },
  assignedDentistId: "roofing-team",
  faqs,
});

export const SERVICES: ServiceDetail[] = [
  makeService(
    "dental-implants", "Reparo de Telhados e Infiltrações", "Reparo de Telhados",
    "Identificação de infiltrações e reparos pontuais para ajudar a proteger o imóvel.",
    "Uma mancha no teto ou goteira pode ter diferentes origens. A avaliação da cobertura ajuda a localizar o ponto de entrada da água e definir o reparo adequado.",
    ["Goteiras durante a chuva", "Manchas de umidade no teto", "Telhas deslocadas ou quebradas"],
    ["Localizar pontos visíveis de entrada de água", "Avaliar telhas, junções e acabamento", "Receber um escopo de reparo antes da execução"],
    [{ question: "Como identificar a origem de uma infiltração?", answer: "A origem nem sempre fica diretamente acima da mancha interna. Uma inspeção do telhado e dos encontros da cobertura ajuda a localizar os pontos que precisam de atenção." }],
  ),
  makeService(
    "root-canal", "Reparo de Rufos e Calhas", "Rufos e Calhas",
    "Revisão de rufos, calhas e encontros da cobertura, onde podem surgir vazamentos.",
    "Rufos e calhas conduzem a água e protegem os encontros do telhado. Folhas, peças soltas ou vedação desgastada podem prejudicar o escoamento e favorecer infiltrações.",
    ["Calhas com água acumulada", "Rufos soltos ou com vedação comprometida", "Água retornando junto a paredes e beirais"],
    ["Verificar o escoamento de água", "Identificar junções que precisam de vedação", "Planejar limpeza ou reparo conforme a condição encontrada"],
    [{ question: "Com que frequência devo verificar as calhas?", answer: "A frequência depende das árvores próximas, da quantidade de chuva e das condições do imóvel. Uma inspeção periódica ajuda a perceber obstruções e danos visíveis." }],
  ),
  makeService(
    "teeth-whitening", "Substituição de Telhas", "Telhas",
    "Troca pontual de telhas quebradas, deslocadas ou com desgaste visível.",
    "Telhas quebradas ou fora de posição podem expor camadas inferiores da cobertura. A avaliação identifica se a substituição pontual é adequada ou se há outros pontos a corrigir.",
    ["Telhas quebradas ou ausentes", "Peças deslocadas após chuva ou vento", "Desgaste visível em uma área da cobertura"],
    ["Verificar o modelo e o encaixe das peças", "Substituir as telhas identificadas no escopo", "Revisar os pontos ao redor da área reparada"],
    [{ question: "É possível substituir apenas algumas telhas?", answer: "Em muitos casos, sim. A viabilidade depende do tipo de telha, do estado das peças ao redor e das condições de acesso ao telhado." }],
  ),
  makeService(
    "dental-cleaning", "Impermeabilização e Vedação", "Impermeabilização",
    "Avaliação de pontos de vedação e proteção em lajes e coberturas compatíveis.",
    "A solução de impermeabilização depende do tipo de superfície, da origem da umidade e das condições do local. A equipe avalia a área antes de indicar materiais e preparo necessários.",
    ["Umidade em lajes e coberturas", "Falhas visíveis em áreas de vedação", "Água acumulada em superfícies planas"],
    ["Avaliar a superfície antes de recomendar material", "Identificar juntas e pontos de passagem", "Combinar o preparo e o escopo do serviço"],
    [{ question: "Impermeabilização resolve qualquer infiltração?", answer: "Não necessariamente. Primeiro é preciso identificar a origem da água e avaliar se a superfície e o sistema existente são compatíveis com a solução proposta." }],
  ),
  makeService(
    "braces", "Inspeção e Manutenção Preventiva", "Inspeção Preventiva",
    "Verificação visual da cobertura para identificar sinais de desgaste e manutenção necessária.",
    "Uma inspeção preventiva observa telhas, cumeeiras, rufos, calhas e outros pontos acessíveis. O objetivo é registrar o estado visível do telhado e explicar eventuais reparos recomendados.",
    ["Telhados sem inspeção recente", "Sinais de desgaste ou peças soltas", "Preparação para o período de chuvas"],
    ["Registrar pontos que merecem atenção", "Priorizar reparos conforme a condição encontrada", "Planejar a manutenção da cobertura"],
    [{ question: "A inspeção exige subir no telhado?", answer: "A forma de avaliação depende do imóvel e do acesso seguro. A equipe combina previamente o método adequado para cada local." }],
  ),
  makeService(
    "cosmetic-dentistry", "Reparos após Chuva e Vento", "Danos de Chuva e Vento",
    "Avaliação de danos visíveis na cobertura após chuva forte ou ventos intensos.",
    "Após uma tempestade, telhas deslocadas, calhas soltas ou entrada de água podem exigir atenção. Uma avaliação ajuda a documentar os danos visíveis e definir os próximos passos.",
    ["Telhas deslocadas após ventos", "Goteiras surgidas depois da chuva", "Calhas, rufos ou acabamentos soltos"],
    ["Identificar sinais visíveis de dano", "Priorizar pontos que permitem entrada de água", "Receber orientação sobre o reparo indicado"],
    [{ question: "O que devo fazer se aparecer uma goteira durante a chuva?", answer: "Afaste objetos da água e, se for seguro, recolha a água em um recipiente. Evite subir no telhado ou tocar em áreas próximas a instalações elétricas e solicite uma avaliação." }],
  ),
];

export interface EmergencyCondition {
  id: string;
  title: string;
  urgency: "Immediate (0–2 hours)" | "Same-Day (2–6 hours)" | "Urgent (Within 24 hours)";
  symptoms: string[];
  immediateAction: string[];
  clinicTreatment: string;
}

export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: "active-leak", title: "Goteira ativa", urgency: "Same-Day (2–6 hours)", symptoms: ["Água pingando pelo teto", "Mancha úmida aumentando durante a chuva"], immediateAction: ["Afaste pessoas e objetos da área molhada.", "Se for seguro, recolha a água e desligue a energia apenas se houver risco próximo a instalações elétricas.", "Não suba no telhado durante a chuva."], clinicTreatment: "Avaliação do ponto de infiltração e definição do reparo indicado após inspeção." },
  { id: "storm-damage", title: "Telhas deslocadas após ventania", urgency: "Urgent (Within 24 hours)", symptoms: ["Telhas no chão ou fora de posição", "Partes da cobertura expostas"], immediateAction: ["Mantenha distância de áreas com peças soltas.", "Fotografe os danos do chão, se for seguro.", "Evite subir na cobertura ou tentar recolocar telhas."], clinicTreatment: "Inspeção da cobertura e avaliação das peças afetadas, respeitando as condições de acesso e segurança." },
  { id: "ceiling-water", title: "Água próxima ao teto ou à instalação elétrica", urgency: "Immediate (0–2 hours)", symptoms: ["Umidade perto de luminárias ou tomadas", "Forro cedendo ou deformado"], immediateAction: ["Afaste-se da área e não toque em equipamentos molhados.", "Se houver risco elétrico, acione um profissional qualificado para desligar a energia.", "Procure atendimento de emergência se houver perigo imediato no imóvel."], clinicTreatment: "A segurança do imóvel vem primeiro; o telhado deve ser avaliado quando o local estiver seguro." },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  lastUpdated: string;
  authorId: string;
  excerpt: string;
  leadImage: string;
  relatedServiceSlug: string;
  content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sinais-de-infiltracao-no-telhado",
    title: "Sinais de infiltração no telhado: o que observar",
    category: "Infiltrações",
    readTime: "4 min de leitura",
    publishDate: "2026-10-08",
    lastUpdated: "2026-10-08",
    authorId: "our-doctor",
    excerpt: "Manchas no teto, goteiras e pintura descascando podem indicar entrada de água. Saiba o que observar com segurança.",
    leadImage: "https://images.unsplash.com/photo-1748352249049-81cf33628a60?auto=format&fit=crop&w=1200&q=85",
    relatedServiceSlug: "dental-implants",
    content: { intro: "Uma mancha úmida pode aparecer longe do ponto por onde a água entrou. Observe quando ela surge e registre o que consegue ver do chão.", sections: [
      { heading: "Sinais que merecem atenção", body: "Goteiras, pintura estufada, cheiro de umidade e telhas deslocadas são sinais para investigar. Eles não indicam sozinhos a causa nem o tamanho do reparo necessário." },
      { heading: "Cuidados enquanto aguarda avaliação", body: "Afaste móveis e eletrônicos da água. Evite subir no telhado, especialmente quando estiver molhado, e mantenha distância de luminárias ou fiação atingidas pela umidade." },
    ], faqs: [{ question: "A mancha no teto mostra exatamente onde está o vazamento?", answer: "Nem sempre. A água pode percorrer a estrutura antes de aparecer no forro, por isso a origem precisa ser avaliada." }] },
  },
  {
    slug: "como-verificar-calhas-e-rufos",
    title: "Calhas e rufos: pontos importantes na manutenção",
    category: "Manutenção",
    readTime: "4 min de leitura",
    publishDate: "2026-10-08",
    lastUpdated: "2026-10-08",
    authorId: "our-doctor",
    excerpt: "Obstruções e falhas de vedação podem atrapalhar o escoamento da água. Veja quando pedir uma inspeção.",
    leadImage: "https://images.unsplash.com/photo-1746036317071-b193cfc05167?auto=format&fit=crop&w=1200&q=85",
    relatedServiceSlug: "root-canal",
    content: { intro: "Calhas e rufos trabalham junto com a cobertura para conduzir a água para longe de paredes e beirais. Uma revisão ajuda a encontrar sinais visíveis de obstrução ou desgaste.", sections: [
      { heading: "Observe o escoamento", body: "Transbordamento, água parada ou marcas de umidade próximas à calha podem justificar uma avaliação. Folhas e detritos também podem bloquear a passagem de água." },
      { heading: "Priorize a segurança", body: "Não tente limpar ou reparar pontos altos sem equipamentos e acesso apropriados. Combine uma avaliação profissional para o imóvel." },
    ] },
  },
  {
    slug: "inspecao-do-telhado-apos-temporal",
    title: "Como observar o telhado depois de um temporal",
    category: "Danos de chuva e vento",
    readTime: "5 min de leitura",
    publishDate: "2026-10-08",
    lastUpdated: "2026-10-08",
    authorId: "our-doctor",
    excerpt: "Veja quais sinais podem ser registrados do chão e quando é melhor evitar qualquer acesso à cobertura.",
    leadImage: "https://images.unsplash.com/photo-1684866948879-3be7c7c18b97?auto=format&fit=crop&w=1200&q=85",
    relatedServiceSlug: "cosmetic-dentistry",
    content: { intro: "Depois de chuva forte ou vento, comece observando a casa de uma área segura. Não suba no telhado para conferir peças soltas.", sections: [
      { heading: "Registre danos visíveis", body: "Fotografe do chão telhas caídas, calhas deslocadas ou manchas recentes. Anote quando a água entrou e em quais cômodos apareceu." },
      { heading: "Quando buscar ajuda", body: "Goteiras ativas, partes da cobertura expostas ou água perto de instalações elétricas precisam de atenção. Afaste-se de áreas inseguras e peça orientação profissional." },
    ] },
  },
  {
    slug: "quando-substituir-telhas",
    title: "Quando a substituição pontual de telhas pode ajudar",
    category: "Telhas e coberturas",
    readTime: "4 min de leitura",
    publishDate: "2026-10-08",
    lastUpdated: "2026-10-08",
    authorId: "our-doctor",
    excerpt: "Telhas quebradas ou deslocadas podem ser um sinal para avaliar a cobertura e as peças ao redor.",
    leadImage: "https://images.unsplash.com/photo-1662676111329-f17b417de12b?auto=format&fit=crop&w=1200&q=85",
    relatedServiceSlug: "teeth-whitening",
    content: { intro: "Nem todo dano exige trocar toda a cobertura. Uma avaliação considera o modelo das telhas, as condições das peças próximas e a causa do deslocamento.", sections: [
      { heading: "Peças quebradas ou deslocadas", body: "Telhas no chão, espaços visíveis ou exposição de camadas inferiores são sinais que merecem ser examinados por uma equipe com acesso seguro." },
      { heading: "O que considerar", body: "A disponibilidade de peças compatíveis, o estado da estrutura e o acesso ao telhado influenciam o escopo e o prazo do reparo." },
    ] },
  },
];
