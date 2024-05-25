import {
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  User2,
} from 'lucide-react'

import {
  css,
  git,
  html,
  javascript,
  motion,
  nextjs,
  nodejs,
  react,
  redux,
  tailwindcss,
  typescript,
  docker,
  redis,
  graphQL,
  github,
} from '@/assets/icons'

export const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },

  {
    imageUrl: motion,
    name: 'Motion',
    type: 'Animation',
  },

  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: docker,
    name: 'Docker',
    type: 'Backend',
  },
  {
    imageUrl: redis,
    name: 'Redis',
    type: 'Backend',
  },
  {
    imageUrl: graphQL,
    name: 'graphQL',
    type: 'Bundler',
  },
]

export const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Vinícios Barbosa',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Bach. em Ciência da Computação',
  },
  {
    icon: <Calendar size={20} />,
    text: '21 anos',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'contato@viniciosbarbosa.com.br',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Natal, RN, Brasil',
  },
]

export type Qualification = {
  university?: string
  qualification?: string
  years: string
  company?: string
  role?: string
}

export type QualificationData = {
  title: string
  data: Qualification[]
}

export const qualificationData: QualificationData[] = [
  {
    title: 'educação',
    data: [
      {
        university: 'Ignite, Rocketseat',
        qualification: 'Especialização em ReactJS',
        years: '2018 - 2022',
      },
      {
        university: 'Técnico em Informática, IFRN',
        qualification: 'Técnico de Nível Médio',
        years: '2018 - 2022',
      },
    ],
  },
  {
    title: 'experiência',
    data: [
      {
        company: 'LAIS',
        role: 'Desenvolvedor Front-end',
        years: '2022 - Presente',
      },
      {
        company: 'RD Investimentos',
        role: 'Desenvolvedor Front-end',
        years: 'Jul 2023 - Set 2023',
      },
      {
        company: 'AceleraBit',
        role: 'Estagiário de Desenvolvimento Web',
        years: 'Abr 2023 - Jun 2023',
      },
    ],
  },
]

export const projectData = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Clone da Amazon',
    description:
      'Clone da Amazon feito com react, tailwind, javascript e redux',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'react js',
    name: 'Homeland',
    description:
      'Um site de aluguel de imóveis feito com react, tailwind e javascript.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'Html CSS',
    name: 'Website Lumina',
    description:
      'Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'Html CSS',
    name: 'Website Evolve',
    description:
      'Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'react js',
    name: 'Website Ignite',
    description:
      'Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'Website Envision',
    description:
      'Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'Website Envision',
    description:
      'Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore',
    link: '/',
    github: '/',
  },
]
