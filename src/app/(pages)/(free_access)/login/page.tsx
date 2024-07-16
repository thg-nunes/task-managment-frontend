import type { Metadata } from 'next'
import { FcParallelTasks } from 'react-icons/fc'

import { SignInForm } from './form'

export const metadata: Metadata = {
  title: 'Login',
  description: 'faça login em nossa plataforma para acessar os conteúdos privados.',
}

export default function SignIn() {
  return (
    <section className="flex flex-col items-center justify-center space-y-10">
      <div className="flex items-center gap-3">
        <FcParallelTasks className="size-14" />
        <p className="font-semibold md:text-xl">Task-Mgm</p>
      </div>
      <h2 className="font-semibold md:text-2xl">Bem vindo de volta</h2>
      <SignInForm />
    </section>
  )
}
