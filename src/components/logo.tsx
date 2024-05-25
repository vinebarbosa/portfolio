import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <div className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-white">
        Vinícios Barbosa
      </div>
    </Link>
  )
}
