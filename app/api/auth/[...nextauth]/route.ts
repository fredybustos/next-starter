import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async credentials => {
        // implement database connection
        return { user: credentials?.email } as any
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    jwt: ({ token, user }) => {
      const currentUser = user as any
      if (user) {
        token.user = {
          id: currentUser.id,
          email: currentUser.email,
          name: currentUser.name,
          lastname: currentUser.lastname
        }
      }
      return token
    },
    session: ({ session, token }) => {
      session.user = token.user as any
      return session
    }
  },
  pages: {
    signIn: '/signin',
    signOut: '/signup'
  }
})

export { handler as GET, handler as POST }
