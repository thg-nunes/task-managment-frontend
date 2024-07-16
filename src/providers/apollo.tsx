'use client'
import { ApolloProvider } from '@apollo/client'

import { client } from '@services/apollo'

type ApolloContextProviderProps = {
  children: React.ReactNode
}

/**
 * @function ApolloContextProvider - componente responsável por fornecer acesso aos dados
 * do contexto do apollo, criado separadamente pois precisa ser um client component
 * @param {React.ReactNode} ApolloContextProvider.children - recebe qualquer elemento válido
 * react
 */
export const ApolloContextProvider = ({
  children,
}: ApolloContextProviderProps): JSX.Element => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
