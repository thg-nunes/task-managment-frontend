import Image from 'next/image'
import type { Metadata } from 'next'
import { FcParallelTasks } from 'react-icons/fc'

import { SignUpForm } from './form'

export const metadata: Metadata = {
  title: 'Cadastro',
  description: 'crie uma conta e acesse a aplicação',
}

export default function Register() {
  return (
    <div className="grid grid-cols-2">
      <section className="flex flex-col items-center justify-center space-y-10">
        <div className="flex items-center gap-3">
          <FcParallelTasks className="size-14" />
          <p className="font-semibold md:text-xl">Task-Mgm</p>
        </div>
        <h2 className="font-semibold md:text-2xl">Criar conta</h2>
        <SignUpForm />
      </section>
      <section className="grid h-screen w-full rounded-l-full bg-violet-500 md:grid-cols-2 md:grid-rows-4">
        <Image
          width={232}
          height={232}
          src="/illustrations/people_in_pc.svg"
          className="col-start-2 mt-3 justify-self-center"
          alt="ilustração de um boneco em forma de pessoa, esse boneco está sentado em ma mesa"
        />
        <Image
          width={464}
          height={464}
          src="/illustrations/completed_tasks.svg"
          className="row-start-2 justify-self-center md:ml-40"
          alt="ilustração de dois bonecos em forma de pessoa, elas estão segurando uma papel cada e tem outro papel grande na frente ilustrando uma lista de tarefas"
        />
      </section>
    </div>
  )
}
