'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export function ThemeProvider({
  children,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<typeof NextThemesProvider>>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
