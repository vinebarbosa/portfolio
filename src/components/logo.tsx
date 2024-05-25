import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden md:block font-bold text-3xl text-nowrap text-gray-900 dark:text-white">
        Vinícios Barbosa
      </div>
      <div className="md:hidden font-bold text-3xl text-nowrap text-gray-900 dark:text-white">
        Vinícios B.
      </div>
    </Link>
  )
}
