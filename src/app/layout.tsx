import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
})

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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
