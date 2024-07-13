import Image from 'next/image'
import type { Metadata } from 'next'

import { Input, Label, RootInput } from '@components/input'
import { Button } from '@components/button'

export const metadata: Metadata = {
  title: 'Login',
  description: 'faça login em nossa plataforma para acessar os conteúdos privados.',
}

export default function SignIn() {
  async function handleSignIn() {}

  return (
    <div className="grid grid-cols-2">
      <form className="grid h-max grid-rows-3 gap-3" onSubmit={handleSignIn}>
        <RootInput>
          <Label text="E-mail" htmlFor="email" />
          <Input type="email" id="email" placeholder="e-mail" />
        </RootInput>
        <RootInput>
          <Label text="Senha" htmlFor="password" />
          <Input type="password" id="password" placeholder="senha" />
        </RootInput>
        <Button type="submit">Entrar</Button>
      </form>
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
