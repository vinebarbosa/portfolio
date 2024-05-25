import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react'

import { Form } from '@/components/form'

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Diga Olá 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Vamos trabalhar juntos.</h1>
            <p className="subtitle max-w-[400px]">
              Estou sempre aberto a novas oportunidades e colaborações. Entre em
              contato comigo por e-mail, telefone ou mídia social. Estou ansioso
              para ouvir você em breve. 😊
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-8 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>contato@viniciosbarbosa.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>
                Warur Road, Near Talathi office, Tehsil rajura, Dist chandrapur
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+55 84 99185 1169</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact
