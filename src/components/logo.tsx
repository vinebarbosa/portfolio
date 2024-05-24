import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <div className="font-bold text-4xl text-gray-900 dark:text-white">
        Vine B.
      </div>
    </Link>
  )
}
