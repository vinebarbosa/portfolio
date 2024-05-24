import { Button, Tooltip } from '@nextui-org/react'
import Image from 'next/image'

import {
  QualificationData,
  infoData,
  qualificationData,
  skills,
} from '@/constants'
import { GraduationCap, Briefcase } from 'lucide-react'

import { DevImg } from './dev-img'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export const About = () => {
  const getData = (arr: QualificationData[], title: string) => {
    return arr.find((item) => item.title === title)
  }

  return (
    <section className="xl:h-[860px] pb-12 pt-1 xl:py-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto pt-2">
          Sobre mim
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/dev.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Dados Pessoais
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualificações
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Habilidades
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Qualidade de Serviço Excepcional
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      Sou especializado em criar sites intuitivos com tecnologia
                      de ponta, oferecendo experiências de usuário dinâmicas e
                      envolventes.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary ">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex  flex-col gap-y-2">
                      <div className="text-primary">Habilidades em Idiomas</div>
                      <div className="border-b border-border">
                        Português, Inglês e Espanhol
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Minha Incrível Jornada
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8 gap-x-0.5">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'experiência')?.title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experiência')?.data.map(
                            (item, index) => {
                              const { company, role, years } = item
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            },
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'educação')?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'educação')?.data.map(
                            (item, index) => {
                              const { university, qualification, years } = item
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-7">O que eu uso todos os dias</h3>
                    <div className="mb-16">
                      <div className="border-b border-border mb-4"></div>
                      <div className="mt-10 flex flex-wrap sm:gap-12 gap-4 justify-center items-center">
                        {skills.map((skills) => (
                          <div
                            className="block-container w-20 h-20"
                            key={skills.name}
                          >
                            <div className="rounded-xl " />
                            <Tooltip
                              content={skills.name}
                              className="border border-primary bg-transparent text-primary rounded-md p-2"
                            >
                              <Button className="border backdrop-blur-2xl dark:bg-zinc-800/10 dark:border-neutral-800/60 rounded-xl flex justify-center items-center h-20 w-20">
                                <Image
                                  src={skills.imageUrl}
                                  alt={skills.name}
                                  className="w-16 h-16 object-contain"
                                />
                              </Button>
                            </Tooltip>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
