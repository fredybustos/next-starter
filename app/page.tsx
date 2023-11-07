import Link from 'next/link'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="text-[60px]">Next starter</p>
      <nav className="p-2 mt-10">
        <ul className="flex flex-row items-center gap-6">
          <li className="list-none hover:font-medium">
            <Link href="/signin" className="px-8 py-3 border-2 rounded-md">
              Signin
            </Link>
          </li>
          <li className="list-none hover:font-medium">
            <Link href="/signup" className="px-8 py-3 border-2 rounded-md">
              Signup
            </Link>
          </li>
          <li className="list-none hover:font-medium">
            <Link href="/signout" className="px-8 py-3 border-2 rounded-md">
              Signout
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
