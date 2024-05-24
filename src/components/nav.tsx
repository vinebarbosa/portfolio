// link (nextjs)
import Link from 'next/link'

// next hooks
import { usePathname } from 'next/navigation'

// framer motion
import { motion } from 'framer-motion'

const links = [
  { path: '/', name: 'inicio' },
  { path: '/projetos', name: 'meus projetos' },
  { path: '/contato', name: 'contato' },
]

export const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  closeSheet = () => undefined,
}: Record<'containerStyles' | 'linkStyles' | 'underlineStyles', string> & {
  closeSheet?: () => void
}) => {
  const handleClick = () => {
    closeSheet() // Close the sheet when a link is clicked
  }

  const path = usePathname()

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            onClick={handleClick}
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
