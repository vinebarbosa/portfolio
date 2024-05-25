import { AlignJustify } from 'lucide-react'

import { Logo } from './logo'
import { Nav } from './nav'
import { Socials } from './socials'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="h-full flex justify-center">
          <span className="sr-only">Open Mobile Nav</span>
          <AlignJustify className="cursor-pointer" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <SheetClose asChild>
              <Nav
                containerStyles="flex flex-col items-center gap-y-6"
                linkStyles="text-2xl"
              />
            </SheetClose>
          </div>
          <Socials
            containerStyles="flex gap-x-4"
            iconsStyles="text-2xl hover:text-primary dark:hover:text-primary transition-all"
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}
