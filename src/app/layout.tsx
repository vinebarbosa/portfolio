import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

import '@/styles/globals.css'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinícios Barbosa - Desenvolvedor Front-end',
  description:
    'Profissional com mais de 3 anos de experiência na construção de aplicações web e mobile, utilizando tecnologias modernas como Swift, React, Next.js e TypeScript.',
  keywords: [
    'vinicius barbosa',
    'vinicios barbosa',
    'vinícios barbosa',
    'desenvolvedor',
    'programador',
    'portifólio',
    'portfolio',
    'projetos',
    'web',
    'mobile',
    'frontend',
    'front-end',
    'swift',
    'react',
    'next',
    'typescript',
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
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
