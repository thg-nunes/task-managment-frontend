import { gql } from '@apollo/client'

/**
 * @namespace GQL_TOTAL_USER_TASKS - query responsável por obter o total de tasks
 * já atribuidas a um usuário
 */
export const GQL_TOTAL_USER_TASKS = gql`
  query totalUserTasks($userId: Int!) {
    totalUserTasks(userId: $userId)
  }
`
