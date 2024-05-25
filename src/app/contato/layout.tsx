import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Contato para projetos, dúvidas e sugestões.',
}

export default function Layout({ children }: PropsWithChildren) {
  return children
}
