export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-2/3 h-full flex justify-center items-center">
        <div className="border-2 rounded-md bg-white px-8 py-8 w-full">
          <h2 className="text-xl lg:text-[1.5vw] mb-1 font-bold text-black">
            Signup
          </h2>
          <form method="POST">
            <div className="my-10 relative">
              <input
                name="name"
                id="name"
                placeholder="Name"
                className="w-full h-11 mb-8 rounded-md border-2 px-2"
              />
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                className="w-full h-11 mb-8 rounded-md border-2 px-2"
              />
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                className="w-full h-11 mb-8 rounded-md border-2 px-2"
              />
              <input
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="w-full h-11 rounded-md border-2 px-2"
              />
            </div>
            <div className="text-right">
              <button className="w-28 h-11 bg-gray-800 text-white px-4 py-2 rounded-md">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
