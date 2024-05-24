'use client'

import Link from 'next/link'
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
  RiYoutubeFill,
} from 'react-icons/ri'

// icons for the current user and the current user's profile

const icons = [
  {
    path: 'https://www.instagram.com/vinnee.dev',
    name: <RiInstagramFill />,
  },
  {
    path: 'https://github.com/vinebarbosa',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.youtube.com/channel/viniciosbarbosadev',
    name: <RiYoutubeFill />,
  },
  {
    path: 'https://www.linkedin.com/in/vinebarbosa/',
    name: <RiLinkedinFill />,
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
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}
