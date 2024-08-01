import { useQuery } from '@apollo/client'

import { renderToast } from '@utils/toast'

import {
  GQL_TOTAL_USER_TASKS,
  TOTAL_PENDING_USER_TASKS,
  TOTAL_USER_COMPLETED_TASKS,
} from '@graphql/querys/user'

/**
 * @function useGeneralTasksInfo - hook que contém as funções para obter os dados
 * gerais de tasks do usuário
 * @param userId - id do usuário logado que deve ser enviado como variável ao servidor
 * @returns - objeto contendo o status de loading e os dados de cada uma das querys
 */
const useGeneralTasksInfo = (userId: number | null) => {
  const { loading: loadingTotalUserTasks, data: totalUserTasks } = useQuery<{
    totalUserTasks: number
  }>(GQL_TOTAL_USER_TASKS, {
    onError(err) {
      renderToast('error', err.message)
    },
    variables: { userId },
  })

  const { loading: loadingUserCompletedTasks, data: userCompletedTasks } = useQuery<{
    totalUserCompletedTasks: number
  }>(TOTAL_USER_COMPLETED_TASKS, {
    onError(err) {
      renderToast('error', err.message)
    },
    variables: { userId },
  })

  const { loading: loadingUserPendingTasks, data: userPendingTasks } = useQuery<{
    totalUserPendingTasks: number
  }>(TOTAL_PENDING_USER_TASKS, {
    onError(err) {
      renderToast('error', err.message)
    },
    variables: { userId },
  })

  return {
    loadingTotalUserTasks,
    totalUserTasks,
    loadingUserCompletedTasks,
    userCompletedTasks,
    loadingUserPendingTasks,
    userPendingTasks,
  }
}

export { useGeneralTasksInfo }
