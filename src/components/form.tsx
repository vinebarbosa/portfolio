'use client'

import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export const Form = () => {
  return (
    <form
      className="flex flex-col gap-y-4"
      action="https://formspree.io/f/moqgqqng"
      method="POST"
    >
      <div className="relative flex items-center">
        <Input type="name" id="name" name="name" placeholder="Nome" />
        <User className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Input type="email" id="email" name="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Textarea
          id="message"
          name="message"
          placeholder="Digite sua mensagem aqui."
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Vamos Conversar <ArrowRightIcon size={20} />
      </Button>
    </form>
  )
}
