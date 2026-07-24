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
    education: 'ADS — conclusão 2026.2',
    location: 'Rio de Janeiro, BR',
    email: 'contato@matheusm.dev',
    status: 'disponível para oportunidades',
    bio: 'Desenvolvo aplicações web modernas utilizando tecnologias como Next.js, TypeScript, Java e Python — com foco em performance, escalabilidade e boas experiências de usuário.',
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
      githubUrl: 'https://github.com/',
    },
  ] as Project[],

  techGroups: [
    {
      title: '</> Front-end',
      items: [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '{}' },
        { name: 'TypeScript', icon: 'TS' },
        { name: 'Angular', icon: '🅰' },
        { name: 'React', icon: '⚛' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Tailwind', icon: '〜' },
        { name: 'Shadcn/UI', icon: '◧' },
      ],
    },
    {
      title: '⌘ Back-end',
      items: [
        { name: 'Node.js', icon: '⬢' },
        { name: 'Express', icon: '{}' },
        { name: 'Java', icon: '☕' },
        { name: 'Spring Boot', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
      ],
    },
    {
      title: '⑂ Ferramentas',
      items: [
        { name: 'Git', icon: '⑂' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'Supabase', icon: '☁' },
        { name: 'Swagger', icon: '📑' },
      ],
    },
  ] as TechGroup[],

  socials: [
    { platform: 'GitHub', label: 'GH', url: 'https://github.com/' },
    { platform: 'LinkedIn', label: 'in', url: 'https://linkedin.com/' },
    { platform: 'Email', label: '@', url: 'mailto:contato@matheusm.dev' },
  ] as SocialLink[],
};
