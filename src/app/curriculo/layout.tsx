import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Currículo',
  description:
    'Aqui você encontra informações sobre minha formação, experiência e habilidades.',
  keywords: ['currículo', 'formação', 'experiência', 'habilidades'],
}

export default function Layout({ children }: PropsWithChildren) {
  return children
}
