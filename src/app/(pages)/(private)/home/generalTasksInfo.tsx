'use client'
import { GrTask } from 'react-icons/gr'
import { TbSubtask } from 'react-icons/tb'
import { useSession } from 'next-auth/react'
import { MdOutlinePendingActions } from 'react-icons/md'

import { useGeneralTasksInfo } from '@hooks/pages/home'

import { Box, BoxSekeleton } from '@components/box'

/**
 * @function GeneralTasksInfo - componente cliente que contém os 3 box com dados
 * gerais de tasks do usuário
 */
export const GeneralTasksInfo = (): JSX.Element => {
  const { data: session } = useSession()
  const userId = session && parseInt(session.user.id)
  const tasksInfo = useGeneralTasksInfo(userId)

  return (
    <div className="grid grid-rows-3 justify-items-center gap-8 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1">
      {tasksInfo.loadingTotalUserTasks ? (
        <BoxSekeleton iconBg="pink" />
      ) : (
        <Box
          title="tasks"
          boxData={`${tasksInfo.totalUserTasks?.totalUserTasks}`}
          infoDescription="total de tarefas já atribuidas a você"
          iconBg="pink"
          Icon={() => <TbSubtask size={24} />}
        />
      )}
      {tasksInfo.loadingUserCompletedTasks ? (
        <BoxSekeleton iconBg="green" />
      ) : (
        <Box
          title="completas"
          boxData={`${tasksInfo.userCompletedTasks?.totalUserCompletedTasks}`}
          infoDescription="quantidade de tarefas que você já concluiu"
          iconBg="green"
          Icon={() => <GrTask size={24} />}
        />
      )}
      {tasksInfo.loadingUserPendingTasks ? (
        <BoxSekeleton iconBg="violet" />
      ) : (
        <Box
          title="pendentes"
          boxData={`${tasksInfo.userPendingTasks?.totalUserPendingTasks}`}
          infoDescription="quantidade de tarefas que você ainda precisa concluir"
          iconBg="violet"
          Icon={() => <MdOutlinePendingActions size={24} />}
        />
      )}
    </div>
  )
}
