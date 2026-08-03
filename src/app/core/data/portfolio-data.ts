import {
  DevProfile,
  Job,
  Project,
  TechGroup,
  SocialLink,
} from '../../shared/models/portfolio.models';

export const PORTFOLIO_DATA = {
  dev: {
    name: 'Matheus Mota',
    role: 'Desenvolvedor Full Stack',
    education: 'Analise e Desenvolvimento de Sistemas ',
    location: 'Rio de Janeiro, BR',
    email: 'matheusxmota@gmail.com.br',
    status: 'Disponível para oportunidades',
    bio: 'Desenvolvo aplicações modernas utilizando C#, .NET e Angular, com experiência em produção com Next.js utilizando TypeScript. Foco em performance, escalabilidade e boas experiências de usuário.',
  } as DevProfile,

  jobs: [
    {
      company: 'Quant Tecnologia Comércio e Serviços LTDA',
      period: 'Abr 2025 – Jan 2026',
      location: 'Rio de Janeiro',
      title: 'Sistema Web de Contas a Pagar e Receber',
      description:
        'Desenvolvimento com TypeScript, React, Next.js (Server Actions), Tailwind CSS e Supabase. Implementação de formulários, listagens e controle de registros financeiros, substituindo serviço terceirizado.',
      tags: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Supabase'],
    },
    {
      company: 'Quant Tecnologia Comércio e Serviços LTDA',
      period: 'Abr 2025 – Jan 2026',
      location: 'Rio de Janeiro',
      title: 'Sistema de Visualização de Dados de Estoque e Obras',
      description:
        'Aplicação em Python com Streamlit para processamento e análise de dados com Pandas e NumPy. Dashboards interativos para análise de custos e rastreabilidade de materiais.',
      tags: ['Python', 'Streamlit', 'Pandas', 'NumPy'],
    },
    {
      company: 'Quant Tecnologia Comércio e Serviços LTDA',
      period: 'Abr 2025 – Jan 2026',
      location: 'Rio de Janeiro',
      title: 'Front-end do Site Institucional',
      description:
        'Desenvolvimento com TypeScript, React, Next.js e Tailwind CSS. Foco em UX/UI, responsividade e acessibilidade. Integração com canais de comunicação da empresa.',
      tags: ['TypeScript', 'React', 'Next.js', 'Tailwind'],
    },
  ] as Job[],

  projects: [
    {
      title: 'Order Management API',
      description:
        'API REST para gerenciamento de pedidos com Spring Boot 3 e Java 21. Arquitetura em camadas, mapeamento com MapStruct, validação com Bean Validation e documentação interativa via Swagger. Segurança de credenciais com variáveis de ambiente, pronta para deploy em cloud.',
      tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'MapStruct', 'Swagger', 'JPA'],
      githubUrl: 'https://github.com/MatheusxMota/api_ordermanagement',
    },
    {
      title: 'Travel Planner API',
      description:
        'API REST em ASP.NET Core que gera roteiros de viagem personalizados com IA — atividades, clima, segurança e transporte. Provedor de IA desacoplado via interface, chamadas paralelas com Task.WhenAll, resiliência com Polly (retry/backoff) e cache em memória. Documentação interativa via Scalar.',
      tags: ['.NET 10', 'C#', 'ASP.NET Core', 'Hugging Face', 'Polly', 'xUnit'],
      githubUrl: 'https://github.com/MatheusxMota/API_TRAVEL_PLANNER',
    },
  ] as Project[],

  techGroups: [
    {
      title: '</> Front-end',
      items: [
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS', icon: 'css' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Angular', icon: 'angular' },
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextdotjs' },
        { name: 'Tailwind', icon: 'tailwindcss' },
        { name: 'Shadcn/UI', icon: 'shadcnui' },
      ],
    },
    {
      title: '⌘ Back-end',
      items: [
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'C#', icon: 'c' },
        { name: '.NET', icon: 'dotnet' },
        { name: 'ASP.NET Core', icon: 'dotnet' },
        { name: 'PostgreSQL', icon: 'postgresql' },
      ],
    },
    {
      title: '⑂ Ferramentas',
      items: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Supabase', icon: 'supabase' },
        { name: 'Swagger', icon: 'swagger' },
      ],
    },
  ] as TechGroup[],

  socials: [
    { platform: 'GitHub', label: 'GH', url: 'https://github.com/' },
    { platform: 'LinkedIn', label: 'in', url: 'https://linkedin.com/' },
    { platform: 'Email', label: '@', url: 'mailto:contato@matheusm.dev' },
  ] as SocialLink[],
};
