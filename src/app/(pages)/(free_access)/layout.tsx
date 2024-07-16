import Image from 'next/image'
import { ReactNode } from 'react'

export default function FreeeAccessLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-2">
      {children}
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
    </main>
  )
}
