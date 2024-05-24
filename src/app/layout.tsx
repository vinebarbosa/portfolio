import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinícios Barbosa - Desenvolvedor Full Stack',
  description:
    'Profissional com mais de 3 anos de experiência na construção de aplicações web e mobile. Conheça meus projetos e portifólio.',
  keywords: [
    'vinicius barbosa',
    'vinicios barbosa',
    'vinícios barbosa',
    'desenvolvedor',
    'programador',
    'portifólio',
    'portfolio',
    'projetos',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
