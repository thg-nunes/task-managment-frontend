import type { Metadata } from 'next'
import { FcParallelTasks } from 'react-icons/fc'

import { SignUpForm } from './form'

export const metadata: Metadata = {
  title: 'Cadastro',
  description: 'crie uma conta e acesse a aplicação',
}

export default function Register() {
  return (
    <section className="flex flex-col items-center justify-center space-y-10">
      <div className="flex items-center gap-3">
        <FcParallelTasks className="size-14" />
        <p className="font-semibold md:text-xl">Task-Mgm</p>
      </div>
      <h2 className="font-semibold md:text-2xl">Criar conta</h2>
      <SignUpForm />
    </section>
  )
}
