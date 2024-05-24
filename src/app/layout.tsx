import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinícios Barbosa - Desenvolvedor Full Stack',
  description:
    'Olá, me chamo Vinícios Barbosa, sou um profissional com mais de 3 anos de experiência na construção de aplicações web e mobile. Aqui você encontra um pouco sobre mim e meus projetos.',
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
