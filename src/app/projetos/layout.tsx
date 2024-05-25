import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Confira os projetos que desenvolvi e participei.',
  keywords: [
    'projetos',
    'portfolio',
    'portifólio',
    'desenvolvimento',
    'web',
    'mobile',
  ],
}

export default function Layout({ children }: PropsWithChildren) {
  return children
}
