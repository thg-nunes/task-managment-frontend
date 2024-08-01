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

/**
 * @namespace TOTAL_USER_COMPLETED_TASKS - query responsável por obter o total de tasks
 * que o usuário já completou
 */
export const TOTAL_USER_COMPLETED_TASKS = gql`
  query totalUserCompletedTasks($userId: Int!) {
    totalUserCompletedTasks(userId: $userId)
  }
`

/**
 * @namespace TOTAL_PENDING_USER_TASKS - query responsável por obter o total de tasks
 * com status pending atribuida a um usuário
 */
export const TOTAL_PENDING_USER_TASKS = gql`
  query totalUserPendingTasks($userId: Int!) {
    totalUserPendingTasks(userId: $userId)
  }
`
