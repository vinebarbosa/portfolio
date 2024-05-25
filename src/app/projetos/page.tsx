'use client'
import React, { useState } from 'react'

import { projectData } from '@/constants'

import { ProjectCard } from '@/components/project-card'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'

const categories = [
  'todos',
  ...new Set(projectData.map((item) => item.category)),
]

const Projects = () => {
  const [category, setCategory] = useState('todos')

  const filteredProjects = projectData.filter((project) => {
    return category === 'todos' ? project : project.category === category
  })

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Meus Projetos
        </h2>
        {/* abas */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* conteúdo das abas */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
