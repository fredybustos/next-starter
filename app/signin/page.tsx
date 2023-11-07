"use client"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
export default function SignOut() {
  const router = useRouter()

  const onSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    const response = await signIn('credentials', { email, password, redirect: false })
    
    if (response?.error) {
      console.error(response?.error)
    }

    if (response?.ok) {
      return router.push('/home')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-2/3 h-full flex justify-center items-center">
        <div className='border-2 rounded-md bg-white px-8 py-8 w-full'>
          <h2 className="text-xl lg:text-[1.5vw] mb-1 font-bold text-black">Login</h2>
          <form method="POST" onSubmit={onSubmit}>
            <div className="my-10 relative">
              <input
                name='email'
                id='email'
                type="email"
                placeholder="Email"
                className="w-full h-11 mb-8 rounded-md border-2 px-2"
              />
              <input
                name='password'
                id='password'
                type="password"
                placeholder="Password"
                className="w-full h-11 rounded-md border-2 px-2 text-black"
              />
            </div>
            <div className="text-right">
              <button
                className="w-28 h-11 bg-gray-800 text-white px-4 py-2 rounded-md"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}