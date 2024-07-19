'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

export default function PrivateLayout({ children }: { children: ReactNode }) {
  const { push } = useRouter()
  const { status } = useSession()

  if (status === 'unauthenticated') {
    push('/login')
    return null
  }

  return <>{children}</>
}
