import {
  MonitorSmartphone,
  Smartphone,
  ClipboardPenLineIcon,
} from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

const servicesData = [
  {
    icon: <MonitorSmartphone size={72} strokeWidth={0.8} />,
    title: 'Desenvolvimento Web',
    description:
      'Construo aplicações web rápidas e seguras, utilizando as mais recentes ferramentas e tecnologias.',
  },
  {
    icon: <Smartphone className="  " size={72} strokeWidth={0.8} />,
    title: 'Desenvolvimento de Aplicativos',
    description:
      'Desenvolvo aplicativos nativos e multiplataforma de alta qualidade para iOS e Android, utilizando as melhores práticas e frameworks.',
  },
  {
    icon: <ClipboardPenLineIcon size={72} strokeWidth={0.8} />,
    title: 'Consultoria e Treinamento',
    description:
      'Ofereço consultoria e treinamento em desenvolvimento web e mobile, para ajudar você e sua equipe a alcançar seus objetivos.',
  },
]

export const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Meus Serviços
        </h2>
        {/* itens da grade */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-18 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[90px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
