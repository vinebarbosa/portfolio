'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import Link from 'next/link'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ProjectCard } from './project-card'
import { Button } from './ui/button'

const projectData = [
  {
    image: '/work/1.png',
    category: 'react js',
    name: 'Homeland ',
    description:
      'Um site de aluguel de imóveis feito com react, tailwind e javascript.',
    link: '/',
    github: '/',
  },
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
    image: '/work/5.png',
    category: 'NextJs',
    name: 'Plataforma LMS',
    description:
      'Uma plataforma de venda de cursos e LMS construída com Nextjs, Tailwind CSS, TypeScript, Prisma e PostgreSQL.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/6.png',
    category: 'NextJS',
    name: 'Clone do Notion',
    description:
      'Clone do Notion desenvolvido com TypeScript, Tailwind CSS e Next.js no frontend.',
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
    category: 'react js',
    name: 'Website Envision',
    description:
      'Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'react js',
    name: 'Website Envision',
    description:
      'Lorem ipsum, dolor sit amet consectetur a necessitatibus eveniet est tenetur quisquam dolore',
    link: '/',
    github: '/',
  },
]

export const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Projetos Recentes</h2>
          <p className="subtitle mb-8">
            Entre no código que eu construí e dei vida.
          </p>
          <Link href="/projects">
            <Button>Todos os Projetos</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
