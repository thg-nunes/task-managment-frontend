'use client'
import { SessionProvider } from 'next-auth/react'

type SessionContextProviderProps = {
  children: React.ReactNode
}

/**
 * @function SessionContextProvider - componente responsável por fornecer acesso aos dados
 * do contexto do next-auth, criado separadamente pois precisa ser um client component
 * @param {React.ReactNode} SessionContextProvider.children - recebe qualquer elemento válido
 * react
 */
export const SessionContextProvider = ({
  children,
}: SessionContextProviderProps): JSX.Element => {
  return <SessionProvider>{children}</SessionProvider>
}
