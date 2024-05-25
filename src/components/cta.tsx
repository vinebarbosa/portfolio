import Link from 'next/link'

import { Button } from './ui/button'

export const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Pronto para transformar suas ideias em realidade? Estou aqui para
            ajudar
          </h2>
          <Link href={'/contato'}>
            <Button>Entre em contato</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
