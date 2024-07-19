import { gql } from '@apollo/client'

/**
 * @namespace GQL_REGISTER - mutation usada para registrar um usuário
 */
export const GQL_REGISTER = gql`
  mutation register($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      id
      email
      createdAt
      updatedAt
    }
  }
`
