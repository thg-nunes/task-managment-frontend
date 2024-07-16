import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(_, req) {
        const { email, password } = req.query as { email: string; password: string }

        try {
          const response = await fetch(`${process.env.API_URI}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              operationName: 'login',
              query: `
                query login($loginInput: LoginInput!) {
                  login(loginInput: $loginInput) { 
                    id
                    email
                  }
                }`,
              variables: { loginInput: { email, password } },
            }),
          })

          if (!response.ok) return null

          const { data } = (await response.json()) as {
            data: { login: { id: string; email: string } }
          }

          return data.login
        } catch (error) {
          return null
        }
      },
    }),
  ],
})

export { handler as GET, handler as POST }
