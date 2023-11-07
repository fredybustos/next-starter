"use client"
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function SignOut() {
  const router = useRouter()

  const onSubmit = () => {
    signOut({ redirect: false }).then(() => {
      router.push('/signin')
    })
      .catch(error => console.error(error))
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border-2 rounded-md w-2/3 h-[300px] flex flex-col justify-center items-center">
        <h2 className="text-xl lg:text-[1.5vw] mb-10 font-bold text-black">Sign Out</h2>
        <button
          className="w-28 h-11 bg-gray-800 text-white px-4 py-2 rounded-md"
          onClick={onSubmit}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}