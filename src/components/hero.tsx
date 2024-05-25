import Link from 'next/link'
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri'

import { Send, FileText } from 'lucide-react'

import Badge from './badge'
import { DevImg } from './dev-img'
import { Socials } from './socials'
import { Button } from './ui/button'

export const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Desenvolvedor Front-End
            </div>
            <h1 className="h1 mb-4">Olá, eu sou o Vinícios Barbosa</h1>
            <p className="subtitle max-w-[490] mx-auto xl:mx-0">
              Desenvolvedor Front-End com mais de 3 anos de experiência. Eu
              ajudo empresas e startups a criar produtos digitais incríveis.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contato">
                <Button className="gap-x-2">
                  Conversar <Send size={18} />
                </Button>
              </Link>

              <Link href="/cv.pdf" download="cv.pdf">
                <Button variant="secondary" className="gap-x-2">
                  Conferir currículo <FileText size={18} />
                </Button>
              </Link>
            </div>

            <Socials
              containerStyles="flex gap-x-6 m-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Anos de Experiência"
            />

            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={18}
              badgeText="Projetos Concluídos"
            />

            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={23}
              badgeText="Clientes Satisfeitos"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 "></div>
            <DevImg
              containerStyles="bg-hero_shape w-[530px] h-[460px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/dev1.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 botton-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}
