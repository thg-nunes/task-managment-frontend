// next-auth.d.ts
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  /**
   * Retorne os dados adicionais na sessão
   */
  interface Session {
    user: {
      id: string
      email: string
    } & DefaultSession['user']
  }

  /**
   * Adicione propriedades adicionais ao token JWT
   */
  interface JWT {
    id: string
    email: string
  }

  /**
   * Adicione propriedades adicionais ao objeto do usuário
   */
  interface User {
    id: string
    email: string
  }
}
