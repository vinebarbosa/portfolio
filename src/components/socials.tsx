'use client'

import Link from 'next/link'
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
  RiYoutubeFill,
} from 'react-icons/ri'

const icons = [
  {
    path: 'https://www.instagram.com/vinnee.dev',
    name: 'Instagram',
    content: <RiInstagramFill />,
  },
  {
    path: 'https://github.com/vinebarbosa',
    name: 'Github',
    content: <RiGithubFill />,
  },
  {
    path: 'https://www.youtube.com/channel/viniciosbarbosadev',
    name: 'Youtube',
    content: <RiYoutubeFill />,
  },
  {
    path: 'https://www.linkedin.com/in/vinebarbosa/',
    name: 'Linkedin',
    content: <RiLinkedinFill />,
  },
]

export const Socials = ({
  containerStyles,
  iconsStyles,
}: Record<'containerStyles' | 'iconsStyles', string>) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <span className="sr-only">{icon.name}</span>
            <div className={`${iconsStyles}`}>{icon.content}</div>
          </Link>
        )
      })}
    </div>
  )
}
