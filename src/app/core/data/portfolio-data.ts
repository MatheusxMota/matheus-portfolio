import {
  DevProfile,
  Job,
  Project,
  TechGroup,
  SocialLink,
} from '../../shared/models/portfolio.models';
import {
  LucideGlobe,
  LucidePalette,
  LucideBraces,
  LucideType,
  LucideCode,
  LucideAtom,
  LucideTriangle,
  LucideWind,
  LucideLayout,
  LucideHexagon,
  LucideCoffee,
  LucideLeaf,
  LucideDatabase,
  LucideGitBranch,
  LucideCloud,
  LucideFileText,
} from '@lucide/angular';

export const PORTFOLIO_DATA = {
  dev: {
    name: 'Matheus Mota',
    role: 'Desenvolvedor Full Stack',
    education: 'Analise e Desenvolvimento de Sistemas ',
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
        { name: 'HTML5', icon: LucideGlobe },
        { name: 'CSS', icon: LucidePalette },
        { name: 'JavaScript', icon: LucideBraces },
        { name: 'TypeScript', icon: LucideType },
        { name: 'Angular', icon: LucideCode },
        { name: 'React', icon: LucideAtom },
        { name: 'Next.js', icon: LucideTriangle },
        { name: 'Tailwind', icon: LucideWind },
        { name: 'Shadcn/UI', icon: LucideLayout },
      ],
    },
    {
      title: '⌘ Back-end',
      items: [
        { name: 'Node.js', icon: LucideHexagon },
        { name: 'Express', icon: LucideBraces },
        { name: 'Java', icon: LucideCoffee },
        { name: 'Spring Boot', icon: LucideLeaf },
        { name: 'PostgreSQL', icon: LucideDatabase },
      ],
    },
    {
      title: '⑂ Ferramentas',
      items: [
        { name: 'Git', icon: LucideGitBranch },
        { name: 'GitHub', icon: 'github' },
        { name: 'Supabase', icon: LucideCloud },
        { name: 'Swagger', icon: LucideFileText },
      ],
    },
  ] as TechGroup[],

  socials: [
    { platform: 'GitHub', label: 'GH', url: 'https://github.com/' },
    { platform: 'LinkedIn', label: 'in', url: 'https://linkedin.com/' },
    { platform: 'Email', label: '@', url: 'mailto:contato@matheusm.dev' },
  ] as SocialLink[],
};
